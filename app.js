const VERBS = [
 {inf:"abrir",ru:"открывать",type:"regular",pres:["abro","abres","abre","abrimos","abrís","abren"],pret:["abrí","abriste","abrió","abrimos","abristeis","abrieron"],fut:["abriré","abrirás","abrirá","abriremos","abriréis","abrirán"]},
 {inf:"beber",ru:"пить",type:"regular",pres:["bebo","bebes","bebe","bebemos","bebéis","beben"],pret:["bebí","bebiste","bebió","bebimos","bebisteis","bebieron"],fut:["beberé","beberás","beberá","beberemos","beberéis","beberán"]},
 {inf:"comer",ru:"есть",type:"regular",pres:["como","comes","come","comemos","coméis","comen"],pret:["comí","comiste","comió","comimos","comisteis","comieron"],fut:["comeré","comerás","comerá","comeremos","comeréis","comerán"]},
 {inf:"hablar",ru:"говорить",type:"regular",pres:["hablo","hablas","habla","hablamos","habláis","hablan"],pret:["hablé","hablaste","habló","hablamos","hablasteis","hablaron"],fut:["hablaré","hablarás","hablará","hablaremos","hablaréis","hablarán"]},
 {inf:"trabajar",ru:"работать",type:"regular",pres:["trabajo","trabajas","trabaja","trabajamos","trabajáis","trabajan"],pret:["trabajé","trabajaste","trabajó","trabajamos","trabajasteis","trabajaron"],fut:["trabajaré","trabajarás","trabajará","trabajaremos","trabajaréis","trabajarán"]},
 {inf:"vivir",ru:"жить",type:"regular",pres:["vivo","vives","vive","vivimos","vivís","viven"],pret:["viví","viviste","vivió","vivimos","vivisteis","vivieron"],fut:["viviré","vivirás","vivirá","viviremos","viviréis","vivirán"]},
 {inf:"dar",ru:"давать",type:"irregular",pres:["doy","das","da","damos","dais","dan"],pret:["di","diste","dio","dimos","disteis","dieron"],fut:["daré","darás","dará","daremos","daréis","darán"]},
 {inf:"decir",ru:"говорить, сказать",type:"irregular",pres:["digo","dices","dice","decimos","decís","dicen"],pret:["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],fut:["diré","dirás","dirá","diremos","diréis","dirán"]},
 {inf:"estar",ru:"быть, находиться",type:"irregular",pres:["estoy","estás","está","estamos","estáis","están"],pret:["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"],fut:["estaré","estarás","estará","estaremos","estaréis","estarán"]},
 {inf:"hacer",ru:"делать",type:"irregular",pres:["hago","haces","hace","hacemos","hacéis","hacen"],pret:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],fut:["haré","harás","hará","haremos","haréis","harán"]},
 {inf:"haber",ru:"иметь, происходить; вспомогательный глагол",type:"irregular",pres:["he","has","ha","hemos","habéis","han"],pret:["hube","hubiste","hubo","hubimos","hubisteis","hubieron"],fut:["habré","habrás","habrá","habremos","habréis","habrán"]},
 {inf:"ir",ru:"идти, ехать",type:"irregular",pres:["voy","vas","va","vamos","vais","van"],pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"],fut:["iré","irás","irá","iremos","iréis","irán"]},
 {inf:"ser",ru:"быть",type:"irregular",pres:["soy","eres","es","somos","sois","son"],pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"],fut:["seré","serás","será","seremos","seréis","serán"]},
 {inf:"saber",ru:"знать, уметь",type:"irregular",pres:["sé","sabes","sabe","sabemos","sabéis","saben"],pret:["supe","supiste","supo","supimos","supisteis","supieron"],fut:["sabré","sabrás","sabrá","sabremos","sabréis","sabrán"]},
 {inf:"venir",ru:"приходить, приезжать",type:"irregular",pres:["vengo","vienes","viene","venimos","venís","vienen"],pret:["vine","viniste","vino","vinimos","vinisteis","vinieron"],fut:["vendré","vendrás","vendrá","vendremos","vendréis","vendrán"]},
 {inf:"querer",ru:"хотеть, любить",type:"irregular",pres:["quiero","quieres","quiere","queremos","queréis","quieren"],pret:["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],fut:["querré","querrás","querrá","querremos","querréis","querrán"]},
 {inf:"poder",ru:"мочь",type:"irregular",pres:["puedo","puedes","puede","podemos","podéis","pueden"],pret:["pude","pudiste","pudo","pudimos","pudisteis","pudieron"],fut:["podré","podrás","podrá","podremos","podréis","podrán"]},
 {inf:"poner",ru:"класть, ставить",type:"irregular",pres:["pongo","pones","pone","ponemos","ponéis","ponen"],pret:["puse","pusiste","puso","pusimos","pusisteis","pusieron"],fut:["pondré","pondrás","pondrá","pondremos","pondréis","pondrán"]},
 {inf:"traer",ru:"приносить, привозить",type:"irregular",pres:["traigo","traes","trae","traemos","traéis","traen"],pret:["traje","trajiste","trajo","trajimos","trajisteis","trajeron"],fut:["traeré","traerás","traerá","traeremos","traeréis","traerán"]},
 {inf:"conducir",ru:"водить",type:"irregular",pres:["conduzco","conduces","conduce","conducimos","conducís","conducen"],pret:["conduje","condujiste","condujo","condujimos","condujisteis","condujeron"],fut:["conduciré","conducirás","conducirá","conduciremos","conduciréis","conducirán"]},
 {inf:"sentir",ru:"чувствовать",type:"irregular",pres:["siento","sientes","siente","sentimos","sentís","sienten"],pret:["sentí","sentiste","sintió","sentimos","sentisteis","sintieron"],fut:["sentiré","sentirás","sentirá","sentiremos","sentiréis","sentirán"]},
 {inf:"dormir",ru:"спать",type:"irregular",pres:["duermo","duermes","duerme","dormimos","dormís","duermen"],pret:["dormí","dormiste","durmió","dormimos","dormisteis","durmieron"],fut:["dormiré","dormirás","dormirá","dormiremos","dormiréis","dormirán"]},
 {inf:"recoger",ru:"забирать, собирать",type:"regular",pres:["recojo","recoges","recoge","recogemos","recogéis","recogen"],pret:["recogí","recogiste","recogió","recogimos","recogisteis","recogieron"],fut:["recogeré","recogerás","recogerá","recogeremos","recogeréis","recogerán"]}
];

const PEOPLE = ["yo","tú","él / ella / usted","nosotros","vosotros","ellos / ustedes"];
const TIMES = {pres:"Presente", pret:"Pretérito Indefinido", fut:"Futuro"};
const state = {
 settings: JSON.parse(localStorage.getItem("sv_settings") || '{"regular":true,"irregular":true,"pres":true,"pret":true,"fut":true,"ru":true}'),
 screen:"learn", learn:null, review:null, dictQuery:"", dictLetter:"", dictDetail:null
};
const $ = id => document.getElementById(id);
const enabledVerbs = () => VERBS.filter(v => state.settings[v.type]);
const enabledTimes = () => Object.keys(TIMES).filter(t => state.settings[t]);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function save(){localStorage.setItem("sv_settings",JSON.stringify(state.settings));}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function sample(a,n){return [...a].sort(()=>Math.random()-.5).slice(0,n)}
function translation(v){return state.settings.ru ? `<div class="translation">${esc(v.ru)}</div>` : `<div class="translation">&nbsp;</div>`}
function form(v,t,p){return v[t][p]}

function newLearn(){
 const vs=enabledVerbs(), ts=enabledTimes();
 if(!vs.length||!ts.length) return null;
 const v=pick(vs), t=pick(ts), p=Math.floor(Math.random()*6);
 const kind=Math.random()<.5 ? "identify" : "choose";
 const correct = kind==="identify" ? `${TIMES[t]} · ${PEOPLE[p]}` : form(v,t,p);
 let options = kind==="identify"
   ? sample(ts.flatMap(tt => PEOPLE.map(pp => `${TIMES[tt]} · ${PEOPLE[pp]}`)).filter(x=>x!==correct),3)
   : sample(vs.flatMap(vv => enabledTimes().flatMap(tt=>vv[tt].map((f,i)=>({f,v:vv,t:tt,p:i})))).filter(x=>x.f!==correct && x.v.inf===v.inf ? true : x.f!==correct),3).map(x=>x.f);
 options.push(correct); options=sample(options,4);
 return {v,t,p,kind,correct,options,answered:false,chosen:null};
}
function renderLearn(){
 const el=$("learn");
 if(!state.learn) state.learn=newLearn();
 const q=state.learn;
 if(!q){el.innerHTML='<div class="card empty">В настройках включи хотя бы один тип глагола и одно время.</div>';return;}
 const main = q.kind==="identify" ? form(q.v,q.t,q.p) : q.v.inf;
 const prompt = q.kind==="identify" ? "Что это за время и спряжение?" : `Как будет «${q.v.inf}»?`;
 el.innerHTML=`<div class="card">
   <div class="meta">${q.kind==="identify" ? "Определи форму" : "Выбери правильную форму"}</div>
   <div class="word">${esc(main)}</div>
   ${translation(q.v)}
   <div class="instruction">${esc(prompt)}</div>
   <div class="options">${q.options.map((o,i)=>`<button class="option ${q.answered?(o===q.correct?"correct":(o===q.chosen?"wrong":"")):""}" data-opt="${i}">${esc(o)}</button>`).join("")}</div>
   ${q.answered?`<div class="answer ${q.chosen===q.correct?"good":"bad"}"><strong>${q.chosen===q.correct?"Правильно!":"Надо ещё подучить"}</strong>${q.chosen===q.correct?"":`Правильный ответ: <b>${esc(q.correct)}</b>`}${state.settings.ru?`<br>${esc(q.v.ru)}`:""}</div><button class="next" id="learnNext">Далее</button>`:""}
 </div>`;
 el.querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>{if(!q.answered){q.answered=true;q.chosen=q.options[+b.dataset.opt];renderLearn()}});
 const next=$("learnNext"); if(next) next.onclick=()=>{state.learn=newLearn();renderLearn()};
}

function newReview(){
 const vs=enabledVerbs(), ts=enabledTimes();
 if(!vs.length||!ts.length)return null;
 const v=pick(vs),t=pick(ts),p=Math.floor(Math.random()*6);
 return {v,t,p,answered:false,value:""};
}
function renderReview(){
 const el=$("review");
 if(!state.review) state.review=newReview();
 const q=state.review;
 if(!q){el.innerHTML='<div class="card empty">В настройках включи хотя бы один тип глагола и одно время.</div>';return;}
 const target=form(q.v,q.t,q.p);
 el.innerHTML=`<div class="card">
   <div class="meta">${esc(TIMES[q.t])} · ${esc(PEOPLE[q.p])}</div>
   <div class="word">${esc(q.v.inf)}</div>
   ${translation(q.v)}
   <div class="instruction">Напиши правильную форму</div>
   <input id="answerInput" class="input" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Твоя форма" ${q.answered?"disabled":""} value="${esc(q.value)}">
   ${!q.answered?'<button class="next" id="checkBtn">Проверить</button>':''}
   ${q.answered?`<div class="answer ${q.value.trim().toLowerCase()===target?"good":"bad"}"><strong>${q.value.trim().toLowerCase()===target?"Правильно!":"Надо ещё подучить"}</strong>${q.value.trim().toLowerCase()===target?"":`Правильный ответ: <b>${esc(target)}</b>`}${state.settings.ru?`<br>${esc(q.v.ru)}`:""}</div><button class="next" id="reviewNext">Далее</button>`:""}
 </div>`;
 const input=$("answerInput");
 if(input&&!q.answered){input.focus();input.oninput=()=>q.value=input.value;input.onkeydown=e=>{if(e.key==="Enter")$("checkBtn").click()};$("checkBtn").onclick=()=>{q.value=input.value;q.answered=true;renderReview()}}
 const next=$("reviewNext");if(next)next.onclick=()=>{state.review=newReview();renderReview()};
}

function renderDictionary(){
 const el=$("dictionary");
 if(state.dictDetail){
   const v=state.dictDetail;
   el.innerHTML=`<button class="detail-back" id="backDict">← Назад к словарю</button><div class="card">
    <div class="word">${esc(v.inf)}</div>${translation(v)}
    <h3>Presente</h3>${table(v,"pres")}<h3>Pretérito Indefinido</h3>${table(v,"pret")}<h3>Futuro</h3>${table(v,"fut")}
   </div>`;
   $("backDict").onclick=()=>{state.dictDetail=null;renderDictionary()};return;
 }
 const letters=["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","V"];
 const q=state.dictQuery.toLowerCase();
 let list=enabledVerbs().filter(v=>(!q||v.inf.includes(q)||v.ru.toLowerCase().includes(q))&&(!state.dictLetter||v.inf[0].toUpperCase()===state.dictLetter));
 el.innerHTML=`<div class="card">
  <input class="input search" id="dictSearch" placeholder="Поиск глагола или перевода" value="${esc(state.dictQuery)}">
  <div class="alpha"><button data-letter="">Все</button>${letters.map(l=>`<button data-letter="${l}" class="${state.dictLetter===l?"active":""}">${l}</button>`).join("")}</div>
  <div class="verb-list">${list.length?list.map(v=>`<button class="verb-row" data-verb="${esc(v.inf)}"><b>${esc(v.inf)}</b><span>${state.settings.ru?esc(v.ru):""}</span></button>`).join(""):'<div class="empty">Ничего не найдено</div>'}</div>
 </div>`;
 $("dictSearch").oninput=e=>{state.dictQuery=e.target.value;renderDictionary();const x=$("dictSearch");x.focus();x.setSelectionRange(x.value.length,x.value.length)};
 el.querySelectorAll("[data-letter]").forEach(b=>b.onclick=()=>{state.dictLetter=b.dataset.letter;renderDictionary()});
 el.querySelectorAll("[data-verb]").forEach(b=>b.onclick=()=>{state.dictDetail=VERBS.find(v=>v.inf===b.dataset.verb);renderDictionary()});
}
function table(v,t){return `<table class="conj-table"><tbody>${v[t].map((f,i)=>`<tr><td>${PEOPLE[i]}</td><td><b>${f}</b></td></tr>`).join("")}</tbody></table>`}

function render(){
 document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===state.screen));
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.screen===state.screen));
 if(state.screen==="learn")renderLearn();
 if(state.screen==="review")renderReview();
 if(state.screen==="dictionary")renderDictionary();
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{state.screen=b.dataset.screen;render()});
$("settingsBtn").onclick=()=>{$("settingsModal").classList.remove("hidden");renderSettings()};
$("closeSettings").onclick=()=>{$("settingsModal").classList.add("hidden");render()};
function renderSettings(){
 const items=[
  ["regular","Регулярные глаголы","-ar, -er, -ir"],
  ["irregular","Нерегулярные глаголы","Неправильные формы"],
  ["pres","Presente","Настоящее время"],
  ["pret","Pretérito Indefinido","Прошедшее время"],
  ["fut","Futuro","Будущее время"],
  ["ru","Перевод на русский","Показывать перевод в заданиях"]
 ];
 $("settingsContent").innerHTML=items.map(([k,a,b])=>`<div class="setting"><div class="setting-text"><b>${a}</b><small>${b}</small></div><label class="switch"><input type="checkbox" data-setting="${k}" ${state.settings[k]?"checked":""}><span class="slider"></span></label></div>`).join("");
 $("settingsContent").querySelectorAll("[data-setting]").forEach(x=>x.onchange=()=>{state.settings[x.dataset.setting]=x.checked;save();state.learn=null;state.review=null;renderSettings();render()});
}
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
render();
