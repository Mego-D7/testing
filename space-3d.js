let front_page=document.getElementById('front-page');
let btn=document.querySelector('.btn');
let appinfoset=document.getElementById('3d-setinfo');
const loadingBar = document.querySelector('.loading-bar');
const spaceship = document.querySelector('.spaceship');
const fireTrail = document.querySelector('.fire-trail');
let footer=document.querySelector('.footer');
let img_sun;
let sun;
let screen_width=window.innerWidth;

const scene=new THREE.Scene();

window.onload=()=>{
list('check-a-4','list-a-4');
img_sun='./3d-imgs/Sun-A304.jpg';
Choose_page('bar_c1','home');
}
window.onbeforeunload=()=>{scroll(0,0);};
window.addEventListener('resize',()=>{screen_width=window.innerWidth});

function list(checked,li) {
let check=['check-a-1','check-a-2','check-a-3','check-a-4'];
let lista=['list-a-1','list-a-2','list-a-3','list-a-4'];
let Apperance=['./3d-imgs/Sun-A131.jpg','./3d-imgs/Sun-A171.jpeg','./3d-imgs/Sun-A193.jpg','./3d-imgs/Sun-A304.jpg'];
for (let i = 0; i < check.length; i++) {
let checkmode=document.getElementById(check[i]);
let listcheck=document.getElementById(lista[i]);
checkmode.checked=false;
listcheck.style.background='rgba(255, 255, 255, 0.1)';
listcheck.style.textShadow='0 0 0 transparent';
setTimeout(() => {
if(checked==check[i]){sun.material.map = new THREE.TextureLoader().load(Apperance[i]);}
}, 100);
}

let checker=document.getElementById(checked);
let listchecked=document.getElementById(li);
checker.checked=true;
listchecked.style.background='linear-gradient(to right,#d1b7fc3f,#ffffff33,#d2ffee3a)';
listchecked.style.textShadow='0 0 2px #e6ffffd0';

}


function entermouse(hoverenter,checker) {
let hoverinner=document.getElementById(hoverenter);
let checking=document.getElementById(checker);
if(checking.checked==false){
hoverinner.style.background='linear-gradient(to right,#d1b6fc26,#ffffff33,#d1ffed26)';
hoverinner.style.textShadow='0 0 1.5px #e6ffffd0';
}}

function leavemouse(hoverleave,checker) {
let hoverouter=document.getElementById(hoverleave);
let checking=document.getElementById(checker);
if(checking.checked==false){
hoverouter.style.background='rgba(255, 255, 255, 0.1)';
hoverouter.style.textShadow='0 0 0 transparent';
}}

function active_menu(clicked) {
let sthov=['men1','men2','men3','men4'];
for (let i = 0; i < sthov.length; i++) {
let unhov=document.getElementById(sthov[i]);
unhov.style.background='transparent';
}
let hov=document.getElementById(clicked);
hov.style.background='var(--colorlisthover)';
}

let i=document.getElementById('i');
let i_info=document.getElementById('i_info');
let btn_back=document.querySelector('.Btn');

function I_active() {
let I_logo;
let I_S_info;
let I_width;
if(screen_width<=400 && screen_width>0){I_logo='50%';I_S_info='60%';I_width='140px';}
if(screen_width<=450 && screen_width>400){I_logo='50%';I_S_info='60%';I_width='170px';}
if(screen_width<=600 && screen_width>450){I_logo='55%';I_S_info='65%';I_width='190px';}
if(screen_width<=700 && screen_width>600){I_logo='62%';I_S_info='69%';I_width='190px';}
if(screen_width<=800 && screen_width>700){I_logo='69%';I_S_info='75%';I_width='190px';}
if(screen_width<=1000 && screen_width>800){I_logo='67%';I_S_info='73%';I_width='220px';}
if(screen_width<=1200 && screen_width>1000){I_logo='73%';I_S_info='78%';I_width='230px';}
if(screen_width<=screen_width && screen_width>1200){I_logo='77%';I_S_info='80.5%';I_width='250px';}

i.style.animation='no'
i.style.pointerEvents='none';
btn_back.style.pointerEvents='none';
i.style.opacity='0%'
i.style.marginLeft=I_logo;
i_info.style.marginLeft=I_S_info;
setTimeout(() => {
i.style.display='none';
btn_back.style.pointerEvents='auto';
}, 1100);
i_info.style.width=I_width;
}

