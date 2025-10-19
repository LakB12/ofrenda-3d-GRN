import * as THREE from "../js/three.module.js";
export default function E05({x, y, z}){




//Taza
var ggeometry01 = new THREE.SphereGeometry(8);
var gmaterial01 = new THREE.MeshLambertMaterial({
    color:0x5E0E00, side: THREE.DoubleSide
});
var gmesh1 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh1);
gmesh1.position.set(0,0,0);
gmesh1.castShadow = true; 


var ggeometry02 = new THREE.CylinderGeometry(6,4,12.5,20);
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial01);
//scene.add(gmesh02);
gmesh02.position.set(0,4,0);
gmesh02.castShadow = true; 



var ggeometry03 = new THREE.TorusGeometry(3,1,5,20);
var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial01);
//scene.add(gmesh03);
gmesh03.position.set(7.5,1,0);
gmesh03.castShadow = true; 


var ggeometry05 = new THREE.TorusGeometry(3,3,3,25);
var gmaterial02 = new THREE.MeshLambertMaterial({
    color:0x737373, side: THREE.DoubleSide
});
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial02);
//scene.add(gmesh05);
gmesh05.position.set(0,6,0);
gmesh05.rotation.set(1.6,0,0);
gmesh05.castShadow = true; 


var ggeometry06 = new THREE.CylinderGeometry(8.2,8.2,1,25);
var gmaterial03 = new THREE.MeshLambertMaterial({
    color:0xC7BB54, side: THREE.DoubleSide
});
var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial03);
//scene.add(gmesh06);
gmesh06.position.set(0,1,0);
gmesh06.castShadow = true; 


var ggeometry07 = new THREE.CylinderGeometry(7.5,7.8,1,25);
var gmaterial04 = new THREE.MeshLambertMaterial({
    color:0x070052, side: THREE.DoubleSide
});
var gmesh07 = new THREE.Mesh(ggeometry07,gmaterial04);
//scene.add(gmesh07);
gmesh07.position.set(0,2.5,0);
gmesh07.castShadow = true; 


var ggeometry08 = new THREE.CylinderGeometry(8.2,8.0,1,25);
var gmesh08 = new THREE.Mesh(ggeometry08,gmaterial04);
//scene.add(gmesh08);
gmesh08.position.set(0,-.5,0);
gmesh08.castShadow = true; 



var ggeometry09 = new THREE.CylinderGeometry(6.2,6,1,25);
var gmesh09 = new THREE.Mesh(ggeometry09,gmaterial04);
//scene.add(gmesh09);
gmesh09.position.set(0,9.7,0);
gmesh09.castShadow = true; 


var ggeometry10 = new THREE.CylinderGeometry(5,5,1,25);
var gmaterial05 = new THREE.MeshLambertMaterial({
    color:0x4D2E0C, side: THREE.DoubleSide
});
var gmesh10 = new THREE.Mesh(ggeometry10,gmaterial05);
//scene.add(gmesh10);
gmesh10.position.set(0,10,0);
gmesh10.castShadow = true; 


const ESC05 = new THREE.Group();
ESC05.add(gmesh1,gmesh02,gmesh03,gmesh05,gmesh06,gmesh07,gmesh08,gmesh09,gmesh10);
ESC05.position.set(x,y,z);


return ESC05;
}

