import * as THREE from "../js/three.module.js";
export default function mic({x, y, z}){


//cabeza micfrono
var ggeometry01 = new THREE.SphereGeometry(2);
var gmaterial01 = new THREE.MeshLambertMaterial({
    color:0x4D4D4D, side: THREE.DoubleSide
});
var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.position.set(0,13.8,0);
gmesh01.scale.set(1,1,1);
gmesh01.castShadow = true; 


var ggeometry02 = new THREE.SphereGeometry(2.2);
var gmaterial02 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide, wireframe:true
});
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial02);
//scene.add(gmesh02);
gmesh02.position.set(0,14,0);
gmesh02.scale.set(1,1,1);
gmesh02.castShadow = true; 

var ggeometry03 = new THREE.TorusGeometry(1.5,1,3,25);
var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial01);
//scene.add(gmesh03);
gmesh03.position.set(0,14,0);
gmesh03.rotation.set(1.6,0,0);
gmesh03.castShadow = true; 
      

//agarradera microfono

var ggeometry04 = new THREE.CylinderGeometry(1.5,1.2,10,30);
var gmaterial03 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
});
var gmesh04 = new THREE.Mesh(ggeometry04,gmaterial03);
//scene.add(gmesh04);
gmesh04.position.set(0,7.5,0);
gmesh04.scale.set(1,1,1);
gmesh04.castShadow = true; 


var ggeometry05 = new THREE.BoxGeometry(1,1.9,1,4,12,20);
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial01);
//scene.add(gmesh05);
gmesh05.position.set(0,9,1.2);
gmesh05.rotation.set(0.2,0,0);
gmesh05.castShadow = true; 


var ggeometry06 = new THREE.BoxGeometry(1.1,2.1,1.1,4,12,20);
var gmaterial04 = new THREE.MeshLambertMaterial({
    color:0xCCCCCC, side: THREE.DoubleSide
});

var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial04);
//scene.add(gmesh06);
gmesh06.position.set(0,9,1);
gmesh06.castShadow = true; 

//Cable
var ggeometry07 = new THREE.TorusGeometry(3, .5, 5, 35, Math.PI / 1);
var gmesh07 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh07);
gmesh07.position.set(3,3,0);
gmesh07.rotation.set(3.14,0,0)
gmesh07.castShadow = true; 

var gmesh08 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh08);
gmesh08.position.set(9.,3,0);
gmesh08.castShadow = true; 

/*
var  mic= new THREE.Group();
mic.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,gmesh07,gmesh08);
scene.add(mic);
*/

const Micro = new THREE.Group();
Micro.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,gmesh07,gmesh08);
Micro.position.set(x,y,z);
Micro.rotation.set(-1.35,0,0);

return Micro;
}