let words_inner=document.getElementById('inner-write');

function closeer() {
let I_logo;
if(screen_width<=400 && screen_width>0){I_logo='86%';}
if(screen_width<=450 && screen_width>400){I_logo='88%';}
if(screen_width<=600 && screen_width>450){I_logo='91%';}
if(screen_width<=700 && screen_width>600){I_logo='92%';}
if(screen_width<=800 && screen_width>700){I_logo='92%';}
if(screen_width<=1000 && screen_width>800){I_logo='93%';}
if(screen_width<=1200 && screen_width>1000){I_logo='95%';}
if(screen_width<=screen_width && screen_width>1100){I_logo='96%';}

words_inner.innerHTML='';
i.style.display='inline-block';
setTimeout(() => {i.style.marginLeft=I_logo; i_info.style.marginLeft='100%';i.style.opacity='100%'}, 0);
setTimeout(() => {
i.style.pointerEvents='auto';
i.style.animation='i-effect 1.3s linear forwards infinite'
}, 1100);
i_info.style.width='0px';
}

function writing() {
words_inner.innerHTML='';
let words='hello,world';
for (let i = 0; i < words.length; i++) {
let time=i+1;
setTimeout(() => {
words_inner.innerHTML+=words[i];
}, 250*time);
}}

front_page.classList.add('app');
front_page.classList.remove('unapp');

function btn_3d_view() {
front_page.classList.remove('app');
front_page.classList.add('unapp');
btn.style.opacity='0%';
btn.style.pointerEvents='none';
loadingBar.style.display='inline-block';
// Show the loading bar
loadingBar.style.opacity = '1'; // Make it visible

// Reset the spaceship and fire trail
spaceship.style.animation = 'none';
fireTrail.style.transition = 'none';
fireTrail.style.width = '0';

// Trigger reflow
spaceship.offsetHeight;
fireTrail.offsetHeight;

// Start the animations
spaceship.style.animation = 'moveSpaceship 1s linear forwards';
fireTrail.style.transition = 'width 1s linear';
fireTrail.style.width = '100%';

setTimeout(() => {
front_page.style.display='none';
document.body.style.backgroundImage='none';
document.body.style.overflow='hidden';
appinfoset.style.display='block';
scroll(0,0);
}, 1950);

Outer_Space();
}

//sun
setTimeout(() => {
const textureLoader = new THREE.TextureLoader();
const sunTexture =  textureLoader.load(img_sun); 
const sunGeometry = new THREE.SphereGeometry(40, 100, 100);
const sunMaterial = new THREE.MeshBasicMaterial({
map: sunTexture,
emissiveMap: sunTexture
});
sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(-80, 0, 10);
scene.add(sun);
}, 500);

//earth

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
earthGroup.position.set(70, -10, 10);
scene.add(earthGroup);

const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(15, 14);
const material = new THREE.MeshPhongMaterial({
  map: loader.load("./textures/00_earthmap1k.jpg"),
  specularMap: loader.load("./textures/02_earthspec1k.jpg"),
  bumpMap: loader.load("./textures/01_earthbump1k.jpg"),
  bumpScale: 0.04,
});
material.map.colorSpace = THREE.SRGBColorSpace;
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load("./textures/03_earthlights1k.jpg"),
    blending: THREE.AdditiveBlending,
  });
  const lightsMesh = new THREE.Mesh(geometry, lightsMat);
  earthGroup.add(lightsMesh);

  const cloudsMat = new THREE.MeshStandardMaterial({
    map: loader.load("./textures/04_earthcloudmap.jpg"),
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
    alphaMap: loader.load('./textures/05_earthcloudmaptrans.jpg')
  });
  const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
  cloudsMesh.scale.setScalar(1.003);
  earthGroup.add(cloudsMesh);

