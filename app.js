const $=s=>document.querySelector(s);
let L=localStorage.getItem('rq_lang')||'fr',tab='home',age='all',q='',sub='prophets',cat=null,ch=0;
const t=k=>I18N[L][k];
const P={i:0,s:[],k:0,on:false,rate:1,tok:0,sl:0,tm:null,au:null};
const CPS=14;
const txt=s=>(s.text&&s.text[L])||fallback(s.n[L],L);
const dur=s=>Math.max(1,Math.round(txt(s).length/CPS/60));
function art(s,big){const h=(s.id.split('').reduce((a,c)=>a+c.charCodeAt(0),0)*37)%360;
return `<svg viewBox="0 0 300 300"><defs><linearGradient id="a${s.id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${h},55%,30%)"/><stop offset="1" stop-color="hsl(${(h+50)%360},60%,62%)"/></linearGradient></defs><rect width="300" height="300" fill="url(#a${s.id})"/><g fill="#fff"><circle cx="40" cy="50" r="3"/><circle cx="250" cy="40" r="4"/><circle cx="70" cy="130" r="2"/><circle cx="270" cy="120" r="3"/><circle cx="200" cy="80" r="2"/></g><path d="M240 30a30 30 0 1 0 0 45a24 24 0 1 1 0-45z" fill="#ffd86b"/><text x="150" y="${big?190:175}" font-size="100" text-anchor="middle">${s.emoji}</text><text x="150" y="265" font-size="30" font-weight="800" text-anchor="middle" fill="#fff" stroke="#0006" stroke-width=".6">${s.n[L]}</text></svg>`}
const card=s=>`<div class="card" data-id="${s.id}">${art(s)}<small>${s.narr}</small><b>${s.n[L]}</b><span>🎧 ${dur(s)} ${t('min')}</span></div>`;
const byAge=a=>STORIES.filter(s=>age==='all'||s.age===age);
const byIds=ids=>ids.map(i=>STORIES.find(s=>s.id===i)).filter(Boolean).filter(s=>age==='all'||s.age===age);
function chips(){return `<div class="chips">${[['all','all'],['3-6','a1'],['6-12','a2']].map(a=>`<button class="chip ${age===a[0]?'on':''}" data-age="${a[0]}">${t(a[1])}</button>`).join('')}</div>`}
function banner(c){const s=STORIES.find(x=>x.id===c.ids[0]);return `<div class="banner" data-cat="${c.id}"><svg viewBox="0 0 300 120"><rect width="300" height="120" fill="${c.c}"/><g fill="#fff" opacity=".7"><circle cx="30" cy="25" r="3"/><circle cx="260" cy="30" r="4"/><circle cx="150" cy="15" r="2"/></g><text x="240" y="85" font-size="70" text-anchor="middle">${s.emoji}</text></svg><b>${c.n[L]}</b></div>`}
function home(){const sec=(title,list,id)=>list.length?`<h2>${title}<button class="more" data-cat="${id}">${t('seeall')}</button></h2><div class="row">${list.map(card).join('')}</div>`:'';
return chips()+sec(t('prophets'),byAge().slice(0,10),'all')+CATS.slice(0,3).map(c=>sec(c.n[L],byIds(c.ids),c.id)).join('')}
function explore(){const tabs=['prophets','cats','narrs'];let b='';
if(cat){const c=CATS.find(x=>x.id===cat);const list=c?byIds(c.ids):byAge();b=`<button class="more" data-back>← ${t('back')}</button><h2>${c?c.n[L]:t('prophets')}</h2><div class="grid">${list.map(card).join('')}</div>`}
else if(sub==='prophets'){const l=byAge().filter(s=>!q||(s.n.ar+s.n.fr+s.n.en).toLowerCase().includes(q.toLowerCase()));b=`<input type="search" id="q" value="${q}" placeholder="${t('search')}">`+(l.length?`<div class="grid">${l.map(card).join('')}</div>`:`<p>${t('noRes')}</p>`)}
else if(sub==='cats')b=CATS.map(banner).join('');
else b=`<div class="banner" data-cat="all"><svg viewBox="0 0 300 120"><rect width="300" height="120" fill="#5b3fd0"/><text x="150" y="85" font-size="70" text-anchor="middle">🎧</text></svg><b>Riamo Qisas · ${t('narr')}</b></div>`;
return `<div class="tabs">${cat?'':tabs.map(x=>`<button class="chip ${sub===x?'on':''}" data-sub="${x}">${t(x)}</button>`).join('')}</div>`+b}
function tv(){const c=CHANNELS[ch];let scr;
if(c.url)scr=c.type==='iframe'?`<iframe src="${c.url}" allowfullscreen></iframe>`:`<video src="${c.url}" controls playsinline></video>`;
else scr=`<svg viewBox="0 0 320 180"><rect width="320" height="180" fill="#2d2373"/><g fill="#fff"><circle class="tw" cx="30" cy="30" r="3"/><circle class="tw" cx="280" cy="40" r="4"/><circle class="tw" cx="90" cy="20" r="2"/><circle class="tw" cx="220" cy="25" r="3"/><circle class="tw" cx="60" cy="100" r="2"/></g><path d="M250 20a22 22 0 1 0 0 34a17 17 0 1 1 0-34z" fill="#ffd86b"/><g class="bob"><text x="160" y="115" font-size="64" text-anchor="middle">📺</text></g><text x="160" y="160" font-size="16" text-anchor="middle" fill="#fff">${c.n[L]}</text></svg>`;
return `<h2>${t('tv')}</h2><div class="tv"><div class="scr">${scr}</div></div><h2>${t('chan')}</h2><div class="chips">${CHANNELS.map((x,i)=>`<button class="chip ${i===ch?'on':''}" data-ch="${i}">${x.n[L]}</button>`).join('')}</div>${c.url?'':`<p>${t('demo')}</p>`}`}
function about(){return `<h2>Riamo Qisas</h2><div class="box">${t('aboutText')}</div><h2>${t('social')}</h2><div class="soc">${LINKS.map(l=>`<a href="${l[1]}" target="_blank" rel="noopener noreferrer">${l[0]}</a>`).join('')}</div><h2>${t('priv')}</h2><div class="box">${t('privText').map(p=>`<p>${p}</p>`).join('')}</div>`}
function render(){document.documentElement.lang=L;document.documentElement.dir=L==='ar'?'rtl':'ltr';$('#lang').value=L;
$('#app').innerHTML={home,explore,tv,about}[tab]();
$('#nav').innerHTML=[['home','🏠'],['explore','🔍'],['tv','📺'],['about','ℹ️']].map(x=>`<button data-tab="${x[0]}" class="${tab===x[0]?'on':''}"><i>${x[1]}</i>${t(x[0])}</button>`).join('');
const qi=$('#q');if(qi)qi.oninput=e=>{q=e.target.value;const p=e.target.selectionStart;render();const n=$('#q');n.focus();n.setSelectionRange(p,p)}}
function toast(m){const e=$('#toast');e.textContent=m;e.style.display='block';setTimeout(()=>e.style.display='none',3500)}
// ---- Player
const cur=()=>STORIES[P.i];
function openP(id){P.i=STORIES.findIndex(s=>s.id===id);loadS();$('#pl').classList.add('on')}
function loadS(){stopP();const s=cur();P.s=txt(s).split(/(?<=[.!?؟»])\s+/);P.k=0;P.au=s.audioUrl?new Audio(s.audioUrl):null;
if(P.au){P.au.ontimeupdate=ui;P.au.onended=endP}
$('#pl').innerHTML=`<div class="top"><button data-x="close">⌄</button><span>Riamo Qisas</span><span></span></div><div class="art">${art(s,1)}</div><h1>${s.n[L]}</h1><p class="nar">${s.narr}</p><input type="range" id="bar" min="0" max="1000" value="0"><div class="tm"><span id="t1">0:00</span><span id="t2"></span></div><div class="ctl"><button data-x="prev">⏮</button><button class="sk" data-x="b30">↺30</button><button class="pp" data-x="pp" id="pp">▶</button><button class="sk" data-x="f30">30↻</button><button data-x="next">⏭</button></div><div class="ex"><button data-x="spd" id="spd">${t('speed')} 1x</button><button data-x="slp" id="slp">😴 ${t('off')}</button></div><div class="story" id="story">${P.s.map((x,i)=>`<span data-k="${i}">${x} </span>`).join('')}</div>`;
$('#bar').oninput=e=>seek(e.target.value/1000);ui()}
const tot=()=>P.au&&P.au.duration?P.au.duration:P.s.join('').length/(CPS*P.rate);
const pos=()=>P.au?P.au.currentTime:P.s.slice(0,P.k).join('').length/(CPS*P.rate);
const fmt=x=>{x=Math.max(0,Math.round(x));return Math.floor(x/60)+':'+String(x%60).padStart(2,'0')};
function ui(){if(!$('#bar'))return;const T=tot(),c=pos();$('#bar').value=T?c/T*1000:0;$('#t1').textContent=fmt(c);$('#t2').textContent='-'+fmt(T-c);$('#pp').textContent=P.on?'⏸':'▶';
document.querySelectorAll('#story span').forEach((e,i)=>e.classList.toggle('cur',i===P.k&&P.on&&!P.au))}
function say(){speechSynthesis.cancel();if(P.k>=P.s.length)return endP();const tk=++P.tok,u=new SpeechSynthesisUtterance(P.s[P.k]);u.lang=LANGS[L];u.rate=P.rate;
const v=speechSynthesis.getVoices().find(v=>v.lang.replace('_','-').toLowerCase().startsWith(L));if(v)u.voice=v;else if(P.k===0||!P.warned){toast(t('novoice'));P.warned=1}
u.onend=()=>{if(P.on&&tk===P.tok){P.k++;ui();say()}};u.onerror=()=>{};speechSynthesis.speak(u);ui()}
function playP(){P.on=true;P.au?P.au.play():say();ui()}
function pauseP(){P.on=false;P.tok++;P.au?P.au.pause():speechSynthesis.cancel();ui()}
function stopP(){P.on=false;P.tok++;if(P.au){P.au.pause();P.au=null}if(window.speechSynthesis)speechSynthesis.cancel();clearTimeout(P.tm)}
function endP(){P.on=false;P.k=0;if(P.au)P.au.currentTime=0;ui();toast(t('ended'))}
function seek(f){if(P.au){P.au.currentTime=f*(P.au.duration||0)}else{let c=f*P.s.join('').length,k=0;while(k<P.s.length-1&&c>P.s[k].length){c-=P.s[k].length;k++}P.k=k;if(P.on)say()}ui()}
function skip(sec){if(P.au){P.au.currentTime+=sec;return}let c=Math.abs(sec)*CPS*P.rate,k=P.k;if(sec>0){while(c>0&&k<P.s.length-1){c-=P.s[k].length;k++}}else{while(c>0&&k>0){k--;c-=P.s[k].length}}P.k=k;if(P.on)say();ui()}
function go(d){const w=P.on;P.i=(P.i+d+STORIES.length)%STORIES.length;loadS();if(w)playP()}
document.addEventListener('click',e=>{const x=e.target.closest('[data-x]');
if(x){const a=x.dataset.x;if(a==='close'){stopP();$('#pl').classList.remove('on')}
else if(a==='pp')P.on?pauseP():playP();else if(a==='b30')skip(-30);else if(a==='f30')skip(30);else if(a==='prev')go(-1);else if(a==='next')go(1);
else if(a==='spd'){const r=[0.75,1,1.25,1.5];P.rate=r[(r.indexOf(P.rate)+1)%4];if(P.au)P.au.playbackRate=P.rate;$('#spd').textContent=t('speed')+' '+P.rate+'x';if(P.on&&!P.au)say()}
else if(a==='slp'){const o=[0,10,20,30];P.sl=o[(o.indexOf(P.sl)+1)%4];clearTimeout(P.tm);if(P.sl)P.tm=setTimeout(()=>{pauseP();$('#slp').textContent='😴 '+t('off');P.sl=0},P.sl*60000);$('#slp').textContent='😴 '+(P.sl?P.sl+' '+t('min'):t('off'))}return}
if(e.target.closest('#pl'))return;
const d=e.target.closest('[data-id]');if(d)return openP(d.dataset.id);
const m=[['data-tab',v=>{tab=v;cat=null}],['data-age',v=>age=v],['data-sub',v=>sub=v],['data-ch',v=>ch=+v]];
for(const[k,f]of m){const el=e.target.closest('['+k+']');if(el){f(el.getAttribute(k));return render()}}
const c=e.target.closest('[data-cat]');if(c){const v=c.dataset.cat;cat=v;tab='explore';return render()}
if(e.target.closest('[data-back]')){cat=null;render()}});
$('#lang').onchange=e=>{L=e.target.value;localStorage.setItem('rq_lang',L);render();if($('#pl').classList.contains('on')){const w=P.on;loadS();if(w)playP()}};
if(window.speechSynthesis)speechSynthesis.getVoices();
render();
