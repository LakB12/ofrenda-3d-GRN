import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

import * as THREE from "../js/three.module.js";
export default function E09({x, y, z}){



//Florero
var ggeometry01 = new THREE.SphereGeometry(15);
var gmaterial02 = new THREE.MeshLambertMaterial({
    color:0xDE5C00, side: THREE.DoubleSide
});
var gmesh1 = new THREE.Mesh(ggeometry01,gmaterial02);
//scene.add(gmesh1);
gmesh1.position.set(0,15,0);
gmesh1.castShadow = true; 


var ggeometry02 = new THREE.CylinderGeometry(10,6,20,20);
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial02);
//scene.add(gmesh02);
gmesh02.position.set(0,30,0);
gmesh02.castShadow = true; 


//Decoración Flor

var ggeometry03 = new THREE.SphereGeometry(2);
var gmaterial03 = new THREE.MeshLambertMaterial({
    color:0xC70000, side: THREE.DoubleSide
});
var gmesh3 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh3);
gmesh3.position.set(0,15,14);
gmesh3.castShadow = true; 


var ggeometry04 = new THREE.SphereGeometry(2);
var gmaterial04 = new THREE.MeshLambertMaterial({
    color:0xFAE441, side: THREE.DoubleSide
});
var gmesh4 = new THREE.Mesh(ggeometry04,gmaterial04);
//scene.add(gmesh4);
gmesh4.position.set(0,19,13);
gmesh4.castShadow = true; 

var gmesh5 = new THREE.Mesh(ggeometry04,gmaterial04);
//scene.add(gmesh5);
gmesh5.position.set(0,11,13);
gmesh5.castShadow = true; 

var gmesh6 = new THREE.Mesh(ggeometry04,gmaterial04);
//scene.add(gmesh6);
gmesh6.position.set(4,15,13);
gmesh6.castShadow = true; 

var gmesh11 = new THREE.Mesh(ggeometry04,gmaterial04);
//scene.add(gmesh11);
gmesh11.position.set(-4,15,13);
gmesh11.castShadow = true; 

var ggeometry05 = new THREE.SphereGeometry(1);
var gmesh7 = new THREE.Mesh(ggeometry05,gmaterial04);
//scene.add(gmesh7);
gmesh7.position.set(-3,12,14);
gmesh7.castShadow = true; 

var gmesh8 = new THREE.Mesh(ggeometry05,gmaterial04);
//scene.add(gmesh8);
gmesh8.position.set(3,12,14);
gmesh8.castShadow = true; 

var gmesh9 = new THREE.Mesh(ggeometry05,gmaterial04);
//scene.add(gmesh9);
gmesh9.position.set(3,18,14);
gmesh9.castShadow = true; 

var gmesh10 = new THREE.Mesh(ggeometry05,gmaterial04);
//scene.add(gmesh10);
gmesh10.position.set(-3,18,14);
gmesh10.castShadow = true; 


//decoracion de puntos flor
var florp = new THREE.Group();
florp.add(gmesh3,gmesh4,gmesh5,gmesh6,gmesh7,gmesh8,gmesh9,gmesh10,gmesh11)
//scene.add(florp);
florp.castShadow = true; 



var florp2 = florp.clone();
//scene.add(florp2);
florp2.rotation.set(0,3.14,0);
florp2.castShadow = true;

var florp3 = florp.clone();
//scene.add(florp3);
florp3.rotation.set(0,1.57,0);
florp3.castShadow = true;

var florp4 = florp.clone();
//scene.add(florp4);
florp4.rotation.set(0,4.71,0);
florp4.castShadow = true;



//franjas verde
var ggeometry06 = new THREE.TorusGeometry(8.5,1,5,25);
var gmaterial05 = new THREE.MeshLambertMaterial({
    color:0x12821F, side: THREE.DoubleSide
});
var gmesh11 = new THREE.Mesh(ggeometry06,gmaterial05);
//scene.add(gmesh11);
gmesh11.position.set(0,28,0);
gmesh11.rotation.set(1.57,0,0);
gmesh11.castShadow = true;


var ggeometry06 = new THREE.TorusGeometry(9.5,1,5,25);
var gmesh14 = new THREE.Mesh(ggeometry06,gmaterial05);
//scene.add(gmesh14);
gmesh14.position.set(0,39.5,0);
gmesh14.rotation.set(1.57,0,0);
gmesh14.castShadow = true;



//franjas lila

var ggeometry07 = new THREE.TorusGeometry(11.5,1,5,25);
var gmaterial06 = new THREE.MeshLambertMaterial({
    color:0xFF75FA, side: THREE.DoubleSide
});
var gmesh12 = new THREE.Mesh(ggeometry07,gmaterial06);
//scene.add(gmesh12);
gmesh12.position.set(0,6,0);
gmesh12.rotation.set(1.57,0,0);
gmesh12.castShadow = true;

var ggeometry08 = new THREE.TorusGeometry(12,1,5,25);
var gmesh13 = new THREE.Mesh(ggeometry08,gmaterial06);
//scene.add(gmesh13);
gmesh13.position.set(0,23,0);
gmesh13.rotation.set(1.57,0,0);
gmesh13.castShadow = true;