let camera_X;
let zoom;
function Outer_Space() {
setTimeout(() => {
const renderer=new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

if(screen_width<=400 && screen_width>0){zoom=320;camera_X=100;}
if(screen_width<=450 && screen_width>400){zoom=320;camera_X=100;}
if(screen_width<=600 && screen_width>450){zoom=300;camera_X=50;}
if(screen_width<=700 && screen_width>600){zoom=300;camera_X=100;}
if(screen_width<=800 && screen_width>700){zoom=220;camera_X=50;}
if(screen_width<=1000 && screen_width>800){zoom=200;camera_X=100;}
if(screen_width<=1200 && screen_width>1000){zoom=160;camera_X=100;}
if(screen_width<=screen_width && screen_width>1200){zoom=150;camera_X=10;};

const camera=new THREE.PerspectiveCamera(80,innerWidth/innerHeight,0.1,1000);
camera.position.set(camera_X,5,910);
scene.add(camera);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
color: 0xffffff,
size:0.01,
});

const starVertices = [];
for (let i = 0; i < 100000; i++) {
    const x = (Math.random() - 0.5) * 6000;
    const y = (Math.random() - 0.5) * 6000;
    const z = (Math.random() - 0.5) * 6000;
    starVertices.push(x, y, z);    
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
sunLight.position.set(-10, 0.5, 1.5);
scene.add(sunLight);

function animate() {
    requestAnimationFrame(animate);
    sun.rotation.y+=0.01;
    earthMesh.rotation.y += 0.003;
    lightsMesh.rotation.y += 0.003;
    cloudsMesh.rotation.y += 0.004;
    stars.rotation.y+=0.0003;
    controls.update();
    renderer.render(scene, camera);

    if (camera.position.z>zoom) {camera.position.z+=-10;}
    if (camera.position.z<=zoom-1) {controls.enableZoom=true;}else{controls.enableZoom=false;}
}
animate();
}, 1000);
}

let pages=['bar_c1','bar_c2','bar_c3','bar_c4','bar_c5'];
let H_pages=['home','about-us','resources','faqs','gallery'];
let Top_C=['830px','1900px','885px','900px','1250px'];
let Top_O=['955px','2000px','985px','1000px','1350px'];
let mode_page;
let Margin_page;
let F_fqs;
let home_mode;

function Choose_page(content,page){
scroll(0,0);
footer.style.transition='0s';
let head=document.getElementById('head2');
head.innerHTML=page;
Margin_page=page;

for (let H = 0; H < H_pages.length; H++) {
let pages_style=document.getElementById(H_pages[H]);
pages_style.style.display='none';
}

for (let i = 0; i < pages.length; i++) {
let N_pages=document.getElementById(pages[i]);
N_pages.style.scale='1';
N_pages.style.background='transparent';
}
let S_page=document.getElementById(content);
mode_page=content;
S_page.style.scale='1.07';
S_page.style.background='#6088ad71';

let Page_mode=document.getElementById(page);
Page_mode.style.display='inline-block';

for (let L = 1; L < 5; L++) {
let pages_load=document.getElementById(H_pages[L]);
pages_load.style.marginTop='100px';
if(Margin_page==H_pages[L]){footer.style.marginTop=Top_O[L]}
}

if(Margin_page=='faqs'){footer.style.marginTop=F_fqs;}
if(Margin_page=='home'){footer.style.marginTop=home_mode[0];}
}

function Choose_enter(S_choose_En) {
  let S_choose_E=document.getElementById(S_choose_En);
  if (mode_page!=S_choose_En) {
  S_choose_E.style.scale='1.05';
  S_choose_E.style.background='#6088ad5d';
  }
}

function Choose_leave(S_choose_Le) {
  let S_choose_L=document.getElementById(S_choose_Le);
  if (mode_page!=S_choose_Le) {
  S_choose_L.style.scale='1';
  S_choose_L.style.background='transparent';
  }
}

let O_P='open';
let footer_mode;
let Top_px;

