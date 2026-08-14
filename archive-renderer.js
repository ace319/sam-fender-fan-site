(function(){
  const records=[...new Map([...(window.samSetlistArchive||[]),...(window.samShows2025||[])].map(show=>[show.url||`${show.year}|${show.date}|${show.venue}`,show])).values()];
  const earlyRecords=[{"year":2016,"date":"Dec 21 2016","country":"England","city":"Gateshead","venue":"The Glasshouse (Sage 2)","url":"https://www.setlist.fm/setlist/sam-fender/2016/the-glasshouse-sage-2-gateshead-england-235a280f.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Dec 8 2016","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2016/surf-cafe-tynemouth-england-1386bdb1.html","songs":["Call Me Lover"],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Dec 2 2016","country":"England","city":"Newcastle upon Tyne","venue":"The Cluny","url":"https://www.setlist.fm/setlist/sam-fender/2016/the-cluny-newcastle-upon-tyne-england-2b5a28fe.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Nov 21 2016","country":"England","city":"York","venue":"Fibbers","url":"https://www.setlist.fm/setlist/sam-fender/2016/fibbers-york-england-239e784b.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Oct 14 2016","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2016/surf-cafe-tynemouth-england-235a28f3.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"May 10 2016","country":"England","city":"North Shields","venue":"The Exchange 1856","url":"https://www.setlist.fm/setlist/sam-fender/2016/the-exchange-1856-north-shields-england-235a28f7.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"May 4 2016","country":"England","city":"Tynemouth","venue":"The Head of Steam","url":"https://www.setlist.fm/setlist/sam-fender/2016/the-head-of-steam-tynemouth-england-7b5b1a68.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Mar 17 2016","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2016/surf-cafe-tynemouth-england-2b5a28f6.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Mar 1 2016","country":"England","city":"Tynemouth","venue":"How Do You Do","url":"https://www.setlist.fm/setlist/sam-fender/2016/how-do-you-do-tynemouth-england-635b1a7b.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Feb 18 2016","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2016/surf-cafe-tynemouth-england-3b5a28e8.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2016,"date":"Jan 3 2016","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2016/surf-cafe-tynemouth-england-235a28e3.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2015,"date":"Oct 18 2015","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2015/surf-cafe-tynemouth-england-235a28e7.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2015,"date":"Mar 27 2015","country":"England","city":"Newcastle upon Tyne","venue":"Newcastle Railway Station","url":"https://www.setlist.fm/setlist/sam-fender/2015/newcastle-railway-station-newcastle-upon-tyne-england-5b5bb704.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Nov 1 2014","country":"Scotland","city":"Ullapool","venue":"The Ceilidh Place","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-ceilidh-place-ullapool-scotland-3b5b2020.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 31 2014","country":"Scotland","city":"Stornoway","venue":"Woodlands Centre","url":"https://www.setlist.fm/setlist/sam-fender/2014/woodlands-centre-stornoway-scotland-235b202f.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 30 2014","country":"Scotland","city":"Elgin","venue":"The Drouthy Cobbler","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-drouthy-cobbler-elgin-scotland-4b5bb7fe.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 29 2014","country":"Scotland","city":"Aviemore","venue":"Old Bridge Inn","url":"https://www.setlist.fm/setlist/sam-fender/2014/old-bridge-inn-aviemore-scotland-235b201f.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 28 2014","country":"Scotland","city":"Ballater","venue":"The Deeside Inn","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-deeside-inn-ballater-scotland-335b2019.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 20 2014","country":"England","city":"London","venue":"Boston Music Room","url":"https://www.setlist.fm/setlist/sam-fender/2014/boston-music-room-london-england-b86bdb2.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 11 2014","country":"England","city":"Middlesbrough","venue":"TSOne Middlesbrough","url":"https://www.setlist.fm/setlist/sam-fender/2014/tsone-middlesbrough-middlesbrough-england-ba8218a.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Twisterella Festival 2014"},{"year":2014,"date":"Oct 5 2014","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2014/surf-cafe-tynemouth-england-335a28e5.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Oct 4 2014","country":"Scotland","city":"Glasgow","venue":"Flat 0/1","url":"https://www.setlist.fm/setlist/sam-fender/2014/flat-01-glasgow-scotland-335bdc15.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Tenement Trail 2014"},{"year":2014,"date":"Sep 25 2014","country":"England","city":"High Wycombe","venue":"Bucks Students' Union","url":"https://www.setlist.fm/setlist/sam-fender/2014/bucks-students-union-high-wycombe-england-7b5bee10.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Sep 21 2014","country":"England","city":"Newcastle upon Tyne","venue":"The Cluny","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-cluny-newcastle-upon-tyne-england-3b5b2010.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Sep 17 2014","country":"England","city":"North Shields","venue":"The Magnesia Bank","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-magnesia-bank-tyne-and-wear-england-3b5b2008.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Aug 31 2014","country":"England","city":"Whitley Bay","venue":"Spanish City Plaza","url":"https://www.setlist.fm/setlist/sam-fender/2014/spanish-city-plaza-whitley-bay-england-335bdc35.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Aug 11 2014","country":"England","city":"North Shields","venue":"Salthouse","url":"https://www.setlist.fm/setlist/sam-fender/2014/salthouse-north-shields-england-235b20d3.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Aug 9 2014","country":"England","city":"Newquay","venue":"Watergate Bay","url":"https://www.setlist.fm/setlist/sam-fender/2014/watergate-bay-newquay-england-135bdd81.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Boardmasters 2014"},{"year":2014,"date":"Jul 26 2014","country":"England","city":"Tynemouth","venue":"Surf Cafe","url":"https://www.setlist.fm/setlist/sam-fender/2014/surf-cafe-tynemouth-england-b5bdd8a.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Jul 20 2014","country":"England","city":"Filleigh","venue":"Castle Hill","url":"https://www.setlist.fm/setlist/sam-fender/2014/castle-hill-filleigh-england-5391ab85.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Somersault Festival 2014"},{"year":2014,"date":"Jul 9 2014","country":"England","city":"Whitley Bay","venue":"Whitley Bay Playhouse","url":"https://www.setlist.fm/setlist/sam-fender/2014/whitley-bay-playhouse-whitley-bay-england-639e8eef.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Jun 21 2014","country":"England","city":"Croyde","venue":"Croyde Bay","url":"https://www.setlist.fm/setlist/sam-fender/2014/croyde-bay-croyde-england-1b5bdd90.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"May 24 2014","country":"England","city":"Newcastle upon Tyne","venue":"Cluny2","url":"https://www.setlist.fm/setlist/sam-fender/2014/cluny2-newcastle-upon-tyne-england-1b86bdb8.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"May 8 2014","country":"England","city":"Brighton","venue":"Green Door Store","url":"https://www.setlist.fm/setlist/sam-fender/2014/green-door-store-brighton-england-6394bef7.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Great Escape 2014"},{"year":2014,"date":"May 8 2014","country":"England","city":"Brighton","venue":"SpiegelPub","url":"https://www.setlist.fm/setlist/sam-fender/2014/spiegelpub-brighton-england-7b94be08.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Great Escape 2014"},{"year":2014,"date":"May 4 2014","country":"England","city":"Newcastle upon Tyne","venue":"Think Tank?","url":"https://www.setlist.fm/setlist/sam-fender/2014/think-tank-newcastle-upon-tyne-england-b5bdd9a.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"May 3 2014","country":"England","city":"Leeds","venue":"The Cockpit","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-cockpit-leeds-england-386bdbb.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Live at Leeds 2014"},{"year":2014,"date":"Apr 19 2014","country":"England","city":"Stockton-on-Tees","venue":"Vault Hidden Bar","url":"https://www.setlist.fm/setlist/sam-fender/2014/vault-hidden-bar-stockton-on-tees-england-1b86bdc4.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Stockton Calling 2014"},{"year":2014,"date":"Apr 17 2014","country":"England","city":"Tynemouth","venue":"Barca El Globo","url":"https://www.setlist.fm/setlist/sam-fender/2014/barca-el-globo-tynemouth-england-2b5b2012.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Mar 26 2014","country":"England","city":"London","venue":"The Lexington","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-lexington-london-england-1b5bdda4.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Mar 18 2014","country":"England","city":"Newcastle upon Tyne","venue":"Think Tank?","url":"https://www.setlist.fm/setlist/sam-fender/2014/think-tank-newcastle-upon-tyne-england-b5bdda6.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 28 2014","country":"England","city":"Liverpool","venue":"Leaf","url":"https://www.setlist.fm/setlist/sam-fender/2014/leaf-liverpool-england-135bdda1.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 27 2014","country":"England","city":"Nottingham","venue":"The Bodega Social Club","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-bodega-social-club-nottingham-england-35bdda3.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 26 2014","country":"England","city":"Leeds","venue":"The Wardrobe","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-wardrobe-leeds-england-35bddb7.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 24 2014","country":"England","city":"Manchester","venue":"The Deaf Institute","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-deaf-institute-manchester-england-1b5bddbc.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 23 2014","country":"England","city":"Newcastle upon Tyne","venue":"The Cluny","url":"https://www.setlist.fm/setlist/sam-fender/2014/the-cluny-newcastle-upon-tyne-england-1b5bddb8.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 22 2014","country":"Scotland","city":"Glasgow","venue":"King Tut's Wah Wah Hut","url":"https://www.setlist.fm/setlist/sam-fender/2014/king-tuts-wah-wah-hut-glasgow-scotland-235a28eb.html","songs":["I'm Done"],"truncated":true,"eventType":"Standalone concert","eventName":"Early headline show · incomplete public setlist"},{"year":2014,"date":"Feb 21 2014","country":"England","city":"Newcastle upon Tyne","venue":"O2 Academy Newcastle","url":"https://www.setlist.fm/setlist/sam-fender/2014/o2-academy-newcastle-newcastle-upon-tyne-england-386bd6b.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2014,"date":"Feb 12 2014","country":"England","city":"London","venue":"Scala","url":"https://www.setlist.fm/setlist/sam-fender/2014/scala-london-england-1b5bddcc.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Dec 14 2013","country":"England","city":"Tynemouth","venue":"Watch House Museum","url":"https://www.setlist.fm/setlist/sam-fender/2013/watch-house-museum-tynemouth-england-23a5e047.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Dec 7 2013","country":"England","city":"Newcastle upon Tyne","venue":"Northumbria University Students’ Union (Reds Bar)","url":"https://www.setlist.fm/setlist/sam-fender/2013/northumbria-university-students-union-reds-bar-newcastle-upon-tyne-england-7b5bd67c.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 16 2013","country":"England","city":"Newcastle upon Tyne","venue":"Think Tank?","url":"https://www.setlist.fm/setlist/sam-fender/2013/think-tank-newcastle-upon-tyne-england-6b5bd66e.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 15 2013","country":"England","city":"Sunderland","venue":"Independent","url":"https://www.setlist.fm/setlist/sam-fender/2013/independent-sunderland-england-7b5bd670.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 15 2013","country":"England","city":"Liverpool","venue":"Mello Mello","url":"https://www.setlist.fm/setlist/sam-fender/2013/mello-mello-liverpool-england-635bd66f.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 9 2013","country":"Scotland","city":"Glasgow","venue":"King Tut's Wah Wah Hut","url":"https://www.setlist.fm/setlist/sam-fender/2013/king-tuts-wah-wah-hut-glasgow-scotland-5b5b2374.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 8 2013","country":"England","city":"Manchester","venue":"The Deaf Institute","url":"https://www.setlist.fm/setlist/sam-fender/2013/the-deaf-institute-manchester-england-735bd661.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 7 2013","country":"England","city":"Newcastle upon Tyne","venue":"Think Tank?","url":"https://www.setlist.fm/setlist/sam-fender/2013/think-tank-newcastle-upon-tyne-england-3b5b20c8.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 6 2013","country":"England","city":"Leeds","venue":"Brudenell Social Club (Games Room)","url":"https://www.setlist.fm/setlist/sam-fender/2013/brudenell-social-club-games-room-leeds-england-7b5bd6c0.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Nov 3 2013","country":"England","city":"London","venue":"Notting Hill Arts Club","url":"https://www.setlist.fm/setlist/sam-fender/2013/notting-hill-arts-club-london-england-1b86bd74.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Oct 27 2013","country":"England","city":"Perranporth","venue":"The Watering Hole","url":"https://www.setlist.fm/setlist/sam-fender/2013/the-watering-hole-perranporth-england-635bd6f3.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Oct 26 2013","country":"England","city":"St Agnes","venue":"Taphouse","url":"https://www.setlist.fm/setlist/sam-fender/2013/taphouse-st-agnes-england-735bd6fd.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Oct 25 2013","country":"England","city":"Truro","venue":"The Nightjar","url":"https://www.setlist.fm/setlist/sam-fender/2013/the-nightjar-truro-england-635bd6ff.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Oct 24 2013","country":"England","city":"Penzance","venue":"Acorn Theatre","url":"https://www.setlist.fm/setlist/sam-fender/2013/acorn-theatre-penzance-england-33a82069.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Oct 19 2013","country":"England","city":"Newcastle upon Tyne","venue":"MIll Volvo Tyne Theatre","url":"https://www.setlist.fm/setlist/sam-fender/2013/mill-volvo-tyne-theatre-newcastle-upon-tyne-england-735bd6cd.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Oct 17 2013","country":"England","city":"Newcastle upon Tyne","venue":"The Cluny","url":"https://www.setlist.fm/setlist/sam-fender/2013/the-cluny-newcastle-upon-tyne-england-ba82196.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Sep 21 2013","country":"England","city":"Gwithian","venue":"Sandsifter","url":"https://www.setlist.fm/setlist/sam-fender/2013/sandsifter-gwithian-england-335b20cd.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Sep 6 2013","country":"England","city":"Newcastle upon Tyne","venue":"Cluny2","url":"https://www.setlist.fm/setlist/sam-fender/2013/cluny2-newcastle-upon-tyne-england-b9ce576.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Aug 10 2013","country":"England","city":"Gateshead","venue":"Chase Park","url":"https://www.setlist.fm/setlist/sam-fender/2013/chase-park-gateshead-england-b86bd76.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Chase Park Festival 2013"},{"year":2013,"date":"Jul 27 2013","country":"England","city":"Stockton-on-Tees","venue":"Riverside","url":"https://www.setlist.fm/setlist/sam-fender/2013/riverside-stockton-on-tees-england-5b5bd78c.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Stockton Weekender 2013"},{"year":2013,"date":"Jul 25 2013","country":"Scotland","city":"Glasgow","venue":"King Tut's Wah Wah Hut","url":"https://www.setlist.fm/setlist/sam-fender/2013/king-tuts-wah-wah-hut-glasgow-scotland-7b5bd63c.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jul 21 2013","country":"England","city":"Gateshead","venue":"Sage Gateshead","url":"https://www.setlist.fm/setlist/sam-fender/2013/sage-gateshead-gateshead-england-3ba82074.html","songs":[],"truncated":false,"eventType":"Festival","eventName":"Summertyne Americana Festival 2013"},{"year":2013,"date":"Jul 19 2013","country":"England","city":"Durham","venue":"Gala Theatre","url":"https://www.setlist.fm/setlist/sam-fender/2013/gala-theatre-durham-england-635bd6fb.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jul 7 2013","country":"England","city":"Newcastle upon Tyne","venue":"The Cycle Hub","url":"https://www.setlist.fm/setlist/sam-fender/2013/the-cycle-hub-newcastle-upon-tyne-england-635bd60f.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jul 6 2013","country":"England","city":"Gateshead","venue":"Amazing Radio Studios","url":"https://www.setlist.fm/setlist/sam-fender/2013/amazing-radio-studios-gateshead-england-6b5bd602.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jul 6 2013","country":"England","city":"Newcastle upon Tyne","venue":"Ernest Cafe Bar","url":"https://www.setlist.fm/setlist/sam-fender/2013/ernest-cafe-bar-newcastle-upon-tyne-england-635bd607.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jul 2 2013","country":"England","city":"South Shields","venue":"South Shields Amphitheatre","url":"https://www.setlist.fm/setlist/sam-fender/2013/south-shields-amphitheatre-south-shields-england-235b20cb.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 22 2013","country":"England","city":"Newcastle upon Tyne","venue":"Hoults Yard","url":"https://www.setlist.fm/setlist/sam-fender/2013/hoults-yard-newcastle-upon-tyne-england-635bd617.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 21 2013","country":"England","city":"North Shields","venue":"YMCA","url":"https://www.setlist.fm/setlist/sam-fender/2013/ymca-north-shields-england-6b5bd612.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 11 2013","country":"England","city":"Blackpool","venue":"Empress Ballroom","url":"https://www.setlist.fm/setlist/sam-fender/2013/empress-ballroom-blackpool-england-b906d5e.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 8 2013","country":"England","city":"Sunderland","venue":"Pop Recs Ltd","url":"https://www.setlist.fm/setlist/sam-fender/2013/pop-recs-ltd-sunderland-england-735bd625.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 8 2013","country":"England","city":"Newcastle upon Tyne","venue":"Boiler Shop","url":"https://www.setlist.fm/setlist/sam-fender/2013/boiler-shop-newcastle-upon-tyne-england-6b5bd622.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 3 2013","country":"England","city":"London","venue":"Barfly","url":"https://www.setlist.fm/setlist/sam-fender/2013/barfly-london-england-7b5bd630.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jun 1 2013","country":"England","city":"London","venue":"Ginglik","url":"https://www.setlist.fm/setlist/sam-fender/2013/ginglik-london-england-386bd77.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"May 12 2013","country":"England","city":"Newcastle upon Tyne","venue":"Hoults Yard","url":"https://www.setlist.fm/setlist/sam-fender/2013/hoults-yard-newcastle-upon-tyne-england-635bd63b.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"May 6 2013","country":"England","city":"North Shields","venue":"Low Lights Tavern","url":"https://www.setlist.fm/setlist/sam-fender/2013/low-lights-tavern-north-shields-england-635bd647.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Apr 21 2013","country":"Scotland","city":"Glasgow","venue":"Glasgow School of Art","url":"https://www.setlist.fm/setlist/sam-fender/2013/glasgow-school-of-art-glasgow-scotland-534413d1.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Apr 19 2013","country":"England","city":"Stockton-on-Tees","venue":"The Green Room","url":"https://www.setlist.fm/setlist/sam-fender/2013/the-green-room-stockton-on-tees-england-735bd6c1.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Mar 13 2013","country":"England","city":"London","venue":"Bush Hall","url":"https://www.setlist.fm/setlist/sam-fender/2013/bush-hall-london-england-5b4413d8.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Feb 15 2013","country":"England","city":"North Shields","venue":"YMCA","url":"https://www.setlist.fm/setlist/sam-fender/2013/ymca-north-shields-england-434413eb.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"},{"year":2013,"date":"Jan 24 2013","country":"England","city":"North Shields","venue":"Low Lights Tavern","url":"https://www.setlist.fm/setlist/sam-fender/2013/low-lights-tavern-north-shields-england-2b5b203a.html","songs":[],"truncated":false,"eventType":"Standalone concert","eventName":"Early headline / support show"}];
  earlyRecords.forEach(show=>{if(!records.some(item=>item.url===show.url))records.push(show)});
  if(!records.some(show=>show.year===2019&&show.venue==='Jimmy Kimmel Live'))records.push({year:2019,date:'Mar 7 2019',country:'United States',city:'Los Angeles',venue:'Jimmy Kimmel Live',url:'https://www.nme.com/news/music/watch-sam-fender-make-us-television-debut-jimmy-kimmel-live-2459847',songs:['Hypersonic Missiles','Dead Boys'],truncated:false,eventType:'TV performance',eventName:'US television debut · Jimmy Kimmel Live!'});
  if(!records.some(show=>show.year===2021&&show.url==='https://www.setlist.fm/setlist/sam-fender/2021/paradiso-grote-zaal-amsterdam-netherlands-338ad8d5.html'))records.push({year:2021,date:'Nov 8 2021',country:'Netherlands',city:'Amsterdam',venue:'Paradiso Grote Zaal',url:'https://www.setlist.fm/setlist/sam-fender/2021/paradiso-grote-zaal-amsterdam-netherlands-338ad8d5.html',songs:['Will We Talk?','Dead Boys','All Is on My Side','Mantra — live debut','Spit of You','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'],truncated:false,eventType:'Headline concert',eventName:'2021 European headline show'});
  if(!Array.isArray(records)||!records.length)return;
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const capacities={"St James' Park":'52,000+','St James’ Park':'52,000+','London Stadium':'82,500',"The O2 Arena":'20,000','Co-op Live':'23,500','The OVO Hydro':'14,300','OVO Arena Wembley':'12,500','3Arena':'13,000','Utilita Arena':'11,000','Utilita Arena Birmingham':'15,800','O2 Academy Brixton':'4,921','Eventim Apollo':'3,632','HBF Stadium':'15,500','Hordern Pavilion':'5,500','Enmore Theatre':'1,600','AFAS Live':'6,000','Halle 622':'3,500','Fortitude Music Hall':'3,000','First Direct Arena':'13,781'};
  const capacityFor=venue=>capacities[venue]||(/Festival|Park|Farm|Common|Foreshore|Green|Stage|Sziget|Sittertobel|Bay|Castle & Gardens/i.test(venue)?'Festival / outdoor layout':'Not publicly verified');
  const dateValue=value=>{
    const parsed=Date.parse(value);
    return Number.isNaN(parsed)?0:parsed;
  };
  const canonicalCountry=value=>({USA:'United States','U.S.A.':'United States','United States of America':'United States',UK:'England','United Kingdom':'England','Great Britain':'England','UK & Ireland':'England','United Kingdom & Ireland':'England','Republic of Ireland':'Ireland','Éire':'Ireland',Holland:'Netherlands'}[String(value).trim()]||String(value).trim());
  const coverArtists={
    'Dancing in the Dark':'Bruce Springsteen',
    'I’m on Fire':'Bruce Springsteen',
    "I'm on Fire":'Bruce Springsteen',
    'Reason to Believe':'Bruce Springsteen',
    'Born to Run':'Bruce Springsteen',
    'Born in the U.S.A.':'Bruce Springsteen',
    'Going Home: Theme of the Local Hero':'Mark Knopfler',
    'The Boys Are Back in Town':'Thin Lizzy',
    'Back in Black':'AC/DC',
    'You Shook Me All Night Long':'AC/DC',
    'The Modern Leper':'Frightened Rabbit',
    'Morning Glory':'Oasis',
    'London Calling':'The Clash',
    'Should I Stay or Should I Go':'The Clash',
    'Love Is a Long Road':'Tom Petty',
    'Willin’':'Little Feat',
    "Willin'":'Little Feat',
    'Ohio':'Crosby, Stills, Nash & Young'
  };
  const labelCover=song=>{
    if(song==='ENCORE'||/\bcover\b/i.test(song))return song;
    const prefix=song.startsWith('Encore — ')?'Encore — ':'';
    const body=prefix?song.slice(prefix.length):song;
    const title=Object.keys(coverArtists).find(name=>body===name||body.startsWith(`${name} —`)||body.startsWith(`${name} (`));
    return title?`${prefix}${body} — ${coverArtists[title]} cover`:song;
  };
  const locationFixes=[['manchester-academy-',"England|Manchester|Manchester Academy 1"],['backstage-werk-',"Germany|Munich|Backstage Werk"],['melkweg-the-max-',"Netherlands|Amsterdam|Melkweg · The Max"],['makuhari-messe-',"Japan|Chiba|Makuhari Messe · Hall 8"],['bergenhus-festning-',"Norway|Bergen|Bergenhus Festning · Plenen"],['melkweg-oude-zaal-',"Netherlands|Amsterdam|Melkweg · Oude Zaal"],['le-botanique-lorangerie-',"Belgium|Sint-Joost-ten-Noode|Le Botanique · L’Orangerie"],['tivolivredenburg-pandora-',"Netherlands|Utrecht|TivoliVredenburg · Pandora"],['le-botanique-witloof-',"Belgium|Sint-Joost-ten-Noode|Le Botanique · Witloof Bar"],['rock-city-basement-',"England|Nottingham|Rock City · Basement"],['paradiso-grote-zaal-',"Netherlands|Amsterdam|Paradiso · Grote Zaal"],['paard-kleine-zaal-',"Netherlands|The Hague|PAARD · Kleine Zaal"],['festivalpark-the-slope-',"Belgium|Werchter|Festivalpark · The Slope"],['melkweg-upstairs-',"Netherlands|Amsterdam|Melkweg · Upstairs"],['molotow-skybar-',"Germany|Hamburg|Molotow · Skybar"],['vega-lille-vega-',"Denmark|Copenhagen|VEGA · Lille VEGA"],['paradiso-noord-',"Netherlands|Amsterdam|Paradiso Noord · Concertzaal"]];
  const appearanceType=(year,venue)=>{
    if(/Festival|Glastonbury|Boardmasters|Lollapalooza|Coachella|Sziget|TRNSMT|Werchter|Reading|Bramham|Big Weekend|Electric Picnic|VITAL|Southside|Hurricane|Pilgrimage|Summer Sonic|Splendour|Lowlands|Pinkpop|Barn on the Farm/i.test(venue))return ['Festival appearance','festival'];
    if(/Radio|BBC|Kimmel|Saturday Night Takeaway|Mercury|Awards|Television|TV|Studio|Session/i.test(venue))return ['TV / radio / awards','special'];
    if(/Benefit|Charity|Cabaret Bar|The Murphy|Hilton Newcastle/i.test(venue))return ['Special appearance','special'];
    if(year===2024)return ['People Watching Tour','tour'];
    if(year>=2021)return ['Seventeen Going Under era tour','tour'];
    if(year>=2019)return ['Hypersonic Missiles Tour','tour'];
    return [year===2018?'2018 headline / support show':'Standalone / support show','standalone'];
  };
  const grouped=records.reduce((years,show)=>{
    const nonPerformanceTapeTitles=new Set(['Imperial March','The World We Knew (Over and Over)','UEFA Champions League Anthem','Ohio','Stranger Things theme']);
    show.songs=(show.songs||[]).filter(song=>!nonPerformanceTapeTitles.has(song));
    show.country=canonicalCountry(show.country);
    if(show.country==='Unknown'||show.city==='Unknown'){
      const fix=locationFixes.find(([slug])=>show.url.includes(slug));
      if(fix)[show.country,show.city,show.venue]=fix[1].split('|');
    }
    if(show.country==='United States'){
      const stateCities={NY:'New York',PA:'Harrisburg',CA:show.venue.includes('San Francisco')?'San Francisco':show.venue.includes('Los Angeles')?'Los Angeles':show.venue.includes('West Hollywood')?'West Hollywood':'California',OR:'Portland',WA:'Seattle',TX:'Austin',IL:'Chicago',QC:'Montreal',ON:'Toronto'};
      if(stateCities[show.city])show.city=stateCities[show.city];
      const venueCity=show.venue.match(/,\s*([^,]+)$/);
      if(venueCity&&/^(New York|Harrisburg|West Hollywood|San Francisco|Portland|Seattle|Austin|Chicago|Los Angeles)$/.test(venueCity[1])){
        show.city=venueCity[1];show.venue=show.venue.replace(/,\s*[^,]+$/,'');
      }
    }
    if(/BRIT Awards|NME Awards|Mercury Prize|Academy Awards|The BRITs Are Coming/i.test(show.eventName||''))show.eventType='Awards show';
    if(show.year===2023&&show.country==='Italy'&&['Ferrara','Rome'].includes(show.city)){
      show.eventType='Support slot';
      show.eventName='Opening for Bruce Springsteen & The E Street Band';
    }
    if(show.year===2022&&show.venue==='Emirates Stadium'){
      show.eventType='Support slot';
      show.eventName='Opening for The Killers · Imploding the Mirage Tour';
    }
    if(show.year===2021&&show.venue==='Alexandra Palace'&&show.date==='Nov 20 2021'){
      show.songs=['Will We Talk?','Getting Started','All Is on My Side','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue — restarted after someone fainted in the crowd','Get You Down','Spit of You','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour · Night 1';
      show.url='https://www.setlist.fm/setlist/sam-fender/2021/alexandra-palace-london-england-138a79b5.html';
    }
    if(show.year===2021&&show.date==='Nov 10 2021'&&show.venue==='Low Lights Tavern'){
      show.eventType='Remote TV performance';
      show.eventName='The Tonight Show Starring Jimmy Fallon · filmed in North Shields';
    }
    if(show.year===2021&&show.venue==='Alexandra Palace'&&show.date==='Nov 21 2021'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','All Is on My Side','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under','Play God','ENCORE','I’m on Fire — Bruce Springsteen cover (with David Le’aupepe)','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour · Night 2';
      show.url='https://www.setlist.fm/setlist/sam-fender/2021/alexandra-palace-london-england-2b8a70ce.html';
    }
    const uk2021Exact={
      'Aug 12 2021|O2 Academy Bristol':['Will We Talk?','Dead Boys','All Is on My Side','The Borders','Spice','Spice — repeated after someone in the crowd fainted','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'],
      'Sep 13 2021|De Montfort Hall':['Will We Talk?','Dead Boys','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Wild Grey Ocean — live debut','Saturday','Hypersonic Missiles'],
      'Sep 15 2021|O2 Victoria Warehouse':['Will We Talk?','Dead Boys','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Wild Grey Ocean','Saturday','Hypersonic Missiles'],
      'Sep 16 2021|O2 Victoria Warehouse':['Will We Talk?','Dead Boys','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Wild Grey Ocean','Saturday','Hypersonic Missiles'],
      'Sep 19 2021|Exhibition Park':['Will We Talk?','Dead Boys — with Rachel Chinouriri','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Wild Grey Ocean','That Sound','Saturday','Hypersonic Missiles'],
      'Sep 25 2021|O2 Academy Brixton':['Will We Talk?','Dead Boys','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Wild Grey Ocean','That Sound','Saturday','Hypersonic Missiles'],
      'Oct 25 2021|Barrowland':['Will We Talk?','Dead Boys','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Spit of You','Get You Down','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'],
      'Oct 26 2021|Barrowland':['Will We Talk?','Dead Boys','All Is on My Side','Spit of You','The Borders','Spice','Howdon Aldi Death Queue','Seventeen Going Under','Get You Down','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'],
      'Nov 18 2021|Utilita Arena':['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Getting Started — live debut','All Is on My Side','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'],
      'Nov 24 2021|First Direct Arena':['Will We Talk?','Getting Started','Dead Boys','All Is on My Side','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','I’m on Fire — Bruce Springsteen cover (with David Le’aupepe)','Saturday','Hypersonic Missiles'],
      'Nov 25 2021|Motorpoint Arena Cardiff':['Will We Talk?','Getting Started','Dead Boys','Mantra','All Is on My Side','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under','Play God','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'],
      'Dec 10 2021|Brudenell Social Club':['Last to Make It Home — acoustic with Heidi Curtis','All Is on My Side','Better of Me','Getting Started','Spit of You','Get You Down','Mantra','Seventeen Going Under','The Borders','Dead Boys','Howdon Aldi Death Queue','Spice','Hypersonic Missiles']
    };
    const uk2021Songs=uk2021Exact[`${show.date}|${show.venue}`];
    if(show.year===2021&&['England','Scotland','Wales','Northern Ireland'].includes(show.country)&&uk2021Songs){
      show.songs=[...uk2021Songs];
      show.truncated=false;
    }
    if(show.year===2021&&show.date==='Aug 13 2021'&&show.venue==='Watergate Bay')show.truncated=true;
    if(show.year===2021&&show.country==='Germany'&&show.date==='Nov 4 2021'&&show.venue==='Hole 44'){
      show.songs=['Will We Talk?','Dead Boys','All Is on My Side','Spit of You','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Seventeen Going Under','Play God','Happy Birthday to You — Mildred J. Hill & Patty Hill cover','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Saturday','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Headline concert';
      show.eventName='2021 European headline show';
    }
    const tour2020Core=['Will We Talk?','Millennial','Greasy Spoon','Hold Out','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles'];
    const tour2020Closing=['ENCORE','Leave Fast — solo','White Privilege — solo','Poundshop Kardashians — band joined at the end','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'];
    const exact2020={
      'Feb 17 2020|O2 Academy Newcastle':[...tour2020Core,...tour2020Closing],
      'Feb 19 2020|O2 Academy Newcastle':['Will We Talk?','Millennial','Greasy Spoon','Hold Out','All Is on My Side','The Borders','Dead Boys','Spice','Happy Birthday to You — Mildred J. Hill & Patty Hill cover (for Caitlyn and Ed)','Play God','Hypersonic Missiles','ENCORE','Leave Fast','White Privilege','Poundshop Kardashians','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Feb 24 2020|La Cigale':['Will We Talk?','Millennial','Greasy Spoon','Hold Out','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','Leave Fast','White Privilege','Poundshop Kardashians','Happy Birthday to You — Mildred J. Hill & Patty Hill cover (for Libby)','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Feb 25 2020|Ancienne Belgique':['Will We Talk?','Millennial','Greasy Spoon','Hold Out','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','ENCORE','White Privilege','Poundshop Kardashians','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Feb 27 2020|Palladium':[...tour2020Core,...tour2020Closing],
      'Feb 28 2020|Columbiahalle':[...tour2020Core,...tour2020Closing],
      'Mar 2 2020|Paradiso · Grote Zaal':[...tour2020Core,...tour2020Closing],
      'Mar 5 2020|Docks':[...tour2020Core,'ENCORE','Leave Fast — solo','White Privilege — solo','Good Company — live debut','Poundshop Kardashians — band joined at the end','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Aug 11 2020|Virgin Money Unity Arena':['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Millennial','All Is on My Side','The Borders','Seventeen Going Under — live debut','Hold Out','Dead Boys','Spice','Angel in Lothian — live debut','Play God','ENCORE','Leave Fast — solo','Poundshop Kardashians — solo into full band','Saturday','The Kitchen — live debut','That Sound','Hypersonic Missiles'],
      'Aug 13 2020|Virgin Money Unity Arena':['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Millennial','All Is on My Side','The Borders','Seventeen Going Under','Hold Out','Dead Boys','Spice','Angel in Lothian','Play God','ENCORE','Leave Fast — solo','Poundshop Kardashians — solo into full band','Saturday','The Kitchen','That Sound','Hypersonic Missiles']
    };
    const songs2020=exact2020[`${show.date}|${show.venue}`];
    if(show.year===2020&&songs2020){
      show.songs=[...songs2020];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour';
    }
    const late2019Core=['Will We Talk?','Millennial','Start Again','Greasy Spoon','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles'];
    const late2019Full=[...late2019Core,'ENCORE','Leave Fast — solo','White Privilege — solo','Poundshop Kardashians — solo into full band','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'];
    const may2019Core=['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','Play God'];
    const exact2019UK={
      'Feb 25 2019|Gorilla':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice — live debut','Hypersonic Missiles','The Change','Poundshop Kardashians — acoustic','Play God','ENCORE','Leave Fast','That Sound'],
      'Feb 28 2019|Electric Brixton':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','The Change','Play God','ENCORE','Leave Fast','Poundshop Kardashians','White Privilege','That Sound','ENCORE','Saturday','Dancing in the Dark — Bruce Springsteen cover',"You're Not the Only One",'Call Me Lover'],
      'Mar 27 2019|Bethnal Green Working Mens Club':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','Play God','ENCORE','Leave Fast','Poundshop Kardashians','White Privilege','That Sound'],
      'May 2 2019|O2 Ritz':[...may2019Core,'Leave Fast — solo','Poundshop Kardashians — solo','White Privilege — solo','That Sound','Morning Glory — Oasis cover'],
      'May 3 2019|Queen Margaret Union':[...may2019Core,'Leave Fast — solo','Poundshop Kardashians — solo','White Privilege — solo','That Sound'],
      "May 6 2019|O2 Shepherd's Bush Empire":[...may2019Core,'ENCORE','Poundshop Kardashians — solo','Leave Fast — solo','White Privilege — solo','That Sound','Morning Glory — Oasis cover'],
      "May 7 2019|O2 Shepherd's Bush Empire":[...may2019Core,'ENCORE','Poundshop Kardashians — solo','Leave Fast — solo','White Privilege — solo','That Sound','Morning Glory — Oasis cover'],
      'May 10 2019|O2 Institute':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Hypersonic Missiles','Spice','Play God','Poundshop Kardashians — solo','Leave Fast','That Sound','White Privilege','Morning Glory — Oasis cover'],
      'Jul 11 2019|The Priory':['Millennial','Greasy Spoon','Start Again','Will We Talk?','All Is on My Side','The Borders','Spice','Dead Boys','Play God','Hypersonic Missiles','Leave Fast','Poundshop Kardashians','White Privilege','That Sound','ENCORE','Morning Glory — Oasis cover'],
      'Aug 7 2019|Boiler Shop':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','Leave Fast — solo','White Privilege — solo','Poundshop Kardashians — solo','ENCORE','That Sound','Morning Glory — Oasis cover'],
      'Aug 9 2019|SWX':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','Leave Fast','White Privilege','Poundshop Kardashians','That Sound','Morning Glory — Oasis cover'],
      'Nov 23 2019|Mountford Hall':['Will We Talk?','Millennial','Start Again','Greasy Spoon','All Is on My Side','The Borders','Dead Boys','Play God','Hypersonic Missiles','Leave Fast','ENCORE','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Nov 25 2019|O2 Academy Glasgow':[...late2019Core,'ENCORE','Leave Fast — solo','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Nov 26 2019|Rock City':[...late2019Core,'ENCORE','Leave Fast — solo','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Nov 28 2019|O2 Academy Leeds':[...late2019Core,'ENCORE','Poundshop Kardashians — solo','Leave Fast — solo','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover','Morning Glory — Oasis cover'],
      'Nov 30 2019|Brighton Dome':[...late2019Core,'ENCORE','White Privilege — solo','Poundshop Kardashians — solo into full band','Saturday','That Sound','Dancing in the Dark — Bruce Springsteen cover'],
      'Dec 2 2019|Plymouth Pavilions':[...late2019Full],
      'Dec 7 2019|O2 Academy Newcastle':[...late2019Full],
      'Dec 8 2019|O2 Academy Newcastle':[...late2019Full],
      'Dec 10 2019|O2 Academy Brixton':[...late2019Full]
    };
    const songs2019UK=exact2019UK[`${show.date}|${show.venue}`];
    if(show.year===2019&&['England','Scotland','Wales','Northern Ireland'].includes(show.country)&&songs2019UK){
      show.songs=[...songs2019UK];
      show.truncated=false;
      show.eventType=show.date==='Jul 11 2019'?'Festival':'Tour';
      show.eventName=show.date==='Jul 11 2019'?'Mouth Of The Tyne Festival 2019':show.date.startsWith('May ')?'UK Tour May 2019':'Hypersonic Missiles Tour';
    }
    const exact2019US={
      'Mar 20 2019|Private Venue, Brooklyn':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','The Change','Play God','Leave Fast','Poundshop Kardashians','White Privilege','That Sound','Saturday','Dancing in the Dark — Bruce Springsteen cover',"You're Not the Only One"],
      'Oct 17 2019|Bowery Ballroom, New York':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','Leave Fast — solo','White Privilege — solo','Dancing in the Dark — Bruce Springsteen cover (solo)',"You're Not the Only One — solo",'Two People — first performance','Call Me Lover — solo','That Sound','Morning Glory — Oasis cover']
    };
    const songs2019US=exact2019US[`${show.date}|${show.venue}`];
    if(show.year===2019&&show.country==='United States'&&songs2019US){
      show.songs=[...songs2019US];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour';
    }
    const troubadour2019=['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','Leave Fast','White Privilege','Dancing in the Dark — Bruce Springsteen cover','That Sound'];
    const assumedTroubadourDates=new Set([
      'Sep 25 2019|The Crocodile',
      'Sep 26 2019|Doug Fir Lounge',
      'Sep 28 2019|Great American Music Hall',
      'Oct 19 2019|XL Live'
    ]);
    if(show.year===2019&&show.country==='United States'&&!show.songs.length&&assumedTroubadourDates.has(`${show.date}|${show.venue}`)){
      show.songs=[...troubadour2019];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour · assumed setlist based on the Troubadour show';
    }
    const exact2019Germany={
      'Apr 24 2019|Columbia Theater':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','Play God','Leave Fast — solo','Poundshop Kardashians — solo','White Privilege — solo','That Sound'],
      'Nov 9 2019|Live Music Hall':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Spice','Play God','Hypersonic Missiles','ENCORE','Leave Fast — solo',"You're Not the Only One",'White Privilege — solo','That Sound','Morning Glory — Oasis cover']
    };
    const songs2019Germany=exact2019Germany[`${show.date}|${show.venue}`];
    if(show.year===2019&&show.country==='Germany'&&songs2019Germany){
      show.songs=[...songs2019Germany];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour';
    }
    const exact2019Benelux={
      'Apr 18 2019|Doornroosje':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','Play God','Leave Fast','Poundshop Kardashians','White Privilege','That Sound'],
      'Apr 28 2019|Le Botanique · L’Orangerie':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Hypersonic Missiles','Spice','Play God','Leave Fast — solo','Poundshop Kardashians — solo','White Privilege — solo','That Sound'],
      'Apr 29 2019|Melkweg · Oude Zaal':['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','Play God','Leave Fast — solo','Poundshop Kardashians — solo','White Privilege — solo','Dancing in the Dark — Bruce Springsteen cover','That Sound']
    };
    const songs2019Benelux=exact2019Benelux[`${show.date}|${show.venue}`];
    if(show.year===2019&&['Netherlands','Belgium'].includes(show.country)&&songs2019Benelux){
      show.songs=[...songs2019Benelux];
      show.truncated=false;
      show.eventType=show.date==='Apr 28 2019'?'Festival':'Tour';
      show.eventName=show.date==='Apr 28 2019'?'Les Nuits Botanique 2019':'Hypersonic Missiles Tour';
    }
    if(show.year===2019&&show.date==='Apr 17 2019'&&show.venue==='Badaboum'){
      show.songs=['Millennial','Will We Talk?','All Is on My Side','The Borders','Dead Boys','Start Again','Greasy Spoon','Spice','Hypersonic Missiles','Play God','Leave Fast — acoustic','Poundshop Kardashians — acoustic','White Privilege — acoustic','ENCORE','That Sound'];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Hypersonic Missiles Tour';
    }
    const spring2018Core=['Millennial','Will We Talk?','Hold Out','All Is on My Side','Start Again','Dead Boys','That Sound','The Change','Friday Fighting','Greasy Spoon','Play God'];
    const exact2018UK={
      'May 12 2018|Old Bakery Studios':[...spring2018Core,'ENCORE','Use','Leave Fast'],
      'May 16 2018|The Boileroom':[...spring2018Core,'Use — solo','Leave Fast — solo'],
      'Nov 17 2018|Newcastle University':['Millennial','Will We Talk?','Start Again','All Is on My Side','Dead Boys','The Change','Friday Fighting','That Sound','Greasy Spoon','Play God','Use — solo','Leave Fast','ENCORE','Hypersonic Missiles','Dancing in the Dark — Bruce Springsteen cover']
    };
    const songs2018UK=exact2018UK[`${show.date}|${show.venue}`];
    if(show.year===2018&&['England','Scotland','Wales','Northern Ireland'].includes(show.country)&&songs2018UK){
      show.songs=[...songs2018UK];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName=show.date.startsWith('May ')?'European Spring Tour 2018':'2018 UK headline tour';
    }
    const exact2018Europe={
      'Apr 23 2018|Musik & Frieden':[...spring2018Core,'Use — solo','Leave Fast — solo'],
      'Apr 25 2018|Merleyn':[...spring2018Core,'Use — solo','Leave Fast — solo'],
      'Nov 25 2018|Le Botanique · Witloof Bar':['Millennial','Will We Talk?','Start Again','All Is on My Side','Dead Boys','The Change','Friday Fighting','That Sound','Greasy Spoon','Play God','Leave Fast — solo','Use — solo','Dancing in the Dark — Bruce Springsteen cover (solo)']
    };
    const songs2018Europe=exact2018Europe[`${show.date}|${show.venue}`];
    if(show.year===2018&&['Germany','Netherlands','Belgium'].includes(show.country)&&songs2018Europe){
      show.songs=[...songs2018Europe];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName=show.date==='Nov 25 2018'?'Dead Boys European Tour':'European Spring Tour 2018';
    }
    if(show.year===2017&&show.date==='Dec 7 2017'&&show.venue==='Riverside'){
      show.songs=['Millennial','Will We Talk?','Hold Out','All Is on My Side','Start Again','The Change','The Storm','Friday Fighting','Greasy Spoon','ENCORE',"You're Not the Only One",'Call Me Lover','Hong Kong','Use','Play God'];
      show.truncated=false;
      show.eventType='Headline concert';
      show.eventName='Riverside Newcastle headline show';
    }
    if(show.year===2023&&show.venue==='Glasgow Green'&&show.date==='Jul 8 2023'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys — with prelude','Mantra','The Borders','Spice — with audience-led chant','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','Play God','The Dying Light','Angel in Lothian — acoustic','The Modern Leper — Frightened Rabbit cover (with guitar tech Fraser Fulton)','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Festival';
      show.eventName='TRNSMT Festival 2023';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/glasgow-green-glasgow-scotland-3a7c51f.html';
    }
    if(show.year===2023&&show.venue==='HBF Stadium'&&show.date==='Jul 20 2023'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Boys Are Back in Town — Thin Lizzy cover','Alright','The Dying Light','ENCORE','Dancing in the Dark — Bruce Springsteen cover','Wild Grey Ocean','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='2023 Australian headline show';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/hbf-stadium-perth-australia-ba74176.html';
    }
    if(show.year===2023&&show.venue==='Óbudai-Sziget'&&show.date==='Aug 10 2023'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','Wild Grey Ocean','Dancing in the Dark — Bruce Springsteen cover','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Festival';
      show.eventName='Sziget Festival 2023';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/obudai-sziget-budapest-hungary-1ba45930.html';
    }
    if(show.year===2023&&show.venue==='Ormeau Park'&&show.date==='Jun 23 2023'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','The Dying Light','ENCORE','Wild Grey Ocean','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Festival';
      show.eventName='Belsonic 2023';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/ormeau-park-belfast-northern-ireland-2ba66806.html';
    }
    if(show.year===2023&&show.venue==='Malahide Castle & Gardens'&&show.date==='Jun 25 2023'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Boys Are Back in Town — Thin Lizzy cover','Alright','The Dying Light','ENCORE','Wild Grey Ocean','Dancing in the Dark — Bruce Springsteen cover','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Headline concert';
      show.eventName='Malahide Castle & Gardens 2023';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/malahide-castle-and-gardens-malahide-ireland-13a651a9.html';
    }
    if(show.year===2022&&show.country==='Switzerland'&&show.venue==='Halle 622'&&show.date==='May 3 2022'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Paradigms','Play God','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Seventeen Going Under Tour';
      show.url='https://www.setlist.fm/setlist/sam-fender/2022/halle-622-zurich-switzerland-7bb7a278.html';
    }
    if(show.year===2022&&show.country==='Scotland'&&show.venue==='The OVO Hydro'&&show.date==='Mar 26 2022'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You — restarted due to a fight in the crowd','Play God','The Leveller','The Dying Light','ENCORE','Angel in Lothian — solo with Johnny “Blue Hat” Davis','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Tour';
      show.eventName='Seventeen Going Under Tour';
      show.url='https://www.setlist.fm/setlist/sam-fender/2022/the-ovo-hydro-glasgow-scotland-23896cdf.html';
    }
    if(show.year===2022&&show.country==='Scotland'&&show.venue==='Glasgow Green'&&show.date==='Jul 8 2022'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Angel in Lothian','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Festival';
      show.eventName='TRNSMT Festival 2022';
    }
    if(show.year===2022&&(show.country==='England'||show.venue==='Pyramid Stage'||show.venue==="Sarah Nulty's Main Stage")){
      const headlineEnding=['The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      const headlineBase=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Leveller'];
      if(['Mar 20 2022','Mar 21 2022','Mar 27 2022','Mar 30 2022','Apr 1 2022','Apr 2 2022','Apr 5 2022','Apr 6 2022'].includes(show.date)){
        show.songs=[...(show.venue==='Utilita Arena'?'Going Home: Theme of the Local Hero — Mark Knopfler cover':[]),...headlineBase,...headlineEnding];
        show.truncated=false;
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
      }
      if(show.venue==='Motorpoint Arena'&&show.date==='Mar 20 2022'){
        show.songs=[...headlineBase,'The Dying Light — live debut','ENCORE','Leave Fast — improvised after pedal-board trouble','Saturday','Paradigms — live debut','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;
      }
      if(show.venue==='Utilita Arena'&&show.date==='Apr 5 2022'){
        show.songs=['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Leveller','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Tour';show.eventName='Seventeen Going Under Tour · Newcastle Night 1';
        show.url='https://www.setlist.fm/setlist/sam-fender/2022/utilita-arena-newcastle-upon-tyne-england-73b6a645.html';
      }
      if(show.venue==='Utilita Arena'&&show.date==='Apr 6 2022'){
        show.songs=['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spit of You','Spice','Howdon Aldi Death Queue','Get You Down','Play God','The Leveller','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Tour';show.eventName='Seventeen Going Under Tour · Newcastle Night 2';
        show.url='https://www.setlist.fm/setlist/sam-fender/2022/utilita-arena-newcastle-upon-tyne-england-5bb69bf8.html';
      }
      if(show.venue==='O2 City Hall Newcastle'&&show.date==='May 24 2022'){
        show.songs=['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Charity concert';show.eventName='North East Homeless fundraiser';
      }
      if(show.venue==='Scarborough Open Air Theatre'&&show.date==='May 27 2022'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
      }
      if(show.venue==='War Memorial Park'&&show.date==='May 28 2022'){
        show.songs=['Will We Talk?','Getting Started','The Borders','Mantra','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Seventeen Going Under'];
        show.truncated=false;show.eventType='Festival';show.eventName='BBC Radio 1’s Big Weekend 2022';
      }
      if(show.venue==='Emirates Stadium'&&['Jun 3 2022','Jun 4 2022'].includes(show.date)){
        show.songs=['Will We Talk?','Getting Started','The Borders','Mantra','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Seventeen Going Under'];
        show.truncated=false;show.eventType='Support slot';show.eventName='Opening for The Killers · Imploding the Mirage Tour';
      }
      if(['Pyramid Stage','Worthy Farm · Pyramid Stage'].includes(show.venue)&&show.date==='Jun 24 2022'){
        show.songs=['Will We Talk?','Getting Started','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under','The Dying Light','Saturday','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Festival';show.eventName='Glastonbury Festival 2022';
      }
      if(show.venue==='Hyde Park'&&show.date==='Jul 3 2022'){
        show.songs=['Will We Talk?','Getting Started','Mantra','The Borders','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Saturday','Seventeen Going Under'];
        show.truncated=false;show.eventType='Festival';show.eventName='British Summer Time 2022';
      }
      if(show.venue==='Castlefield Bowl'&&show.date==='Jul 6 2022'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Festival';show.eventName='Sounds of the City 2022';
      }
      if(show.venue==='Finsbury Park'&&show.date==='Jul 15 2022'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright — live debut','Play God','The Dying Light','ENCORE','Angel in Lothian','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Headline concert';show.eventName='Live From Finsbury Park';
      }
      if(["Sarah Nulty's Main Stage","Hillsborough Park · Sarah Nulty's Main Stage"].includes(show.venue)&&show.date==='Jul 22 2022'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','Play God','The Dying Light','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Festival';show.eventName='Tramlines Festival 2022';
      }
      if(show.venue==='Hill Farm'&&show.date==='Jul 23 2022'){
        show.songs=['Will We Talk?','Getting Started — with Shaun Williamson','Dead Boys','Mantra','The Borders','Spice','Get You Down','Spit of You','Alright','Saturday','The Dying Light','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Festival';show.eventName='Truck Festival 2022';
      }
      if(show.venue==='Southsea Common'&&show.date==='Aug 28 2022'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.truncated=false;show.eventType='Festival';show.eventName='Victorious Festival 2022';
      }
    }
    if(show.year===2022&&show.country==='Australia'){
      const australianCore=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You'];
      if(show.venue==='Palace Foreshore')show.songs=[...australianCore,'Alright','Play God','The Dying Light','ENCORE','Wild Grey Ocean','Seventeen Going Under','Hypersonic Missiles'];
      if(show.venue==='Rymill & King Rodney Parks'){
        show.songs=[...australianCore,'Seventeen Going Under'];
        show.eventType='Festival';show.eventName='Harvest Rock 2022 · shortened due to illness';
      }
      if(show.venue==='Enmore Theatre')show.songs=[...australianCore,'Alright','Play God','The Dying Light','ENCORE','Wild Grey Ocean — full-band version debut','Seventeen Going Under','Hypersonic Missiles'];
      if(show.venue==='Fortitude Music Hall')show.songs=[...australianCore,'Alright','Play God','The Dying Light','Wild Grey Ocean','Seventeen Going Under','Hypersonic Missiles'];
      if(show.venue==='Hordern Pavilion')show.songs=[...australianCore,'Alright','The Dying Light','Wild Grey Ocean','Should I Stay or Should I Go — The Clash cover','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      if(show.venue!=='Rymill & King Rodney Parks'){show.eventType='Tour';show.eventName='Seventeen Going Under Tour · Australia';}
    }
    if(show.year===2022&&show.country==='Germany'){
      const germanyHeadline=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      if(['Mitsubishi Electric Halle','Tonhalle','Max-Schmeling-Halle'].includes(show.venue)){
        show.songs=[...germanyHeadline];show.truncated=false;
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour · Germany';
      }
      if(show.venue==='Studio Berlin Adlershof'){
        show.songs=['Seventeen Going Under'];show.truncated=false;
        show.eventType='TV performance';show.eventName='Studio Berlin Adlershof';
      }
      if(show.venue==='Jahrhunderthalle'){
        show.songs=[...germanyHeadline];show.truncated=false;
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour · Munich tour setlist used';
      }
    }
    if(show.year===2022&&show.country==='United States'){
      const northAmericaCore=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','The Dying Light'];
      if(show.venue==='Grant Park'){
        show.songs=['Dancing in the Dark — Bruce Springsteen cover','Getting Started','The Borders','Howdon Aldi Death Queue','Spit of You','The Dying Light','Seventeen Going Under'];
        show.eventType='Festival';show.eventName='Lollapalooza 2022 · shortened by equipment delay';
      }
      if(show.venue==='The Fonda Theatre'){
        show.songs=[...northAmericaCore,'ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
      }
      if(show.venue==='Golden Gate Park'){
        show.songs=['Will We Talk?','Getting Started','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','Seventeen Going Under'];
        show.eventType='Festival';show.eventName='Outside Lands Music & Arts Festival 2022';
      }
      if(show.venue==='Irving Plaza'){
        show.songs=[...northAmericaCore,'ENCORE','Angel in Lothian','Seventeen Going Under','Hypersonic Missiles'];
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
      }
      show.truncated=false;
    }
    if(show.year===2022&&show.country==='Canada'){
      if(show.venue==='Danforth Music Hall'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','The Dying Light','ENCORE','Seventeen Going Under','Hypersonic Missiles'];
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
      }
      if(show.venue==='Parc Jean-Drapeau'){
        show.songs=['Will We Talk?','Getting Started','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Seventeen Going Under'];
        show.eventType='Festival';show.eventName='Osheaga Festival 2022';
      }
      show.truncated=false;
    }
    if(show.year===2022&&show.country==='Netherlands'){
      if(show.venue==='AFAS Live'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
        show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
      }
      if(show.venue==='Evenemententerrein Walibi Holland'){
        show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','The Dying Light','Seventeen Going Under'];
        show.eventType='Festival';show.eventName='Lowlands Festival 2022';
      }
      show.truncated=false;
    }
    if(show.year===2022&&show.country==='Spain'&&show.venue==='IFEMA'){
      show.songs=['Will We Talk?','Getting Started','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','The Dying Light','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;show.eventType='Festival';show.eventName='Mad Cool Festival 2022';
    }
    if(show.year===2022&&show.country==='Ireland'&&show.venue==='3Arena'){
      show.songs=['Will We Talk?','Getting Started','Dead Boys','Mantra','Better of Me','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Play God','The Leveller','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;show.eventType='Tour';show.eventName='Seventeen Going Under Tour';
    }
    if(show.year===2023&&show.venue==="St James' Park"&&show.date==='Jun 9 2023'){
      show.songs=['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Getting Started','Dead Boys','Mantra','I’m on Fire — Bruce Springsteen cover (with Liam Fender)','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','Play God','The Dying Light','ENCORE','Wild Grey Ocean','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Headline concert';
      show.eventName='St James’ Park · Night 1';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/st-james-park-newcastle-upon-tyne-england-4ba6ff42.html';
    }
    if(show.year===2023&&show.venue==="St James' Park"&&show.date==='Jun 10 2023'){
      show.songs=['Going Home: Theme of the Local Hero — Mark Knopfler cover','Will We Talk?','Getting Started','Dead Boys','Mantra — extended intro','I’m on Fire — Bruce Springsteen cover (with Liam Fender)','The Borders','Spice — extended intro','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','Back in Black — AC/DC cover (with Brian Johnson)','You Shook Me All Night Long — AC/DC cover (with Brian Johnson)','Play God','The Dying Light','ENCORE','Happy Birthday to You — sung to Tom','Wild Grey Ocean','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Headline concert';
      show.eventName='St James’ Park · Night 2';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/st-james-park-newcastle-upon-tyne-england-3a6ed43.html';
    }
    if(show.year===2023&&show.venue==="Little John's Farm"&&show.date==='Aug 25 2023'){
      show.songs=['The Kitchen — first time as show opener','Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice — extended intro','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','That Sound','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Festival';
      show.eventName='Reading Festival 2023';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/little-johns-farm-reading-england-3a51967.html';
    }
    if(show.year===2023&&show.venue==='Bramham Park'&&show.date==='Aug 26 2023'){
      show.songs=['The Kitchen','Will We Talk?','Getting Started','Dead Boys','Mantra','The Borders','Spice','Howdon Aldi Death Queue','Get You Down','Spit of You','Alright','That Sound','The Dying Light','ENCORE','Saturday','Seventeen Going Under','Hypersonic Missiles'];
      show.truncated=false;
      show.eventType='Festival';
      show.eventName='Leeds Festival 2023';
      show.url='https://www.setlist.fm/setlist/sam-fender/2023/bramham-park-bramham-england-13a50da5.html';
    }
    if(show.year===2022&&show.city==='Unknown'&&show.venue==='Pyramid Stage'){show.country='England';show.city='Pilton';show.venue='Worthy Farm · Pyramid Stage'}
    if(show.year===2022&&show.city==='Unknown'&&show.venue==="Sarah Nulty's Main Stage"){show.country='England';show.city='Sheffield';show.venue="Hillsborough Park · Sarah Nulty's Main Stage"}
    if(show.year===2023&&show.city==='Unknown'&&show.venue==='Main Stage'){show.country='Belgium';show.city='Werchter';show.venue='Festivalpark · Main Stage'}
    show.songs=show.songs.map(labelCover);
    (((years[show.year]??={})[show.country]??={})[show.city]??=[]).push(show);
    return years;
  },{});
  const countryIndex=records.reduce((countries,show)=>{((countries[show.country]??={})[show.city]??=[]).push(show);return countries},{});
  const countryBars=document.querySelector('.country-bars');
  if(countryBars){
    const countriesMarkup=Object.entries(countryIndex).sort((a,b)=>Object.values(b[1]).flat().length-Object.values(a[1]).flat().length).map(([country,cities])=>{
      const countryShows=Object.values(cities).flat();
      return `<details class="played-country"><summary><span><b>${escape(country)}</b><small>${Object.keys(cities).length} cities</small></span><strong>${countryShows.length} shows ＋</strong></summary><div class="played-cities">${Object.entries(cities).sort((a,b)=>b[1].length-a[1].length).map(([city,shows])=>`<details class="played-city"><summary><b>${escape(city)}</b><span>${shows.length} time${shows.length===1?'':'s'} ＋</span></summary><ol>${[...shows].sort((a,b)=>dateValue(a.date)-dateValue(b.date)).map(show=>`<li><time>${escape(show.date)}</time><a href="${escape(show.url)}" target="_blank" rel="noreferrer">${escape(show.venue)}</a><small>${escape(show.eventType||'Standalone concert')} · ${escape(show.eventName||'No named event')} · Capacity ${escape(capacityFor(show.venue))}</small></li>`).join('')}</ol></details>`).join('')}</div></details>`
    }).join('');
    countryBars.innerHTML=`<h4>Where Sam has played</h4><p class="data-note">Open a country to see every city. Open a city to see how many times he played there and each exact date and venue.</p>${countriesMarkup}`;
  }
  Object.entries(grouped).forEach(([year,countries])=>{
    // The dedicated 2025 renderer owns this year. Rendering it again here
    // duplicated country headings and made the final country appear to own
    // the London Stadium film that followed the list.
    if(year==='2025')return;
    const view=document.querySelector(`[data-year-view="${year}"]`);
    if(!view)return;
    view.querySelector('.featured-setlist')?.remove();
    view.querySelector('.year-placeholder')?.remove();
    const countryShowCount=cities=>Object.values(cities).flat().length;
    const markup=Object.entries(countries).sort((a,b)=>countryShowCount(b[1])-countryShowCount(a[1])||a[0].localeCompare(b[0])).map(([country,cities])=>`<details class="country-group"><summary><b>${escape(country)}</b><span>${countryShowCount(cities)} shows ＋</span></summary>${Object.entries(cities).sort((a,b)=>b[1].length-a[1].length||a[0].localeCompare(b[0])).map(([city,shows])=>`<details class="city-group"><summary><b>${escape(city)}</b><span>${shows.length} show${shows.length===1?'':'s'} ＋</span></summary><div class="venue-shows">${[...shows].sort((a,b)=>dateValue(a.date)-dateValue(b.date)).map(show=>{const songCount=show.songs.filter(song=>song!=='ENCORE').length;return `<details class="venue-show show-entry ${songCount?'has-setlist':'setlist-unknown'}"><summary><span><small>${escape(show.date)}</small><strong>${escape(show.venue)}</strong><small class="event-badge ${show.eventType==='Festival'?'festival':''}">${escape(show.eventType||'Standalone concert')} · ${escape(show.eventName||'No named event')}</small><small class="venue-capacity">CAPACITY · ${escape(capacityFor(show.venue))}</small></span><b>${songCount?`${songCount}${show.truncated?'+':''} SONGS`:'SETLIST UNKNOWN'} ＋</b></summary><div class="show-setlist-body">${songCount?`<ol>${show.songs.map(song=>`<li>${escape(song)}</li>`).join('')}</ol>${show.truncated?'<p class="archive-gap">This public record is incomplete. Only the documented songs are shown.</p>':''}`:'<p class="unknown-message"><b>Setlist unknown.</b> The performance is documented, but no trustworthy song-by-song record is available.</p>'}<a href="${escape(show.url)}" target="_blank" rel="noreferrer">${show.url.includes('setlist.fm')?'Setlist.fm show record':'Performance source'} ↗</a></div></details>`}).join('')}</div></details>`).join('')}</details>`).join('');
    view.insertAdjacentHTML('beforeend',`<section class="year-archive-complete"><h4>Every ${year} show · country → city → exact venue</h4><p class="data-note">Open a country, then a city, then the exact performance to see its documented setlist here on the site.</p>${markup}</section>`);
  });
})();
