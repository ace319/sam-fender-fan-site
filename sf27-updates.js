(() => {
  const section = document.querySelector('#latest-news');
  if (!section || section.querySelector('.sf27-announcement')) return;
  section.querySelector('.chapter').textContent = 'UPDATED 21 OCTOBER 2026';
  const newsCard = section.querySelector('.latest-news-watch');
  newsCard.querySelector('small').textContent = 'ANNOUNCED · 21 OCTOBER 2026';
  newsCard.querySelector('h3').textContent = 'Proper Massive Stadium Tour ’27';
  newsCard.querySelector('p').textContent = 'Nine headline shows across six cities, plus Rock Werchter. Sam’s fourth album, SF4, is now available to preorder.';
  const venues = section.querySelector('.sf27-venues');
  venues.querySelector('.sf27-venues-head small').textContent = 'PROPER MASSIVE STADIUM TOUR ’27';
  venues.querySelector('h3').innerHTML = 'SIX CITIES.<br>NINE SHOWS.';
  venues.querySelector('.sf27-venues-head p').textContent = 'The confirmed 2027 dates, straight from Sam’s official website.';
  venues.querySelector('.sf27-venues-note').textContent = 'ANNOUNCED 21 OCTOBER 2026 · ALL DATES BELOW ARE IN 2027';
  const dates = { 'St James': ['2027-06-03', '2027-06-05'], Principality: ['2027-06-10'], Wembley: ['2027-06-18', '2027-06-20'], Marlay: ['2027-07-01'], Murrayfield: ['2027-07-08'], Etihad: ['2027-07-15', '2027-07-17'] };
  const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', timeZone: 'UTC' });
  const cards = [...venues.querySelectorAll('li')];
  cards.forEach(card => {
    const key = Object.keys(dates).find(name => card.querySelector('b').textContent.includes(name));
    card.dataset.firstDate = dates[key][0];
    const line = document.createElement('div');
    line.className = 'sf27-show-dates';
    dates[key].forEach(date => {
      const time = document.createElement('time');
      time.dateTime = date;
      time.textContent = dateFormat.format(new Date(date + 'T12:00:00Z')) + ' 2027';
      line.append(time);
    });
    card.append(line);
  });
  cards.sort((a, b) => a.dataset.firstDate.localeCompare(b.dataset.firstDate)).forEach((card, index) => {
    card.querySelector('span').textContent = card.querySelector('span').textContent.replace(/^\d+/, String(index + 1).padStart(2, '0'));
    venues.querySelector('ol').append(card);
  });
  const promoCopy = section.querySelector('.sf27-promo-copy');
  promoCopy.querySelector('small').textContent = 'THE ANNOUNCEMENT FILM';
  promoCopy.querySelector('h3').innerHTML = 'PROPER<br>MASSIVE.';
  promoCopy.querySelector('p').textContent = 'The beacons are lit. Watch the film that launched Sam’s 2027 stadium tour.';
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
  const target = Date.parse('2026-10-26T09:00:00Z');
  const panel = document.createElement('div');
  panel.className = 'sf27-announcement';
  panel.innerHTML = `<div><small>SF4 · ALBUM FOUR IS AVAILABLE TO PREORDER</small><h3>NEW RECORD.<br>FIRST IN LINE.</h3><p>CD £11.99 · Vinyl £29.99 · CD + vinyl £33.99. The album title and artwork are not final; the official store currently lists shipping in mid-2027.</p><p>Preorder by <strong>26 October, 9am UK / 4am Chicago</strong> for stadium presale access. This countdown is for the access deadline.</p><p class="sf27-clock" role="timer" aria-label="Time remaining to qualify for stadium presale access"></p><a href="https://shop.samfender.com/" target="_blank" rel="noreferrer">PREORDER SF4 ↗</a><a href="https://samfender.lnk.to/npnsf27ST" target="_blank" rel="noreferrer">NO-PURCHASE-NECESSARY ACCESS ↗</a><p>Stadium presale: <strong>28 October, 9:30am UK / 4:30am Chicago.</strong><br>General sale: <strong>30 October, 9:30am UK / 4:30am Chicago.</strong></p><p>Access does not guarantee tickets. Up to six tickets per person. Check the official site for full terms.</p></div><div><small>CONFIRMED · BELGIUM · 3 JULY 2027</small><h3>ROCK<br>WERCHTER.</h3><p>Sam closes the Main Stage on <strong>Saturday 3 July 2027</strong> at Festivalpark Werchter, Belgium.</p><p>Festival tickets go on sale <strong>30 October at 10am Belgian time / 4am Chicago.</strong> Festival presale registration is separate from the stadium tour.</p><a href="https://www.rockwerchter.be/en/news/sam-fender-closes-the-main-stage-on-saturday-3-july" target="_blank" rel="noreferrer">OFFICIAL FESTIVAL ANNOUNCEMENT ↗</a><a href="https://www.rockwerchter.be/en/" target="_blank" rel="noreferrer">FESTIVAL TICKETS &amp; PRESALE ↗</a><a href="https://www.instagram.com/p/DeuUjZxCWcx/" target="_blank" rel="noreferrer">WATCH THE FESTIVAL PROMO ↗</a></div>`;
  section.querySelector('.sf27-promo')?.insertAdjacentElement('beforebegin', panel);
  if (!panel.isConnected) section.append(panel);
  const clock = panel.querySelector('.sf27-clock');
  const updateClock = () => {
    const seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
    if (!seconds) {
      clock.textContent = 'The album preorder deadline for stadium presale access has passed. Check the official site for ticket availability.';
      return;
    }
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor(seconds % 86400 / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    clock.textContent = `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds % 60).padStart(2, '0')}s`;
  };
  updateClock();
  const timer = setInterval(() => {
    updateClock();
    if (Date.now() >= target) clearInterval(timer);
  }, 1000);
  const style = document.createElement('style');
  style.textContent = `.sf27-announcement{display:grid;grid-template-columns:1fr 1fr;margin-top:1.5rem;border:1px solid #101010;background:#1754d1;color:#fff}.sf27-announcement>div{padding:clamp(1.5rem,3vw,3rem)}.sf27-announcement>div+div{border-left:1px solid #fff}.sf27-announcement small,.sf27-announcement a{font-family:'DM Mono',monospace;font-size:.74rem}.sf27-announcement h3{font-family:'Archivo Black',sans-serif;font-size:clamp(2rem,4vw,4rem);line-height:.9;letter-spacing:-.045em;margin:1rem 0}.sf27-announcement p{line-height:1.55}.sf27-announcement a{display:block;color:inherit;margin-top:1rem;text-underline-offset:4px}.sf27-announcement .sf27-clock{font-family:'DM Mono',monospace;font-size:clamp(1.25rem,3vw,2.5rem);font-variant-numeric:tabular-nums}@media(max-width:700px){.sf27-announcement{grid-template-columns:1fr}.sf27-announcement>div+div{border-left:0;border-top:1px solid #fff}}`;
  document.head.append(style);
  style.textContent += '.sf27-show-dates{display:flex;flex-direction:column;gap:.3rem}.sf27-show-dates time{font:500 .78rem/1.4 "DM Mono",monospace;color:#9dbaff}.sf27-announcement p{font-size:.95rem}';
})();
