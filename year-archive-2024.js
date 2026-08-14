(function(){
  const summer=['The Kitchen','Getting Started','The Borders','People Watching','Dead Boys','Love Is a Long Road (Tom Petty cover)','Will We Talk?','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Nostalgia’s Lie','Alright','Seventeen Going Under','Hypersonic Missiles'];
  const plymouth=[...summer.slice(0,14),'The Dying Light','Hypersonic Missiles'];
  const dublin=['The Kitchen','Getting Started','The Borders','Wild Long Lie','All Is on My Side','Nostalgia’s Lie','Arm’s Length','Will We Talk?','People Watching','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under','Hypersonic Missiles'];
  const arena=['Dead Boys','Getting Started','The Borders','Wild Long Lie','All Is on My Side','Nostalgia’s Lie','Will We Talk?','Arm’s Length','People Watching','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Seventeen Going Under','Hypersonic Missiles'];
  const leeds=['The Kitchen','Getting Started','The Borders','Wild Long Lie','All Is on My Side','Nostalgia’s Lie','Arm’s Length','Will We Talk?','People Watching','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Seventeen Going Under','Hypersonic Missiles'];
  const london=[...arena.slice(0,11),'London Calling (The Clash cover)',...arena.slice(11)];
  const shows=[
    {country:'England',city:'Plymouth',date:'03 AUG 2024',venue:'Plymouth Pavilions',songs:plymouth,url:'https://www.setlist.fm/setlist/sam-fender/2024/plymouth-pavilions-plymouth-england-43546f3f.html'},
    {country:'England',city:'Newquay',date:'10 AUG 2024',venue:'Watergate Bay · Boardmasters',songs:summer,url:'https://www.setlist.fm/setlist/sam-fender/2024/watergate-bay-newquay-england-ba8ade6.html'},
    {country:'England',city:'Leeds',date:'04 DEC 2024',venue:'First Direct Arena',songs:leeds,url:'https://www.setlist.fm/setlist/sam-fender/2024/first-direct-arena-leeds-england-33507035.html'},
    {country:'England',city:'Manchester',date:'06 DEC 2024',venue:'Co-op Live',songs:arena,url:'https://www.setlist.fm/setlist/sam-fender/2024/co-op-live-manchester-england-2350702b.html'},
    {country:'England',city:'Manchester',date:'07 DEC 2024',venue:'Co-op Live',songs:arena,url:'https://www.setlist.fm/setlist/sam-fender/2024/co-op-live-manchester-england-335198c5.html'},
    {country:'England',city:'London',date:'10 DEC 2024',venue:'The O2 Arena',songs:london,url:'https://www.setlist.fm/setlist/sam-fender/2024/the-o2-arena-london-england-2b50702a.html'},
    {country:'England',city:'London',date:'12 DEC 2024',venue:'The O2 Arena',songs:arena,url:'https://www.setlist.fm/setlist/sam-fender/2024/the-o2-arena-london-england-3b5198c4.html'},
    {country:'England',city:'Birmingham',date:'13 DEC 2024',venue:'Utilita Arena Birmingham',songs:[...london.slice(0,16),'Happy Birthday to You','Hypersonic Missiles'],url:'https://www.setlist.fm/setlist/sam-fender/2024/utilita-arena-birmingham-birmingham-england-3b507028.html'},
    {country:'Ireland',city:'Dublin',date:'02 DEC 2024',venue:'3Arena',songs:dublin,url:'https://www.setlist.fm/setlist/sam-fender/2024/3arena-dublin-ireland-23507037.html'},
    {country:'Scotland',city:'Glasgow',date:'16 DEC 2024',venue:'The OVO Hydro',songs:arena,url:'https://www.setlist.fm/setlist/sam-fender/2024/the-ovo-hydro-glasgow-scotland-2350702f.html'}
  ];
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const capacities={'Plymouth Pavilions':'4,000','Watergate Bay · Boardmasters':'Festival / outdoor layout','First Direct Arena':'13,781','Co-op Live':'23,500','The O2 Arena':'20,000','Utilita Arena Birmingham':'15,800','3Arena':'13,000','The OVO Hydro':'14,300'};
  const countries=shows.reduce((all,show)=>{((all[show.country]??={})[show.city]??=[]).push(show);return all},{});
  const showMarkup=show=>`<details class="venue-show show-entry"><summary><span><small>${show.date}</small><strong>${esc(show.venue)}</strong><small class="venue-capacity">CAPACITY · ${capacities[show.venue]||'Not publicly verified'}</small></span><b>${show.songs.length} SONGS ＋</b></summary><div class="show-setlist-body"><ol>${show.songs.map(song=>`<li>${esc(song)}</li>`).join('')}</ol>${show.video?`<div class="show-video"><iframe src="${show.video}" title="${esc(show.videoLabel)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><small>${esc(show.videoLabel)}</small></div>`:''}<a href="${show.url}" target="_blank" rel="noreferrer">Verified Setlist.fm source ↗</a></div></details>`;
  const markup=Object.entries(countries).map(([country,cities])=>`<details class="country-group"><summary><b>${country}</b><span>${Object.values(cities).flat().length} shows ＋</span></summary>${Object.entries(cities).map(([city,cityShows])=>`<details class="city-group"><summary><b>${city}</b><span>${cityShows.length} show${cityShows.length===1?'':'s'} ＋</span></summary><div class="venue-shows">${cityShows.map(showMarkup).join('')}</div></details>`).join('')}</details>`).join('');
  setTimeout(()=>{
    const view=document.querySelector('[data-year-view="2024"]');
    if(!view)return;
    view.querySelector('.featured-setlist')?.remove();
    view.querySelector('.year-placeholder')?.remove();
    view.querySelector('.year-archive-complete')?.remove();
    view.insertAdjacentHTML('beforeend',`<section class="year-archive-complete"><h4>Every 2024 show · country → city → exact venue</h4><p class="data-note">Open a country, then a city, then the exact performance to see its setlist here on the site.</p>${markup}</section>`);
  },420);
})();
