import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

import * as THREE from "../js/three.module.js";
export default function dios({x, y, z}){


//Base de la cruz

var ggeometry01 = new RoundedBoxGeometry (20,2,6,15,0.8);
var gmaterial01 = new THREE.MeshLambertMaterial({
color: 0x4A2A00, side: THREE.DoubleSide
});

var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.position.set(0,1,0);
gmesh01.castShadow = true;

//cruz
var ggeometry02 = new RoundedBoxGeometry (3,25,1.5,5,0.8);
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial01);
//scene.add(gmesh02);
gmesh02.position.set(0,13,0);
gmesh02.castShadow = true;


var ggeometry03 = new RoundedBoxGeometry (3,15,1.5,5,0.8);
var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial01);
//scene.add(gmesh03);
gmesh03.position.set(0,20,0);
gmesh03.rotation.set(0,0,1.57)
gmesh03.castShadow = true;


//cruz blanca pequeña

var ggeometry04 = new RoundedBoxGeometry (0.5,18,1,15,0.8);
var gmaterial02 = new THREE.MeshLambertMaterial({
color: 0xB5B5B5, side: THREE.DoubleSide
});

var gmesh04 = new THREE.Mesh(ggeometry04,gmaterial02);
//scene.add(gmesh04);
gmesh04.position.set(0,14,0.5);
gmesh04.castShadow = true;


var ggeometry05 = new RoundedBoxGeometry (10,0.5,1.5,5,0.8);
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial02);
//scene.add(gmesh05);
gmesh05.position.set(0,20,0.4);
gmesh05.rotation.set(0,0,0)
gmesh05.castShadow = true;
      
//segunda base 
var ggeometry06 = new RoundedBoxGeometry (16,2,4,15,0.8);
var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial01);
//scene.add(gmesh06);
gmesh06.position.set(0,2.2,0);
gmesh06.castShadow = true;


//Decoracion rayos

var ggeometry07 = new RoundedBoxGeometry (0.2,10,0.2,15,0.8);
var gmaterial03 = new THREE.MeshLambertMaterial({
color: 0xFDFF75, side: THREE.DoubleSide
});

var gmesh07 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh07);
gmesh07.position.set(0,20,0);
gmesh07.rotation.set(0,0,0.785);
gmesh07.castShadow = true;

var gmesh08 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh08);
gmesh08.position.set(0,20,0);
gmesh08.rotation.set(0,0,2.355);
gmesh08.castShadow = true;


var ggeometry08 = new RoundedBoxGeometry (0.2,8,0.2,15,0.8);
var gmesh09 = new THREE.Mesh(ggeometry08,gmaterial03);
//scene.add(gmesh09);
gmesh09.position.set(0,20,0);
gmesh09.rotation.set(0,0,2.1);
gmesh09.castShadow = true;


var gmesh10 = new THREE.Mesh(ggeometry08,gmaterial03);
//scene.add(gmesh10);
gmesh10.position.set(0,20,0);
gmesh10.rotation.set(0,0,4.2);
gmesh10.castShadow = true;

var gmesh11 = new THREE.Mesh(ggeometry08,gmaterial03);
//scene.add(gmesh11);
gmesh11.position.set(0,20,0);
gmesh11.rotation.set(0,0,0.6);
gmesh11.castShadow = true;

var gmesh12 = new THREE.Mesh(ggeometry08,gmaterial03);
//scene.add(gmesh12);
gmesh12.position.set(0,20,0);
gmesh12.rotation.set(0,0,2.6);
gmesh12.castShadow = true;

/*
var cruz = new THREE.Group();
cruz.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,gmesh07,gmesh08,
gmesh09,gmesh10,gmesh11,gmesh12);
scene.add(cruz);
*/

const Crucifijo = new THREE.Group();
Crucifijo.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,gmesh07,gmesh08,
gmesh09,gmesh10,gmesh11,gmesh12);
Crucifijo.position.set(x,y,z);

return Crucifijo;
}
