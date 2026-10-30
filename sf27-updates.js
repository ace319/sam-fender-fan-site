(() => {
  const section = document.querySelector('#latest-news');
  if (!section || section.querySelector('.sf27-announcement')) return;
  section.querySelector('.chapter').textContent = 'UPDATED 29 OCTOBER 2026';
  const newsCard = section.querySelector('.latest-news-watch');
  newsCard.querySelector('small').textContent = 'ANNOUNCED · 21 OCTOBER 2026';
  newsCard.querySelector('h3').textContent = 'Proper Massive Stadium Tour ’27';
  newsCard.querySelector('p').textContent = 'Twelve headline shows across six cities, plus Rock Werchter. New dates: Cardiff 12 June, Edinburgh 10 July and Wembley 2 September 2027.';
  const venues = section.querySelector('.sf27-venues');
  venues.querySelector('.sf27-venues-head small').textContent = 'PROPER MASSIVE STADIUM TOUR ’27';
  venues.querySelector('h3').innerHTML = 'SIX CITIES.<br>TWELVE SHOWS.';
  venues.querySelector('.sf27-venues-head p').textContent = 'The confirmed 2027 dates, straight from Sam’s official website.';
  venues.querySelector('.sf27-venues-note').textContent = 'ANNOUNCED 21 OCTOBER 2026 · ALL DATES BELOW ARE IN 2027';
  const dates = { 'St James': ['2027-06-03', '2027-06-05'], Principality: ['2027-06-10', '2027-06-12'], Wembley: ['2027-06-18', '2027-06-20', '2027-09-02'], Marlay: ['2027-07-01'], Murrayfield: ['2027-07-08', '2027-07-10'], Etihad: ['2027-07-15', '2027-07-17'] };
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
      if (['2027-06-12', '2027-07-10', '2027-09-02'].includes(date)) time.textContent += ' · NEW DATE';
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
  const target = Date.parse('2026-10-30T09:30:00Z');
  const panel = document.createElement('div');
  panel.className = 'sf27-announcement';
  panel.innerHTML = `<div><small>SF4 · ALBUM FOUR IS AVAILABLE TO PREORDER</small><h3>NEW RECORD.<br>FIRST IN LINE.</h3><p>CD £11.99 · Vinyl £29.99 · CD + vinyl £33.99. The album title and artwork are not final; the official store currently lists shipping in mid-2027.</p><p>Preorder by <strong>26 October, 9am UK / 4am Chicago</strong> for stadium presale access. This countdown is for the access deadline.</p><p class="sf27-clock" role="timer" aria-label="Time remaining to qualify for stadium presale access"></p><a href="https://shop.samfender.com/" target="_blank" rel="noreferrer">PREORDER SF4 ↗</a><a href="https://samfender.lnk.to/npnsf27ST" target="_blank" rel="noreferrer">NO-PURCHASE-NECESSARY ACCESS ↗</a><p>Stadium presale: <strong>28 October, 9:30am UK / 4:30am Chicago.</strong><br>General sale: <strong>30 October, 9:30am UK / 4:30am Chicago.</strong></p><p>Access does not guarantee tickets. Up to six tickets per person. Check the official site for full terms.</p></div><div><small>CONFIRMED · BELGIUM · 3 JULY 2027</small><h3>ROCK<br>WERCHTER.</h3><p>Sam closes the Main Stage on <strong>Saturday 3 July 2027</strong> at Festivalpark Werchter, Belgium.</p><p>Festival tickets go on sale <strong>30 October at 10am Belgian time / 4am Chicago.</strong> Festival presale registration is separate from the stadium tour.</p><a href="https://www.rockwerchter.be/en/news/sam-fender-closes-the-main-stage-on-saturday-3-july" target="_blank" rel="noreferrer">OFFICIAL FESTIVAL ANNOUNCEMENT ↗</a><a href="https://www.rockwerchter.be/en/" target="_blank" rel="noreferrer">FESTIVAL TICKETS &amp; PRESALE ↗</a><a href="https://www.instagram.com/p/DeuUjZxCWcx/" target="_blank" rel="noreferrer">WATCH THE FESTIVAL PROMO ↗</a></div>`;
  section.querySelector('.sf27-promo')?.insertAdjacentElement('beforebegin', panel);
  if (!panel.isConnected) section.append(panel);
  const albumCopy = panel.firstElementChild;
  albumCopy.querySelector('h3').innerHTML = 'GENERAL SALE.<br>30 OCTOBER.';
  const albumParagraphs = albumCopy.querySelectorAll('p');
  albumParagraphs[1].innerHTML = 'Three extra headline shows are now listed: <strong>Cardiff 12 June, Edinburgh 10 July and London 2 September 2027.</strong> Ticketmaster lists their general sale for <strong>Friday 30 October, 9:30am UK / 4:30am Chicago</strong>.';
  albumParagraphs[3].innerHTML = 'General sale remains <strong>Friday 30 October, 9:30am UK / 4:30am Chicago.</strong> Album presale registration has closed. Eligible fans should use the link and code already emailed by the official store.';
  const changeLink = document.createElement('a');
  changeLink.href = 'https://www.samfender.com/';
  changeLink.target = '_blank';
  changeLink.rel = 'noreferrer';
  changeLink.textContent = 'LATEST DATES & OFFICIAL TICKET LINKS ↗';
  albumCopy.append(changeLink);
  albumCopy.querySelector('a[href="https://samfender.lnk.to/npnsf27ST"]').remove();
  albumCopy.querySelector('a[href="https://shop.samfender.com/"]').textContent = 'SF4 · OFFICIAL ALBUM STORE ↗';
  const pricePanel = document.createElement('aside');
  pricePanel.className = 'sf27-ticket-prices';
  pricePanel.innerHTML = `<small>UPDATED UK STADIUM PRICES · 26 OCTOBER 2026</small><h3>STANDING £85.<br>SEATS FROM £55.</h3><p>Seated price bands: £55 / £75 / £95. Venue and ticketing fees, plus the £1 LIVE Trust contribution, are additional. Premium front-standing sections have been removed; all standing ticket holders have the same opportunity to reach the front.</p><p>These announced prices apply to the UK stadium shows. Check the official seller for Dublin and Rock Werchter pricing.</p><a href="https://www.nme.com/news/music/sam-fender-scraps-front-standing-tickets-reduced-prices-2027-stadium-tour-3974164" target="_blank" rel="noreferrer">SAM’S PRICE UPDATE · NME ↗</a>`;
  venues.after(pricePanel);
  section.querySelectorAll('.sf27-show-dates time').forEach(time => {
    const link = document.createElement('a');
    link.className = 'sf27-date-ticket';
    link.href = 'https://www.samfender.com/';
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'OFFICIAL TICKETS · ' + time.textContent.replace(' · NEW DATE', '') + ' ↗';
    link.setAttribute('aria-label', 'Official presale options for ' + time.textContent + ' at ' + time.closest('li').querySelector('b').textContent);
    time.after(link);
    if (time.closest('li').querySelector('b').textContent.includes('St James')) {
      const notice = document.createElement('strong');
      notice.className = 'sf27-sale-change';
      notice.textContent = 'NEWCASTLE PRESALE · RESCHEDULED TO 29 OCT · CHECK SELLER FOR AVAILABILITY';
      link.before(notice);
    }
  });
  const clock = panel.querySelector('.sf27-clock');
  clock.setAttribute('aria-label', 'Time until general sale on 30 October at 9:30am UK');
  const updateClock = () => {
    const seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
    if (!seconds) {
      clock.textContent = 'General sale has opened. Check the official seller for availability.';
      return;
    }
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor(seconds % 86400 / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    clock.textContent = `GENERAL SALE: ${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds % 60).padStart(2, '0')}s`;
  };
  updateClock();
  const timer = setInterval(() => {
    updateClock();
    if (Date.now() >= target) clearInterval(timer);
  }, 1000);
  const style = document.createElement('style');
  style.textContent = `.sf27-announcement{display:grid;grid-template-columns:1fr 1fr;margin-top:1.5rem;border:1px solid #101010;background:#1754d1;color:#fff}.sf27-announcement>div{padding:clamp(1.5rem,3vw,3rem)}.sf27-announcement>div+div{border-left:1px solid #fff}.sf27-announcement small,.sf27-announcement a{font-family:'DM Mono',monospace;font-size:.74rem}.sf27-announcement h3{font-family:'Archivo Black',sans-serif;font-size:clamp(2rem,4vw,4rem);line-height:.9;letter-spacing:-.045em;margin:1rem 0}.sf27-announcement p{line-height:1.55}.sf27-announcement a{display:block;color:inherit;margin-top:1rem;text-underline-offset:4px}.sf27-announcement .sf27-clock{font-family:'DM Mono',monospace;font-size:clamp(1.25rem,3vw,2.5rem);font-variant-numeric:tabular-nums}@media(max-width:700px){.sf27-announcement{grid-template-columns:1fr}.sf27-announcement>div+div{border-left:0;border-top:1px solid #fff}}`;
  document.head.append(style);
  style.textContent += '.sf27-sale-change{font:500 .65rem/1.5 "DM Mono",monospace;color:#fff;background:#1754d1;padding:.5rem;display:block}.sf27-announcement .sf27-clock{font-size:clamp(1rem,2vw,1.7rem)}';
  style.textContent += `.sf27-ticket-prices{margin-top:1.5rem;padding:clamp(1.25rem,3vw,2rem);border:1px solid #101010;background:#101010;color:#fff}.sf27-ticket-prices small,.sf27-ticket-prices a{font:.72rem/1.5 'DM Mono',monospace}.sf27-ticket-prices h3{font:clamp(1.8rem,3vw,3rem)/.95 'Archivo Black',sans-serif;margin:1rem 0}.sf27-ticket-prices p{max-width:65rem;font-size:.95rem;line-height:1.6}.sf27-ticket-prices a,.sf27-date-ticket{color:#b8cdff;text-underline-offset:3px}.sf27-date-ticket{font:.65rem/1.4 'DM Mono',monospace;margin-bottom:.5rem}`;
  const festival = panel.lastElementChild;
  festival.className = 'sf27-festival';
  const festivalCopy = document.createElement('div');
  while (festival.firstChild) festivalCopy.append(festival.firstChild);
  const artwork = document.createElement('img');
  artwork.src = 'assets/sam-fender-rock-werchter-2027.jpg';
  artwork.alt = 'Official Rock Werchter 2027 poster: Sam Fender, Saturday 3 July, Festivalpark Werchter, Belgium';
  artwork.loading = 'lazy';
  artwork.width = 920;
  artwork.height = 920;
  festival.append(artwork, festivalCopy);
  const promo = section.querySelector('.sf27-promo');
  const videoDetails = document.createElement('details');
  videoDetails.className = 'sf27-video-details';
  const summary = document.createElement('summary');
  summary.textContent = 'WATCH THE ANNOUNCEMENT FILM';
  promo.before(videoDetails);
  videoDetails.append(summary, promo);
  section.querySelector('.latest-news-grid').after(venues);
  venues.after(panel);
  const charity = document.createElement('aside');
  charity.className = 'sf27-charity';
  charity.innerHTML = `<strong>£1 A TICKET. BACK TO THE GRASSROOTS.</strong><p>The 2027 UK stadium ticket listings pledge £1 per ticket to LIVE Trust, subject to taxes. LIVE Trust funds grassroots music programmes, including venue support delivered by Music Venue Trust.</p><div><a href="https://www.ticketmaster.co.uk/sam-fender-proper-massive-stadium-tour-manchester-15-07-2027/event/3E006553EBE66AFD" target="_blank" rel="noreferrer">TOUR DONATION DETAILS ↗</a><a href="https://www.livetrust.org/news/live-trust-announces-1-million-in-additional-funding" target="_blank" rel="noreferrer">LIVE TRUST &amp; MUSIC VENUE TRUST ↗</a></div>`;
  venues.append(charity);
  style.textContent += `.sf27-charity{padding:1.25rem 1.5rem;background:#172c56;border-top:1px solid #637cae;color:#fff}.sf27-charity>strong{font:1.1rem/1.2 'Archivo Black',sans-serif}.sf27-charity p{max-width:65rem;font-size:.9rem;line-height:1.6;margin:.75rem 0}.sf27-charity>div{display:flex;flex-wrap:wrap;gap:.75rem 1.5rem}.sf27-charity a{color:#c7d8ff;font:.7rem/1.5 'DM Mono',monospace;text-underline-offset:3px}`;
  const campaign = document.createElement('figure');
  campaign.className = 'sf27-campaign-photo';
  campaign.innerHTML = `<picture><source media="(max-width:600px)" srcset="https://www.samfender.com/wp-content/themes/samfender/assets-sf27/img/phase-3-bg-m.jpg"><img src="https://www.samfender.com/wp-content/themes/samfender/assets-sf27/img/phase-3-bg.jpg" alt="Sam Fender leaning on a rooftop railing in the official Proper Massive Stadium Tour ’27 campaign photo" width="1440" height="900" loading="lazy"></picture><figcaption><span>PROPER MASSIVE STADIUM TOUR ’27</span><a href="https://www.samfender.com/" target="_blank" rel="noreferrer">OFFICIAL CAMPAIGN PHOTO ↗</a></figcaption>`;
  venues.before(campaign);
  const preorder = panel.firstElementChild;
  preorder.classList.add('sf27-preorder');
  const preorderCopy = document.createElement('div');
  while (preorder.firstChild) preorderCopy.append(preorder.firstChild);
  const recordPhoto = document.createElement('a');
  recordPhoto.className = 'sf27-record-photo';
  recordPhoto.href = 'https://shop.samfender.com/';
  recordPhoto.target = '_blank';
  recordPhoto.rel = 'noreferrer';
  recordPhoto.innerHTML = `<img src="https://www.samfender.com/wp-content/themes/samfender/assets-sf27/img/sf-lp-cd-image.png?v=1" alt="Official SF4 vinyl and CD preorder mockup; title and artwork are not final" width="598" height="402" loading="lazy"><span>SF4 · PROVISIONAL ARTWORK · OFFICIAL STORE ↗</span>`;
  preorder.append(recordPhoto, preorderCopy);
  style.textContent += `.sf27-campaign-photo{margin:1.5rem 0 0;background:#101010;color:#fff;border:1px solid #101010}.sf27-campaign-photo picture,.sf27-campaign-photo img{display:block;width:100%}.sf27-campaign-photo img{height:clamp(260px,38vw,480px);object-fit:cover;object-position:center 48%}.sf27-campaign-photo figcaption{display:flex;justify-content:space-between;gap:1rem;padding:1rem 1.25rem;font:500 .7rem/1.5 'DM Mono',monospace}.sf27-campaign-photo a{color:#bbcaff}.sf27-announcement .sf27-preorder{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:2rem;align-items:center}.sf27-announcement .sf27-record-photo{margin:0;display:block}.sf27-record-photo img{display:block;width:100%;height:auto}.sf27-record-photo span{display:block;font-size:.65rem;line-height:1.5;margin-top:.75rem}@media(max-width:650px){.sf27-announcement .sf27-preorder{grid-template-columns:1fr;gap:1rem}.sf27-record-photo{max-width:350px;margin:auto!important}.sf27-campaign-photo img{height:360px;object-position:center 38%}.sf27-campaign-photo figcaption{flex-direction:column;gap:.3rem}}`;
  style.textContent += `.latest-news-head{margin-bottom:1.5rem}.latest-news-head h2{font-size:clamp(2.8rem,5vw,5rem)}.latest-news-grid article{min-height:20rem}.sf27-venues{margin-top:1.5rem;border-top:1px solid #101010}.sf27-venues-head{padding:1.5rem;gap:1.25rem}.sf27-venues-head h3{font-size:clamp(1.8rem,3vw,3rem)}.sf27-announcement{grid-template-columns:1fr}.sf27-announcement>div{padding:clamp(1.25rem,2.5vw,2rem)}.sf27-announcement>div+div{border-left:0;border-top:1px solid #fff}.sf27-announcement h3{font-size:clamp(2rem,3.3vw,3.2rem)}.sf27-announcement .sf27-festival{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:2rem;align-items:center;background:#101010}.sf27-festival>img{display:block;width:100%;height:auto;max-width:460px;margin:auto}.sf27-festival p{max-width:36rem}.sf27-video-details{margin-top:1.5rem;border:1px solid #101010;background:#1754d1;color:#fff}.sf27-video-details>summary{cursor:pointer;padding:1.3rem;font:500 .85rem 'DM Mono',monospace}.sf27-video-details .sf27-promo{margin-top:0;border:0;border-top:1px solid #101010}.sf27-video-details .sf27-promo-copy h3{font-size:clamp(2rem,4vw,4rem)}@media(max-width:650px){.sf27-announcement .sf27-festival{grid-template-columns:1fr;gap:1rem}.sf27-venues-head{padding:1.25rem}.sf27-festival>img{max-width:360px}}`;
  style.textContent += '.sf27-show-dates{display:flex;flex-direction:column;gap:.3rem}.sf27-show-dates time{font:500 .78rem/1.4 "DM Mono",monospace;color:#9dbaff}.sf27-announcement p{font-size:.95rem}';
  // Current ticket status, checked against MyTicket on 30 October 2026.
  section.querySelector('.chapter').textContent = 'UPDATED 30 OCTOBER 2026';
  const soldOutDates = new Set(['2027-06-03', '2027-06-05', '2027-06-10', '2027-06-18', '2027-07-01', '2027-07-08', '2027-07-15', '2027-07-17']);
  const availableLinks = {
    '2027-06-12': 'https://www.ticketmaster.co.uk/sam-fender-proper-massive-stadium-tour-cardiff-12-06-2027/event/3500655AC5FC7455',
    '2027-06-20': 'https://www.ticketmaster.co.uk/sam-fender-proper-massive-stadium-tour-london-20-06-2027/event/23006554D6410D47',
    '2027-07-10': 'https://www.ticketmaster.co.uk/sam-fender-proper-massive-stadium-tour-edinburgh-10-07-2027/event/3600655B90A133A6',
    '2027-09-02': 'https://www.ticketmaster.co.uk/sam-fender-proper-massive-stadium-tour-london-02-09-2027/event/2300655AF44913E7'
  };
  section.querySelectorAll('.sf27-sale-change').forEach(notice => notice.remove());
  section.querySelectorAll('.sf27-show-dates time').forEach(time => {
    const sold = soldOutDates.has(time.dateTime);
    const badge = document.createElement('span');
    badge.className = 'sf27-status ' + (sold ? 'sold-out' : 'tickets-listed');
    badge.textContent = sold ? 'SOLD OUT' : 'TICKETS LISTED';
    const link = time.nextElementSibling;
    link.href = sold ? 'https://myticket.co.uk/artists/Sam-Fender' : availableLinks[time.dateTime];
    link.textContent = sold ? 'OFFICIAL STATUS / WAITING LIST ↗' : 'BUY TICKETS ↗';
    link.setAttribute('aria-label', (sold ? 'Official sold-out status and waiting list options' : 'Buy official tickets') + ' for ' + time.textContent + ' at ' + time.closest('li').querySelector('b').textContent);
    time.after(badge);
  });
  venues.querySelector('.sf27-venues-note').innerHTML = 'CHECKED 30 OCTOBER 2026 · 8 SOLD OUT · 4 WITH TICKET LINKS · <a href="https://myticket.co.uk/artists/Sam-Fender" target="_blank" rel="noreferrer">OFFICIAL STATUS ↗</a><br>Wunderhorse supports the UK stadium dates. Check the seller for current availability.';
  newsCard.querySelector('p').textContent = 'Eight headline shows are marked sold out. Ticket links remain for Cardiff 12 June, Wembley 20 June and 2 September, and Edinburgh 10 July. Checked 30 October.';
  clearInterval(timer);
  clock.remove();
  preorderCopy.querySelector('h3').innerHTML = 'TICKETS.<br>ON SALE NOW.';
  preorderCopy.querySelector('small').textContent = 'SF27 · GENERAL SALE UPDATE';
  const preorderParagraphs = preorderCopy.querySelectorAll('p');
  preorderParagraphs[0].textContent = 'SF4 is Sam’s upcoming fourth album. The previously advertised title and artwork are provisional; check the official store for current album information and ordering options.';
  preorderParagraphs[1].innerHTML = 'General sale is open. Eight shows are marked sold out by MyTicket; four headline dates still have official purchase links. Use the links beneath each date for the latest availability.';
  preorderParagraphs[2].innerHTML = 'The Newcastle presale rescheduling is complete. For waiting-list options, use the <a href="https://forms.poweredbyencorepro.com/forms/d4e4702d-37f8-42d5-9465-884b9d7ee031/3J11F8dL74M3mkhdtP0j" target="_blank" rel="noreferrer">official MyTicket waiting list</a>.';
  festivalCopy.querySelectorAll('p')[1].innerHTML = '<strong>Festival tickets are on sale.</strong> One day €143 · four days €320 · selected two-day combinations €259 · Backyard one day €242. Prices include service fees, mobility and eco contributions. Camping is separate. Festival tickets include Belgian train travel to Leuven or Aarschot and the festival shuttle, subject to the festival’s terms.';
  const festivalTickets = festivalCopy.querySelector('a[href="https://www.rockwerchter.be/en/"]');
  festivalTickets.href = 'https://www.rockwerchter.be/en/info/tickets';
  festivalTickets.textContent = 'FESTIVAL TICKETS & PRICES ↗';
  style.textContent += '.sf27-status{display:inline-block;align-self:flex-start;padding:.25rem .45rem;font:500 .65rem/1.4 "DM Mono",monospace;letter-spacing:.04em}.sf27-status.sold-out{background:#f1e6d4;color:#111}.sf27-status.tickets-listed{background:#b8d9ff;color:#102d50}.sf27-venues-note a{color:inherit}.sf27-show-dates{gap:.4rem}';
})();
