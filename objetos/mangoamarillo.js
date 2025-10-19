import * as THREE from "../js/three.module.js";
export default function E10 ({x,y,z}){

                                                                        //MANGO



// Mango
var geometry8 = new THREE.SphereGeometry(4,32,32);
var material8 = new THREE.MeshLambertMaterial({ 
    color: 0xFFA500 });
var mango = new THREE.Mesh(geometry8,material8);
mango.position.set(0, 0, 0);
mango.scale.set(1, 1.5, 1);
//Mango.add(mango);
mango.castShadow=true;

// Punta
var geometry9 = new THREE.ConeGeometry(0.5, 2, 32);
var material9 = new THREE.MeshLambertMaterial({ 
    color: 0xFF8C00 });
var punta = new THREE.Mesh(geometry9,material9);
punta.position.set(0, -3.5, 0);
punta.rotation.x = 3.14;
//Mango.add(punta);
punta.castShadow=true;

// Tallo
var geometry10 = new THREE.CylinderGeometry(0.2,0.3,2,8);
var material10 = new THREE.MeshLambertMaterial({ 
    color: 0x8B4513 });
var tallo3 = new THREE.Mesh(geometry10,material10);
tallo3.position.set(0, 6, 0);
tallo3.rotation.x = 0.3;
//Mango.add(tallo3);
tallo3.castShadow=true;

// Hoja 
var geometry11 = new THREE.SphereGeometry(1.5,16,8,0,6.283,0,3.141);
var material11 = new THREE.MeshLambertMaterial({ 
    color: 0x32CD32,
    side: THREE.DoubleSide 
});
var hoja3 = new THREE.Mesh(geometry11,material11);
hoja3.position.set(.5, 6, 0);
hoja3.rotation.z = 0.785;
hoja3.scale.set(1.5, 0.3, 1);
//Mango.add(hoja3);
hoja3.castShadow=true;


//scene.add(Mango);


var Mango1 = new THREE.Group();
Mango1.add(mango,punta,tallo3,hoja3)

const MANGO= new THREE.Group();
MANGO.add(Mango1);
MANGO.position.set(x,y,z);
MANGO.scale.set(.5,.5,.5)
return MANGO;

}