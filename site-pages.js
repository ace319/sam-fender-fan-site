(()=>{
  const pages={
    home:{label:'Home',title:'Sam Fender — Toon to the States'},
    music:{label:'Music',title:'Music — Sam Fender'},
    live:{label:'Live archive',title:'Live Archive — Sam Fender'},
    story:{label:'Story',title:'The Story — Sam Fender'},
    photos:{label:'Photos',title:'Photos — Sam Fender'},
    awards:{label:'Awards',title:'Awards — Sam Fender'},
    connect:{label:'Watch + links',title:'Watch and Follow — Sam Fender'}
  };
  const requested=new URLSearchParams(location.search).get('page');
  const current=pages[requested]?requested:'home';
  const main=document.querySelector('main');
  const urlFor=page=>page==='home'?location.pathname:`${location.pathname}?page=${page}`;

  document.body.dataset.sitePage=current;
  document.body.classList.toggle('site-subpage',current!=='home');
  document.title=pages[current].title;

  const liveArchive=document.querySelector('.live-archive');
  if(liveArchive&&!document.querySelector('#live-page')){
    const livePage=document.createElement('section');
    livePage.className='section live-page';
    livePage.id='live-page';
    livePage.innerHTML='<div class="page-heading"><p class="chapter">THE COMPLETE CONCERT ARCHIVE</p><h2>EVERY SHOW.<br><em>EVERY YEAR.</em></h2><p>Browse by year, country, city and venue. Open a show to see its documented setlist, notes and live footage.</p></div>';
    const before=document.querySelector('#sam-on-youtube')||document.querySelector('#official-links');
    main.insertBefore(livePage,before||null);
    livePage.appendChild(liveArchive);
  }

  const membership=new Map([
    ['top',['home']],['join',['home']],['start',['music']],['albums',['music']],['discography',['music']],
    ['about',['story']],['artists-on-sam',['story']],['toon',['story']],['photos',['photos']],
    ['honors',['awards']],['live-page',['live']],['sam-on-youtube',['connect']],['official-links',['connect']]
  ]);
  [...main.children].forEach(element=>{
    const key=element.id||(element.classList.contains('ticker')?'ticker':'');
    const allowed=key==='ticker'?['home']:(membership.get(key)||[]);
    element.hidden=!allowed.includes(current);
  });

  const headerNav=document.querySelector('#nav');
  headerNav.innerHTML=Object.entries(pages).map(([key,page])=>`<a href="${urlFor(key)}"${key===current?' class="active" aria-current="page"':''}>${page.label}</a>`).join('');
  document.querySelectorAll('.brand').forEach(link=>link.href=urlFor('home'));
  const skip=document.querySelector('.skip');
  const visibleFirst=[...main.children].find(element=>!element.hidden);
  if(visibleFirst){
    visibleFirst.id=visibleFirst.id||'page-content';
    if(skip){skip.href=`#${visibleFirst.id}`;skip.textContent='Skip to page content'}
  }
  document.querySelectorAll('a[href="#start"]').forEach(link=>link.href=urlFor('music'));
  document.querySelectorAll('a[href="#photos"]').forEach(link=>link.href=urlFor('photos'));

  const join=document.querySelector('#join');
  if(current==='home'&&join&&!join.querySelector('.page-directory')){
    join.insertAdjacentHTML('beforeend',`<nav class="page-directory" aria-label="Explore the site">${Object.entries(pages).filter(([key])=>key!=='home').map(([key,page])=>`<a href="${urlFor(key)}"><span>EXPLORE</span><b>${page.label}</b><i>→</i></a>`).join('')}</nav>`);
  }
  window.scrollTo(0,0);
})();
