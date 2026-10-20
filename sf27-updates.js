(() => {
  const section = document.querySelector('#latest-news');
  if (!section || section.querySelector('.sf27-announcement')) return;
  const venuePhotos = [
  {
    "key": "St James",
    "src": "https://contentfulproxy.stadion.io/9ec6988xevcz/6rLgNey9HtOXzhzwjynGJ0/65a62d5f4af806ab898ab5ba9aa4b2e5/20181008-st-james-park-exterior.jpg?f=face&fit=fill&fm=webp&h=500&w=800",
    "source": "https://www.newcastleunited.com/en/history-of-our-home",
    "credit": "Newcastle United",
    "alt": "St James’ Park stadium exterior in Newcastle"
  },
  {
    "key": "Etihad",
    "src": "https://www.britanniahotels.com/cms/britannia/images/new/etihad.jpg",
    "source": "https://www.britanniahotels.com/blog/article/away-days-with-Britannia-hotels",
    "credit": "Britannia Hotels",
    "alt": "Etihad Stadium entrance in Manchester"
  },
  {
    "key": "Principality",
    "src": "https://images.cms.v3.s4c.cymru/media/media_assets/ab4f3b73-54bc-4db9-b4f8-b880c22d3b56.jpg",
    "source": "https://www.s4c.cymru/en/press/post/65945/s4c-expands-six-nations-coverage-with-live-youtube-streaming/",
    "credit": "S4C",
    "alt": "Principality Stadium entrance in Cardiff"
  },
  {
    "key": "Marlay",
    "src": "https://www.irishcentral.com/uploads/assets-v2/2020/8/marlay_park_dublin___icp.jpg",
    "source": "https://www.irishcentral.com/travel/best-of-ireland/ireland-dog-walking-spots",
    "credit": "IrishCentral",
    "alt": "Gardens at Marlay Park in Dublin"
  },
  {
    "key": "Murrayfield",
    "src": "https://gigtix.uk/wp-content/uploads/2022/07/twitter-murrayfield-b.jpg",
    "source": "https://gigtix.uk/venue/murrayfield-stadium-56068/",
    "credit": "Gigtix",
    "alt": "Murrayfield stadium exterior in Edinburgh"
  },
  {
    "key": "Wembley",
    "src": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wembley-Stadion_2013.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Wembley-Stadion_2013.jpg",
    "credit": "Wikimedia Commons · photo / licence",
    "alt": "Wembley Stadium and its arch in London"
  }
];
  section.querySelectorAll('.sf27-venues li').forEach(card => {
    const photo = venuePhotos.find(item => card.querySelector('b')?.textContent.includes(item.key));
    if (!photo || card.querySelector('img')) return;
    const copy = document.createElement('div');
    copy.className = 'sf27-venue-copy';
    while (card.firstChild) copy.append(card.firstChild);
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = 'lazy';
    image.width = 240;
    image.height = 180;
    const credit = document.createElement('a');
    credit.href = photo.source;
    credit.target = '_blank';
    credit.rel = 'noreferrer';
    credit.textContent = photo.credit + ' ↗';
    figure.append(image, credit);
    card.append(figure, copy);
  });
  const photoStyle = document.createElement('style');
  photoStyle.textContent = `.sf27-venues li{display:grid;grid-template-columns:42% minmax(0,1fr);gap:1rem;align-items:center;min-height:10rem}.sf27-venues li figure{margin:0;min-width:0}.sf27-venues li img{display:block;width:100%;height:7rem;object-fit:cover;border:1px solid #536da7}.sf27-venues li figure a{display:block;color:#bbcaff;font: .55rem/1.4 'DM Mono',monospace;margin-top:.35rem;text-underline-offset:2px}.sf27-venue-copy{display:flex;flex-direction:column;gap:.85rem;min-width:0}.sf27-venues li .sf27-venue-copy b{font-size:clamp(1rem,1.5vw,1.45rem);overflow-wrap:normal}@media(max-width:1050px){.sf27-venues ol{grid-template-columns:1fr 1fr}.sf27-venues li:nth-child(n){border-right:1px solid #fff;border-bottom:1px solid #fff}.sf27-venues li:nth-child(2n){border-right:0}.sf27-venues li:nth-last-child(-n+2){border-bottom:0}}@media(max-width:550px){.sf27-venues ol{grid-template-columns:1fr}.sf27-venues li:nth-child(n){border-right:0;border-bottom:1px solid #fff}.sf27-venues li:last-child{border-bottom:0}.sf27-venues li img{height:6.5rem}}`;
  document.head.append(photoStyle);
  const target = Date.parse('2026-10-21T10:00:00+01:00');
  const panel = document.createElement('div');
  panel.className = 'sf27-announcement';
  panel.innerHTML = `<div><small>SF27 · THE COUNTDOWN IS ON</small><h3>21 OCTOBER.<br>10AM UK.</h3><p>Wednesday 21 October 2026 · 4:00 a.m. Chicago / Central time · 5:00 a.m. Eastern · 2:00 a.m. Pacific.</p><p class="sf27-clock" role="timer" aria-label="Time until the official SF27 countdown ends"></p><a href="https://www.samfender.com/" target="_blank" rel="noreferrer">FOLLOW THE OFFICIAL COUNTDOWN ↗</a></div><div><small>BELGIUM · ROCK WERCHTER 2027</small><h3>ANOTHER<br>BEACON.</h3><p>Rock Werchter has shared a new Sam Fender teaser. The festival takes place 1–4 July 2027 at Festivalpark Werchter, Belgium. Sam’s performance day is still to be announced.</p><a href="https://www.instagram.com/p/DeuUjZxCWcx/" target="_blank" rel="noreferrer">WATCH THE ROCK WERCHTER TEASER ↗</a><a href="https://www.rockwerchter.be/en/" target="_blank" rel="noreferrer">OFFICIAL FESTIVAL WEBSITE ↗</a></div>`;
  section.querySelector('.sf27-promo')?.insertAdjacentElement('beforebegin', panel);
  if (!panel.isConnected) section.append(panel);
  const clock = panel.querySelector('.sf27-clock');
  const updateClock = () => {
    const seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
    if (!seconds) {
      clock.textContent = 'The official countdown has ended. Check Sam’s site for the announcement.';
      return;
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    clock.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds % 60).padStart(2, '0')}`;
  };
  updateClock();
  const timer = setInterval(() => {
    updateClock();
    if (Date.now() >= target) clearInterval(timer);
  }, 1000);
  const style = document.createElement('style');
  style.textContent = `.sf27-announcement{display:grid;grid-template-columns:1fr 1fr;margin-top:1.5rem;border:1px solid #101010;background:#1754d1;color:#fff}.sf27-announcement>div{padding:clamp(1.5rem,3vw,3rem)}.sf27-announcement>div+div{border-left:1px solid #fff}.sf27-announcement small,.sf27-announcement a{font-family:'DM Mono',monospace;font-size:.74rem}.sf27-announcement h3{font-family:'Archivo Black',sans-serif;font-size:clamp(2rem,4vw,4rem);line-height:.9;letter-spacing:-.045em;margin:1rem 0}.sf27-announcement p{line-height:1.55}.sf27-announcement a{display:block;color:inherit;margin-top:1rem;text-underline-offset:4px}.sf27-announcement .sf27-clock{font-family:'DM Mono',monospace;font-size:clamp(1.25rem,3vw,2.5rem);font-variant-numeric:tabular-nums}@media(max-width:700px){.sf27-announcement{grid-template-columns:1fr}.sf27-announcement>div+div{border-left:0;border-top:1px solid #fff}}`;
  document.head.append(style);
})();
