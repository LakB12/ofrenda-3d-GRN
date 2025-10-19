import * as THREE from "./three.module.js"
export default function farol01({x,y,z}){

var geometry01 = new THREE.BoxGeometry(3,110,3);
var material01 = new THREE.MeshLambertMaterial({
color: 0x000000, side: THREE.DoubleSide


});
var mesh01 = new THREE.Mesh(geometry01,material01);
 //scene.add(mesh01);
mesh01.position.set(0,0,0);
mesh01.castShadow = true;

var mesh03 = new THREE.Mesh(geometry01,material01);
 //scene.add(mesh03);
mesh03.position.set(90,0,0);
mesh03.castShadow = true;

//
var geometry02 = new THREE.TorusGeometry(50,0.3,8,16,2.1);
var material02 = new THREE.MeshLambertMaterial({
color: 0x999999, side: THREE.DoubleSide

});
var mesh02 = new THREE.Mesh(geometry02,material02);
 //scene.add(mesh02);
mesh02.position.set(45,80,0);
mesh02.rotation.set(0,0,-2.61799);
mesh02.castShadow = true;

//
var geometry04 = new THREE.CapsuleGeometry(1,1,4,8); 
var material04 = new THREE.MeshLambertMaterial({
color: 0xE382FF, side: THREE.DoubleSide

});
var mesh04 = new THREE.Mesh(geometry04,material04);
 //scene.add(mesh04);
mesh04.position.set(45,28.5,0);
mesh04.rotation.set(0,0,0);
mesh04.castShadow = true;

var geometry05 = new THREE.CapsuleGeometry(1,1,4,8); 
var material05 = new THREE.MeshLambertMaterial({
color: 0xE382FF, side: THREE.DoubleSide

});
var mesh05 = new THREE.Mesh(geometry05,material05);
 //scene.add(mesh05);
mesh05.position.set(25,32.5,0);
mesh05.rotation.set(0,0,0);
mesh05.castShadow = true;

var geometry06 = new THREE.CapsuleGeometry(1,1,4,8); 
var material06 = new THREE.MeshLambertMaterial({
color: 0xE382FF, side: THREE.DoubleSide

});
var mesh06 = new THREE.Mesh(geometry06,material06);
 //scene.add(mesh06);
mesh06.position.set(10,42.5,0);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;

var geometry07 = new THREE.CapsuleGeometry(1,1,4,8); 
var material07 = new THREE.MeshLambertMaterial({
color: 0xE382FF, side: THREE.DoubleSide

});
var mesh07 = new THREE.Mesh(geometry07,material07);
 //scene.add(mesh07);
mesh07.position.set(80,42.5,0);
mesh07.rotation.set(0,0,0);
mesh07.castShadow = true;

var geometry08 = new THREE.CapsuleGeometry(1,1,4,8); 
var material08 = new THREE.MeshLambertMaterial({
color: 0xE382FF, side: THREE.DoubleSide

});
var mesh08 = new THREE.Mesh(geometry08,material08);
 //scene.add(mesh08);
mesh08.position.set(65,32.5,0);
mesh08.rotation.set(0,0,0);
mesh08.castShadow = true;

const FAROL = new THREE.Group();
FAROL.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08); 

FAROL.position.set(x,y,z);

return FAROL;

}