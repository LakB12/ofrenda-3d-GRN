
import * as THREE from "../js/three.module.js"
export default function E01({x,y,z}){

// Disco principal (base negra)
var geometry1 = new THREE.SphereGeometry(5); 
var material1 = new THREE.MeshLambertMaterial( {
    color: 0x000000, 
    side: THREE.DoubleSide 
} ); 
var Disco = new THREE.Mesh( geometry1, material1 );
Disco.position.set (0,15,0);
Disco.scale.set (1,.1,1);
//scene.add(Disco);
Disco.castShadow=true;

// Centro rojo del disco
var geometry2 = new THREE.SphereGeometry(1); 
var material2 = new THREE.MeshLambertMaterial( {
    color: 0xB6262F,
    side: THREE.DoubleSide 
} ); 
var disco2 = new THREE.Mesh( geometry2, material2 );
disco2.position.set (0,15.47,0);
disco2.scale.set (1,.1,1);
//scene.add(disco2);
disco2.castShadow=true;

// Anillo interior gris (etiqueta central)
var geometry3 = new THREE.RingGeometry(1.2, 1, 36); 
var material3 = new THREE.MeshLambertMaterial( {
    color: 0x3F3F3F, 
    side: THREE.DoubleSide 
} );
var disco3 = new THREE.Mesh( geometry3, material3 );
disco3.rotation.set(1.57,0,0);
disco3.position.set (0,15.5,0);
//scene.add(disco3);

// Anillo exterior para el borde
var geometry4 = new THREE.RingGeometry(4.8, 5, 64); 
var material4 = new THREE.MeshLambertMaterial( {
    color: 0x222222, 
    side: THREE.DoubleSide 
} );
var disco4 = new THREE.Mesh( geometry4, material4 );
disco4.rotation.set(1.57,0,0);
disco4.position.set (0,15.15,0);
//scene.add(disco4);

// Anillo medio para más detalle
var geometry5 = new THREE.RingGeometry(3, 4, 48); 
var material5 = new THREE.MeshLambertMaterial( {
    color: 0x1A1A1A, 
    side: THREE.DoubleSide 
} );
var disco5 = new THREE.Mesh( geometry5, material5 );
disco5.rotation.set(1.57,0,0);
disco5.position.set (0,15.4,0);
//scene.add(disco5);



var geometry6 = new THREE.BoxGeometry(10,12,10); 
var texture1=new THREE.TextureLoader().load("./assets/portadajosejose.png");

var material6 = new THREE.MeshLambertMaterial( {map:texture1} ); 
var caja = new THREE.Mesh(geometry6, material6);
caja.position.set (5,15.,0);
caja.scale.set (1,.1,1);
//scene.add(caja);
caja.castShadow=true;


var geometry7 = new THREE.BoxGeometry(10,.1,1.2); 
var material7 = new THREE.MeshLambertMaterial( {
    color: 0x1A1A1A, 
    side: THREE.DoubleSide 
} );
var disco6 = new THREE.Mesh( geometry7, material7 );
disco6.rotation.set(1.57,0,0);
disco6.position.set (5,15,5);
//scene.add(disco6);

var disco7= disco6.clone();
//scene.add(disco7);
disco7.position.set(10,15,0)
disco7.rotation.set(1.57,0,1.57)

var disco8=disco6.clone();
//scene.add(disco8);
disco8.position.set(5,15,-5)

var discocompleto = new THREE.Group();
discocompleto.add(Disco,disco2,disco3,disco4,disco5,disco6,disco7,disco8,caja);

discocompleto.position.set(10,0,0);

const Vinyl= new THREE.Group();
Vinyl.add(discocompleto);
Vinyl.position.set(x,y,z);

return Vinyl;

}