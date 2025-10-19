import * as THREE from "./three.module.js"
export default function tapeteaserrin({x,y,z}){

//Tapete aserrín 
var geometryASE = new THREE.BoxGeometry(150,0.5,150);
var TextureASE = new THREE.TextureLoader().load("./assets/tapete.jpg");
var materialASE = new THREE.MeshLambertMaterial({map: TextureASE});
var meshASE = new THREE.Mesh(geometryASE,materialASE);
//scene.add(meshASE);
meshASE.position.set(0,12,210);
meshASE.castShadow = true;
meshASE.rotation.set(0,0,3.14159);

var geometry02 = new THREE.TorusKnotGeometry(3,1.5,100,16,1,8); 
var material02 = new THREE.MeshLambertMaterial({
color: 0xFFC640, side: THREE.DoubleSide


});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,0,0);
mesh02.castShadow = true;

var geometry03 = new THREE.TorusKnotGeometry(5.5,2,100,16,1,8); 
var material03 = new THREE.MeshLambertMaterial({
color: 0xFFAF40, side: THREE.DoubleSide


});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,0,-3);
mesh03.castShadow = true;

var geometry04 = new THREE.TorusKnotGeometry(6.5,3,100,16,1,8); 
var material04 = new THREE.MeshLambertMaterial({
color: 0xFF9640, side: THREE.DoubleSide


});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,0,-6);
mesh04.castShadow = true;

var geometry05 = new THREE.SphereGeometry(2,32,16); 
var material05 = new THREE.MeshLambertMaterial({
color: 0xFFDF80, side: THREE.DoubleSide


});
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(0,0,1);
mesh05.castShadow = true;

var flor1 = new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);
flor1.rotation.set(-1.57,0,0);
flor1.castShadow = true;
flor1.position.set(-10,14,290);
flor1.scale.set(0.5,0.5,0.5)

var flor2 = flor1.clone();
//scene.add(flor2);
flor2.position.set(1,14,290);
flor2.castShadow = true;

var flor3 = flor1.clone();

flor3.position.set(12,14,290);
flor3.castShadow = true;

var flor4 = flor1.clone();

flor4.position.set(23,14,290);
flor4.castShadow = true;

var flor5 = flor1.clone();

flor5.position.set(34,14,290);
flor5.castShadow = true;

var flor6 = flor1.clone();

flor6.position.set(45,14,290);
flor6.castShadow = true;


var flor7 = flor1.clone();

flor7.position.set(56,14,290);
flor7.castShadow = true;


var flor8 = flor1.clone();

flor8.position.set(67,14,290);
flor8.castShadow = true;


var flor9 = flor1.clone();

flor9.position.set(78,14,290);
flor9.castShadow = true;


var flor10 = flor1.clone();
flor10.position.set(78,14,279);
flor10.castShadow = true;

var flor11 = flor1.clone();
flor11.position.set(-78,14,279);
flor11.castShadow = true;

var flor12 = flor1.clone();
flor12.position.set(78,14,268);
flor12.castShadow = true;

var flor13 = flor1.clone();
flor13.position.set(-78,14,268);
flor13.castShadow = true;

var flor14 = flor1.clone();
flor14.position.set(78,14,257);
flor14.castShadow = true;

var flor15 = flor1.clone();
flor15.position.set(-78,14,257);
flor15.castShadow = true;

var flor16 = flor1.clone();
flor16.position.set(78,14,246);
flor16.castShadow = true;

var flor17 = flor1.clone();
flor17.position.set(-78,14,246);
flor17.castShadow = true;

var flor18 = flor1.clone();
flor18.position.set(78,14,235);
flor18.castShadow = true;

var flor19 = flor1.clone();
flor19.position.set(-78,14,235);
flor19.castShadow = true

var flor18 = flor1.clone();
flor18.position.set(78,14,235);
flor18.castShadow = true;

var flor19 = flor1.clone();
flor19.position.set(-78,14,235);
flor19.castShadow = true


