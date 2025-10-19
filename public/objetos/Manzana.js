import * as THREE from "../js/three.module.js"
export default function E01 ({x,y,z}){


                                                            //MANZANA


// Manzana
var geometry5 = new THREE.SphereGeometry(4,32,32);
var material5 = new THREE.MeshLambertMaterial({ 
    color:0xC22727 });
var manzana = new THREE.Mesh(geometry5,material5);
manzana.position.set(0, 0, 0);
manzana.castShadow=true;

// Tallo
var geometry6 = new THREE.CylinderGeometry(0.2,0.3,2,8);
var material6 = new THREE.MeshLambertMaterial({ 
    color: 0x8B4513 });
var tallo2 = new THREE.Mesh(geometry6,material6);
tallo2.position.set(0,4,0);
tallo2.rotation.x = 1;
tallo2.castShadow=true;


// Hoja
var geometry7 = new THREE.SphereGeometry(1.5,16,8,0,6.283,0,3.141);
var material7 = new THREE.MeshLambertMaterial({ 
    color: 0x00AA00,
    side: THREE.DoubleSide 
});
var hoja2 = new THREE.Mesh(geometry7,material7);
hoja2.position.set(1.2,3,0);
hoja2.rotation.z =0.785; 
hoja2.castShadow=true;




//scene.add(Manzana);

var Manzana1 = new THREE.Group();
Manzana1.add(manzana,tallo2,hoja2)

const MANZANA= new THREE.Group();
MANZANA.add(Manzana1);
MANZANA.position.set(x,y,z);
Manzana1.scale.set(.5,.5,.5)
return MANZANA;

}