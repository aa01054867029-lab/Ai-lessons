// ComplyFlow — Final Screens Builder v3
// Fix: set layoutSizing AFTER appendChild

const C = {
  bg:{r:.094,g:.094,b:.102}, sf:{r:.122,g:.122,b:.133},
  raised:{r:.149,g:.149,b:.165}, pri:{r:.286,g:.459,b:1},
  txt:{r:.941,g:.941,b:.957}, mut:{r:.557,g:.557,b:.592},
  brd:{r:.235,g:.235,b:.259}, ok:{r:.133,g:.773,b:.482},
  warn:{r:1,g:.737,b:.133}, err:{r:1,g:.322,b:.322},
  wh:{r:1,g:1,b:1}
};
function s(c,a){return[{type:"SOLID",color:c,opacity:a||1}]}
function al(n,d,g,px,py){
  n.layoutMode=d;n.itemSpacing=g;
  n.paddingLeft=n.paddingRight=px;n.paddingTop=n.paddingBottom=py;
  n.primaryAxisSizingMode="AUTO";n.counterAxisSizingMode="AUTO";
}
function txt(str,sz,bold,col){
  const t=figma.createText();
  t.fontName={family:"Inter",style:bold?"Semi Bold":"Regular"};
  t.characters=str;t.fontSize=sz;t.fills=s(col||C.txt);return t;
}
function rect(w,h,col,r){
  const rc=figma.createRectangle();rc.resize(w,h);rc.fills=s(col);rc.cornerRadius=r||8;return rc;
}
function shd(){
  return[{type:"DROP_SHADOW",color:{r:0,g:0,b:0,a:.1},offset:{x:0,y:1},radius:3,spread:0,visible:true,blendMode:"NORMAL"}];
}

// SIDEBAR — returns frame, caller sets sizing after append
function sidebar(items){
  const sb=figma.createFrame();sb.name="Sidebar";sb.resize(240,900);
  sb.fills=s(C.sf);al(sb,"VERTICAL",4,16,24);
  const lg=figma.createFrame();lg.name="Logo";lg.resize(208,40);lg.fills=[];
  al(lg,"HORIZONTAL",8,0,8);
  lg.appendChild(rect(8,8,C.pri,4));lg.appendChild(txt("ComplyFlow",16,true));
  sb.appendChild(lg);lg.layoutSizingHorizontal="FILL";
  const div=rect(208,1,C.brd,0);
  sb.appendChild(div);div.layoutSizingHorizontal="FILL";
  items.forEach(({l,a})=>{
    const it=figma.createFrame();it.name="Nav/"+l;it.resize(208,40);
    it.fills=a?s(C.pri,.15):[];it.cornerRadius=8;
    al(it,"HORIZONTAL",10,12,10);
    it.appendChild(txt(l,14,a,a?C.pri:C.mut));
    sb.appendChild(it);it.layoutSizingHorizontal="FILL";
  });
  return sb;
}

function topbar(title){
  const tb=figma.createFrame();tb.name="TopBar";tb.resize(1200,64);
  tb.fills=s(C.sf);
  tb.strokes=[{type:"SOLID",color:C.brd}];
  tb.strokeWeight=1;tb.strokeAlign="INSIDE";
  al(tb,"HORIZONTAL",16,24,0);
  tb.counterAxisSizingMode="FIXED";tb.resize(1200,64);
  tb.counterAxisAlignItems="CENTER";
  tb.appendChild(txt(title,18,true));
  const sp=figma.createFrame();sp.name="Spacer";sp.resize(1,1);sp.fills=[];
  tb.appendChild(sp);sp.layoutGrow=1;
  tb.appendChild(rect(32,32,C.pri,16));
  return tb;
}

function kpi(label,value,trend,up){
  const c=figma.createFrame();c.name="KPI/"+label;c.resize(260,120);
  c.fills=s(C.raised);c.cornerRadius=12;c.effects=shd();
  al(c,"VERTICAL",8,20,16);
  c.appendChild(txt(label,12,false,C.mut));
  c.appendChild(txt(value,28,true));
  c.appendChild(txt(trend,12,false,up?C.ok:C.err));
  return c;
}