var flor20 = flor1.clone();
flor20.position.set(78,14,224);
flor20.castShadow = true;

var flor21 = flor1.clone();
flor21.position.set(-78,14,224);
flor21.castShadow = true


var flor22 = flor1.clone();
flor22.position.set(78,14,213);
flor22.castShadow = true;

var flor23 = flor1.clone();
flor23.position.set(-78,14,213);
flor23.castShadow = true

var flor24 = flor1.clone();
flor24.position.set(78,14,202);
flor24.castShadow = true;

var flor25 = flor1.clone();
flor25.position.set(-78,14,202);
flor25.castShadow = true


var flor26 = flor1.clone();
flor26.position.set(78,14,191);
flor26.castShadow = true;

var flor27 = flor1.clone();
flor27.position.set(-78,14,191);
flor27.castShadow = true

var flor28 = flor1.clone();
flor28.position.set(78,14,180);
flor28.castShadow = true;

var flor29 = flor1.clone();
flor29.position.set(-78,14,180);
flor29.castShadow = true


var flor30 = flor1.clone();
flor30.position.set(78,14,169);
flor30.castShadow = true;

var flor31 = flor1.clone();
flor31.position.set(-78,14,169);
flor31.castShadow = true

var flor32 = flor1.clone();
flor32.position.set(-78,14,158);
flor32.castShadow = true


var flor33 = flor1.clone();
flor33.position.set(78,14,158);
flor33.castShadow = true;

var flor34 = flor1.clone();
flor34.position.set(-78,14,147);
flor34.castShadow = true

var flor35 = flor1.clone();
flor35.position.set(78,14,147);
flor35.castShadow = true

var flor36 = flor1.clone();
flor36.position.set(-78,14,136);
flor36.castShadow = true

var flor37 = flor1.clone();
flor37.position.set(78,14,136);
flor37.castShadow = true

var flor38 = flor1.clone();
flor38.position.set(-67,14,133);
flor38.castShadow = true

var flor39 = flor1.clone();
flor39.position.set(67,14,133);
flor39.castShadow = true

var flor40 = flor1.clone();
flor40.position.set(-56,14,133);
flor40.castShadow = true

var flor41 = flor1.clone();
flor41.position.set(56,14,133);
flor41.castShadow = true

var flor42 = flor1.clone();
flor42.position.set(-45,14,133);
flor42.castShadow = true

var flor43 = flor1.clone();
flor43.position.set(45,14,133);
flor43.castShadow = true

var flor44 = flor1.clone();
flor44.position.set(-10,14,290);
flor44.castShadow = true

var flor45 = flor1.clone();
flor45.position.set(-21,14,290);
flor45.castShadow = true

var flor46 = flor1.clone();
flor46.position.set(-32,14,290);
flor46.castShadow = true

var flor47 = flor1.clone();
flor47.position.set(-43,14,290);
flor47.castShadow = true

var flor48 = flor1.clone();
flor48.position.set(-54,14,290);
flor48.castShadow = true

var flor49 = flor1.clone();
flor49.position.set(-65,14,290);
flor49.castShadow = true

var flor50 = flor1.clone();
flor50.position.set(-76,14,290);
flor50.castShadow = true


const TAPETEASERRIN = new THREE.Group();
TAPETEASERRIN.add(meshASE,flor1,flor2,flor3,flor4,flor5,flor6,flor7,flor8,flor9,flor10,flor11,flor12,flor13,flor14,flor15,flor16,flor17,flor18,flor19,flor20,flor21,flor22,flor23,flor24,flor25,flor26,flor27,flor28,flor29,flor30,flor31,flor32,flor33,flor34,flor35,flor36,flor37,flor38,flor39,flor40,flor41,flor42,flor43,flor44,flor45,flor46,flor47,flor48,flor49,flor50); 

TAPETEASERRIN.position.set(x,y,z);

return TAPETEASERRIN;

}