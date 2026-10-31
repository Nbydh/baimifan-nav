
(function(){
var themes={
'pure-white':{name:'简约白',type:'solid',light:{bg:'#f5f5f5',cardBg:'#ffffff',cardBgAlpha:'rgba(255,255,255,0.85)',text:'#333333',textSecondary:'#999999',accent:'#4a90d9',accentLight:'#eaf4ff',border:'#e8e8e8',borderAlpha:'rgba(0,0,0,0.08)',shadow:'0 2px 12px rgba(0,0,0,0.06)',shadowHover:'0 4px 20px rgba(0,0,0,0.12)',danger:'#e05555',dangerLight:'#fff0f0',overlay:'rgba(0,0,0,0.35)',metaColor:'#f5f5f5'},dark:{bg:'#1a1a2e',cardBg:'#252540',cardBgAlpha:'rgba(37,37,64,0.75)',text:'#e0e0e0',textSecondary:'#999',accent:'#6db3f8',accentLight:'#1e3148',border:'#333355',borderAlpha:'rgba(255,255,255,0.06)',shadow:'0 2px 12px rgba(0,0,0,0.3)',shadowHover:'0 4px 20px rgba(0,0,0,0.5)',danger:'#f06060',dangerLight:'#3a2025',overlay:'rgba(0,0,0,0.55)',metaColor:'#1a1a2e'},preview:'#f5f5f5'},
'pure-blue':{name:'天空蓝',type:'solid',light:{bg:'#e8f4fd',cardBg:'#ffffff',cardBgAlpha:'rgba(255,255,255,0.85)',text:'#2c3e50',textSecondary:'#7f8c8d',accent:'#3498db',accentLight:'#ebf5fb',border:'#d5e8f5',borderAlpha:'rgba(52,152,219,0.1)',shadow:'0 2px 12px rgba(52,152,219,0.08)',shadowHover:'0 4px 20px rgba(52,152,219,0.16)',danger:'#e74c3c',dangerLight:'#fdedec',overlay:'rgba(0,0,0,0.3)',metaColor:'#e8f4fd'},dark:{bg:'#1a2836',cardBg:'#243342',cardBgAlpha:'rgba(36,51,66,0.75)',text:'#e0e8f0',textSecondary:'#8899aa',accent:'#5dade2',accentLight:'#1c3448',border:'#2d4458',borderAlpha:'rgba(255,255,255,0.06)',shadow:'0 2px 12px rgba(0,0,0,0.35)',shadowHover:'0 4px 20px rgba(0,0,0,0.5)',danger:'#f07070',dangerLight:'#3a2228',overlay:'rgba(0,0,0,0.55)',metaColor:'#1a2836'},preview:'#3498db'},
'pure-green':{name:'薄荷绿',type:'solid',light:{bg:'#f0f7f4',cardBg:'#ffffff',cardBgAlpha:'rgba(255,255,255,0.85)',text:'#2d3e34',textSecondary:'#7d8d82',accent:'#27ae60',accentLight:'#eafaf1',border:'#d5e8dc',borderAlpha:'rgba(39,174,96,0.1)',shadow:'0 2px 12px rgba(39,174,96,0.06)',shadowHover:'0 4px 20px rgba(39,174,96,0.14)',danger:'#e74c3c',dangerLight:'#fdedec',overlay:'rgba(0,0,0,0.3)',metaColor:'#f0f7f4'},dark:{bg:'#1a2a22',cardBg:'#243428',cardBgAlpha:'rgba(36,52,40,0.75)',text:'#d8e8dc',textSecondary:'#889988',accent:'#2ecc71',accentLight:'#1a3828',border:'#2d4434',borderAlpha:'rgba(255,255,255,0.06)',shadow:'0 2px 12px rgba(0,0,0,0.35)',shadowHover:'0 4px 20px rgba(0,0,0,0.5)',danger:'#f07070',dangerLight:'#3a2428',overlay:'rgba(0,0,0,0.55)',metaColor:'#1a2a22'},preview:'#27ae60'},
'gradient-sunset':{name:'日落暖橙',type:'gradient',light:{bg:'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)',cardBg:'rgba(255,255,255,0.55)',cardBgAlpha:'rgba(255,255,255,0.4)',text:'#4a3035',textSecondary:'#8d7075',accent:'#e07b5a',accentLight:'rgba(224,123,90,0.15)',border:'rgba(255,255,255,0.4)',borderAlpha:'rgba(255,255,255,0.3)',shadow:'0 2px 16px rgba(180,100,80,0.15)',shadowHover:'0 4px 24px rgba(180,100,80,0.25)',danger:'#c0392b',dangerLight:'rgba(192,57,43,0.12)',overlay:'rgba(80,40,30,0.3)',metaColor:'#fcb69f'},dark:{bg:'linear-gradient(135deg, #2d1b1a 0%, #4a2025 40%, #3d1f2a 100%)',cardBg:'rgba(40,25,28,0.65)',cardBgAlpha:'rgba(40,25,28,0.5)',text:'#e8d5d8',textSecondary:'#b8959a',accent:'#f08a6e',accentLight:'rgba(240,138,110,0.2)',border:'rgba(255,255,255,0.1)',borderAlpha:'rgba(255,255,255,0.06)',shadow:'0 2px 16px rgba(0,0,0,0.35)',shadowHover:'0 4px 24px rgba(0,0,0,0.5)',danger:'#f07070',dangerLight:'rgba(240,112,112,0.15)',overlay:'rgba(0,0,0,0.5)',metaColor:'#4a2025'},preview:'linear-gradient(135deg, #ffecd2, #fcb69f, #ff9a9e)'},
'gradient-ocean':{name:'深海蓝紫',type:'gradient',light:{bg:'linear-gradient(135deg, #e0e7ff 0%, #a8c0ff 40%, #c4b5fd 100%)',cardBg:'rgba(255,255,255,0.55)',cardBgAlpha:'rgba(255,255,255,0.4)',text:'#2d3050',textSecondary:'#6d7090',accent:'#6c63ff',accentLight:'rgba(108,99,255,0.12)',border:'rgba(255,255,255,0.4)',borderAlpha:'rgba(255,255,255,0.3)',shadow:'0 2px 16px rgba(100,90,180,0.12)',shadowHover:'0 4px 24px rgba(100,90,180,0.22)',danger:'#e0557a',dangerLight:'rgba(224,85,122,0.12)',overlay:'rgba(30,25,60,0.25)',metaColor:'#a8c0ff'},dark:{bg:'linear-gradient(135deg, #1a1b3a 0%, #1e2450 40%, #251a40 100%)',cardBg:'rgba(25,28,50,0.65)',cardBgAlpha:'rgba(25,28,50,0.5)',text:'#d8daf0',textSecondary:'#9898c0',accent:'#8b85ff',accentLight:'rgba(139,133,255,0.2)',border:'rgba(255,255,255,0.1)',borderAlpha:'rgba(255,255,255,0.06)',shadow:'0 2px 16px rgba(0,0,0,0.4)',shadowHover:'0 4px 24px rgba(0,0,0,0.55)',danger:'#f07890',dangerLight:'rgba(240,120,144,0.15)',overlay:'rgba(0,0,0,0.5)',metaColor:'#1e2450'},preview:'linear-gradient(135deg, #e0e7ff, #a8c0ff, #c4b5fd)'}
};
var tKeys=Object.keys(themes);
var curTheme=localStorage.getItem('via_theme')||'gradient-sunset';
var curMode=localStorage.getItem('via_mode')||'auto';
var customBg=localStorage.getItem('via_bg_image')||'';
var textColor=localStorage.getItem('via_text_color')||'';
var textSecColor=localStorage.getItem('via_text_sec_color')||'';
var sfFolded=true;try{sfFolded=localStorage.getItem('via_sc_folded')!=='0';}catch(e){}
var iconMode='icon';try{iconMode=localStorage.getItem('via_icon_mode')||'icon';}catch(e){}
if(!themes[curTheme])curTheme='gradient-sunset';
function getMode(){if(curMode==='light')return'light';if(curMode==='dark')return'dark';return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
function syncModeBtns(){document.querySelectorAll('#modeSelector .mode-btn').forEach(function(b){b.classList.toggle('active',b.dataset.mode===curMode);});}
function applyTheme(){
var th=themes[curTheme],m=getMode(),v=th[m],r=document.documentElement;
r.style.setProperty('--bg',v.bg);r.style.setProperty('--card-bg',v.cardBg);r.style.setProperty('--card-bg-alpha',v.cardBgAlpha);
r.style.setProperty('--text',v.text);r.style.setProperty('--text-secondary',v.textSecondary);r.style.setProperty('--accent',v.accent);
r.style.setProperty('--accent-light',v.accentLight);r.style.setProperty('--border',v.border);r.style.setProperty('--border-alpha',v.borderAlpha);
r.style.setProperty('--shadow',v.shadow);r.style.setProperty('--shadow-hover',v.shadowHover);r.style.setProperty('--danger',v.danger);
r.style.setProperty('--danger-light',v.dangerLight);r.style.setProperty('--overlay',v.overlay);
if(textColor)r.style.setProperty('--text',textColor);
if(textSecColor)r.style.setProperty('--text-secondary',textSecColor);
if(th.type==='gradient'){document.body.classList.add('glass-mode');}else{document.body.classList.remove('glass-mode');}
document.body.style.background=v.bg;
document.getElementById('themeMeta').setAttribute('content',v.metaColor);
syncModeBtns();
renderThemeSel();
}
var themeSelBuilt=false;
function renderThemeSel(){
var c=document.getElementById('themeSelector');
if(!themeSelBuilt){
c.innerHTML=tKeys.map(function(k){var t=themes[k],act=(k===curTheme?' active':''),gc=(t.type==='gradient'?' gradient':'');return'<div class="theme-option'+act+'" data-theme="'+k+'"><div class="theme-preview'+gc+'" style="background:'+t.preview+'"></div><span class="theme-name">'+t.name+'</span></div>';}).join('');
c.querySelectorAll('.theme-option').forEach(function(o){o.addEventListener('click',function(){curTheme=o.dataset.theme;localStorage.setItem('via_theme',curTheme);applyTheme();updateBgLayer();showToast('主题已切换');});});
themeSelBuilt=true;
}
c.querySelectorAll('.theme-option').forEach(function(o){o.classList.toggle('active',o.dataset.theme===curTheme);});
}
function updateBgLayer(){var bl=document.getElementById('bgLayer');if(customBg){bl.style.backgroundImage=(customBg.startsWith('url(')?customBg:'url('+customBg+')');bl.classList.add('visible');}else{bl.classList.remove('visible');}}
// 布局调节
var layoutOffset=parseInt(localStorage.getItem('via_layout_offset')||'0',10)||0;
function applyLayout(){
var c=document.querySelector('.container');
if(c)c.style.marginTop=layoutOffset+'px';
var r=document.getElementById('layoutRange');
if(r){r.value=layoutOffset;document.getElementById('layoutVal').textContent=layoutOffset+'px';}
}
var lr=document.getElementById('layoutRange'),layoutRAF=null;
if(lr)lr.addEventListener('input',function(){
layoutOffset=parseInt(this.value,10)||0;
if(layoutRAF)return;
layoutRAF=requestAnimationFrame(function(){layoutRAF=null;applyLayout();try{localStorage.setItem('via_layout_offset',String(layoutOffset));}catch(e){}});
});
var lrBtn=document.getElementById('layoutResetBtn');
if(lrBtn)lrBtn.addEventListener('click',function(){layoutOffset=0;localStorage.removeItem('via_layout_offset');applyLayout();showToast('布局已恢复默认');});
// 自定义文字颜色
function syncColorInputs(){
if(tci){tci.value=textColor||'#333333';document.getElementById('textColorVal').textContent=textColor||'默认';}
if(tsi){tsi.value=textSecColor||'#999999';document.getElementById('textSecColorVal').textContent=textSecColor||'默认';}
var thc=document.getElementById('timeHColor'),tmc=document.getElementById('timeMColor'),tsc=document.getElementById('timeSColor');
if(thc){thc.value=timeHColor||'#333333';document.getElementById('timeHColorVal').textContent=timeHColor||'默认';}
if(tmc){tmc.value=timeMColor||'#333333';document.getElementById('timeMColorVal').textContent=timeMColor||'默认';}
if(tsc){tsc.value=timeSColor||'#333333';document.getElementById('timeSColorVal').textContent=timeSColor||'默认';}
syncPickerColors();
syncPalettes();
}
// 自绘HSV取色器弹层
function hex2hsv(hex){
hex=String(hex||'#4a90d9');
var r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
var max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,h=0,s=max===0?0:d/max,v=max;
if(d!==0){
if(max===r)h=((g-b)/d)%6;
else if(max===g)h=(b-r)/d+2;
else h=(r-g)/d+4;
h*=60;if(h<0)h+=360;
}
return{h:h,s:s,v:v};
}
function hsv2hex(h,s,v){
h=((h%360)+360)%360;var c=v*s,x=c*(1-Math.abs((h/60)%2-1)),m=v-c,r,g,b;
if(h<60){r=c;g=x;b=0;}
else if(h<120){r=x;g=c;b=0;}
else if(h<180){r=0;g=c;b=x;}
else if(h<240){r=0;g=x;b=c;}
else if(h<300){r=x;g=0;b=c;}
else{r=c;g=0;b=x;}
r=Math.round((r+m)*255);g=Math.round((g+m)*255);b=Math.round((b+m)*255);
return'#'+[r,g,b].map(function(n){return('0'+n.toString(16)).slice(-2);}).join('');
}
var pickerPop=null,pickHSV={h:220,s:1,v:1};
function openPicker(btn,inp){
if(pickerPop)closePicker();
pickHSV=hex2hsv(inp.value);
pickerPop=document.createElement('div');
pickerPop.className='picker-pop';
pickerPop.innerHTML='<div class="pp-preview"></div><div class="pp-sv"><div class="pp-sv-dot"></div></div><div class="pp-hue"><div class="pp-hue-dot"></div></div><div class="pp-row"><button type="button" class="pp-btn pp-ok">确定</button><button type="button" class="pp-btn pp-cancel">取消</button></div>';
document.body.appendChild(pickerPop);
var r=btn.getBoundingClientRect();
var pw=224,ph=300;
var left=Math.max(8,Math.min(window.innerWidth-pw-8,r.left));
var top=r.bottom+6;
if(top+ph>window.innerHeight)top=Math.max(8,r.top-ph-6);
pickerPop.style.left=left+'px';pickerPop.style.top=top+'px';
var pre=pickerPop.querySelector('.pp-preview'),sv=pickerPop.querySelector('.pp-sv'),sd=sv.querySelector('.pp-sv-dot'),hu=pickerPop.querySelector('.pp-hue'),hd=hu.querySelector('.pp-hue-dot');
function paint(){
var col=hsv2hex(pickHSV.h,pickHSV.s,pickHSV.v);
pre.style.background=col;
sv.style.background='linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,hsl('+pickHSV.h+',100%,50%))';
sd.style.left=(pickHSV.s*100)+'%';sd.style.top=((1-pickHSV.v)*100)+'%';
hd.style.left=(pickHSV.h/360*100)+'%';
}
function setFromSV(e){
var r2=sv.getBoundingClientRect();
pickHSV.s=Math.max(0,Math.min(1,(e.clientX-r2.left)/r2.width));
pickHSV.v=Math.max(0,Math.min(1,1-(e.clientY-r2.top)/r2.height));
paint();
}
function setFromHue(e){
var r2=hu.getBoundingClientRect();
pickHSV.h=Math.max(0,Math.min(360,(e.clientX-r2.left)/r2.width*360));
paint();
}
function bindDrag(el,fn){
function start(e){
e.preventDefault();fn(e);
function mv(ev){fn(ev.touches?ev.touches[0]:ev);}
function up(){document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);document.removeEventListener('touchmove',mv);document.removeEventListener('touchend',up);}
document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
document.addEventListener('touchmove',mv,{passive:false});document.addEventListener('touchend',up);
}
el.addEventListener('mousedown',start);
el.addEventListener('touchstart',start,{passive:false});
}
bindDrag(sv,setFromSV);
bindDrag(hu,setFromHue);
pickerPop.querySelector('.pp-ok').addEventListener('click',function(){
inp.value=hsv2hex(pickHSV.h,pickHSV.s,pickHSV.v);
try{inp.dispatchEvent(new Event('input'));inp.dispatchEvent(new Event('change'));}catch(e){}
closePicker();
});
pickerPop.querySelector('.pp-cancel').addEventListener('click',closePicker);
paint();
}
function closePicker(){if(pickerPop){if(pickerPop.parentNode)pickerPop.parentNode.removeChild(pickerPop);pickerPop=null;}}
document.addEventListener('click',function(e){if(pickerPop&&!e.target.closest('.picker-pop')&&!e.target.closest('.picker-btn'))closePicker();});
function initPickers(){
document.querySelectorAll('.picker-btn').forEach(function(b){
var inp=document.getElementById(b.dataset.pick);
if(!inp)return;
b.style.background=inp.value;
b.addEventListener('click',function(){openPicker(b,inp);});
inp.addEventListener('input',function(){b.style.background=inp.value;});
inp.addEventListener('change',function(){b.style.background=inp.value;});
});
}
function syncPickerColors(){
document.querySelectorAll('.picker-btn').forEach(function(b){
var inp=document.getElementById(b.dataset.pick);
if(inp)b.style.background=inp.value;
});
}
// 预设色板+默认可点
var PALETTE=['#333333','#4a90d9','#27ae60','#e07b5a','#8b5cf6','#e74c3c','#f39c12','#1abc9c'];
function buildPalette(p){
var t=document.getElementById(p.dataset.cp);
if(!t)return;
PALETTE.forEach(function(c){
var sw=document.createElement('button');
sw.type='button';sw.className='palette-swatch';sw.style.background=c;sw.dataset.c=c;
sw.addEventListener('click',function(){
t.value=c;
try{t.dispatchEvent(new Event('input'));t.dispatchEvent(new Event('change'));}catch(e){}
syncPalettes();
});
p.appendChild(sw);
});
syncPalettes();
}
function syncPalettes(){
document.querySelectorAll('.color-palette').forEach(function(p){
var t=document.getElementById(p.dataset.cp);
if(!t)return;
var v=String(t.value||'').toLowerCase();
p.querySelectorAll('.palette-swatch').forEach(function(sw){sw.classList.toggle('active',sw.dataset.c===v);});
});
}
document.querySelectorAll('.color-palette').forEach(buildPalette);
// "默认"恢复该行
var tvEl=document.getElementById('textColorVal'),tsvEl=document.getElementById('textSecColorVal');
if(tvEl)tvEl.addEventListener('click',function(){textColor='';try{localStorage.removeItem('via_text_color');}catch(e){}applyTheme();syncColorInputs();showToast('主文字已恢复默认');});
if(tsvEl)tsvEl.addEventListener('click',function(){textSecColor='';try{localStorage.removeItem('via_text_sec_color');}catch(e){}applyTheme();syncColorInputs();showToast('次要文字已恢复默认');});
initPickers();
var tci=document.getElementById('textColorInput'),tsi=document.getElementById('textSecColorInput'),colorRAF=null;
function applyTextColors(){
colorRAF=null;applyTheme();
try{localStorage.setItem('via_text_color',textColor);localStorage.setItem('via_text_sec_color',textSecColor);}catch(e){}
}
if(tci)tci.addEventListener('input',function(){textColor=this.value;document.getElementById('textColorVal').textContent=textColor;if(!colorRAF)colorRAF=requestAnimationFrame(applyTextColors);});
if(tci)tci.addEventListener('change',function(){showToast('主文字颜色已更新');});
if(tsi)tsi.addEventListener('input',function(){textSecColor=this.value;document.getElementById('textSecColorVal').textContent=textSecColor;if(!colorRAF)colorRAF=requestAnimationFrame(applyTextColors);});
if(tsi)tsi.addEventListener('change',function(){showToast('次要文字颜色已更新');});
var tcr=document.getElementById('textColorResetBtn');
if(tcr)tcr.addEventListener('click',function(){textColor='';textSecColor='';localStorage.removeItem('via_text_color');localStorage.removeItem('via_text_sec_color');applyTheme();syncColorInputs();showToast('文字颜色已恢复默认');});
// 时间颜色: 时/分/秒独立配色
var timeHColor='',timeMColor='',timeSColor='';
try{timeHColor=localStorage.getItem('via_time_h_color')||'';timeMColor=localStorage.getItem('via_time_m_color')||'';timeSColor=localStorage.getItem('via_time_s_color')||'';}catch(e){}
function applyTimeColors(){
var eh=document.getElementById('timeH'),em=document.getElementById('timeM'),es=document.getElementById('timeS');
if(eh)eh.style.color=timeHColor||'';
if(em)em.style.color=timeMColor||'';
if(es)es.style.color=timeSColor||'';
}
function bindTimeColorInput(id,key){
var inp=document.getElementById(id);
if(!inp)return;
inp.addEventListener('input',function(){
if(key==='via_time_h_color')timeHColor=this.value;
else if(key==='via_time_m_color')timeMColor=this.value;
else timeSColor=this.value;
try{localStorage.setItem(key,this.value);}catch(e){}
applyTimeColors();
var valEl=document.getElementById(id.replace('Color','')+'ColorVal');
if(valEl)valEl.textContent=this.value;
});
var def=document.getElementById(id.replace('Color','')+'ColorVal');
if(def)def.addEventListener('click',function(){
if(key==='via_time_h_color')timeHColor='';
else if(key==='via_time_m_color')timeMColor='';
else timeSColor='';
try{localStorage.removeItem(key);}catch(e){}
applyTimeColors();syncColorInputs();
showToast('该部分时间已恢复默认');
});
}
bindTimeColorInput('timeHColor','via_time_h_color');
bindTimeColorInput('timeMColor','via_time_m_color');
bindTimeColorInput('timeSColor','via_time_s_color');
var trcBtn=document.getElementById('timeColorResetBtn');
if(trcBtn)trcBtn.addEventListener('click',function(){
timeHColor='';timeMColor='';timeSColor='';
try{localStorage.removeItem('via_time_h_color');localStorage.removeItem('via_time_m_color');localStorage.removeItem('via_time_s_color');}catch(e){}
applyTimeColors();syncColorInputs();
showToast('时间颜色已恢复默认');
});
// 作者跳转
var al=document.getElementById('authorLink');
if(al)al.addEventListener('click',function(){window.location.href='https://www.coolapk.com/u/2570527';});
var toastT;
function showToast(m,ms){var t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('show');},ms||3000);}
var defShortcuts=[{name:"GitHub",icon:"G",cls:"icon-github",url:"https://github.com"},{name:"知乎",icon:"知",cls:"icon-zhihu",url:"https://www.zhihu.com"}];
function loadSc(){try{var s=localStorage.getItem('via_shortcuts');if(s){var d=JSON.parse(s);if(Array.isArray(d)&&d.length>0)return d;}}catch(e){}return JSON.parse(JSON.stringify(defShortcuts));}
var shortcuts=loadSc(),MAX_VIS=8,scCont=document.getElementById('shortcuts'),favImgCache={},favSrcCache={},foldBtnEl=document.getElementById('foldBtn');
// favicon:PNG优先+缓存成功源+补全协议
// 低清源标记(16px):缓存不置顶
var LOW_MARKS=['/favicon.ico','favicon-32x32.png','iowen','loli','btstu','yandex','duckduckgo','google.com/s2'];
function getFavSources(url){
if(favSrcCache[url])return favSrcCache[url];
try{
var u=/^https?:\/\//i.test(url)?url:'https://'+url;
var d=new URL(u).hostname;
var all=['https://'+d+'/apple-touch-icon.png','https://'+d+'/android-icon-192x192.png','https://'+d+'/favicon-96x96.png','https://'+d+'/favicon-32x32.png','https://a.favicon.im/'+d+'?larger=true','https://icon.horse/icon/'+d,'https://favicon.im/'+d+'?larger=true','https://'+d+'/favicon.ico','https://api.iowen.cn/favicon/'+d+'.png','https://favicon.loli.net/'+d,'https://api.btstu.cn/favicon.php?domain='+d,'https://favicon.yandex.net/favicon/'+d,'https://icons.duckduckgo.com/ip3/'+d+'.ico','https://www.google.com/s2/favicons?domain='+d+'&sz=128'];
var c='';try{c=localStorage.getItem('via_fav_'+d)||'';}catch(e){}
//清理本地代理残留缓存
if(c&&c.indexOf('127.0.0.1')>=0){try{localStorage.removeItem('via_fav_'+d);}catch(e){}c='';}
//低清缓存不置顶;仅高清置顶加速
var isLow=c&&LOW_MARKS.some(function(l){return c.indexOf(l)>=0;});
if(c&&!isLow&&all.indexOf(c)>=0){all=[c].concat(all.filter(function(x){return x!==c;}));}
else if(isLow){try{localStorage.removeItem('via_fav_'+d);}catch(e){}}
favSrcCache[url]=all;return all;
}catch(e){return[];}
}
function renderSc(){
//预热缓存图标:重建DOM命中缓存
for(var pk in favImgCache){
try{var pi=new Image();pi.referrerPolicy='no-referrer';pi.src=favImgCache[pk];}catch(e){}
}
var tot=shortcuts.length,disp=(sfFolded&&tot>MAX_VIS)?shortcuts.slice(0,MAX_VIS):shortcuts;
var addTile='<div class="shortcut-item add-tile" title="添加书签" aria-label="添加书签"><div class="shortcut-icon">＋</div></div>';
var html=(tot?disp.map(function(s,i){
var esc=function(v){return String(v==null?'':v).replace(/[<>&]/g,function(c){return{'<':'&lt;','>':'&gt;','&':'&amp;'}[c];});};
var ic;
if(s&&s.w){ // 记事本大卡片(2x2)
  var latest=latestNote();
  var snip=noteSnippet();
  return'<div class="shortcut-item widget-item" data-index="'+i+'"><div class="widget-head"><span class="widget-name">notes</span><span class="widget-count">'+notebooks.length+' 篇</span></div><div class="widget-preview">'+(latest?'<div class="wp-title">'+esc(latest.name)+'</div><div class="wp-snippet">'+esc(snip||'（空笔记）')+'</div>':'<div class="wp-empty">暂无笔记，点开写吧</div>')+'</div></div>';
}
if(s&&s.f){ // 文件夹
ic='<div class="shortcut-icon folder-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg><span class="folder-count">'+(s.items?s.items.length:0)+'</span></div>';
}else{
ic='<div class="shortcut-icon '+(s.cls||'icon-default')+(s.bg&&/^#[0-9a-fA-F]{3,8}$/.test(s.bg)?'" style="background:'+s.bg+'"':'')+'"><span class="icon-fallback">'+esc(s.icon)+'</span></div>';
}
return'<div class="shortcut-item'+(s&&s.f?' folder-item':'')+'" data-index="'+i+'">'+ic+'<span class="shortcut-name">'+esc(s.name)+'</span></div>';
}).join(''):'<div class="sc-empty">双击空白处，添加第一个书签 ✨</div>')+addTile;
scCont.innerHTML=html;
if(foldBtnEl){if(tot>MAX_VIS){foldBtnEl.classList.add('show');foldBtnEl.classList.toggle('expanded',!sfFolded);foldBtnEl.title=sfFolded?'展开全部 ('+(tot-MAX_VIS)+')':'收起';}else{foldBtnEl.classList.remove('show');}}
//加载favicon:并发3+缓存+超时切源
if(iconMode==='text')return; //文字模式：不加载favicon，统一显示文字图标
var favTasks=[];
scCont.querySelectorAll('.shortcut-item').forEach(function(it){
var idx=parseInt(it.dataset.index);
var sc=shortcuts[idx];
if(!sc)return;
if(sc.bg)return; //自定义文字图标：直接显示文字，跳过favicon探测
var iconDiv=it.querySelector('.shortcut-icon');
if(!iconDiv)return; // 记事本大卡片没有小图标, 跳过favicon探测
var fallback=iconDiv.querySelector('.icon-fallback');
if(!fallback)return;
var u=sc.url||'';
var dh='';try{dh=new URL(/^https?:\/\//i.test(u)?u:'https://'+u).hostname;}catch(e){}
if(!dh)return;
favTasks.push({iconDiv:iconDiv,fallback:fallback,dh:dh,u:u,customImg:sc.img||''});
});
var favPos=0;
function loadFavBatch(){
var n=0;
while(n<3&&favPos<favTasks.length){
(function(t){
var img=document.createElement('img');img.className='fav-img';img.alt='';img.referrerPolicy='no-referrer';
var cImg=t.customImg;
if(cImg){
//自定义图片:失败降级文字
img.onload=function(){img.classList.add('loaded');t.fallback.style.display='none';};
img.onerror=function(){img.style.display='none';};
img.src=cImg;
t.iconDiv.insertBefore(img,t.fallback);
return;
}
var show=function(src){t.fallback.style.display='none';img.classList.add('loaded');var low=src&&LOW_MARKS.some(function(l){return src.indexOf(l)>=0;});if(!low){try{localStorage.setItem('via_fav_'+t.dh,src);favImgCache[t.dh]=src;}catch(e){}}};
function startProbe(){
var sources=getFavSources(t.u);
if(sources.length===0){img.style.display='none';return;}
var loaded=false,srcIdx=0,failT=null,lastSmall=null;
img.onload=function(){
loaded=true;clearTimeout(failT);
//小图(≤16px)不算成功;SVG除外
if(img.naturalWidth<=16&&sources[srcIdx].indexOf('.svg')<0){lastSmall={s:srcIdx,w:img.naturalWidth};img.style.display='none';trySrc(srcIdx+1);return;}
show(sources[srcIdx]);
};
img.onerror=function(){if(loaded)return;trySrc(srcIdx+1);};
function trySrc(i){
if(loaded)return;
if(i>=sources.length){
clearTimeout(failT);
if(lastSmall!==null){img.onload=null;img.onerror=null;img.style.display='none';img.src=sources[lastSmall.s];show(sources[lastSmall.s]);}
else{img.style.display='none';}
return;
}
srcIdx=i;img.src=sources[i];
clearTimeout(failT);
failT=setTimeout(function(){if(!loaded)trySrc(srcIdx+1);},3000);
}
trySrc(0);
}
if(favImgCache[t.dh]){
var ck=favImgCache[t.dh];
img.src=ck;
var doShowCached=function(){
//缓存小图也降级:清缓存重探
if(img.naturalWidth<=16&&ck.indexOf('.svg')<0){
try{localStorage.removeItem('via_fav_'+t.dh);}catch(e){}
try{delete favImgCache[t.dh];}catch(e){}
startProbe();
return;
}
show(ck);
};
if(img.complete)doShowCached();
else{
img.onload=doShowCached;
//缓存失败:清缓存重探
img.onerror=function(){try{localStorage.removeItem('via_fav_'+t.dh);}catch(e){}try{delete favImgCache[t.dh];}catch(e){}startProbe();};
}
}else{
startProbe();
}
t.iconDiv.insertBefore(img,t.fallback);
})(favTasks[favPos]);
favPos++;n++;
}
if(favPos<favTasks.length)setTimeout(loadFavBatch,30);
}
if(favTasks.length)setTimeout(loadFavBatch,0);
}
// 折叠按钮(一次性绑定)
var fbBtn=document.getElementById('foldBtn');
if(fbBtn){fbBtn.addEventListener('click',function(){sfFolded=!sfFolded;try{localStorage.setItem('via_sc_folded',sfFolded?'1':'0');}catch(e){}renderSc();});}
// 书签交互: 单击跳转 / 双击编辑 / 长按拖动排序(桌面式: 图标跟手+实时让位+停留合并文件夹)
var pressT=null,suppressClick=false,dragItem=null,dragStarting=false,clickTimer=null,pressDelay=250,dragMoved=false,dragStartX=0,dragStartY=0,pendingRenameFid=-1;
var dragGhost=null,ghostGrabX=0,ghostGrabY=0,hoverTarget=null,hoverTimer=null,MERGE_HOLD=600;
function clearHover(){
  if(hoverTimer){clearTimeout(hoverTimer);hoverTimer=null;}
  hoverTarget=null;
  scCont.querySelectorAll('.shortcut-item').forEach(function(x){x.classList.remove('folder-drop');});
  if(dragGhost)dragGhost.classList.remove('merge-ready');
}
function endDrag(){
  clearHover();
  if(dragGhost&&dragGhost.parentNode)dragGhost.parentNode.removeChild(dragGhost);
  dragGhost=null;dragItem=null;dragStarting=false;
  scCont.querySelectorAll('.shortcut-item').forEach(function(x){x.classList.remove('dragging','drag-over','folder-drop');});
  flushPendingRename();
}
// 松手后才弹出文件夹重命名(拖拽合并时先挂起, 避免拖动中打断)
function flushPendingRename(){
  if(pendingRenameFid<0)return;
  var fidx=pendingRenameFid;pendingRenameFid=-1;
  try{openFolderRename(fidx);}catch(e){}
}
// 按 (x,y) 找到手指/鼠标正下方的书签项; centerOnly=true 只认图标中央(用于合并判定)
function findItem(x,y,centerOnly){
  var els=Array.prototype.slice.call(scCont.querySelectorAll('.shortcut-item'));
  var best=null,bd=1e9;
  for(var k=0;k<els.length;k++){
    if(els[k]===dragItem||els[k].classList.contains('add-tile'))continue;
    var r=els[k].getBoundingClientRect();
    if(x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom){
      if(centerOnly){
        var cx=r.left+r.width/2,cy=r.top+r.height/2;
        var hw=r.width*0.22,hh=r.height*0.22;
        if(!(x>=cx-hw&&x<=cx+hw&&y>=cy-hh&&y<=cy+hh))continue;
      }
      var ccx=r.left+r.width/2,ccy=r.top+r.height/2;
      var d=Math.abs(x-ccx)+Math.abs(y-ccy);
      if(d<bd){bd=d;best=els[k];}
    }
  }
  return best;
}
// 实时让位：把占位(隐藏的拖拽项)换到目标槽位，其余图标随之滑动
function dragOver(over,fi){
  var from=scCont.querySelector('.shortcut-item[data-index="'+fi+'"]');
  var to=over;
  if(from&&to&&from!==to){
    var fiPos=Array.prototype.indexOf.call(scCont.children,from);
    var tiPos=Array.prototype.indexOf.call(scCont.children,to);
    if(fiPos<tiPos){scCont.insertBefore(from,to.nextSibling);}else{scCont.insertBefore(from,to);}
  }
  return parseInt(from?from.dataset.index:fi,10);
}
// 拖拽合并: 图标拖到另一图标中央停留片刻 -> 创建/加入文件夹
function doMerge(di,ti){
  if(di===ti)return;
  var a=shortcuts[di],b=shortcuts[ti];
  if(!a||!b||a.w||b.w)return;
  var folder=null;
  if(b.f){ // 拖到文件夹上: 加入
    if(a.f){b.items=b.items.concat(a.items);}else{b.items.push(a);}
    shortcuts.splice(di,1);
    folder=b;
    showToast('已加入文件夹');
  }else if(a.f){ // 文件夹拖到书签上: 该书签加入文件夹
    a.items.push(b);
    shortcuts.splice(ti,1);
    folder=a;
    showToast('已加入文件夹');
  }else{ // 书签拖到书签上: 合并成新文件夹
    var minIdx=Math.min(di,ti),maxIdx=Math.max(di,ti);
    var merged={f:1,name:(a.name||'文件夹'),items:[a,b]};
    shortcuts.splice(maxIdx,1);
    shortcuts.splice(minIdx,1,merged);
    folder=merged;
    showToast('已创建文件夹');
  }
  saveSc();
  suppressClick=true;setTimeout(function(){suppressClick=false;},400);
  clearHover();
  if(dragGhost&&dragGhost.parentNode)dragGhost.parentNode.removeChild(dragGhost);
  dragGhost=null;dragItem=null;dragStarting=false;
  renderSc();
  // 合成文件夹后记录待重命名, 松手后再弹出(见 up/endDrag), 拖动中不打断
  if(folder){var fidx=shortcuts.indexOf(folder);if(fidx>=0)pendingRenameFid=fidx;}
}
function startGhost(it,x,y){
  dragItem=it;
  var r=it.getBoundingClientRect();
  ghostGrabX=x-r.left;ghostGrabY=y-r.top;
  dragGhost=it.cloneNode(true);
  dragGhost.classList.add('dragging-ghost');
  dragGhost.classList.remove('pressing','dragging');
  var del=dragGhost.querySelector('.sc-delete');if(del)del.parentNode.removeChild(del);
  dragGhost.style.cssText='position:fixed;left:0;top:0;width:'+r.width+'px;height:'+r.height+'px;margin:0;';
  document.body.appendChild(dragGhost);
  it.classList.add('dragging');
  moveGhost(x,y);
}
function moveGhost(x,y){if(dragGhost){dragGhost.style.left=(x-ghostGrabX)+'px';dragGhost.style.top=(y-ghostGrabY)+'px';}}
function bindDragEvents(type){
  var rm=type==='touch'?'touchmove':'mousemove',ru=type==='touch'?'touchend':'mouseup';
  function mv(ev){
    if(!dragItem)return;
    try{ev.preventDefault();}catch(e){}
    var ptc=ev.touches?ev.touches[0]:ev;
    var x=ptc.clientX,y=ptc.clientY;
    if(!dragMoved&&(Math.abs(x-dragStartX)>8||Math.abs(y-dragStartY)>8))dragMoved=true;
    moveGhost(x,y);
    // 1) 停在图标中央: 进入合并判定(停留片刻成文件夹), 不做让位
    var center=findItem(x,y,true);
    if(center&&center!==dragItem){
      var di3=parseInt(dragItem.dataset.index,10),ci3=parseInt(center.dataset.index,10);
      if(!((shortcuts[di3]&&shortcuts[di3].w)||(shortcuts[ci3]&&shortcuts[ci3].w))){
        if(center!==hoverTarget){
          clearHover();hoverTarget=center;
          center.classList.add('folder-drop');
          if(dragGhost)dragGhost.classList.add('merge-ready');
          hoverTimer=setTimeout(function(){if(dragItem&&hoverTarget===center)doMerge(di3,ci3);},MERGE_HOLD);
        }
        return;
      }
    }
    clearHover();
    // 2) 让位排序: 仅当手指越过目标图标中线才交换, 避免拖过即乱跳、合并时目标被移走
    var over=findItem(x,y,false);
    if(over&&over!==dragItem&&pastCenter(over,x,y)){
      dragOver(over,parseInt(dragItem.dataset.index,10));
    }
  }
  // 判定是否已越过目标图标中线(向远离占位的方向)
  function pastCenter(over,x,y){
    var r=over.getBoundingClientRect();
    var pi=Array.prototype.indexOf.call(scCont.children,dragItem);
    var oi=Array.prototype.indexOf.call(scCont.children,over);
    var cx=r.left+r.width/2,cy=r.top+r.height/2;
    if(oi>pi)return(x>cx+2)||(y>cy+2);
    if(oi<pi)return(x<cx-2)||(y<cy-2);
    return false;
  }
  function up(ev){
    document.removeEventListener(rm,mv);document.removeEventListener(ru,up);
    var g=dragGhost,di2=dragItem;
    if(di2&&!dragMoved){
      // 长按选中(未移动): 打开该图标的编辑
      if(g&&g.parentNode)g.parentNode.removeChild(g);
      dragGhost=null;dragItem=null;dragStarting=false;dragMoved=false;
      scCont.querySelectorAll('.shortcut-item').forEach(function(x){x.classList.remove('dragging','drag-over','folder-drop');});
      clearHover();
      suppressClick=true;setTimeout(function(){suppressClick=false;},400);
      var idx0=parseInt(di2.dataset.index,10);
      var sc0=shortcuts[idx0];
      if(sc0&&sc0.w){openNotes();}
      else if(sc0&&sc0.f){openFolderRename(idx0);}
      else{openModal(idx0);}
      return;
    }
    if(di2){
      var r=di2.getBoundingClientRect();
      if(g){g.style.transition='left .18s ease,top .18s ease,transform .18s ease';g.style.left=r.left+'px';g.style.top=r.top+'px';g.style.transform='scale(1)';}
      // 按当前 DOM 顺序回写可见区数组；折叠隐藏的书签原样保留
      var visCount=scCont.querySelectorAll('.shortcut-item:not(.add-tile)').length;
      var newArr=[];
      scCont.querySelectorAll('.shortcut-item').forEach(function(el){if(el.classList.contains('add-tile'))return;var i=parseInt(el.dataset.index);newArr.push(shortcuts[i]);});
      shortcuts=newArr.concat(shortcuts.slice(visCount));
      try{localStorage.setItem('via_shortcuts',JSON.stringify(shortcuts));showToast('排序已保存');}catch(e){}
      suppressClick=true;
      setTimeout(function(){suppressClick=false;},400);
      setTimeout(function(){if(g&&g.parentNode)g.parentNode.removeChild(g);dragGhost=null;dragItem=null;renderSc();},190);
    }
    clearHover();
    dragItem=null;dragStarting=false;dragMoved=false;
    flushPendingRename();
  }
  document.addEventListener(rm,mv,{passive:false});
  document.addEventListener(ru,up);
}
// 拖动中断保护：窗口失焦或触屏被系统打断时结束拖动
window.addEventListener('blur',function(){if(dragItem){endDrag();renderSc();}else if(pendingRenameFid>=0){flushPendingRename();}});
document.addEventListener('touchcancel',function(){if(dragItem){endDrag();renderSc();}else if(pendingRenameFid>=0){flushPendingRename();}});
// 单击跳转 / 双击编辑
function onItemClick(it){
  if(suppressClick){suppressClick=false;return;}
  if(it.classList.contains('add-tile')){openModal(-1);return;}
  var idx=parseInt(it.dataset.index);
  var sc=shortcuts[idx];
  if(sc&&sc.w){openNotes();return;}
  if(sc&&sc.f){openFolderView(idx);return;}
  if(clickTimer){clearTimeout(clickTimer);clickTimer=null;openModal(idx);suppressClick=true;return;}
  clickTimer=setTimeout(function(){clickTimer=null;if(!suppressClick&&shortcuts[idx]&&shortcuts[idx].url)window.location.href=shortcuts[idx].url;},250);
}
scCont.addEventListener('click',function(e){
  var del=e.target.closest('.sc-delete');
  if(del){
    e.stopPropagation();
    var it=del.closest('.shortcut-item');if(!it)return;
    var idx=parseInt(it.dataset.index,10);
    var sc=shortcuts[idx];if(!sc)return;
    if(del.dataset.arm){
      if(sc.f&&sc.items){ // 删文件夹: 内容放回主页, 不丢失
        var items=sc.items;
        shortcuts.splice.apply(shortcuts,[idx,1].concat(items));
        showToast('文件夹已删除，内容保留');
      }else{
        shortcuts.splice(idx,1);
        showToast('已删除书签');
      }
      saveSc();renderSc();
    }else{
      del.dataset.arm='1';del.textContent='✓';del.classList.add('armed');
      showToast('再次点击确认删除');
      var that=del;
      setTimeout(function(){delete that.dataset.arm;that.textContent='✕';that.classList.remove('armed');},2500);
    }
    return;
  }
  var it2=e.target.closest('.shortcut-item');if(!it2)return;
  onItemClick(it2);
});
scCont.addEventListener('touchstart',function(e){
  var it=e.target.closest('.shortcut-item');if(!it)return;
  if(it.classList.contains('add-tile'))return;
  if(e.target.closest('.sc-delete'))return;
  if(dragItem)endDrag();
  var t=e.touches[0],sx=t.clientX,sy=t.clientY;
  it.classList.add('pressing');
  dragStarting=false;
  dragMoved=false;
  pressT=setTimeout(function(){
    dragStarting=true;
    suppressClick=true;
    dragStartX=sx;dragStartY=sy;
    it.classList.remove('pressing');
    startGhost(it,sx,sy);
    bindDragEvents('touch');
  },pressDelay);
  var mv2=function(ev){
    var t2=ev.touches[0];
    if(Math.abs(t2.clientX-sx)>10||Math.abs(t2.clientY-sy)>10){
      if(dragStarting)return;clearTimeout(pressT);it.classList.remove('pressing');
    }
  };
  var up2=function(){
    clearTimeout(pressT);
    it.classList.remove('pressing');
    document.removeEventListener('touchmove',mv2);document.removeEventListener('touchend',up2);
    if(dragStarting)dragStarting=false;
  };
  document.addEventListener('touchmove',mv2,{passive:true});
  document.addEventListener('touchend',up2);
},true);
scCont.addEventListener('contextmenu',function(e){
  // 仅桌面鼠标右键编辑；触屏长按一律阻止默认菜单且不触发编辑
  if(!(e.button===2)){e.preventDefault();return;}
  if(dragItem||dragStarting)return;
  var it=e.target.closest('.shortcut-item');if(!it)return;e.preventDefault();
  var idx=parseInt(it.dataset.index);
  var sx=shortcuts[idx];
  if(sx&&sx.w){openNotes();}else if(sx&&sx.f){openFolderRename(idx);}else{openModal(idx);}
});
// 触屏长按统一阻止浏览器默认菜单(复制/选择等)，避免与长按拖动排序冲突；输入框保留
document.addEventListener('contextmenu',function(e){
  if(e.button===2)return;
  if(e.target.closest('input,textarea'))return;
  e.preventDefault();
});
// 桌面: 长按拖动排序 + 双击编辑
var mMove=null,mUp=null;
scCont.addEventListener('mousedown',function(e){
  if(e.button!==0)return;
  var it=e.target.closest('.shortcut-item');if(!it)return;
  if(it.classList.contains('add-tile'))return;
  if(e.target.closest('.sc-delete'))return;
  if(dragItem)endDrag();
  var sx=e.clientX,sy=e.clientY;
  dragStarting=false;
  dragMoved=false;
  pressT=setTimeout(function(){dragStarting=true;suppressClick=true;dragStartX=sx;dragStartY=sy;it.classList.remove('pressing');startGhost(it,sx,sy);bindDragEvents('mouse');},pressDelay);
  mMove=function(ev){if(Math.abs(ev.clientX-sx)>10||Math.abs(ev.clientY-sy)>10){if(dragStarting)return;clearTimeout(pressT);}};
  mUp=function(){clearTimeout(pressT);dragStarting=false;document.removeEventListener('mousemove',mMove);document.removeEventListener('mouseup',mUp);};
  document.addEventListener('mousemove',mMove);document.addEventListener('mouseup',mUp);
});
//双击空白添加书签
document.addEventListener('dblclick',function(e){if(e.target.closest('.shortcut-item')||e.target.closest('.search-wrapper')||e.target.closest('.modal-overlay')||e.target.closest('.settings-overlay')||e.target.closest('.footer-btn'))return;openModal(-1);});
//全局错误捕获
window.onerror=function(msg){try{var t=document.getElementById('toast');if(t){t.textContent='⚠️ '+String(msg).substring(0,60);t.classList.add('show');setTimeout(function(){t.classList.remove('show');},5000);}}catch(e){}};
function saveSc(){try{localStorage.setItem('via_shortcuts',JSON.stringify(shortcuts));}catch(e){}}
var mo=document.getElementById('modalOverlay'),mt=document.getElementById('modalTitle'),mn=document.getElementById('modalName'),mu=document.getElementById('modalUrl'),ms=document.getElementById('modalSave'),mc=document.getElementById('modalCancel'),md=document.getElementById('modalDelete');
var iconPreview=document.getElementById('modalIconPreview'),iconTypeBtns=document.querySelectorAll('.icon-type-btn'),iconEditText=document.getElementById('iconEditText'),iconEditImg=document.getElementById('iconEditImg'),iconText=document.getElementById('modalIconText'),iconColor=document.getElementById('modalIconColor'),iconUrl=document.getElementById('modalIconUrl'),iconUploadBtn=document.getElementById('modalIconUpload'),iconFile=document.getElementById('modalIconFile');
var editIdx=-1,isNew=false,curIconType='auto';
function setIconType(t){
curIconType=t;
iconTypeBtns.forEach(function(b){b.classList.toggle('active',b.dataset.it===t);});
iconEditText.style.display=(t==='text')?'flex':'none';
iconEditImg.style.display=(t==='img')?'flex':'none';
updateIconPreview();
}
//预览栏favicon探测(自动模式)
function previewFav(el,u){
try{
var dh='';try{dh=new URL(/^https?:\/\//i.test(u)?u:'https://'+u).hostname;}catch(e){}
if(!dh)return;
el.innerHTML='';el.style.background='rgba(0,0,0,0.05)';
var pi=document.createElement('img');
pi.style.cssText='width:100%;height:100%;object-fit:contain;';
pi.referrerPolicy='no-referrer';
el.appendChild(pi);
var done=false;
function doneOk(src){
if(done)return;done=true;el.style.background='';pi.style.display='block';pi.src=src;
if(src&&!LOW_MARKS.some(function(l){return src.indexOf(l)>=0;})){try{localStorage.setItem('via_fav_'+dh,src);favImgCache[dh]=src;}catch(e){}}
}
var ck='';try{ck=favImgCache[dh]||localStorage.getItem('via_fav_'+dh)||'';}catch(e){}
if(ck){doneOk(ck);return;}
var sources=getFavSources(u);
if(!sources.length){el.style.background='';return;}
var i=0,lastSmall=null,failT=null;
pi.onload=function(){
if(done)return;clearTimeout(failT);
if(pi.naturalWidth<=16&&sources[i].indexOf('.svg')<0){lastSmall={s:i};pi.style.display='none';next(i+1);return;}
doneOk(sources[i]);
};
pi.onerror=function(){if(done)return;clearTimeout(failT);next(i+1);};
function next(n){
if(done)return;
if(n>=sources.length){
clearTimeout(failT);
if(lastSmall!==null){pi.onload=null;pi.onerror=null;pi.style.display='none';pi.src=sources[lastSmall.s];doneOk(sources[lastSmall.s]);}
else{el.style.background='';}
return;
}
i=n;pi.src=sources[i];
clearTimeout(failT);
failT=setTimeout(function(){if(!done)next(i+1);},2500);
}
next(0);
}catch(e){}
}
function updateIconPreview(){
var iv=iconUrl.value.trim().replace(/"/g,'%22');
if(curIconType==='img'&&iv){
iconPreview.innerHTML='<img src="'+iv+'" alt="">';
return;
}
var s=(!isNew&&shortcuts[editIdx])?shortcuts[editIdx]:null;
var ch;
if(curIconType==='text'){ch=iconText.value.trim()||'字';iconPreview.style.background=iconColor.value;iconPreview.textContent=ch;return;}
if(curIconType==='auto'){
var pu=s?s.url:(mu.value.trim());
if(pu){previewFav(iconPreview,pu);return;}
}
ch=(s?(s.icon||(s.name||'🔗').charAt(0)):(mn.value.trim().charAt(0)||'🔗'));
iconPreview.style.background='#6b7280';
iconPreview.textContent=ch;
}
iconTypeBtns.forEach(function(b){b.addEventListener('click',function(){setIconType(b.dataset.it);});});
iconText.addEventListener('input',updateIconPreview);
iconColor.addEventListener('input',updateIconPreview);
iconUrl.addEventListener('input',updateIconPreview);
mn.addEventListener('input',updateIconPreview);
mu.addEventListener('input',updateIconPreview);
iconUploadBtn.addEventListener('click',function(){iconFile.click();});
iconFile.addEventListener('change',function(){
var f=this.files[0];if(!f)return;
var r=new FileReader();
r.onload=function(e){
var im=new Image();
im.onload=function(){
var c=document.createElement('canvas'),mw=128,scale=Math.min(mw/im.width,mw/im.height);
c.width=Math.max(1,Math.round(im.width*scale));c.height=Math.max(1,Math.round(im.height*scale));
c.getContext('2d').drawImage(im,0,0,c.width,c.height);
iconUrl.value=c.toDataURL('image/png').replace(/"/g,'%22');updateIconPreview();
showToast('图标图片已就绪，保存后生效');
};
im.onerror=function(){showToast('无法读取该图片');};
im.src=e.target.result;
};
r.readAsDataURL(f);
this.value='';
});
function openModal(i){editIdx=i;isNew=(i<0||i>=shortcuts.length);if(isNew){mt.textContent='✨ 添加书签';mn.value='';mu.value='';md.style.display='none';}else{mt.textContent='📝 编辑书签';mn.value=shortcuts[i].name;mu.value=shortcuts[i].url;md.style.display='block';}
//初始化图标编辑状态
try{
var s=isNew?null:shortcuts[i];
iconText.value=s?(String(s.icon||'').substring(0,2)):'';
iconUrl.value=(s&&s.img)?s.img:'';
iconPreview.style.background='';iconPreview.innerHTML='';iconPreview.textContent='';
if(s&&s.img){setIconType('img');}
else if(s&&s.bg){iconColor.value=s.bg;setIconType('text');}
else{setIconType('auto');}
syncPickerColors();
syncPalettes();
}catch(ex){curIconType='auto';try{iconTypeBtns.forEach(function(b){b.classList.toggle('active',b.dataset.it==='auto');});}catch(e2){}}
mo.classList.add('active');setTimeout(function(){mn.focus();},300);}
function closeModal(){mo.classList.remove('active');editIdx=-1;isNew=false;resetDel();}
function resetDel(){md.textContent='🗑 删除此书签';md.style.background='var(--danger-light)';md.style.color='var(--danger)';md.onclick=cfmDel;}
function cfmDel(){if(isNew)return;md.textContent='确认';md.style.background='var(--danger)';md.style.color='#fff';md.onclick=function(){shortcuts.splice(editIdx,1);if(sfFolded&&shortcuts.length<=MAX_VIS){sfFolded=false;try{localStorage.setItem('via_sc_folded','0');}catch(e){}}saveSc();renderSc();closeModal();};setTimeout(resetDel,3000);}
md.onclick=cfmDel;
ms.addEventListener('click',function(){
var n=mn.value.trim(),u=mu.value.trim();
if(!n){mn.focus();mn.style.borderColor='var(--danger)';return;}
if(!u){mu.focus();mu.style.borderColor='var(--danger)';return;}
mn.style.borderColor='';mu.style.borderColor='';
var obj;
if(isNew){obj={name:n,icon:n.charAt(0),cls:'icon-default',url:u};shortcuts.push(obj);}
else{obj=shortcuts[editIdx];obj.name=n;obj.url=u;if(!obj.icon)obj.icon=n.charAt(0);}
//图标字段:img/bg+icon/auto
if(curIconType==='img'&&iconUrl.value.trim()){obj.img=iconUrl.value.trim().replace(/"/g,'%22');delete obj.bg;}
else if(curIconType==='text'&&iconText.value.trim()){obj.bg=iconColor.value;obj.icon=iconText.value.trim().substring(0,2);delete obj.img;}
else{delete obj.img;delete obj.bg;if(!obj.cls)obj.cls='icon-default';if(!obj.icon)obj.icon=n.charAt(0);}
saveSc();renderSc();closeModal();});
mc.addEventListener('click',closeModal);
mo.addEventListener('click',function(e){if(e.target===mo)closeModal();});
mu.addEventListener('keydown',function(e){if(e.key==='Enter')ms.click();});
mn.addEventListener('keydown',function(e){if(e.key==='Enter')mu.focus();});
// 时钟:分钟变化才更新DOM
var timeEl=document.getElementById('time'),dateEl=document.getElementById('date'),wdArr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],lastMin=-1,lastDay='';
var timeH=document.getElementById('timeH'),timeM=document.getElementById('timeM'),timeS=document.getElementById('timeS');
function updClock(){
var n=new Date(),h=n.getHours(),mi=n.getMinutes(),se=n.getSeconds();
var hh=String(h).padStart(2,'0'),mm=String(mi).padStart(2,'0'),ss=String(se).padStart(2,'0');
var key=hh+':'+mm+':'+ss;
if(key!==lastMin){lastMin=key;if(timeH)timeH.textContent=hh;if(timeM)timeM.textContent=mm;if(timeS)timeS.textContent=ss;}
var ds=n.getFullYear()+'年'+(n.getMonth()+1)+'月'+n.getDate()+'日 '+wdArr[n.getDay()];
if(ds!==lastDay){lastDay=ds;dateEl.textContent=ds;}
setTimeout(updClock,1000-(Date.now()%1000)+30);
}
updClock();
var si=document.getElementById('searchInput'),scClear=document.getElementById('searchClear'),eb=document.getElementById('engineBtn'),ed=document.getElementById('engineDropdown');
var curEngName='必应';
try{var seSaved=localStorage.getItem('via_engine');if(seSaved){var seObj=JSON.parse(seSaved);if(seObj&&findEngine(seObj.name))curEngName=seObj.name;}}catch(e){}
// 搜索引擎: 百度 / 谷歌 / 必应 / 鸭鸭走 / 搜狗 + 自定义引擎(可添加/删除)
var DEFAULT_ENGINES=[
{name:'百度',tpl:'https://www.baidu.com/s?wd=%s'},
{name:'谷歌',tpl:'https://www.google.com/search?q=%s'},
{name:'必应',tpl:'https://www.bing.com/search?q=%s'},
{name:'鸭鸭走',tpl:'https://duckduckgo.com/?q=%s'},
{name:'搜狗',tpl:'https://www.sogou.com/web?query=%s'}
];
var customEngines=[];
try{var ceSaved=localStorage.getItem('via_custom_engines');if(ceSaved){var ceArr=JSON.parse(ceSaved);if(Array.isArray(ceArr))customEngines=ceArr.filter(function(x){return x&&typeof x.name==='string'&&x.name&&x.tpl;}).map(function(x){return({name:x.name,tpl:String(x.tpl).replace(/\{q\}/g,'%s')});});}}catch(e){}
function allEngines(){return DEFAULT_ENGINES.concat(customEngines);}
function findEngine(name){var a=allEngines();for(var i=0;i<a.length;i++){if(a[i].name===name)return a[i];}return null;}
function escEng(s){return String(s==null?'':s).replace(/[<>&"]/g,function(c){return{'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});}
if(!findEngine(curEngName))curEngName='必应';
function saveEngineName(n){curEngName=n;try{localStorage.setItem('via_engine',JSON.stringify({name:n}));}catch(e){}}
function renderEngineList(){
var all=allEngines();
ed.innerHTML=all.map(function(en,i){
var isC=i>=DEFAULT_ENGINES.length,ci=i-DEFAULT_ENGINES.length;
return '<div class="engine-option'+(en.name===curEngName?' active':'')+'" data-name="'+escEng(en.name)+'">'+escEng(en.name)+(isC?'<button type="button" class="engine-del" data-del="'+ci+'" title="删除该引擎">✕</button>':'')+'</div>';
}).join('')+'<div class="engine-option engine-add" id="engineAddItem">添加</div>';
eb.textContent=curEngName;
}
renderEngineList();
// 添加搜索引擎弹窗
var eaOverlay=document.getElementById('engineAddOverlay'),eaName=document.getElementById('engineAddName'),eaUrl=document.getElementById('engineAddUrl'),eaSave=document.getElementById('engineAddSave'),eaCancel=document.getElementById('engineAddCancel');
function openEngineAdd(){if(!eaOverlay)return;eaOverlay.classList.add('active');eaName.value='';eaUrl.value='';eaName.style.borderColor='';eaUrl.style.borderColor='';setTimeout(function(){eaName.focus();},300);}
function closeEngineAdd(){if(eaOverlay)eaOverlay.classList.remove('active');}
function saveEngineAdd(){
var n=eaName.value.trim(),u=eaUrl.value.trim();
if(!n){eaName.focus();eaName.style.borderColor='var(--danger)';return;}
if(!u){eaUrl.focus();eaUrl.style.borderColor='var(--danger)';return;}
u=u.replace(/\{q\}/g,'%s');
if(u.indexOf('%s')<0){if(/[=?]$/.test(u))u+='%s';else u+=(u.indexOf('?')>=0?'&':'?')+'q=%s';}
if(customEngines.some(function(x){return x.name===n&&x.tpl===u;})){showToast('该搜索引擎已存在');return;}
customEngines.push({name:n,tpl:u});
try{localStorage.setItem('via_custom_engines',JSON.stringify(customEngines));}catch(e){}
saveEngineName(n);
renderEngineList();
closeEngineAdd();
showToast('已添加搜索引擎：'+n);
}
if(eaSave)eaSave.addEventListener('click',saveEngineAdd);
if(eaCancel)eaCancel.addEventListener('click',closeEngineAdd);
if(eaOverlay)eaOverlay.addEventListener('click',function(e){if(e.target===eaOverlay)closeEngineAdd();});
if(eaName)eaName.addEventListener('keydown',function(e){if(e.key==='Enter')eaUrl.focus();});
if(eaUrl)eaUrl.addEventListener('keydown',function(e){if(e.key==='Enter')saveEngineAdd();});
si.addEventListener('input',function(){scClear.classList.toggle('visible',si.value.length>0);scheduleSuggest();});
scClear.addEventListener('click',function(){si.value='';scClear.classList.remove('visible');hideSuggest();si.focus();});
si.addEventListener('keydown',function(e){
if(e.key==='Escape'){hideSuggest();return;}
if(e.key!=='Enter')return;
var q=si.value.trim();if(!q)return;
e.preventDefault();
doSearchOrGo(q);
});
eb.addEventListener('click',function(e){e.stopPropagation();hideSuggest();renderEngineList();ed.classList.toggle('show');});
ed.addEventListener('click',function(e){
var del=e.target.closest('.engine-del');
if(del){
e.stopPropagation();
var ci=parseInt(del.dataset.del,10);
if(isNaN(ci)||!customEngines[ci])return;
var removed=customEngines.splice(ci,1)[0];
try{localStorage.setItem('via_custom_engines',JSON.stringify(customEngines));}catch(ex){}
if(removed&&removed.name===curEngName)saveEngineName('必应');
renderEngineList();ed.classList.add('show');
showToast('已删除搜索引擎：'+(removed?removed.name:''));
return;
}
if(e.target.closest('#engineAddItem')){e.stopPropagation();ed.classList.remove('show');openEngineAdd();return;}
var o=e.target.closest('.engine-option');
if(!o||!o.dataset.name)return;
if(findEngine(o.dataset.name))saveEngineName(o.dataset.name);
renderEngineList();ed.classList.remove('show');
si.focus();
});
document.addEventListener('click',function(e){if(!e.target.closest('#searchWrapper'))ed.classList.remove('show');});
// 搜索联想(类似地址栏): 输入网址直接打开 / 书签 / 历史 / 百度联想
var sugBox=document.getElementById('searchSuggest'),sugTimer=null,sugReqSeq=0;
function escSug(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function looksLikeUrl(q){
  if(!q||/\s/.test(q))return false;
  if(/^https?:\/\/\S+$/i.test(q))return true;
  if(/^(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)+([\/?#][^\s]*)?$/i.test(q))return true;
  if(/^\d{1,3}(\.\d{1,3}){3}(:\d+)?([\/?#][^\s]*)?$/.test(q))return true;
  return false;
}
function getSearchHistory(){try{var a=JSON.parse(localStorage.getItem('via_search_history')||'[]');return Array.isArray(a)?a.slice(0,10).filter(function(x){return typeof x==='string'&&x;}):[];}catch(e){return[];}}
function pushSearchHistory(q){q=String(q||'').trim();if(!q)return;var h=getSearchHistory().filter(function(x){return x!==q;});h.unshift(q);try{localStorage.setItem('via_search_history',JSON.stringify(h.slice(0,10)));}catch(e){}}
function buildLocalSuggestions(q){
  var low=String(q||'').toLowerCase(),out=[],seen={};
  function add(text,kind,url){if(!text||seen[text])return;seen[text]=1;out.push({text:String(text),kind:kind,url:url||''});}
  if(q&&looksLikeUrl(q))add(q,'open','');
  if(q){
    getSearchHistory().forEach(function(h){if(h.toLowerCase().indexOf(low)>=0)add(h,'history','');});
    (Array.isArray(shortcuts)?shortcuts:[]).forEach(function(s){
      if(!s||s.w)return;
      var nm=String(s.name||'');
      if(s.f){if(nm.toLowerCase().indexOf(low)>=0)add(nm,'history','');return;}
      if(!nm)return;
      var hit=nm.toLowerCase().indexOf(low)>=0||String(s.url||'').toLowerCase().indexOf(low)>=0;
      if(hit)add(nm,'bookmark',s.url||'');
    });
  }
  return out.slice(0,8);
}
function renderSuggest(items){
  if(!sugBox)return;
  if(!items||!items.length){sugBox.classList.remove('show');sugBox.innerHTML='';return;}
  var icons={open:'🌐',bookmark:'⭐',history:'🕘',search:'🔍'};
  sugBox.innerHTML=items.map(function(it){
    return '<div class="sug-item" data-text="'+escSug(it.text)+'" data-kind="'+(it.kind||'search')+'" data-url="'+escSug(it.url||'')+'"><span class="sug-ico">'+(icons[it.kind]||'🔍')+'</span><span class="sug-text">'+escSug(it.text)+'</span></div>';
  }).join('');
  sugBox.classList.add('show');
}
function hideSuggest(){if(sugBox){sugBox.classList.remove('show');}}
function fetchBaiduSuggest(q,done){
  var seq=++sugReqSeq;
  var cb='bdSug_'+seq+'_'+Math.random().toString(36).slice(2,6);
  var sEl=document.createElement('script');
  var to=setTimeout(function(){cleanup();if(seq===sugReqSeq)done([]);},2500);
  function cleanup(){clearTimeout(to);try{delete window[cb];}catch(e){window[cb]=null;}try{if(sEl.parentNode)sEl.parentNode.removeChild(sEl);}catch(e){}}
  window[cb]=function(data){cleanup();if(seq!==sugReqSeq)return;var arr=(data&&data.s)||[];done(Array.isArray(arr)?arr.map(function(x){return String(x);}):[]);};
  sEl.onerror=function(){cleanup();if(seq===sugReqSeq)done([]);};
  sEl.src='https://suggestion.baidu.com/su?wd='+encodeURIComponent(q)+'&cb='+cb+'&ie=utf-8';
  document.head.appendChild(sEl);
}
function doSearchOrGo(q){
  q=String(q||'').trim();if(!q)return;
  hideSuggest();
  if(looksLikeUrl(q)){
    pushSearchHistory(q);
    window.location.href=/^https?:\/\//i.test(q)?q:'https://'+q;
    return;
  }
  var eng=findEngine(curEngName)||DEFAULT_ENGINES[2];
  pushSearchHistory(q);
  window.location.href=eng.tpl.replace('%s',encodeURIComponent(q));
}
function scheduleSuggest(){
  clearTimeout(sugTimer);
  sugTimer=setTimeout(function(){
    var q=(si.value||'').trim();
    if(!q){renderSuggest([]);return;}
    var local=buildLocalSuggestions(q);
    renderSuggest(local);
    fetchBaiduSuggest(q,function(remote){
      if((si.value||'').trim()!==q)return;
      var merged=local.slice();
      remote.forEach(function(t){
        if(!t)return;
        if(t.toLowerCase().indexOf(q.toLowerCase())<0)return;
        if(!merged.some(function(m){return m.text===t;}))merged.push({text:t,kind:'search',url:''});
      });
      renderSuggest(merged.slice(0,8));
    });
  },160);
}
if(sugBox){
  sugBox.addEventListener('click',function(e){
    var it=e.target.closest('.sug-item');if(!it)return;
    e.stopPropagation();
    hideSuggest();
    var kind=it.dataset.kind,text=it.dataset.text||'',url=it.dataset.url||'';
    if(kind==='open'){pushSearchHistory(text);window.location.href=/^https?:\/\//i.test(text)?text:'https://'+text;return;}
    if(kind==='bookmark'&&url){window.location.href=url;return;}
    si.value=text;
    doSearchOrGo(text);
  });
}
document.addEventListener('click',function(e){if(!e.target.closest('#searchWrapper'))hideSuggest();});
si.addEventListener('focus',function(){if(!(si.value||'').trim()){var h=getSearchHistory().slice(0,6);if(h.length)renderSuggest(h.map(function(x){return{text:x,kind:'history',url:''};}));}});
var so=document.getElementById('settingsOverlay');
function syncIconModeBtns(){document.querySelectorAll('#iconModeSel .mode-btn').forEach(function(b){b.classList.toggle('active',b.dataset.im===iconMode);});}
var settingsBackGuard=false;
document.getElementById('settingsBtn').addEventListener('click',function(){so.classList.add('active');renderThemeSel();syncModeBtns();applyLayout();syncColorInputs();syncIconModeBtns();try{history.pushState({dshSettings:1},location.href,'');settingsBackGuard=true;}catch(e){settingsBackGuard=false;}});
// 手机返回键: 打开设置时先关闭设置, 不退出网页
window.addEventListener('popstate',function(){if(settingsBackGuard){settingsBackGuard=false;so.classList.remove('active');}});
// (编辑已改为长按图标直接编辑，不再有编辑模式按钮)
so.addEventListener('click',function(e){if(e.target===so){so.classList.remove('active');if(settingsBackGuard){settingsBackGuard=false;try{history.back();}catch(e){}}}});
document.querySelectorAll('#modeSelector .mode-btn').forEach(function(b){b.addEventListener('click',function(){curMode=b.dataset.mode;localStorage.setItem('via_mode',curMode);applyTheme();updateBgLayer();showToast('模式已切换');});});
document.querySelectorAll('#iconModeSel .mode-btn').forEach(function(b){b.addEventListener('click',function(){iconMode=b.dataset.im;try{localStorage.setItem('via_icon_mode',iconMode);}catch(e){}syncIconModeBtns();renderSc();showToast(iconMode==='text'?'已切换为文字图标模式':'已切换为图标模式');});});
// (关于页签已移除: 设置内仅保留「使用方法」)
var bf=document.getElementById('bgFileInput');
document.getElementById('bgUploadBtn').addEventListener('click',function(){bf.click();});
bf.addEventListener('change',function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(e){var img=new Image();img.onload=function(){var c=document.createElement('canvas'),w=img.width,h=img.height,mw=800;if(w>mw){h=h*mw/w;w=mw;}c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);var du=c.toDataURL('image/jpeg',0.7);customBg=du;try{localStorage.setItem('via_bg_image',customBg);updateBgLayer();showToast('背景已设置');}catch(ex){showToast('图片过大，请用URL方式');}};img.src=e.target.result;};r.readAsDataURL(f);this.value='';});
document.getElementById('bgUrlBtn').addEventListener('click',function(){var u=prompt('请输入图片URL：');if(u&&u.trim()){customBg=u.trim();localStorage.setItem('via_bg_image',customBg);updateBgLayer();showToast('背景已设置');}});
document.getElementById('bgClearBtn').addEventListener('click',function(){customBg='';localStorage.removeItem('via_bg_image');updateBgLayer();showToast('背景已清除');});
// 导出书签
document.getElementById('exportBtn').addEventListener('click',function(){
var json=JSON.stringify(shortcuts,null,2);
var b=new Blob([json],{type:'application/json'});
var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='bookmarks.json';
document.body.appendChild(a);a.click();document.body.removeChild(a);
setTimeout(function(){URL.revokeObjectURL(a.href);},1500);
showToast('✅ 书签已导出（Via下载的文件名可能为随机名）',4000);
});
var imf=document.getElementById('importFileInput');
document.getElementById('importBtn').addEventListener('click',function(){imf.click();});
imf.addEventListener('change',function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(e){try{var d=JSON.parse(e.target.result);if(Array.isArray(d)&&d.length>0){shortcuts=d;normalizeNotes();sfFolded=shortcuts.length>MAX_VIS;saveSc();renderSc();showToast('已导入 '+d.length+' 个书签');}else{showToast('文件格式不正确');}}catch(ex){showToast('解析失败');}};r.readAsText(f);this.value='';});
document.getElementById('resetBtn').addEventListener('click',function(){if(confirm('确定恢复默认书签？当前书签将被替换。')){shortcuts=JSON.parse(JSON.stringify(defShortcuts));ensureNoteTile();sfFolded=false;saveSc();renderSc();showToast('已恢复默认书签');}});
var dq=window.matchMedia('(prefers-color-scheme: dark)');
dq.addEventListener('change',function(){if(curMode==='auto'){applyTheme();updateBgLayer();}});
// 文件夹: 视图 / 重命名
var fvOverlay=document.getElementById('folderViewOverlay'),fvGrid=document.getElementById('folderViewGrid'),fvTitle=document.getElementById('folderViewTitle'),curFolder=null;
function openFolderView(idx){
  var f=shortcuts[idx];if(!f||!f.f)return;
  curFolder=f;
  fvTitle.textContent='📁 '+f.name;
  renderFolderView();
  fvOverlay.classList.add('active');
}
function renderFolderView(){
  if(!fvGrid)return;
  var items=curFolder?curFolder.items:[];
  if(!items.length){fvGrid.innerHTML='<div class="sc-empty">文件夹是空的，长按拖动书签放上来即可加入</div>';return;}
  var esc=function(v){return String(v==null?'':v).replace(/[<>&]/g,function(c){return{'<':'&lt;','>':'&gt;','&':'&amp;'}[c];});};
  fvGrid.innerHTML=items.map(function(s,i){
    if(s&&s.f){ // 防嵌套: 显示文件夹样式
      return'<div class="shortcut-item fv-item" data-fvi="'+i+'"><button class="sc-delete" type="button" aria-label="移出">✕</button><div class="shortcut-icon folder-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg></div><span class="shortcut-name">'+esc(s.name)+'</span></div>';
    }
    var bg=(s.bg&&/^#[0-9a-fA-F]{3,8}$/.test(s.bg))?s.bg:'#6b7280';
    var ch=s.icon||(s.name||'🔗').charAt(0);
    return'<div class="shortcut-item fv-item" data-fvi="'+i+'"><button class="sc-delete" type="button" aria-label="移出">✕</button><div class="shortcut-icon" style="background:'+bg+'"><span class="icon-fallback">'+esc(ch)+'</span></div><span class="shortcut-name">'+esc(s.name)+'</span></div>';
  }).join('');
}
fvGrid.addEventListener('click',function(e){
  if(suppressClick){suppressClick=false;return;}
  var del=e.target.closest('.sc-delete');
  if(del){
    e.stopPropagation();
    var it=del.closest('.fv-item');if(!it)return;
    var i=parseInt(it.dataset.fvi,10);
    if(!curFolder||!curFolder.items[i])return;
    var item=curFolder.items.splice(i,1)[0];
    shortcuts.push(item);
    if(curFolder.items.length<=1){
      // 只剩一个或空: 自动取消文件夹, 剩余内容放回主页
      var rest=curFolder.items.slice();
      var fi=shortcuts.indexOf(curFolder);
      if(fi>=0)shortcuts.splice(fi,1);
      for(var ri=0;ri<rest.length;ri++)shortcuts.push(rest[ri]);
      curFolder=null;
      saveSc();renderSc();
      fvOverlay.classList.remove('active');
      showToast('文件夹只剩一个，已自动取消');
      return;
    }
    saveSc();renderSc();renderFolderView();
    showToast('已移出到主页');
    return;
  }
  var it2=e.target.closest('.fv-item');if(!it2)return;
  var i=parseInt(it2.dataset.fvi,10);
  var s=curFolder&&curFolder.items[i];
  if(!s)return;
  if(s.f){showToast('暂不支持嵌套文件夹');return;}
  if(s.url){window.location.href=s.url;}
});
// 文件夹内拖动: 长按排序 + 拖到底部「移出」条移出到主页 (手机/桌面通用)
var fvDropZone=document.getElementById('folderDropZone'),fvPressT=null,fvDragItem=null,fvDragStarting=false,fvGhost=null,fvGrabX=0,fvGrabY=0,fvScrollRAF=null;
function fvClearHover(){
  if(fvGrid)fvGrid.querySelectorAll('.shortcut-item').forEach(function(x){x.classList.remove('folder-drop');});
}
function fvEndDrag(){
  fvClearHover();
  if(fvGhost&&fvGhost.parentNode)fvGhost.parentNode.removeChild(fvGhost);
  fvGhost=null;fvDragItem=null;fvDragStarting=false;
  if(fvScrollRAF){cancelAnimationFrame(fvScrollRAF);fvScrollRAF=null;}
  if(fvDropZone)fvDropZone.classList.remove('active');
  if(fvGrid)fvGrid.querySelectorAll('.shortcut-item').forEach(function(x){x.classList.remove('dragging','drag-over');});
}
function fvStartGhost(it,x,y){
  fvDragItem=it;
  var r=it.getBoundingClientRect();
  fvGrabX=x-r.left;fvGrabY=y-r.top;
  fvGhost=it.cloneNode(true);
  fvGhost.classList.add('dragging-ghost');
  fvGhost.classList.remove('pressing','dragging');
  var del=fvGhost.querySelector('.sc-delete');if(del)del.parentNode.removeChild(del);
  fvGhost.style.cssText='position:fixed;left:0;top:0;width:'+r.width+'px;height:'+r.height+'px;margin:0;';
  document.body.appendChild(fvGhost);
  it.classList.add('dragging');
  fvMoveGhost(x,y);
}
function fvMoveGhost(x,y){if(fvGhost){fvGhost.style.left=(x-fvGrabX)+'px';fvGhost.style.top=(y-fvGrabY)+'px';}}
function fvFindItem(x,y){
  var els=Array.prototype.slice.call(fvGrid.querySelectorAll('.shortcut-item'));
  var best=null,bd=1e9;
  for(var k=0;k<els.length;k++){
    if(els[k]===fvDragItem)continue;
    var r=els[k].getBoundingClientRect();
    if(x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom){
      var ccx=r.left+r.width/2,ccy=r.top+r.height/2;
      var d=Math.abs(x-ccx)+Math.abs(y-ccy);
      if(d<bd){bd=d;best=els[k];}
    }
  }
  return best;
}
// 文件夹内让位排序(与主页一致: 越过目标中线才交换)
function fvDragOver(over){
  var from=fvDragItem;if(!from||!over||from===over)return;
  var fi=Array.prototype.indexOf.call(fvGrid.children,from);
  var ti=Array.prototype.indexOf.call(fvGrid.children,over);
  if(fi<ti){fvGrid.insertBefore(from,over.nextSibling);}else{fvGrid.insertBefore(from,over);}
}
function fvPastCenter(over,x,y){
  var r=over.getBoundingClientRect();
  var pi=Array.prototype.indexOf.call(fvGrid.children,fvDragItem);
  var oi=Array.prototype.indexOf.call(fvGrid.children,over);
  var cx=r.left+r.width/2,cy=r.top+r.height/2;
  if(oi>pi)return(x>cx+2)||(y>cy+2);
  if(oi<pi)return(x<cx-2)||(y<cy-2);
  return false;
}
// 拖拽时面板边缘自动滚动
function fvAutoScroll(){
  var sheet=fvOverlay.querySelector('.modal-sheet');
  if(!sheet||!fvGhost)return;
  var r=sheet.getBoundingClientRect(),edge=44,sp=sheet.scrollTop;
  var gr=fvGhost.getBoundingClientRect(),gy=gr.top+gr.height/2;
  if(gy<r.top+edge){sheet.scrollTop-=16;}
  else if(gy>r.bottom-edge){sheet.scrollTop+=16;}
  if(sheet.scrollTop!==sp)fvScrollRAF=requestAnimationFrame(fvAutoScroll);
}
function fvBindDrag(type){
  var rm=type==='touch'?'touchmove':'mousemove',ru=type==='touch'?'touchend':'mouseup';
  function mv(ev){
    if(!fvDragItem)return;
    try{ev.preventDefault();}catch(e){}
    var ptc=ev.touches?ev.touches[0]:ev;
    var x=ptc.clientX,y=ptc.clientY;
    fvMoveGhost(x,y);
    var inDz=false;
    if(fvDropZone){
      var dzr=fvDropZone.getBoundingClientRect();
      inDz=x>=dzr.left-10&&x<=dzr.right+10&&y>=dzr.top-10&&y<=dzr.bottom+10;
      fvDropZone.classList.toggle('active',inDz);
    }
    if(inDz){fvClearHover();return;}
    var over=fvFindItem(x,y);
    if(over&&over!==fvDragItem&&fvPastCenter(over,x,y))fvDragOver(over);
    if(fvScrollRAF){cancelAnimationFrame(fvScrollRAF);fvScrollRAF=null;}
    fvAutoScroll();
  }
  function up(ev){
    document.removeEventListener(rm,mv);document.removeEventListener(ru,up);
    if(fvScrollRAF){cancelAnimationFrame(fvScrollRAF);fvScrollRAF=null;}
    var g=fvGhost,item=fvDragItem;
    var doOut=!!(fvDropZone&&fvDropZone.classList.contains('active'));
    if(item){
      var r=item.getBoundingClientRect();
      if(g){g.style.transition='left .18s ease,top .18s ease,transform .18s ease';g.style.left=r.left+'px';g.style.top=r.top+'px';g.style.transform='scale(1)';}
      if(doOut&&curFolder){
        var idx=Array.prototype.indexOf.call(fvGrid.children,item);
        var moved=curFolder.items.splice(idx,1)[0];
        if(moved)shortcuts.push(moved);
        if(curFolder.items.length<=1){
          // 只剩一个或空: 自动取消文件夹, 剩余内容放回主页
          var rest=curFolder.items.slice();
          var fi=shortcuts.indexOf(curFolder);
          if(fi>=0)shortcuts.splice(fi,1);
          for(var ri=0;ri<rest.length;ri++)shortcuts.push(rest[ri]);
          curFolder=null;
          saveSc();
          suppressClick=true;setTimeout(function(){suppressClick=false;},400);
          showToast('文件夹只剩一个，已自动取消');
          setTimeout(function(){if(g&&g.parentNode)g.parentNode.removeChild(g);fvGhost=null;fvDragItem=null;renderSc();fvOverlay.classList.remove('active');},190);
        }else{
          saveSc();
          suppressClick=true;setTimeout(function(){suppressClick=false;},400);
          showToast('已移出到主页');
          setTimeout(function(){if(g&&g.parentNode)g.parentNode.removeChild(g);fvGhost=null;fvDragItem=null;renderSc();renderFolderView();},190);
        }
      }else if(curFolder){
        // 按 DOM 顺序回写文件夹内顺序并保存
        var order=[];
        fvGrid.querySelectorAll('.shortcut-item').forEach(function(el){
          var i=parseInt(el.dataset.fvi,10);
          if(curFolder.items[i])order.push(curFolder.items[i]);
        });
        if(order.length===curFolder.items.length){curFolder.items=order;saveSc();showToast('排序已保存');}
        suppressClick=true;setTimeout(function(){suppressClick=false;},400);
        setTimeout(function(){if(g&&g.parentNode)g.parentNode.removeChild(g);fvGhost=null;fvDragItem=null;renderFolderView();},190);
      }
    }
    fvClearHover();
    fvDragItem=null;fvDragStarting=false;
    if(fvDropZone)fvDropZone.classList.remove('active');
  }
  document.addEventListener(rm,mv,{passive:false});
  document.addEventListener(ru,up);
}
fvGrid.addEventListener('touchstart',function(e){
  var it=e.target.closest('.shortcut-item');if(!it)return;
  if(e.target.closest('.sc-delete'))return;
  if(fvDragItem)fvEndDrag();
  var t=e.touches[0],sx=t.clientX,sy=t.clientY;
  it.classList.add('pressing');
  fvDragStarting=false;
  fvPressT=setTimeout(function(){
    fvDragStarting=true;
    suppressClick=true;
    it.classList.remove('pressing');
    fvStartGhost(it,sx,sy);
    fvBindDrag('touch');
  },pressDelay);
  var mv2=function(ev){
    var t2=ev.touches[0];
    if(Math.abs(t2.clientX-sx)>10||Math.abs(t2.clientY-sy)>10){
      if(fvDragStarting)return;clearTimeout(fvPressT);it.classList.remove('pressing');
    }
  };
  var up2=function(){
    clearTimeout(fvPressT);
    it.classList.remove('pressing');
    document.removeEventListener('touchmove',mv2);document.removeEventListener('touchend',up2);
    if(fvDragStarting)fvDragStarting=false;
  };
  document.addEventListener('touchmove',mv2,{passive:true});
  document.addEventListener('touchend',up2);
},true);
fvGrid.addEventListener('mousedown',function(e){
  if(e.button!==0)return;
  var it=e.target.closest('.shortcut-item');if(!it)return;
  if(e.target.closest('.sc-delete'))return;
  if(fvDragItem)fvEndDrag();
  var sx=e.clientX,sy=e.clientY;
  fvDragStarting=false;
  fvPressT=setTimeout(function(){fvDragStarting=true;suppressClick=true;it.classList.remove('pressing');fvStartGhost(it,sx,sy);fvBindDrag('mouse');},pressDelay);
  var mM=function(ev){if(Math.abs(ev.clientX-sx)>10||Math.abs(ev.clientY-sy)>10){if(fvDragStarting)return;clearTimeout(fvPressT);}};
  var mU=function(){clearTimeout(fvPressT);fvDragStarting=false;document.removeEventListener('mousemove',mM);document.removeEventListener('mouseup',mU);};
  document.addEventListener('mousemove',mM);document.addEventListener('mouseup',mU);
});
// 拖动中断保护(文件夹内)
document.addEventListener('touchcancel',function(){if(fvDragItem){fvEndDrag();renderFolderView();}});
fvOverlay.addEventListener('click',function(e){if(e.target===fvOverlay)fvOverlay.classList.remove('active');});
document.getElementById('folderRenameBtn').addEventListener('click',function(){if(curFolder)showRename(curFolder);});
var frOverlay=document.getElementById('folderRenameOverlay'),frInput=document.getElementById('folderNameInput'),renameTarget=null;
function openFolderRename(idx){
  var f=shortcuts[idx];if(!f||!f.f)return;
  showRename(f);
}
function showRename(f){
  renameTarget=f;
  frInput.value=f.name||'';
  frInput.style.borderColor='';
  frOverlay.classList.add('active');
}
function saveFolderName(){
  var n=frInput.value.trim();
  if(!n){frInput.focus();frInput.style.borderColor='var(--danger)';return;}
  frInput.style.borderColor='';
  if(renameTarget){renameTarget.name=n;saveSc();renderSc();if(curFolder&&fvTitle)fvTitle.textContent='📁 '+n;}
  frOverlay.classList.remove('active');
  showToast('文件夹已重命名');
}
document.getElementById('folderNameSave').addEventListener('click',saveFolderName);
document.getElementById('folderNameCancel').addEventListener('click',function(){frOverlay.classList.remove('active');});
frOverlay.addEventListener('click',function(e){if(e.target===frOverlay)frOverlay.classList.remove('active');});
frInput.addEventListener('keydown',function(e){if(e.key==='Enter')saveFolderName();});
// 删除文件夹(内容放回主页, 不丢失)
function deleteFolder(f){
  if(!f||!f.f)return;
  var idx=shortcuts.indexOf(f);
  if(idx<0)return;
  var items=f.items||[];
  shortcuts.splice.apply(shortcuts,[idx,1].concat(items));
  saveSc();renderSc();
  frOverlay.classList.remove('active');
  showToast('文件夹已删除，内容保留');
}
var folderDelBtn=document.getElementById('folderDelBtn');
if(folderDelBtn)folderDelBtn.addEventListener('click',function(){
  if(!renameTarget)return;
  if(!this.dataset.arm){this.dataset.arm='1';this.textContent='确认';setTimeout(function(){if(folderDelBtn){delete folderDelBtn.dataset.arm;folderDelBtn.textContent='🗑 删除文件夹';}},2500);return;}
  delete this.dataset.arm;this.textContent='🗑 删除文件夹';
  deleteFolder(renameTarget);renameTarget=null;
});
// 记事本小组件(Markdown·可拖动·支持多个)
function escNote(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function inlineMd(s){
var tokens=[];
function tok(html){tokens.push(html);return '\u0000'+(tokens.length-1)+'\u0000';}
s=s.replace(/`([^`]+)`/g,function(m,c){return tok('<code>'+c+'</code>');});
s=s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,function(m,t,u){return (u&&/^(https?:\/\/|#)/i.test(u))?tok('<a href="'+u+'" target="_blank" rel="noopener">'+t+'</a>'):t;});
s=s.replace(/\*\*([^*]+)\*\*/g,function(m,t){return '<strong>'+t+'</strong>';});
s=s.replace(/\*([^*]+)\*/g,function(m,t){return '<em>'+t+'</em>';});
s=s.replace(/(https?:\/\/[^\s<>"']+)/g,function(m){return '<a href="'+m+'" target="_blank" rel="noopener">'+m+'</a>';});
s=s.replace(/\u0000(\d+)\u0000/g,function(m,i){return tokens[+i];});
return s;
}
function mdToHtml(md){
var lines=String(md==null?'':md).replace(/\r\n?/g,'\n').split('\n');
var out=[],inCode=false,codeBuf=[],list=null;
function flushList(){if(list){out.push('<'+list.type+'>'+list.items.join('')+'</'+list.type+'>');list=null;}}
for(var i=0;i<lines.length;i++){
var line=lines[i];
if(/^\s*```/.test(line)){
if(inCode){out.push('<pre><code>'+escNote(codeBuf.join('\n'))+'</code></pre>');codeBuf=[];inCode=false;}
else{inCode=true;}
continue;
}
if(inCode){codeBuf.push(line);continue;}
if(/^\s*$/.test(line)){flushList();continue;}
var h=line.match(/^(#{1,6})\s+(.*)$/);
if(h){flushList();var lv=Math.min(6,h[1].length+1);out.push('<h'+lv+'>'+inlineMd(escNote(h[2]))+'</h'+lv+'>');continue;}
if(/^>\s?/.test(line)){flushList();out.push('<blockquote>'+inlineMd(escNote(line.replace(/^>\s?/,'')))+'</blockquote>');continue;}
if(/^[-*+]\s+/.test(line)){if(!list||list.type!=='ul'){flushList();list={type:'ul',items:[]};}list.items.push('<li>'+inlineMd(escNote(line.replace(/^[-*+]\s+/,'')))+'</li>');continue;}
if(/^\d+\.\s+/.test(line)){if(!list||list.type!=='ol'){flushList();list={type:'ol',items:[]};}list.items.push('<li>'+inlineMd(escNote(line.replace(/^\d+\.\s+/,'')))+'</li>');continue;}
if(/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())){flushList();out.push('<hr>');continue;}
flushList();
out.push('<p>'+inlineMd(escNote(line))+'</p>');
}
if(inCode){out.push('<pre><code>'+escNote(codeBuf.join('\n'))+'</code></pre>');}
flushList();
return out.join('');
}
var notesOverlay=document.getElementById('notesOverlay'),notesListEl=document.getElementById('notesList'),notesViewEl=document.getElementById('notesView'),notesEditBtn=document.getElementById('notesEditBtn'),notesDelBtn=document.getElementById('notesDelBtn'),notesCloseBtn=document.getElementById('notesClose'),notesNewBtn=document.getElementById('notesNewBtn');
var noteEditorOverlay=document.getElementById('noteEditorOverlay'),neCancelBtn=document.getElementById('neCancelBtn'),neDoneBtn=document.getElementById('neDoneBtn'),notesNameEl=document.getElementById('notesName'),notesInputEl=document.getElementById('notesInput'),noteToolsEl=document.getElementById('noteTools');
var notebooks=[],curNoteId='',noteEditorBackup=null;
// 键盘适配: 跟随可视视口高度, 输入法弹出时编辑器区域自动缩短, 内容不被遮挡
function syncKeyboardLayout(){
  var vv=window.visualViewport;
  var h=(vv&&vv.height)?vv.height:window.innerHeight;
  if(h>0)document.documentElement.style.setProperty('--app-h',Math.round(h)+'px');
}
if(window.visualViewport){
  window.visualViewport.addEventListener('resize',syncKeyboardLayout);
  window.visualViewport.addEventListener('scroll',syncKeyboardLayout);
}
window.addEventListener('resize',syncKeyboardLayout);
window.addEventListener('orientationchange',function(){setTimeout(syncKeyboardLayout,200);});
syncKeyboardLayout();
function notesLoad(){try{var a=JSON.parse(localStorage.getItem('via_notes')||'[]');if(Array.isArray(a)){notebooks=a.filter(function(n){return n&&n.id&&typeof n.text==='string';}).map(function(n){return{id:String(n.id),name:n.name||'未命名',text:String(n.text||''),updated:n.updated||0};});return;}}catch(e){}notebooks=[];}
function notesSave(){try{localStorage.setItem('via_notes',JSON.stringify(notebooks));}catch(e){}}
function genNoteId(){return 'n'+Date.now()+Math.random().toString(36).slice(2,6);}
function ensureNoteTile(){if(shortcuts.some(function(s){return s&&s.w;}))return;shortcuts.push({w:1,name:'记事本'});saveSc();}
function normalizeNotes(){
  notesLoad();
  var changed=false;
  for(var i=shortcuts.length-1;i>=0;i--){
    var s=shortcuts[i];
    if(s&&s.w&&typeof s.text==='string'){
      notebooks.push({id:genNoteId(),name:s.name||'记事本',text:s.text,updated:Date.now()});
      shortcuts.splice(i,1);changed=true;
    }
  }
  if(changed)saveSc();
  var legacy='';try{legacy=localStorage.getItem('via_note')||'';}catch(e){}
  if(legacy&&legacy.trim()){
    notebooks.push({id:genNoteId(),name:'记事本',text:legacy,updated:Date.now()});
    try{localStorage.removeItem('via_note');}catch(e){}
    changed=true;
  }
  if(changed)notesSave();
  ensureNoteTile();
}
function noteById(id){for(var i=0;i<notebooks.length;i++)if(notebooks[i].id===id)return notebooks[i];return null;}
function curNote(){return noteById(curNoteId);}
function sortedNotes(){return notebooks.slice().sort(function(a,b){return (b.updated||0)-(a.updated||0);});}
function fmtNoteDate(ts){if(!ts)return'';var d=new Date(ts);function p(n){return n<10?'0'+n:''+n;}return (d.getMonth()+1)+'-'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes());}
function latestNote(){if(!notebooks.length)return null;var ls=notebooks.slice().sort(function(a,b){return (b.updated||0)-(a.updated||0);});return ls[0];}
function noteSnippet(){
  var last=latestNote();
  if(!last)return'';
  var t='';
  String(last.text||'').split('\n').some(function(l){l=l.trim();if(l&&!/^[#>\-\*\s]*$/.test(l)){t=l;return true;}return false;});
  t=t.replace(/^[#>\-\*\s]+/,'').replace(/[`*_\[\]()#]/g,'').trim();
  return t.slice(0,60);
}
function renderNotesList(){
  if(!notesListEl)return;
  var list=notebooks;
  notesListEl.innerHTML=list.length?list.map(function(n){
    return '<div class="note-item'+(n.id===curNoteId?' active':'')+'" data-id="'+escNote(n.id)+'"><span class="note-item-name">'+escNote(n.name)+'</span><span class="note-item-date">'+fmtNoteDate(n.updated)+'</span></div>';
  }).join(''):'<div class="note-item none" style="cursor:default;opacity:.6">暂无笔记</div>';
}
function renderNoteMain(){
  var n=curNote();
  if(!n){notesViewEl.innerHTML='<div class="notes-empty">暂无笔记<br>点左边「＋ 新建」开始写吧</div>';return;}
  var raw=(n.text||'').trim();
  notesViewEl.innerHTML=raw?mdToHtml(n.text):'<div class="notes-empty">这条笔记还是空的<br>点下方「✏️ 编辑」开始写</div>';
}
function renderNotesPanel(){renderNotesList();renderNoteMain();var nc=document.getElementById('notesCount');if(nc)nc.textContent=notebooks.length+' 篇';}
function selectNote(id){curNoteId=id;renderNotesPanel();}
function openNotes(){
  if(!notesOverlay)return;
  notesLoad();
  curNoteId=notebooks.length?notebooks[0].id:'';
  notesOverlay.classList.add('active');
  renderNotesPanel();
}
function closeNotes(){if(notesOverlay)notesOverlay.classList.remove('active');}
// 全屏编辑器(键盘适配)
function openNoteEditor(){
  var n=curNote();if(!n)return;
  noteEditorBackup={id:n.id,name:n.name||'',text:n.text||''};
  notesNameEl.value=n.name||'';
  notesInputEl.value=n.text||'';
  if(noteEditorOverlay)noteEditorOverlay.classList.add('active');
  syncKeyboardLayout();
  try{setTimeout(function(){notesInputEl.focus();},100);}catch(e){}
}
function closeNoteEditor(){if(noteEditorOverlay)noteEditorOverlay.classList.remove('active');}
function doneNoteEdit(){
  var n=curNote();
  if(n){
    var name=(notesNameEl.value||'').trim();
    n.name=name||'未命名';
    n.text=notesInputEl.value;
    n.updated=Date.now();
    notesSave();
    renderSc();
  }
  noteEditorBackup=null;
  closeNoteEditor();
  if(notesOverlay&&notesOverlay.classList.contains('active'))renderNotesPanel();
}
function cancelNoteEdit(){
  var n=curNote();
  if(n&&noteEditorBackup&&noteEditorBackup.id===n.id){
    // 新建笔记且什么都没写: 直接丢弃
    var empty=(notesInputEl.value||'').trim()===''&&(!noteEditorBackup.text||noteEditorBackup.text.trim()==='')&&(!noteEditorBackup.name||noteEditorBackup.name==='新笔记');
    if(empty){
      for(var i=0;i<notebooks.length;i++){if(notebooks[i].id===n.id){notebooks.splice(i,1);break;}}
      notesSave();
      var list=sortedNotes();
      curNoteId=list.length?list[0].id:'';
      renderSc();
    }
  }
  noteEditorBackup=null;
  closeNoteEditor();
  if(notesOverlay&&notesOverlay.classList.contains('active'))renderNotesPanel();
}
function newNoteInPanel(){
  var id=genNoteId();
  notebooks.push({id:id,name:'新笔记',text:'',updated:Date.now()});
  notesSave();
  curNoteId=id;
  renderSc();
  renderNotesPanel();
  openNoteEditor();
}
function deleteNoteCurrent(){
  var n=curNote();if(!n)return;
  if(!notesDelBtn)return;
  if(!notesDelBtn.dataset.arm){notesDelBtn.dataset.arm='1';notesDelBtn.textContent='确认';setTimeout(function(){if(notesDelBtn){delete notesDelBtn.dataset.arm;notesDelBtn.textContent='🗑 删除';}},2500);return;}
  delete notesDelBtn.dataset.arm;notesDelBtn.textContent='🗑 删除';
  for(var i=0;i<notebooks.length;i++){if(notebooks[i].id===curNoteId){notebooks.splice(i,1);break;}}
  notesSave();
  var list=sortedNotes();
  curNoteId=list.length?list[0].id:'';
  renderSc();
  renderNotesPanel();
  showToast('笔记已删除');
}
function applyNoteMd(kind){
  var ta=notesInputEl;if(!ta)return;
  var val=ta.value||'';
  var start=(ta.selectionStart==null)?val.length:ta.selectionStart;
  var end=(ta.selectionEnd==null)?start:ta.selectionEnd;
  function setVal(v,s,e){ta.value=v;try{ta.focus();ta.setSelectionRange(s,e);}catch(x){}}
  var sel=val.slice(start,end);
  function wrap(mark,ph){
    if(sel){setVal(val.slice(0,start)+mark+sel+mark+val.slice(end),start+mark.length,end+mark.length);return;}
    var ins=mark+(ph||'')+mark;
    setVal(val.slice(0,start)+ins+val.slice(end),start+mark.length,start+mark.length+(ph?ph.length:0));
  }
  if(kind==='h1'||kind==='h2'||kind==='h3'){
    var n=parseInt(kind.charAt(1),10);
    var ls=val.lastIndexOf('\n',start-1)+1;
    var le=val.indexOf('\n',end);if(le<0)le=val.length;
    var line=val.slice(ls,le);
    var m=line.match(/^(#{1,6})\s+/);
    var newLine;
    if(m&&m[1].length===n){newLine=line.replace(/^(#{1,6})\s+/,'');}
    else{newLine=['','# ','## ','### '][Math.min(n,3)]+line.replace(/^(#{1,6})\s+/,'');}
    var nv=val.slice(0,ls)+newLine+val.slice(le);
    setVal(nv,ls,ls+newLine.length);
    return;
  }
  if(kind==='b'){wrap('**','加粗');return;}
  if(kind==='i'){wrap('*','斜体');return;}
  if(kind==='code'){wrap('`','代码');return;}
  if(kind==='ul'||kind==='quote'){
    var mk=(kind==='ul')?'- ':'> ';
    var ls2=val.lastIndexOf('\n',start-1)+1;
    var nv2=val.slice(0,ls2)+mk+val.slice(ls2);
    setVal(nv2,start+mk.length,end+mk.length);
    return;
  }
  if(kind==='link'){
    if(sel){var ins2='['+sel+'](https://)';setVal(val.slice(0,start)+ins2+val.slice(end),start+ins2.length,start+ins2.length);}
    else{var ins3='[链接](https://)';setVal(val.slice(0,start)+ins3+val.slice(end),start+1,start+1+2);}
    return;
  }
}
// 笔记列表长按拖动排序(互动)
var nlPressT=null,nlDragEl=null,nlGhost=null,nlGX=0,nlGY=0,nlMoved=false,nlSX=0,nlSY=0,nlBusy=false;
function nlClean(){
  if(nlGhost&&nlGhost.parentNode)nlGhost.parentNode.removeChild(nlGhost);
  if(nlDragEl)nlDragEl.classList.remove('nl-dragging');
  nlGhost=null;nlDragEl=null;nlMoved=false;
}
function nlCommitOrder(){
  var order=[],map={};
  notebooks.forEach(function(n){map[n.id]=n;});
  var els=notesListEl.querySelectorAll('.note-item[data-id]');
  for(var k=0;k<els.length;k++){var id=els[k].dataset.id;if(map[id]){order.push(map[id]);delete map[id];}}
  for(var id2 in map)order.push(map[id2]);
  notebooks=order;notesSave();
}
function nlFindEl(x,y){
  var els=notesListEl.querySelectorAll('.note-item[data-id]');
  for(var k=0;k<els.length;k++){
    var el=els[k];if(el===nlDragEl)continue;
    var r=el.getBoundingClientRect();
    if(x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom)return el;
  }
  return null;
}
function nlReorder(from,to){
  if(!from||!to||from===to)return;
  var fi=Array.prototype.indexOf.call(notesListEl.children,from);
  var ti=Array.prototype.indexOf.call(notesListEl.children,to);
  if(fi<ti)notesListEl.insertBefore(from,to.nextSibling);else notesListEl.insertBefore(from,to);
}
function nlStartDrag(el,x,y){
  nlDragEl=el;
  var r=el.getBoundingClientRect();
  nlGX=x-r.left;nlGY=y-r.top;
  nlGhost=el.cloneNode(true);
  nlGhost.removeAttribute('data-id');
  nlGhost.className='note-item nl-ghost';
  nlGhost.style.cssText='position:fixed;left:0;top:0;width:'+r.width+'px;min-height:'+r.height+'px;margin:0;z-index:999;pointer-events:none;opacity:.95;box-shadow:0 8px 24px rgba(0,0,0,.28);transform:scale(1.04);transition:none;';
  document.body.appendChild(nlGhost);
  el.classList.add('nl-dragging');
  nlMoveGhost(x,y);
}
function nlMoveGhost(x,y){if(nlGhost){nlGhost.style.left=(x-nlGX)+'px';nlGhost.style.top=(y-nlGY)+'px';}}
function nlBind(type){
  var rm=type==='touch'?'touchmove':'mousemove',ru=type==='touch'?'touchend':'mouseup';
  function mv(ev){
    if(!nlDragEl)return;
    try{ev.preventDefault();}catch(e){}
    var ptc=ev.touches?ev.touches[0]:ev;
    var x=ptc.clientX,y=ptc.clientY;
    if(!nlMoved&&(Math.abs(x-nlSX)>8||Math.abs(y-nlSY)>8))nlMoved=true;
    nlMoveGhost(x,y);
    if(nlMoved){var over=nlFindEl(x,y);if(over)nlReorder(nlDragEl,over);}
  }
  function up(){
    document.removeEventListener(rm,mv);document.removeEventListener(ru,up);
    var moved=nlMoved;
    nlClean();
    if(moved){nlCommitOrder();nlBusy=true;setTimeout(function(){nlBusy=false;},400);renderNotesPanel();}
  }
  document.addEventListener(rm,mv,{passive:false});
  document.addEventListener(ru,up);
}
function nlTouchStart(e){
  var it=e.target.closest('.note-item[data-id]');if(!it)return;
  var t=e.touches[0];nlSX=t.clientX;nlSY=t.clientY;
  var fired=false;
  nlPressT=setTimeout(function(){fired=true;nlStartDrag(it,nlSX,nlSY);nlBind('touch');},220);
  var mx=function(ev){var t2=ev.touches[0];if(Math.abs(t2.clientX-nlSX)>10||Math.abs(t2.clientY-nlSY)>10){if(!fired)clearTimeout(nlPressT);}};
  var ux=function(){clearTimeout(nlPressT);document.removeEventListener('touchmove',mx);document.removeEventListener('touchend',ux);};
  document.addEventListener('touchmove',mx,{passive:true});
  document.addEventListener('touchend',ux);
}
function nlMouseDown(e){
  if(e.button!==0)return;
  var it=e.target.closest('.note-item[data-id]');if(!it)return;
  nlSX=e.clientX;nlSY=e.clientY;
  var fired=false;
  nlPressT=setTimeout(function(){fired=true;nlStartDrag(it,nlSX,nlSY);nlBind('mouse');},220);
  var mx=function(ev){if(Math.abs(ev.clientX-nlSX)>10||Math.abs(ev.clientY-nlSY)>10){if(!fired)clearTimeout(nlPressT);}};
  var ux=function(){clearTimeout(nlPressT);document.removeEventListener('mousemove',mx);document.removeEventListener('mouseup',ux);};
  document.addEventListener('mousemove',mx);document.addEventListener('mouseup',ux);
}
function bindNotesUI(){
  if(notesListEl)notesListEl.addEventListener('click',function(e){if(nlBusy)return;var it=e.target.closest('.note-item');if(!it||!it.dataset.id)return;selectNote(it.dataset.id);});
  if(notesNewBtn)notesNewBtn.addEventListener('click',newNoteInPanel);
  if(notesEditBtn)notesEditBtn.addEventListener('click',openNoteEditor);
  if(notesDelBtn)notesDelBtn.addEventListener('click',deleteNoteCurrent);
  if(notesCloseBtn)notesCloseBtn.addEventListener('click',closeNotes);
  if(notesOverlay)notesOverlay.addEventListener('click',function(e){if(e.target===notesOverlay)closeNotes();});
  if(neCancelBtn)neCancelBtn.addEventListener('click',cancelNoteEdit);
  if(neDoneBtn)neDoneBtn.addEventListener('click',doneNoteEdit);
  if(notesNameEl)notesNameEl.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();notesInputEl.focus();}});
  if(noteToolsEl){
    noteToolsEl.addEventListener('mousedown',function(e){e.preventDefault();});
    noteToolsEl.addEventListener('click',function(e){var b=e.target.closest('button[data-md]');if(!b)return;applyNoteMd(b.dataset.md);});
  }
  if(notesListEl){
    notesListEl.addEventListener('touchstart',nlTouchStart,{passive:true});
    notesListEl.addEventListener('mousedown',nlMouseDown);
  }
  var nnb=document.getElementById('newNoteBtn');
  if(nnb)nnb.addEventListener('click',function(){
    var soEl=document.getElementById('settingsOverlay');if(soEl)soEl.classList.remove('active');
    if(settingsBackGuard){settingsBackGuard=false;try{history.back();}catch(e){}}
    openNotes();
    newNoteInPanel();
  });
}
bindNotesUI();
// 初始化: 迁移旧数据 + 确保小组件存在
normalizeNotes();
applyTheme();updateBgLayer();sfFolded=shortcuts.length>MAX_VIS;renderSc();applyLayout();applyTimeColors();si.focus();
})();