function tblRow(cols,hdr){
  const r=figma.createFrame();r.name=hdr?"TH":"TR";r.resize(900,44);
  r.fills=hdr?s(C.sf):[];
  if(!hdr){r.strokes=[{type:"SOLID",color:C.brd}];r.strokeWeight=1;r.strokeAlign="INSIDE";}
  al(r,"HORIZONTAL",0,0,0);
  r.counterAxisSizingMode="FIXED";r.resize(900,44);
  r.counterAxisAlignItems="CENTER";
  cols.forEach(({t,w})=>{
    const cell=figma.createFrame();cell.name="Cell";cell.resize(w,44);cell.fills=[];
    al(cell,"HORIZONTAL",0,12,0);
    cell.counterAxisSizingMode="FIXED";cell.resize(w,44);
    cell.counterAxisAlignItems="CENTER";
    const isBadge=t==="Активный"||t==="На проверке"||t==="Завершён";
    if(isBadge){
      const badge=figma.createFrame();badge.name="Badge";badge.cornerRadius=4;
      const bc=t==="Активный"?C.ok:t==="На проверке"?C.warn:C.mut;
      badge.fills=s(bc,.15);al(badge,"HORIZONTAL",0,8,3);
      badge.appendChild(txt(t,11,true,bc));cell.appendChild(badge);
    } else {
      cell.appendChild(txt(t,13,hdr,hdr?C.mut:C.txt));
    }
    r.appendChild(cell);cell.layoutSizingHorizontal="FIXED";
  });
  return r;
}

function tbl(headers,rows){
  const t=figma.createFrame();t.name="Table";t.fills=s(C.raised);
  t.cornerRadius=12;al(t,"VERTICAL",0,0,0);t.clipsContent=true;t.effects=shd();
  const hdr=tblRow(headers,true);
  t.appendChild(hdr);hdr.layoutSizingHorizontal="FILL";
  rows.forEach(row=>{
    const r=tblRow(row.map((t,i)=>({t,w:headers[i].w})),false);
    t.appendChild(r);r.layoutSizingHorizontal="FILL";
  });
  return t;
}

function inputField(label,value){
  const g=figma.createFrame();g.name="Field/"+label;g.fills=[];
  al(g,"VERTICAL",6,0,0);
  g.appendChild(txt(label,12,false,C.mut));
  const inp=figma.createFrame();inp.name="Input";inp.resize(600,40);
  inp.fills=s(C.sf);inp.cornerRadius=8;
  inp.strokes=[{type:"SOLID",color:C.brd}];inp.strokeWeight=1;inp.strokeAlign="INSIDE";
  al(inp,"HORIZONTAL",0,12,10);
  inp.appendChild(txt(value,14,false));
  g.appendChild(inp);inp.layoutSizingHorizontal="FILL";
  return g;
}

function btn(label,primary){
  const b=figma.createFrame();b.name="Btn/"+label;b.resize(160,44);
  b.fills=primary?s(C.pri):s(C.raised);b.cornerRadius=8;
  al(b,"HORIZONTAL",0,24,10);
  b.primaryAxisAlignItems="CENTER";b.counterAxisAlignItems="CENTER";
  b.appendChild(txt(label,14,true,primary?C.wh:C.txt));
  return b;
}

function shell(name,activeIdx){
  const sc=figma.createFrame();sc.name="Screen/"+name;sc.resize(1440,900);
  sc.fills=s(C.bg);sc.layoutMode="HORIZONTAL";
  sc.primaryAxisSizingMode="FIXED";sc.counterAxisSizingMode="FIXED";
  sc.clipsContent=true;
  const navItems=[{l:"Дашборд"},{l:"Клиенты"},{l:"Документы"},{l:"Риски"},{l:"Настройки"}];
  navItems[activeIdx].a=true;
  const sb=sidebar(navItems);
  sc.appendChild(sb);
  sb.layoutSizingHorizontal="FIXED";sb.layoutSizingVertical="FILL";
  const main=figma.createFrame();main.name="Main";main.fills=[];
  al(main,"VERTICAL",0,0,0);
  const tb=topbar(name);
  main.appendChild(tb);tb.layoutSizingHorizontal="FILL";
  const body=figma.createFrame();body.name="Body";body.fills=[];
  al(body,"VERTICAL",24,32,32);
  main.appendChild(body);
  body.layoutSizingHorizontal="FILL";body.layoutSizingVertical="FILL";
  sc.appendChild(main);
  main.layoutSizingHorizontal="FILL";main.layoutSizingVertical="FILL";
  return{sc,body};
}

