import * as THREE from "../js/three.module.js";

export default function E03({x, y, z}){


//COCOTA
//Enbase coca


var ggeometry11 = new THREE.CylinderGeometry(6,6,12.5,20);
var material05 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
});

var gmesh17 = new THREE.Mesh(ggeometry11,material05);
//scene.add(gmesh17);
gmesh17.position.set(-15,20,0);
gmesh17.scale.set(1,1.7,1);
gmesh17.castShadow = true;


var ggeometry12 = new THREE.SphereGeometry(6);
var gmesh18 = new THREE.Mesh(ggeometry12,material05);
//scene.add(gmesh18);
gmesh18.position.set(-15,10.3,0);
gmesh18.castShadow = true;


var ggeometry13 = new THREE.SphereGeometry(6);
var gmesh19 = new THREE.Mesh(ggeometry12,material05);
//scene.add(gmesh19);
gmesh19.position.set(-15,30.3,0);
gmesh19.castShadow = true;

//tapa
var ggeometry14 = new THREE.CylinderGeometry(1,1,12.5,20);
var gmaterial08 = new THREE.MeshLambertMaterial({
    color:0x9C9C9C, side: THREE.DoubleSide
});

var gmesh20 = new THREE.Mesh(ggeometry14,gmaterial08);
//scene.add(gmesh20);
gmesh20.position.set(-15,32,0);
gmesh20.castShadow = true;

var ggeometry15 = new THREE.CylinderGeometry(1.3,1.3,1.5,20);
var gmaterial09 = new THREE.MeshLambertMaterial({
    color:0xE80909, side: THREE.DoubleSide
});

var gmesh21 = new THREE.Mesh(ggeometry15,gmaterial09);
//scene.add(gmesh21);
gmesh21.position.set(-15,38,0);
gmesh21.castShadow = true;


//pies de botella de cocota
var ggeometry16 = new THREE.SphereGeometry(2);
var gmesh22 = new THREE.Mesh(ggeometry16,material05);
//scene.add(gmesh22);
gmesh22.position.set(-19,7,0);
gmesh22.scale.set(1,1.4,1);
gmesh22.castShadow = true;


var gmesh23 = new THREE.Mesh(ggeometry16,material05);
//scene.add(gmesh23);
gmesh23.position.set(-11,7,0);
gmesh23.scale.set(1,1.4,1);
gmesh23.castShadow = true;


var gmesh24 = new THREE.Mesh(ggeometry16,material05);
//scene.add(gmesh24);
gmesh24.position.set(-15,7,-4);
gmesh24.scale.set(1,1.4,1);
gmesh24.castShadow = true;

var gmesh25 = new THREE.Mesh(ggeometry16,material05);
//scene.add(gmesh25);
gmesh25.position.set(-15,7,4);
gmesh25.scale.set(1,1.4,1);
gmesh25.castShadow = true;

//etiqueta COCOTA

var ggeometry17 = new THREE.CylinderGeometry(6.1, 6.1, 8, 20);
var texture1 = new THREE.TextureLoader().load("./assets/textcoca.jpg");
var materialCylinder = new THREE.MeshLambertMaterial({ map: texture1 });
var gmesh26 = new THREE.Mesh(ggeometry17, materialCylinder);
//scene.add(gmesh26);
gmesh26.castShadow = true;
gmesh26.position.set(-15,22,0);
gmesh26.rotation.set(0,1.8,0);

/*
var cocota = new THREE.Group();
cocota.add(gmesh17,gmesh18,gmesh19,gmesh20,gmesh21,gmesh22,gmesh23,gmesh24,gmesh25,gmesh26);
scene.add(cocota);
cocota.position.set(0,-4,0);
*/

const ESC03 = new THREE.Group();
ESC03.add(gmesh17,gmesh18,gmesh19,gmesh20,gmesh21,gmesh22,gmesh23,gmesh24,gmesh25,gmesh26);
ESC03.position.set(x,y,z);

return ESC03;

}