import * as THREE from "./three.module.js"
export default function cartel({x,y,z}){

var geometry01 = new THREE.BoxGeometry(5,40,3);
var material1 = new THREE.MeshLambertMaterial({
  color:0xFF82E2, side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material1);
//scene.add(mesh01);
mesh01.position.set(-25,15,70);
mesh01.receiveShadow = true;

var geometry02 = new THREE.BoxGeometry(40,25,3);
var material2 = new THREE.MeshLambertMaterial({
  color:0xFF82E2, side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material2);

mesh02.position.set(-25,35,70);
mesh02.receiveShadow = true;

const CARTEL = new THREE.Group();
CARTEL.add(mesh01,mesh02); 
CARTEL.position.set(x,y,z);

return CARTEL

}