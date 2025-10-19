
import * as THREE from "../js/three.module.js";
export default function agua({x, y, z}){


var ggeometry01 = new THREE.CylinderGeometry(3,2,10,20);
var material01 = new THREE.MeshLambertMaterial({
    color:0xADADAD, side: THREE.DoubleSide, transparent: true,   opacity: 0.5
});
var gmesh01 = new THREE.Mesh(ggeometry01,material01);
//scene.add(gmesh01);
gmesh01.position.set(0,10,0);
gmesh01.castShadow = true; 


var ggeometry02 = new THREE.CylinderGeometry(2.5,1.5,6,20);
var material02 = new THREE.MeshLambertMaterial({
    color:0x00B7D9, side: THREE.DoubleSide, 
});
var gmesh02 = new THREE.Mesh(ggeometry02,material02);
//scene.add(gmesh02);
gmesh02.position.set(0,10,0);
gmesh02.castShadow = true; 



var ggeometry03 = new THREE.CylinderGeometry(1.9,1.7,2,20);
var material03 = new THREE.MeshLambertMaterial({
    color:0x9E9E9E, side: THREE.DoubleSide, 
});
var gmesh03 = new THREE.Mesh(ggeometry03,material03);
//scene.add(gmesh03);
gmesh03.position.set(0,6,0);
gmesh03.castShadow = true; 


const Aguan = new THREE.Group();
Aguan.add(gmesh01,gmesh02,gmesh03,);
Aguan.position.set(x,y,z);

return Aguan;
}



