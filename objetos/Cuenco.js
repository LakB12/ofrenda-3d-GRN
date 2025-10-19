import * as THREE from "../js/three.module.js";
export default function E03({x,y,z}){

                                                                        //CUENCO

var geometry1 = new THREE.SphereGeometry(5, 36, 16, 0, 6.283, 1.57, 1.57); 
var material1 = new THREE.MeshLambertMaterial( {
    color: 0x784E25,side: THREE.DoubleSide } ); 
var cuenco = new THREE.Mesh( geometry1, material1 );
cuenco.position.set (0,15,0);
//scene.add(cuenco);
cuenco.castShadow=true;


const CUENCO= new THREE.Group();
CUENCO.add(cuenco);
CUENCO.position.set(x,y,z);

return CUENCO;


}