function information_choose(bar_info){
  let info_pages=document.getElementById(bar_info);
  let margin=document.getElementById(Margin_page);
  footer.style.transition='1s';
  if (O_P=='open') {
  info_pages.style.height='125px';
  if (Margin_page=='home') {Top_px='125px';}
  else{Top_px='100px';}
  margin.style.marginTop= Top_px;
  for (let i = 0; i < Top_O.length; i++) {if(Margin_page==H_pages[i]){footer.style.marginTop=Top_O[i]}}
  O_P='close';
  footer_mode='open';
  home_mode=Top_O;
  }else{
  info_pages.style.height='0';
  margin.style.marginTop= '0';
  for (let i = 0; i < Top_C.length; i++) {if(Margin_page==H_pages[i]){footer.style.marginTop=Top_C[i]}}
  O_P='open';
  footer_mode='close';
  home_mode=Top_C;
  }
  if(Margin_page=='faqs'){footer.style.marginTop=F_fqs;}
}

let loop=0;
let mode_inner='delet';
let mode_show=[];
let F_margin_T=[];

function Show_info_faqs(info,showinfo){
  test='ok';
let clicked=document.getElementById(info);
let solution=document.getElementById(showinfo);
let show=['S','h','o','w',' ','S','o','l','u','t','i','o','n',' ','»'];
let hide=['H','i','d','e',' ','S','o','l','u','t','i','o','n',' ','»'];
let faqs=['faqs0','faqs1','faqs2','faqs3'];

let footer_top=['1140px','1380px','1620px','1860px'];
let footer_untop=['1240px','1480px','1720px','1960px'];
let F_T_M;
if(footer_mode=='open'){F_T_M=footer_untop;}else{F_T_M=footer_top;}
let index=info.substr(4,1);
index=parseInt(index);

if (mode_show.includes(info)==false) {
if (loop==15&&mode_inner=='write') {loop=0;mode_inner='delet'};
if(mode_inner=='delet'){
  for (let o = show.length-1; o > -1 ; o--) {
  setTimeout(() => {
  show.splice(o,1);
  clicked.innerHTML='';
  for (let h = 0; h < show.length; h++) {clicked.innerHTML += show[h];}
  }, 50*loop);
  loop++;
}}
if (loop==15&&mode_inner=='delet') {loop=0;mode_inner='write'};
setTimeout(() => {
if(mode_inner=='write'){
for (let c = 0; c < hide.length; c++) {
setTimeout(() => {clicked.innerHTML += hide[c];}, 50*loop);
loop++
}}}, 700);
solution.style.height='260px';
mode_show[index]=info;
F_margin_T=[];
for (let b = 0; b < mode_show.length; b++) {
if(mode_show[b]!=''&&mode_show[b]!=undefined){F_margin_T.push(mode_show[b]);}}
}
else{

  if (loop==15&&mode_inner=='write') {loop=0;mode_inner='delet'};
  if(mode_inner=='delet'){
    for (let o = hide.length-1; o > -1 ; o--) {
    setTimeout(() => {
      hide.splice(o,1);
    clicked.innerHTML='';
    for (let h = 0; h < hide.length; h++) {clicked.innerHTML += hide[h];}
    }, 50*loop);
    loop++;
  }}
  if (loop==15&&mode_inner=='delet') {loop=0;mode_inner='write'};
  setTimeout(() => {
  if(mode_inner=='write'){
  for (let c = 0; c < show.length; c++) {
  setTimeout(() => {clicked.innerHTML += show[c];}, 50*loop);
  loop++
  }}}, 700);
setTimeout(() => {solution.style.height='0';}, 0); 
mode_show[index]='';
F_margin_T.pop();
}

for (let A = 0; A < faqs.length; A++) {
let active=document.getElementById(faqs[A]);
active.style.pointerEvents='none';
setTimeout(() => {active.style.pointerEvents='auto';}, 800);
}
footer.style.transition='1.4s';
for (let T = 0; T < F_margin_T.length; T++) {
if (F_margin_T.length > 0) {
if(F_margin_T.length==(T+1)){footer.style.marginTop=F_T_M[T];F_fqs=F_T_M[T];}
}}
if(F_margin_T.length == 0 && footer_mode=='close'){footer.style.marginTop='900px';F_fqs='900px';}
if(F_margin_T.length == 0 && footer_mode=='open'){footer.style.marginTop='1000px';F_fqs='1000px';}
}
