import * as THREE from "../js/three.module.js";
export default function Caballos({x, y, z}){



var ggeometry01 = new THREE.CylinderGeometry(2,1.3,7,20);
var material01 = new THREE.MeshLambertMaterial({
    color:0xADADAD, side: THREE.DoubleSide, transparent: true,   opacity: 0.5
});
var gmesh01 = new THREE.Mesh(ggeometry01,material01);
//scene.add(gmesh01);
gmesh01.position.set(0,10,0);
gmesh01.castShadow = true; 


var ggeometry02 = new THREE.CylinderGeometry(1.5,.8,6.2,20);
var material02 = new THREE.MeshLambertMaterial({
    color:0xDE7F00, side: THREE.DoubleSide, 
});
var gmesh02 = new THREE.Mesh(ggeometry02,material02);
//scene.add(gmesh02);
gmesh02.position.set(0,10,0);
gmesh02.castShadow = true; 



var ggeometry03 = new THREE.CylinderGeometry(1,.9,1,20);
var material03 = new THREE.MeshLambertMaterial({
    color:0x9E9E9E, side: THREE.DoubleSide, 
});
var gmesh03 = new THREE.Mesh(ggeometry03,material03);
//scene.add(gmesh03);
gmesh03.position.set(0,7,0);
gmesh03.castShadow = true; 


const Caballo = new THREE.Group();
Caballo.add(gmesh01,gmesh02,gmesh03,);
Caballo.position.set(x,y,z);

return Caballo;
}
