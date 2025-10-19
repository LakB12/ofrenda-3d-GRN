
import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

                                                                    //MANDARINA

var Mandarina = new THREE.Group();

// Mandarina
var geometry2 = new THREE.SphereGeometry(4,32,32);
var material2 = new THREE.MeshLambertMaterial({ color: 0xFF8000 });
var mandarina01 = new THREE.Mesh(geometry2, material2);
mandarina01.position.set(0, 0, 0);
Mandarina.add(mandarina01);

// Tallo
var geometry3 = new THREE.CylinderGeometry(0.2,0.3,2,8);
var material3 = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
var tallo = new THREE.Mesh(geometry3,material3);
tallo.position.set(0, 4, 0);
tallo.rotation.x = 1;
Mandarina.add(tallo);

// Hoja
var geometry4 = new THREE.SphereGeometry(1.5,16,8,0,6.283,0,3.141);
var material4 = new THREE.MeshLambertMaterial({ 
    color: 0x00AA00,
    side: THREE.DoubleSide 
});
var hoja = new THREE.Mesh(geometry4,material4);
hoja.position.set(1.2,3,0);
hoja.rotation.z =0.785; 

Mandarina.add(hoja);

Mandarina.position.set(0,20,0);
Mandarina.scale.set(.5,.4,.5)
//scene.add(Mandarina);

const mandarina= new THREE.Group();
mandarina.add(Mandarina);
mandarina.position.set(x,y,z);

return mandarina;

}