var ggeometry09 = new THREE.TorusGeometry(9,1,5,25);
var gmesh15 = new THREE.Mesh(ggeometry09,gmaterial06);
//scene.add(gmesh15);
gmesh15.position.set(0,34,0);
gmesh15.rotation.set(1.57,0,0);
gmesh15.castShadow = true;



//flores de cempasúchil




var geometry02 = new RoundedBoxGeometry (3,13,4,22,2);
var material02 = new THREE.MeshLambertMaterial({
color: 0x4600A8, side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
//mesh02.position.set(0,5,0);
mesh02.rotation.set(0,0,0);
mesh02.castShadow = true;

var mesh03 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh03);
//mesh03.position.set(0,5,0);
mesh03.rotation.set(0,0,0.785);
mesh03.castShadow = true;

//
var mesh04 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh04);
//mesh04.position.set(0,5,0)
mesh04.rotation.set(0,0,1.57);
mesh04.castShadow = true;

var mesh05 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh05);
//mesh05.position.set(0,5,0)
mesh05.rotation.set(0,0,2.355);
mesh05.castShadow = true;


//FLor 1 o figura 1🌸🌸🌸
var flor01 = new THREE.Group();
flor01.add(mesh02,mesh03,mesh04,mesh05)
//scene.add(flor01)
//flor01.position.set(0,5,0);
flor01.castShadow = true; 


//flor02 🌸🌸🌸🌸
var flor02 = flor01.clone();
//scene.add(flor02)
//flor02.position.set(-15,5,0);
flor02.castShadow = true; 

var flor03 = flor01.clone();
//scene.add(flor03)
//flor03.position.set(-15,5,0)
flor03.rotation.set(0,0.785,0);
flor03.castShadow = true; 

var flor04 = flor01.clone();
//scene.add(flor04)
//flor04.position.set(-15,5,0)
flor04.rotation.set(0,1.57,0);
flor04.castShadow = true; 

var flor05 = flor01.clone();
//scene.add(flor05)
//flor05.position.set(-15,5,0)
flor05.rotation.set(0,2.355,0);
flor05.castShadow = true; 

//FLOR COMPLETA 1 🌸🌸👌
var tamal1 = new THREE.Group();
tamal1.add(flor02,flor03,flor04,flor05);
//scene.add(tamal1);
tamal1.position.set(-10,45,0);
tamal1.castShadow = true; 


var tamal2 = tamal1.clone();
//scene.add(tamal2);
tamal2.position.set(10,46,0);
tamal2.rotation.set(0.785,0,0);
tamal2.castShadow = true; 

var tamal3 = tamal1.clone();
//scene.add(tamal3);
tamal3.position.set(0,47,-10);
tamal3.rotation.set(-0.785,0,0);
tamal3.castShadow = true; 


var tamal4 = tamal1.clone();
//scene.add(tamal4);
tamal4.position.set(0,46.5,10);
tamal4.rotation.set(-0.285,0,0);
tamal4.castShadow = true; 


var tamal5 = tamal1.clone();
//scene.add(tamal5);
tamal5.position.set(-8,44,8);
tamal5.scale.set(0.6,0.6,0.6)
tamal5.rotation.set(-0.785,0,0);
tamal5.castShadow = true; 

var tamal6 = tamal1.clone();
//scene.add(tamal6);
tamal6.position.set(8,46,8);
tamal6.scale.set(0.7,0.7,0.7)
tamal6.rotation.set(0.785,0,0);
tamal6.castShadow = true; 

var tamal7 = tamal1.clone();
//scene.add(tamal7);
tamal7.position.set(8,46,-8);
tamal7.scale.set(0.5,0.5,0.5)
tamal7.rotation.set(-0.785,0,0);
tamal7.castShadow = true; 


var tamal8 = tamal1.clone();
//scene.add(tamal8);
tamal8.position.set(-8,46,-8);
tamal8.scale.set(0.7,0.7,0.7)
tamal8.rotation.set(0.785,0,0);
tamal8.castShadow = true; 


var tamal9 = tamal1.clone();
//scene.add(tamal9);
tamal9.position.set(0,53,0);
tamal9.scale.set(1.1,1.1,1.1);
tamal9.rotation.set(0.285,0,0);
tamal9.castShadow = true; 


//TODO COMPLETO
/*
var completo = new THREE.Group();
completo.add(tamal1,tamal2,tamal3,tamal4,tamal5,tamal6,tamal7,tamal8,tamal9,florp,florp2,florp3,florp4,
    gmesh12,gmesh13,gmesh15,gmesh11,gmesh14,gmesh1,gmesh02);
scene.add(completo);
*/

const ESC09 = new THREE.Group();
ESC09.add(tamal1,tamal2,tamal3,tamal4,tamal5,tamal6,tamal7,tamal8,tamal9,florp,florp2,florp3,florp4,
    gmesh12,gmesh13,gmesh15,gmesh11,gmesh14,gmesh1,gmesh02);
ESC09.position.set(x,y,z);

return ESC09;

}
