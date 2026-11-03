(() => {
  const awards = document.querySelector('#honors');
  const timeline = document.querySelector('.year-now');
  if (!awards || !timeline) return;
  const events = [
    ['FEBRUARY', 'First UK number-one single', '“Rein Me In” with Olivia Dean reaches the top of the Official Singles Chart.', 'https://www.officialcharts.com/songs/sam-fender-rein-me-in/', 'Official Charts'],
    ['FEBRUARY', 'Two BRIT Awards', 'Alternative/Rock Act, plus Song of the Year for “Rein Me In” with Olivia Dean.', 'https://www.brits.co.uk/', 'The BRITs'],
    ['MARCH–APRIL', 'Giving back to the North East', '£50,000 raised through the People Watching tour is matched to £100,000 for North East youth-music projects.', 'https://www.recordoftheday.com/news-and-press/sam-fender-tour-raises-50000-for-charity-youth-music', 'Charity announcement'],
    ['MAY', 'O2 guest appearances', 'Sam joins Olivia Dean in London to sing “Rein Me In.”', '?page=live', 'Live archive'],
    ['MAY', 'Songwriter of the Year', 'The Ivors recognise Sam’s songwriting with the Songwriter of the Year award.', 'https://ivorsacademy.com/awards/the-ivors/', 'The Ivors'],
    ['SUMMER', 'A record 23 weeks at number one', '“Rein Me In” finishes with 23 non-consecutive weeks at UK number one—the longest total run in Official Singles Chart history.', 'https://www.officialcharts.com/songs/sam-fender-rein-me-in/', 'Chart record'],
    ['1 AUGUST', 'Lollapalooza with Olivia Dean', 'The pair perform “Rein Me In” together in America for the first time, in Chicago.', 'https://youtu.be/Q9o_T6BND28', 'Watch the performance'],
    ['SEPTEMBER', 'Official Song of the Summer', '“Rein Me In” is named the UK’s biggest song of summer 2026, with 69 million UK streams during June–August.', 'https://www.officialcharts.com/chart-news/sam-fender-olivia-dean-rein-me-in-song-of-the-summer-2026/', 'Official Charts'],
    ['OCTOBER', 'SF4 and the 2027 tour', 'Sam opens preorders for his fourth album and announces the Proper Massive Stadium Tour ’27. The announced concerts take place in 2027.', 'https://www.samfender.com/', 'Official tour dates'],
    ['3 NOVEMBER', 'A Rolling Stones cover for charity', '“You Can’t Always Get What You Want” features his old school’s choir and Easington Colliery Band. Eligible UK physical-single sales support Teenage Cancer Trust.', '?page=music', 'New single & lyric video']
  ];
  timeline.classList.add('recap-2026');
  timeline.innerHTML = '<div class="recap-heading"><div><p class="chapter">THE YEAR SO FAR · UPDATED 3 NOVEMBER 2026</p><h3>SAM’S 2026.</h3></div><p>The awards, the record run, the guest spots—and the next chapter.</p></div><ol class="recap-events">' + events.map(([date,title,copy,url,label]) => `<li><time>${date}</time><div><h4>${title}</h4><p>${copy}</p><a href="${url}"${url.startsWith('https:') ? ' target="_blank" rel="noreferrer"' : ''}>${label} ↗</a></div></li>`).join('') + '</ol>';
  awards.querySelector('.award-list')?.before(timeline);
  if (!awards.contains(timeline)) awards.append(timeline);
  const css = document.createElement('style');
  css.textContent = `.recap-2026{margin:2rem 0;padding:clamp(1.25rem,3vw,2.5rem);background:#171717;color:#f7f0e4;border:1px solid #555}.recap-heading{display:flex;justify-content:space-between;align-items:end;gap:2rem;margin-bottom:1.5rem}.recap-heading h3{font:clamp(2rem,4vw,4rem)/.95 'Archivo Black',sans-serif;margin:.75rem 0 0}.recap-heading>p{max-width:25rem;line-height:1.5}.recap-events{display:grid;grid-template-columns:1fr 1fr;gap:0 2rem;list-style:none;margin:0;padding:0}.recap-events li{display:grid;grid-template-columns:6.5rem minmax(0,1fr);gap:1rem;padding:1.25rem 0;border-top:1px solid #555}.recap-events time{font:.7rem/1.5 'DM Mono',monospace;color:#a7c5ff}.recap-events h4{font:1rem/1.25 'Archivo Black',sans-serif;margin:0}.recap-events p{font-size:.9rem;line-height:1.6;margin:.5rem 0}.recap-events a{color:#a7c5ff;font:.7rem/1.5 'DM Mono',monospace;text-underline-offset:3px}@media(max-width:850px){.recap-events{grid-template-columns:1fr}.recap-heading{display:block}.recap-events li{grid-template-columns:5.5rem minmax(0,1fr)}}`;
  document.head.append(css);
})();
