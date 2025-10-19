import * as THREE from "./three.module.js"
export default function valla01({x,y,z}){

//VALLAS
var geometry1 = new THREE.BoxGeometry(3,30,4); 
var material1 = new THREE.MeshLambertMaterial({
    color:0x915091, side: THREE.DoubleSide
});

var mesh1 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh1);
mesh1.position.set(0,0,0);
mesh1.castShadow = true;

var mesh2 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh2);
mesh2.position.set(15,0,0);
mesh2.castShadow = true;

var mesh3 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh3);
mesh3.position.set(30,0,0);
mesh3.castShadow = true;

var mesh4 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh4);
mesh4.position.set(45,0,0);
mesh4.castShadow = true;


var mesh5 = new THREE.Mesh(geometry1,material1);
//scene.add(mesh5);
mesh5.position.set(60,0,0);
mesh5.castShadow = true;

var valla1 = new THREE.Group();
valla1.add(mesh1,mesh2,mesh3,mesh4,mesh5);
//scene.add(valla1);
valla1.castShadow = true;

var geometry6 = new THREE.BoxGeometry(80,3,4); 
var material6 = new THREE.MeshLambertMaterial({
    color:0x915091, side: THREE.DoubleSide
});

var mesh6 = new THREE.Mesh(geometry6,material6);
//scene.add(mesh6);
mesh6.position.set(30,-8,0);
mesh6.castShadow = true;

var mesh7 = new THREE.Mesh(geometry6,material6);
//scene.add(mesh7);
mesh7.position.set(30,8,0);
mesh7.castShadow = true;

var vallacompleta = new THREE.Group();
vallacompleta.add(valla1,mesh6,mesh7);
//scene.add(vallacompleta);
vallacompleta.castShadow = true;

var vallacompleta2 = vallacompleta.clone();
//scene.add(vallacompleta2);
vallacompleta2.position.set(0,0,0);
vallacompleta2.rotation.set(0,1.57,0);
vallacompleta2.castShadow = true;

var vallacompleta3 = vallacompleta.clone();
//scene.add(vallacompleta3);
vallacompleta3.position.set(320,0,0);
vallacompleta3.rotation.set(0,1.57,0);
vallacompleta3.castShadow = true;

var vallacompleta4 = vallacompleta.clone();
//scene.add(vallacompleta4);
vallacompleta4.position.set(250,0,0);
vallacompleta4.rotation.set(0,0,0);
vallacompleta4.castShadow = true;

var vallacompleta5 = vallacompleta.clone();
//scene.add(vallacompleta5);
vallacompleta5.position.set(250,0,-460);
vallacompleta5.rotation.set(0,0,0);
vallacompleta5.castShadow = true;

var vallacompleta6 = vallacompleta.clone();
//scene.add(vallacompleta6);
vallacompleta6.position.set(0,0,-460);
vallacompleta6.rotation.set(0,0,0);
vallacompleta6.castShadow = true;

var vallacompleta7 = vallacompleta.clone();
//scene.add(vallacompleta7);
vallacompleta7.position.set(0,0,-400);
vallacompleta7.rotation.set(0,1.57,0);
vallacompleta7.castShadow = true;


var vallacompleta8 = vallacompleta.clone();
//scene.add(vallacompleta8);
vallacompleta8.position.set(320,0,-400);
vallacompleta8.rotation.set(0,1.57,0);
vallacompleta8.castShadow = true;

var vallacompleta9 = vallacompleta.clone();
//scene.add(vallacompleta9);
vallacompleta9.position.set(0,0,-325);
vallacompleta9.rotation.set(0,1.57,0);
vallacompleta9.castShadow = true;


var vallacompleta10 = vallacompleta.clone();
//scene.add(vallacompleta10);
vallacompleta10.position.set(320,0,-325);
vallacompleta10.rotation.set(0,1.57,0);
vallacompleta10.castShadow = true;

var vallacompleta11 = vallacompleta.clone();
//scene.add(vallacompleta11);
vallacompleta11.position.set(0,0,-250);
vallacompleta11.rotation.set(0,1.57,0);
vallacompleta11.castShadow = true;


var vallacompleta12 = vallacompleta.clone();
//scene.add(vallacompleta12);
vallacompleta12.position.set(320,0,-250);
vallacompleta12.rotation.set(0,1.57,0);
vallacompleta12.castShadow = true;

var vallacompleta13 = vallacompleta.clone();
//scene.add(vallacompleta13);
vallacompleta13.position.set(0,0,-175);
vallacompleta13.rotation.set(0,1.57,0);
vallacompleta13.castShadow = true;


var vallacompleta14 = vallacompleta.clone();
//scene.add(vallacompleta14);
vallacompleta14.position.set(320,0,-175);
vallacompleta14.rotation.set(0,1.57,0);
vallacompleta14.castShadow = true;

var vallacompleta15 = vallacompleta.clone();
//scene.add(vallacompleta15);
vallacompleta15.position.set(0,0,-100);
vallacompleta15.rotation.set(0,1.57,0);
vallacompleta15.castShadow = true;


var vallacompleta16 = vallacompleta.clone();
//scene.add(vallacompleta16);
vallacompleta16.position.set(320,0,-100);
vallacompleta16.rotation.set(0,1.57,0);
vallacompleta16.castShadow = true;

var vallacompleta17 = vallacompleta.clone();
//scene.add(vallacompleta17);
vallacompleta17.position.set(0,0,-29);
vallacompleta17.rotation.set(0,1.57,0);
vallacompleta17.castShadow = true;


var vallacompleta18 = vallacompleta.clone();
//scene.add(vallacompleta18);
vallacompleta18.position.set(320,0,-29);
vallacompleta18.rotation.set(0,1.57,0);
vallacompleta18.castShadow = true;


var vallacompleta19 = vallacompleta.clone();
//scene.add(vallacompleta19);
vallacompleta19.position.set(175,0,-460);
vallacompleta19.rotation.set(0,0,0);
vallacompleta19.castShadow = true;


var vallacompleta20 = vallacompleta.clone();
//scene.add(vallacompleta20);
vallacompleta20.position.set(60,0,-460);
vallacompleta20.rotation.set(0,0,0);
vallacompleta20.castShadow = true;


var vallacompleta21 = vallacompleta.clone();
//scene.add(vallacompleta21);
vallacompleta21.position.set(104,0,-460);
vallacompleta21.rotation.set(0,0,0);
vallacompleta21.castShadow = true;

const VALLAS = new THREE.Group();
VALLAS.add(vallacompleta,vallacompleta2,vallacompleta3,vallacompleta4,vallacompleta5,vallacompleta6,vallacompleta7,vallacompleta8,vallacompleta9,vallacompleta10,vallacompleta11,vallacompleta12,vallacompleta13,vallacompleta14,vallacompleta15,vallacompleta16,vallacompleta17,vallacompleta18,vallacompleta19,vallacompleta20,vallacompleta21); 

VALLAS.position.set(x,y,z);

return VALLAS;

}