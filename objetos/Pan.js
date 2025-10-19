import * as THREE from "../js/three.module.js";

export default function E01({x, y, z}){


//PAN DE DIFUNTO
var ggeometry02 = new THREE.SphereGeometry(3);
var gmaterial02 = new THREE.MeshLambertMaterial({
    color:0xF5C276, side: THREE.DoubleSide
});
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial02);
//scene.add(gmesh02);
gmesh02.position.set(0,2.4,0);
gmesh02.scale.set(1.4,.7,1.4);
gmesh02.castShadow = true; 



var ggeometry03 = new THREE.SphereGeometry(.5);
var gmaterial03 = new THREE.MeshLambertMaterial({
    color:0x59300C, side: THREE.DoubleSide
});
var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh03);
gmesh03.position.set(0,4.3,2);
gmesh03.scale.set(1.4,.8,2);
gmesh03.rotation.set(.41,0,0);
gmesh03.castShadow = true; 



var gmesh04 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh04);
gmesh04.position.set(0,3.7,3.2);
gmesh04.scale.set(1.5,.8,2);
gmesh04.rotation.set(.7,0,0);
gmesh04.castShadow = true; 


var ghuesito1 = new THREE.Group();
ghuesito1.add(gmesh03,gmesh04);
//scene.add(ghuesito1);
ghuesito1.castShadow = true; 

var ghuesito2 = ghuesito1.clone();
//scene.add(ghuesito2);
ghuesito2.position.set(0,0,0);
ghuesito2.rotation.set(0,1.57,0);
ghuesito2.castShadow = true; 

var ghuesito3 = ghuesito1.clone();
//scene.add(ghuesito3);
ghuesito3.position.set(0,0,0);
ghuesito3.rotation.set(0,3.14,0);
ghuesito3.castShadow = true; 


var ghuesito4 = ghuesito1.clone();
//scene.add(ghuesito4);
ghuesito4.position.set(0,0,0);
ghuesito4.rotation.set(0,4.71,0);
ghuesito4.castShadow = true; 


//huesitos pequeños 
var ghuesito5 = ghuesito1.clone();
//scene.add(ghuesito5);
ghuesito5.scale.set(.6,.7,.7)
ghuesito5.position.set(0,1.5,0);
ghuesito5.rotation.set(0,.785,0);
ghuesito5.castShadow = true; 

var ghuesito6 = ghuesito1.clone();
//scene.add(ghuesito6);
ghuesito6.scale.set(.6,.7,.7)
ghuesito6.position.set(0,1.5,0);
ghuesito6.rotation.set(0,2.355,0);
ghuesito6.castShadow = true; 

var ghuesito7 = ghuesito1.clone();
//scene.add(ghuesito7);
ghuesito7.scale.set(.6,.7,.7)
ghuesito7.position.set(0,1.5,0);
ghuesito7.rotation.set(0,3.925,0);
ghuesito7.castShadow = true; 

var ghuesito8 = ghuesito1.clone();
//scene.add(ghuesito8);
ghuesito8.scale.set(.6,.7,.7)
ghuesito8.position.set(0,1.5,0);
ghuesito8.rotation.set(0,5.495,0);
ghuesito8.castShadow = true; 


var ggeometry04 = new THREE.SphereGeometry(1.5);
var gmesh05 = new THREE.Mesh(ggeometry04,gmaterial03);
//scene.add(gmesh05);
gmesh05.position.set(0,4,0);
gmesh05.castShadow = true; 


/*
var panmuerto1 = new THREE.Group();
panmuerto1.add(gmesh02,ghuesito1,ghuesito2,ghuesito3,ghuesito4,ghuesito5,ghuesito6,ghuesito7,ghuesito8,gmesh05);
scene.add(panmuerto1);
panmuerto1.position.set(10,0,0);
*/

const ESC01 = new THREE.Group();
ESC01.add(gmesh02,ghuesito1,ghuesito2,ghuesito3,ghuesito4,ghuesito5,ghuesito6,ghuesito7,ghuesito8,gmesh05);
ESC01.position.set(x,y,z);

return ESC01;


}