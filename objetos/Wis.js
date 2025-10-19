import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

import * as THREE from "../js/three.module.js";
export default function wiss({x, y, z}){



var ggeometry01 = new RoundedBoxGeometry (5,13,5,15,.5);
var gmaterial01 = new THREE.MeshLambertMaterial({
color: 0xA66000, side: THREE.DoubleSide
});

var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.position.set(0,10,0);
gmesh01.rotation.set(0,0,0);
gmesh01.castShadow = true;


//Etiqueta
var ggeometry02 = new RoundedBoxGeometry (4.5,9,1,15,.5);
var gtexture1 = new THREE.TextureLoader().load("./assets/wis.jpg");
var rounded = new THREE.MeshLambertMaterial({ map: gtexture1 });
var gmesh02 = new THREE.Mesh(ggeometry02, rounded);
//scene.add(gmesh02);
gmesh02.castShadow = true;
gmesh02.position.set(0,10,2.1);
gmesh02.rotation.set(0,0,3.14);


var ggeometry03 = new RoundedBoxGeometry (4.5,9,1,15,.5);
var gtexture2 = new THREE.TextureLoader().load("./assets/wisback.jpg");
var rounded2 = new THREE.MeshLambertMaterial({ map: gtexture2 });
var gmesh03 = new THREE.Mesh(ggeometry02, rounded2);
//scene.add(gmesh03);
gmesh03.castShadow = true;
gmesh03.position.set(0,10,-2.1);
gmesh03.rotation.set(0,0,3.14);


//piramide

var ggeometry04 = new THREE.ConeGeometry(3,2,4,2);
var gmesh04 = new THREE.Mesh(ggeometry04,gmaterial01);
//scene.add(gmesh04);
gmesh04.position.set(0,17.5,0);
gmesh04.rotation.set(0,0.785,0);
gmesh04.castShadow = true;

//cuello de botella
var ggeometry05 = new THREE.CylinderGeometry(0.7,0.7,5,30);
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial01);
//scene.add(gmesh05);
gmesh05.position.set(0,17,0);
gmesh05.castShadow = true; 


var ggeometry06 = new THREE.TorusGeometry(0.9,0.2,3,25);
var gmaterial02 = new THREE.MeshLambertMaterial({
color: 0x000000, side: THREE.DoubleSide
});
var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial02);
//scene.add(gmesh06);
gmesh06.position.set(0,21.5,0);
gmesh06.rotation.set(1.6,0,0);
gmesh06.castShadow = true; 


//tapa
var ggeometry07 = new THREE.CylinderGeometry(0.8,0.8,1,8);
var gmaterial03 = new THREE.MeshLambertMaterial({
color: 0x171616, side: THREE.DoubleSide
});
var gmesh07 = new THREE.Mesh(ggeometry07,gmaterial03);
//scene.add(gmesh07);
gmesh07.position.set(0,22,0);
gmesh07.castShadow = true; 


var ggeometry08 = new THREE.TorusGeometry(1,0.35,4,25);
var gmesh08 = new THREE.Mesh(ggeometry08,gmaterial03);
//scene.add(gmesh08);
gmesh08.position.set(0,18,0);
gmesh08.rotation.set(1.6,0,0);
gmesh08.castShadow = true; 


var ggeometry09= new THREE.CylinderGeometry(0.7,0.7,2,30);
var gmaterial04 = new THREE.MeshLambertMaterial({
color: 0x787878, side: THREE.DoubleSide
});
var gmesh09 = new THREE.Mesh(ggeometry09,gmaterial04);
//scene.add(gmesh09);
gmesh09.position.set(0,20.5,0);
gmesh09.castShadow = true;

/*
var whiskey = new THREE.Group();
whiskey.add(gmesh01,gmesh02,gmesh03, gmesh04,gmesh05,gmesh06,gmesh07,
    gmesh08,gmesh09);
scene.add(whiskey);
*/

const whiskey = new THREE.Group();
whiskey.add(gmesh01,gmesh02,gmesh03, gmesh04,gmesh05,gmesh06,gmesh07,
    gmesh08,gmesh09);
whiskey.position.set(x,y,z);

return whiskey;
}