// ═══ DASHBOARD ═══
function scrDash(){
  const{sc,body}=shell("Дашборд",0);
  const kr=figma.createFrame();kr.name="KPI";kr.fills=[];
  al(kr,"HORIZONTAL",16,0,0);
  kr.appendChild(kpi("Активные клиенты","1 284","↑ 12%",true));
  kr.appendChild(kpi("На проверке","47","↓ 3 сегодня",false));
  kr.appendChild(kpi("Риск-оценок","238","↑ 5%",true));
  kr.appendChild(kpi("Завершённые KYC","1 041","↑ 8%",true));
  body.appendChild(kr);kr.layoutSizingHorizontal="FILL";
  body.appendChild(txt("Последние клиенты",16,true));
  const h=[{t:"Клиент",w:220},{t:"ИНН",w:140},{t:"Статус",w:130},{t:"Риск",w:120},{t:"Дата",w:140}];
  const d=[
    ["ООО «Альфа Финанс»","7701234567","Активный","Низкий","12.05.2026"],
    ["ИП Петров А.В.","772345678901","На проверке","Средний","11.05.2026"],
    ["АО «БетаТрейд»","7703456789","Завершён","Высокий","10.05.2026"],
    ["ООО «ГаммаЛогист»","7704567890","Активный","Низкий","09.05.2026"],
    ["ПАО «ДельтаГрупп»","7705678901","Активный","Низкий","08.05.2026"],
  ];
  const t=tbl(h,d);body.appendChild(t);t.layoutSizingHorizontal="FILL";
  return sc;
}

// ═══ CLIENTS ═══
function scrClients(){
  const{sc,body}=shell("Клиенты",1);
  const fl=figma.createFrame();fl.name="Filters";fl.fills=[];
  al(fl,"HORIZONTAL",12,0,0);
  const sb=figma.createFrame();sb.name="Search";sb.resize(320,40);
  sb.fills=s(C.raised);sb.cornerRadius=8;
  sb.strokes=[{type:"SOLID",color:C.brd}];sb.strokeWeight=1;sb.strokeAlign="INSIDE";
  al(sb,"HORIZONTAL",8,12,10);sb.appendChild(txt("Поиск клиента...",14,false,C.mut));
  fl.appendChild(sb);
  ["Все статусы","Все риски"].forEach(label=>{
    const dd=figma.createFrame();dd.name="DD/"+label;dd.resize(150,40);
    dd.fills=s(C.raised);dd.cornerRadius=8;
    dd.strokes=[{type:"SOLID",color:C.brd}];dd.strokeWeight=1;dd.strokeAlign="INSIDE";
    al(dd,"HORIZONTAL",0,12,10);dd.appendChild(txt(label,14,false,C.mut));fl.appendChild(dd);
  });
  const spacer=figma.createFrame();spacer.fills=[];spacer.resize(1,1);
  fl.appendChild(spacer);spacer.layoutGrow=1;
  fl.appendChild(btn("+ Добавить",true));
  body.appendChild(fl);fl.layoutSizingHorizontal="FILL";
  const h=[{t:"Наименование",w:200},{t:"ИНН",w:130},{t:"Статус KYC",w:120},{t:"Риск",w:110},{t:"Менеджер",w:130},{t:"Дата",w:100}];
  const d=[
    ["ООО «Альфа Финанс»","7701234567","Активный","Низкий","Иванов А.","12.05"],
    ["ИП Петров А.В.","772345678901","На проверке","Средний","Смирнова К.","11.05"],
    ["АО «БетаТрейд»","7703456789","Завершён","Высокий","Козлов Д.","10.05"],
    ["ООО «ГаммаЛогист»","7704567890","Активный","Низкий","Иванов А.","09.05"],
    ["ПАО «ДельтаГрупп»","7705678901","Активный","Низкий","Петрова М.","08.05"],
    ["ООО «ЭпсилонТех»","7706789012","На проверке","Средний","Смирнова К.","07.05"],
  ];
  const t=tbl(h,d);body.appendChild(t);t.layoutSizingHorizontal="FILL";
  const pg=figma.createFrame();pg.name="Pagination";pg.fills=[];
  al(pg,"HORIZONTAL",6,0,0);pg.primaryAxisAlignItems="MAX";
  ["←","1","2","3","→"].forEach(n=>{
    const b=figma.createFrame();b.name="Pg/"+n;b.resize(36,36);
    b.fills=n==="1"?s(C.pri):s(C.raised);b.cornerRadius=8;
    al(b,"HORIZONTAL",0,0,0);b.primaryAxisAlignItems="CENTER";b.counterAxisAlignItems="CENTER";
    b.appendChild(txt(n,13,n==="1",n==="1"?C.wh:C.mut));pg.appendChild(b);
  });
  body.appendChild(pg);pg.layoutSizingHorizontal="FILL";
  return sc;
}

