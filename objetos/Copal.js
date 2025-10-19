import * as THREE from "../js/three.module.js";
export default function E10({x, y, z}){



//ESTRUCTURA
var ggeometry01 = new THREE.SphereGeometry(7);
var gmaterial01 = new THREE.MeshLambertMaterial({
  color:0x000000, side: THREE.DoubleSide
});
var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.position.set(0,3,0);
gmesh01.scale.set(1,0.3,1);
gmesh01.castShadow = true;



var ggeometry02 = new THREE.CylinderGeometry(2,3.5,20,20);
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial01);
//scene.add(gmesh02);
gmesh02.position.set(0,13,0);
gmesh02.castShadow = true;


var ggeometry03 = new THREE.TorusGeometry(3,1,5,30);
var gmaterial02 = new THREE.MeshLambertMaterial({
  color:0x575757, side: THREE.DoubleSide
});

var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial02);
//scene.add(gmesh03);
gmesh03.position.set(0,5,0);
gmesh03.rotation.set(1.57,0,0);
gmesh03.castShadow = true;


var ggeometry04 = new THREE.SphereGeometry( 8, 32, 16, 0,3.1416 );
var gmesh04 = new THREE.Mesh(ggeometry04,gmaterial01);
//scene.add(gmesh04);
gmesh04.position.set(0,25,0);
gmesh04.rotation.set(1.57,0,0);
gmesh04.castShadow = true;


var ggeometry05 = new THREE.TorusGeometry(3,1,5,30);
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial02);
//scene.add(gmesh05);
gmesh05.position.set(0,18,0);
gmesh05.rotation.set(1.57,0,0);
gmesh05.castShadow = true;


var ggeometry06 = new THREE.CircleGeometry(8,30);
var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial01);
//scene.add(gmesh06);
gmesh06.rotation.set(1.57,0,0);
gmesh06.position.set(0,25,0);
gmesh06.castShadow = true;


//Piedras COPAL
var ggeometry07 = new THREE.IcosahedronGeometry(3,1);
var gmaterial03 = new THREE.MeshLambertMaterial({
  color:0x4F4D4D, side: THREE.DoubleSide
});

var gmesh07 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh07);
gmesh07.position.set(-4,25,0);
gmesh07.castShadow = true;


var ggeometry08 = new THREE.IcosahedronGeometry(3,1);
var gmaterial04 = new THREE.MeshLambertMaterial({
  color:0x2B1B1B, side: THREE.DoubleSide
});

var gmesh08 = new THREE.Mesh(ggeometry08,gmaterial04);
//scene.add(gmesh08);
gmesh08.position.set(0,25,-3);
gmesh08.castShadow = true;


var ggeometry08 = new THREE.IcosahedronGeometry(3.5,2);
var gmaterial04 = new THREE.MeshLambertMaterial({
  color:0x2B1B1B, side: THREE.DoubleSide
});

var gmesh09 = new THREE.Mesh(ggeometry08,gmaterial04);
//scene.add(gmesh09);
gmesh09.position.set(0,25,-3);
gmesh09.castShadow = true;


var ggeometry09 = new THREE.IcosahedronGeometry(2.5,1);
var gmaterial05 = new THREE.MeshLambertMaterial({
  color:0x404040, side: THREE.DoubleSide
});

var gmesh10 = new THREE.Mesh(ggeometry09,gmaterial05);
//scene.add(gmesh10);
gmesh10.position.set(4,25,3);
gmesh10.castShadow = true;


var gmesh11 = new THREE.Mesh(ggeometry09,gmaterial05);
//scene.add(gmesh11);
gmesh11.position.set(0,24.5,3);
gmesh11.castShadow = true;


var gmesh12 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh12);
gmesh12.position.set(3.5,24,-2);
gmesh12.castShadow = true;




const ESC10 = new THREE.Group();
ESC10.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,gmesh07,gmesh08,gmesh09,gmesh10,gmesh11,gmesh12);
ESC10.position.set(x,y,z);

return ESC10;
}
