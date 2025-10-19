
import * as THREE from "../js/three.module.js"
export default function E01({x,y,z}){


var geometry1 = new THREE.SphereGeometry(5, 36, 16, 0, 6.283, 1.57, 1.57); 
var material1 = new THREE.MeshLambertMaterial( {
    color: 0x784E25,side: THREE.DoubleSide } ); 
var cuenco = new THREE.Mesh( geometry1, material1 );
cuenco.position.set (0,15,0);
//scene.add(cuenco);
cuenco.castShadow=true;

var geometry2 = new THREE.SphereGeometry(5, 36); 
var material2 = new THREE.MeshLambertMaterial( {
    color: 0xCC561B,side: THREE.DoubleSide } ); 
var salsa = new THREE.Mesh( geometry2, material2 );
salsa.position.set (0,14,0);
salsa.scale.set(.975,.1,.975)
//scene.add(salsa);


var geometry3 = new THREE.SphereGeometry(5, 36); 
var material3 = new THREE.MeshLambertMaterial( {
    color: 0x802C1F,side: THREE.DoubleSide } ); 
var decorado = new THREE.Mesh( geometry3, material3 );
decorado.position.set (0,13,0);
decorado.scale.set(1,.3,1)
//scene.add(decorado);
decorado.castShadow=true;

var geometry4 = new THREE.SphereGeometry(5, 36); 
var material4 = new THREE.MeshLambertMaterial( {
    color: 0x0000,side: THREE.DoubleSide } ); 
var decorado2 = new THREE.Mesh( geometry4, material4 );
decorado2.position.set (0,11,0);
decorado2.scale.set(.6,.3,.6)
//scene.add(decorado2);
decorado2.castShadow=true;


var geometry4 = new THREE.SphereGeometry(5, 36); 
var material4 = new THREE.MeshLambertMaterial( {
    color: 0x0000,side: THREE.DoubleSide } ); 
var decorado3 = new THREE.Mesh( geometry4, material4 );
decorado3.position.set (0,10,0);
decorado3.scale.set(.6,.1,.6)
//scene.add(decorado3);
decorado3.castShadow=true;


//MAIZ

var geometry5 = new THREE.SphereGeometry(5, 36); 
var material5 = new THREE.MeshLambertMaterial( {
    color: 0xC4901D,side: THREE.DoubleSide } ); 
var maiz = new THREE.Mesh( geometry5, material5 );
maiz.position.set (0,14.5,0);
maiz.scale.set(.1,.1,.1)
//scene.add(maiz);

var maiz2 = maiz.clone(); 
//scene.add(maiz2);
maiz2.position.set(0.6,14.5,0);

var maiz3 = maiz.clone(); 
//scene.add(maiz3);
maiz3.position.set(-0.6,14.5,0.5);


var maices = new THREE.Group();
maices.add(maiz,maiz2,maiz3);
//scene.add(maices);
maices.position.set(0,0,0);

var maices2 = maices.clone();
//scene.add(maices2);
maices2.position.set(-2,0,0);
maices2.rotation.set(0,.78,0);

var maices3 = maices.clone();
//scene.add(maices3);
maices3.position.set(2,0,0);
maices3.rotation.set(0,1.57,0);

var maices4 = maices.clone();
//scene.add(maices4);
maices4.position.set(0,0,2);
maices4.rotation.set(0,3.14,0);

var maices5 = maices.clone();
//scene.add(maices5);
maices5.position.set(0,0,-2);
maices5.rotation.set(0,3.14,0);

var geometry6 = new THREE.BoxGeometry(.5,1,.1); 
var material6 = new THREE.MeshLambertMaterial( {
    color: 0x559E55,side: THREE.DoubleSide } ); 
var Lechuga = new THREE.Mesh( geometry6, material6 );
Lechuga.position.set (-4,14.4,0);
Lechuga.rotation.set (1.57,0,0);
//scene.add(Lechuga);

var lechuga2 = Lechuga.clone();
//scene.add(lechuga2);
lechuga2.position.set(-3.2,14.4,1);
lechuga2.rotation.set(1.57,0,1.57);

var lechugas = new THREE.Group();
lechugas.add(Lechuga,lechuga2);
//scene.add(lechugas);
lechugas.position.set(12,7,0);
lechugas.rotation.set (0,0,0.78);
var lechugas2= lechugas.clone();
//scene.add(lechugas2);
lechugas2.position.set(10,7,-10);
lechugas2.rotation.set (0,0.78,0.78);

var lechugas3=lechugas.clone();
//scene.add(lechugas3);
lechugas3.position.set(9,7,-12);
lechugas3.rotation.set (0,0.78,0.78);

var geometry7 = new THREE.BoxGeometry(.2,8,.5); 
var material7 = new THREE.MeshLambertMaterial( {
    color: 0x737373,side: THREE.DoubleSide } ); 
var Cuchara = new THREE.Mesh( geometry7, material7 );
Cuchara.position.set (-4,14.4,0);
Cuchara.rotation.set (0,0,.78);
//scene.add(Cuchara);
Cuchara.castShadow=true;

var plato = new THREE.Group();
plato.add(Lechuga,lechuga2,lechugas,lechugas2,lechugas3,Cuchara,maiz,maiz2.maiz3,maices,maices2,maices3,maices4,maices5,cuenco,salsa,decorado,decorado2,decorado3);
//scene.add(plato);

const Pozole1= new THREE.Group();
Pozole1.add(plato);
Pozole1.position.set(x,y,z);

return Pozole1;

 }