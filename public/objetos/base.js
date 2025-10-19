import * as THREE from "./three.module.js"
export default function base({x,y,z}){

var geometry01 = new THREE.BoxGeometry(320,0.5,460);
var material1 = new THREE.MeshLambertMaterial({
  color:0x5C2878, side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material1);
//scene.add(mesh01);
mesh01.position.set(0,10,70);
mesh01.receiveShadow = true;

const BASE = new THREE.Group();
BASE.add(mesh01); 

BASE.position.set(x,y,z);

return BASE

}