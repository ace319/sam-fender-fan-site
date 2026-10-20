(() => {
  const section = document.querySelector('#latest-news');
  if (!section || section.querySelector('.sf27-announcement')) return;
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