// ═══ DOCUMENTS ═══
function scrDocs(){
  const{sc,body}=shell("Документы",2);
  const fl=figma.createFrame();fl.name="Filters";fl.fills=[];
  al(fl,"HORIZONTAL",12,0,0);
  const sb=figma.createFrame();sb.name="Search";sb.resize(320,40);
  sb.fills=s(C.raised);sb.cornerRadius=8;
  sb.strokes=[{type:"SOLID",color:C.brd}];sb.strokeWeight=1;sb.strokeAlign="INSIDE";
  al(sb,"HORIZONTAL",8,12,10);sb.appendChild(txt("Поиск документа...",14,false,C.mut));
  fl.appendChild(sb);
  ["Все типы","Все статусы"].forEach(label=>{
    const dd=figma.createFrame();dd.name="DD/"+label;dd.resize(150,40);
    dd.fills=s(C.raised);dd.cornerRadius=8;
    dd.strokes=[{type:"SOLID",color:C.brd}];dd.strokeWeight=1;dd.strokeAlign="INSIDE";
    al(dd,"HORIZONTAL",0,12,10);dd.appendChild(txt(label,14,false,C.mut));fl.appendChild(dd);
  });
  const spacer=figma.createFrame();spacer.fills=[];spacer.resize(1,1);
  fl.appendChild(spacer);spacer.layoutGrow=1;
  fl.appendChild(btn("Загрузить",true));
  body.appendChild(fl);fl.layoutSizingHorizontal="FILL";
  const h=[{t:"Документ",w:220},{t:"Клиент",w:180},{t:"Тип",w:120},{t:"Статус",w:120},{t:"Дата",w:120}];
  const d=[
    ["Паспорт РФ","ООО «Альфа Финанс»","KYC","Активный","12.05.2026"],
    ["Устав компании","ИП Петров А.В.","Учредительный","На проверке","11.05.2026"],
    ["Выписка ЕГРЮЛ","АО «БетаТрейд»","KYC","Завершён","10.05.2026"],
    ["Лицензия ЦБ","ООО «ГаммаЛогист»","Лицензия","Активный","09.05.2026"],
    ["Финансовый отчёт","ПАО «ДельтаГрупп»","Финансы","На проверке","08.05.2026"],
    ["Доверенность","ООО «ЭпсилонТех»","Юридический","Активный","07.05.2026"],
    ["Справка о доходах","ИП Сидоров","Финансы","Завершён","06.05.2026"],
  ];
  const t=tbl(h,d);body.appendChild(t);t.layoutSizingHorizontal="FILL";
  return sc;
}

