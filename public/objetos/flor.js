import * as THREE from "./three.module.js"
export default function flor01({x,y,z}){

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
flor1.rotation.set(-1.57,0,0);
flor1.castShadow = true;

var flor2 = flor1.clone();
//scene.add(flor2);
flor2.position.set(0,0,-20);
flor2.rotation.set(-1.57,0,0);
flor2.castShadow = true;

var flor3 = flor1.clone();
//scene.add(flor3);
flor3.position.set(0,0,-39);
flor3.rotation.set(-1.57,0,0);
flor3.castShadow = true;

var flor4 = flor1.clone();
//scene.add(flor4);
flor4.position.set(0,0,-58);
flor4.rotation.set(-1.57,0,0);
flor4.castShadow = true;

var flor5 = flor1.clone();
//scene.add(flor5);
flor5.position.set(0,0,-77);
flor5.rotation.set(-1.57,0,0);
flor5.castShadow = true;

var flor6 = flor1.clone();

//scene.add(flor6);
flor6.position.set(80,0,-97);
flor6.rotation.set(-1.57,0,0);
flor6.castShadow = true;

var flor7 = flor1.clone();

//scene.add(flor7);
flor7.position.set(60,0,-97);
flor7.rotation.set(-1.57,0,0);
flor7.castShadow = true;

var flor8 = flor1.clone();

//scene.add(flor8);
flor8.position.set(40,0,-97);
flor8.rotation.set(-1.57,0,0);
flor8.castShadow = true;

var flor9 = flor1.clone();

//scene.add(flor9);
flor9.position.set(20,0,-97);
flor9.rotation.set(-1.57,0,0);
flor9.castShadow = true;



var flores = new THREE.Group();
flores.add(flor1,flor2,flor3,flor4,flor5);

//scene.add(flores);
flores.castShadow = true;

var flores2 = flores.clone();

//scene.add(flores2);
flores2.position.set(0,0,-97);
flores2.castShadow = true;

var flores3 = flores.clone();

//scene.add(flores3);
flores3.position.set(0,0,-117);
flores3.castShadow = true;

var flores4 = flores.clone();

//scene.add(flores4);
flores4.position.set(20,0,-117);
flores4.castShadow = true;

var flores5 = flores.clone();

//scene.add(flores5);
flores5.position.set(40,0,-117);
flores5.castShadow = true;

var flores6 = flores.clone();

//scene.add(flores6);
flores6.position.set(60,0,-117);
flores6.castShadow = true;

var flores7 = flores.clone();

//scene.add(flores7);
flores7.position.set(80,0,-117);
flores7.castShadow = true;

var flores8 = flores.clone();

//scene.add(flores8);
flores8.position.set(80,0,0);
flores8.castShadow = true;

var flores9 = flores.clone();

//scene.add(flores9);
flores9.position.set(60,0,0);
flores9.castShadow = true;

var flores10 = flores.clone();

//scene.add(flores10);
flores10.position.set(40,0,0);
flores10.castShadow = true;

var flores11 = flores.clone();

//scene.add(flores11);
flores11.position.set(20,0,0);
flores11.castShadow = true;

const FLOR = new THREE.Group();
FLOR.add(flores,flores2,flores3,flores4,flores5,flores6,flores7,flores8,flores9,flores10,flores11,flor6,flor7,flor8,flor9); 

FLOR.position.set(x,y,z);

return FLOR;

}