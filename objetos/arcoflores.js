import * as THREE from "./three.module.js"
export default function arcoflores1({x,y,z}){

    //OBJETOS 2D
var geometry01 = new THREE.BoxGeometry(80,0.5,80);
var material01 = new THREE.MeshLambertMaterial({
color: 0x6D4EA3, side: THREE.DoubleSide


});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);

//
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
flor1.rotation.set(0,0,0);
flor1.castShadow = true;

var flor2 = flor1.clone();
//scene.add(flor2);
flor2.position.set(0,20,0);
flor2.castShadow = true;

var flor3 = flor1.clone();
//scene.add(flor3);
flor3.position.set(0,40,0);
flor3.castShadow = true;

var flor4 = flor1.clone();
//scene.add(flor4);
flor4.position.set(0,60,0);
flor4.castShadow = true;

var flor5 = flor1.clone();
//scene.add(flor5);
flor5.position.set(0,80,0);
flor5.castShadow = true;


var flor6 = flor1.clone();
//scene.add(flor6);
flor6.position.set(0,100,0);
flor6.castShadow = true;

var flor7 = flor1.clone();
//scene.add(flor7);
flor7.position.set(0,100,0);
flor7.castShadow = true;


var flor8 = flor1.clone();
//scene.add(flor8);
flor8.position.set(0,120,0);
flor8.castShadow = true;


var flor9 = flor1.clone();
//scene.add(flor9);
flor9.position.set(0,140,0);
flor9.castShadow = true;

//arriba del arco

var flor10 = flor1.clone();
//scene.add(flor10);
flor10.position.set(40,185,0);
flor10.castShadow = true;

var flor11 = flor1.clone();
//scene.add(flor11);
flor11.position.set(8,160,0);
flor11.castShadow = true;

var flor12 = flor1.clone();
//scene.add(flor12);
flor12.position.set(21,175,0);
flor12.castShadow = true;

var flor13 = flor1.clone();
//scene.add(flor13);
flor13.position.set(62,190,0);
flor13.castShadow = true;

var flor14 = flor1.clone();
//scene.add(flor14);
flor14.position.set(86,193,0);
flor14.scale.set(1.3,1.3,1.3);
flor14.castShadow = true;

var flor15 = flor1.clone();
//scene.add(flor15);
flor15.position.set(110,190,0);
flor15.castShadow = true;

var flor16 = flor1.clone();
//scene.add(flor16);
flor16.position.set(130,185,0);
flor16.castShadow = true;

var flor17 = flor1.clone();
//scene.add(flor17);
flor17.position.set(150,175,0);
flor17.castShadow = true;

var flor18 = flor1.clone();
//scene.add(flor18);
flor18.position.set(163,160,0);
flor18.castShadow = true;

var flor19 = flor1.clone();
//scene.add(flor19);
flor19.position.set(170,140,0);
flor19.castShadow = true;

var flor20 = flor1.clone();
//scene.add(flor20);
flor20.position.set(170,120,0);
flor20.castShadow = true;

var flor21 = flor1.clone();
//scene.add(flor21);
flor21.position.set(170,100,0);
flor21.castShadow = true;

var flor22 = flor1.clone();
//scene.add(flor22);
flor22.position.set(170,80,0);
flor22.castShadow = true;

var flor23 = flor1.clone();
//scene.add(flor23);
flor23.position.set(170,60,0);
flor23.castShadow = true;

var flor24 = flor1.clone();
//scene.add(flor24);
flor24.position.set(170,40,0);
flor24.castShadow = true;

var flor25 = flor1.clone();
//scene.add(flor25);
flor25.position.set(170,20,0);
flor25.castShadow = true;

var flor26 = flor1.clone();
//scene.add(flor26);
flor26.position.set(170,0,0);
flor26.castShadow = true;

var flor27 = flor1.clone();
//scene.add(flor27);
flor27.position.set(0,120,0);
flor27.castShadow = true;

const ARCOFLORES = new THREE.Group();
ARCOFLORES.add(flor1,flor2,flor3,flor4,flor5,flor6,flor7,flor9,flor10,flor11,flor12,flor13,flor14,flor15,flor16,flor17,flor18,flor19,flor20,flor21,flor22,flor23,flor24,flor25,flor26,flor27); 

ARCOFLORES.position.set(x,y,z);

return ARCOFLORES;

}