// ═══ RISKS ═══
function scrRisks(){
  const{sc,body}=shell("Риски",3);
  const sr=figma.createFrame();sr.name="RiskSummary";sr.fills=[];
  al(sr,"HORIZONTAL",16,0,0);
  [{label:"Низкий риск",count:"847",color:C.ok},
   {label:"Средний риск",count:"312",color:C.warn},
   {label:"Высокий риск",count:"125",color:C.err}
  ].forEach(({label,count,color})=>{
    const card=figma.createFrame();card.name="Risk/"+label;card.resize(260,110);
    card.fills=s(C.raised);card.cornerRadius=12;card.effects=shd();
    al(card,"VERTICAL",8,20,16);
    const ind=figma.createFrame();ind.name="Indicator";
    ind.resize(260,4);ind.fills=s(color);ind.cornerRadius=2;
    al(ind,"HORIZONTAL",0,0,0);
    card.appendChild(ind);ind.layoutSizingHorizontal="FILL";
    card.appendChild(txt(label,12,false,C.mut));
    card.appendChild(txt(count,28,true,color));
    sr.appendChild(card);
  });
  body.appendChild(sr);sr.layoutSizingHorizontal="FILL";
  body.appendChild(txt("Последние риск-оценки",16,true));
  const h=[{t:"Клиент",w:200},{t:"Уровень",w:120},{t:"Категория",w:140},{t:"Оценка",w:100},{t:"Аналитик",w:130},{t:"Дата",w:100}];
  const d=[
    ["ООО «Альфа Финанс»","Активный","AML/CFT","72/100","Козлов Д.","12.05"],
    ["ИП Петров А.В.","На проверке","Санкции","45/100","Смирнова К.","11.05"],
    ["АО «БетаТрейд»","Завершён","PEP","28/100","Иванов А.","10.05"],
    ["ООО «ГаммаЛогист»","Активный","AML/CFT","81/100","Козлов Д.","09.05"],
    ["ПАО «ДельтаГрупп»","Активный","Транзакции","90/100","Петрова М.","08.05"],
    ["ООО «ЭпсилонТех»","На проверке","Санкции","55/100","Смирнова К.","07.05"],
  ];
  const t=tbl(h,d);body.appendChild(t);t.layoutSizingHorizontal="FILL";
  return sc;
}

// ═══ SETTINGS ═══
function scrSettings(){
  const{sc,body}=shell("Настройки",4);
  const card=figma.createFrame();card.name="SettingsCard";card.resize(700,500);
  card.fills=s(C.raised);card.cornerRadius=12;card.effects=shd();
  al(card,"VERTICAL",20,32,32);
  card.appendChild(txt("Профиль организации",18,true));
  [["Название","ООО «Альфа Финанс»"],["ИНН","7701234567"],["Email","admin@alpha.ru"]].forEach(
    ([l,v])=>{const f=inputField(l,v);card.appendChild(f);f.layoutSizingHorizontal="FILL";}
  );
  const cr=figma.createFrame();cr.name="Chk";cr.fills=[];
  al(cr,"HORIZONTAL",8,0,0);cr.counterAxisAlignItems="CENTER";
  cr.appendChild(rect(16,16,C.pri,4));
  cr.appendChild(txt("Получать уведомления по email",14,false));
  card.appendChild(cr);
  card.appendChild(btn("Сохранить",true));
  body.appendChild(card);
  return sc;
}

// ═══ MAIN ═══
async function run(){
  try{
    figma.notify("⏳ Загружаю...",{timeout:2000});
    await figma.loadFontAsync({family:"Inter",style:"Regular"});
    await figma.loadFontAsync({family:"Inter",style:"Semi Bold"});

    let pg=figma.root.children.find(p=>p.name.toLowerCase().includes("final"));
    if(!pg){pg=figma.createPage();pg.name="final screens";}
    figma.currentPage=pg;
    pg.children.forEach(c=>c.remove());

    figma.notify("⏳ Собираю 5 экранов...",{timeout:3000});
    const X=1540;
    const s1=scrDash();s1.x=0;pg.appendChild(s1);
    const s2=scrClients();s2.x=X;pg.appendChild(s2);
    const s3=scrDocs();s3.x=X*2;pg.appendChild(s3);
    const s4=scrRisks();s4.x=X*3;pg.appendChild(s4);
    const s5=scrSettings();s5.x=X*4;pg.appendChild(s5);
    figma.viewport.scrollAndZoomIntoView(pg.children);
    figma.notify("✅ 5 экранов готовы!",{timeout:8000});
  }catch(e){
    figma.notify("❌ "+e.message,{error:true,timeout:10000});
    console.error(e);
  }
  figma.closePlugin();
}
run();
