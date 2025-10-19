import * as THREE from "../js/three.module.js";
export default function gtequila({x, y, z}){


//Estructura

var ggeometry01 = new THREE.SphereGeometry( 3, 32, 16, 0, 3.1416 );
var gmaterial01 = new THREE.MeshLambertMaterial({
  color:0xC4A256, side: THREE.DoubleSide
});
var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.castShadow = true;
gmesh01.position.set(0,23,0);
gmesh01.rotation.set(-1.57,0,0);


var ggeometry02 = new THREE.CylinderGeometry(3,3,20,20);
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial01);
//scene.add(gmesh02);
gmesh02.castShadow = true;
gmesh02.position.set(0,13,0);

var ggeometry03 = new THREE.CylinderGeometry(1,1,2,20);
var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial01);
//scene.add(gmesh03);
gmesh03.castShadow = true;
gmesh03.position.set(0,26,0);

var ggeometry04 = new THREE.CylinderGeometry(1,1,3,20);
var gmaterial02 = new THREE.MeshLambertMaterial({
  color:0xB0B0B0, side: THREE.DoubleSide
});
var gmesh04 = new THREE.Mesh(ggeometry04,gmaterial02);
//scene.add(gmesh04);
gmesh04.castShadow = true;
gmesh04.position.set(0,28.5,0);


var ggeometry05 = new THREE.TorusGeometry(1,0.2,5,30);
var gmaterial03 = new THREE.MeshLambertMaterial({
  color:0x261E1E, side: THREE.DoubleSide
});
var gmesh05 = new THREE.Mesh(ggeometry05,gmaterial03);
//scene.add(gmesh05);
gmesh05.castShadow = true;
gmesh05.position.set(0,30,0);
gmesh05.rotation.set(1.57,0,0);


var ggeometry06 = new THREE.CylinderGeometry(1.1,1.1,1,20);
var gmesh06 = new THREE.Mesh(ggeometry06,gmaterial02);
//scene.add(gmesh06);
gmesh06.castShadow = true;
gmesh06.position.set(0,30.5,0);


//Etiqueta

var ggeometry07 = new THREE.CylinderGeometry(3.1, 3.1, 18, 20,10,false,3.5,5.4);
var texture1 = new THREE.TextureLoader().load("./assets/etiquetatequila.png");
var material04 = new THREE.MeshLambertMaterial({ map: texture1 });
var gmesh07 = new THREE.Mesh(ggeometry07, material04);
//scene.add(gmesh07);
gmesh07.castShadow = true;
gmesh07.position.set(0,14,0);
gmesh07.rotation.set(0,0,0);


/*
var tequila = new THREE.Group();
tequila.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,
gmesh07
);
scene.add(tequila);

*/


const tequila = new THREE.Group();
tequila.add(gmesh01,gmesh02,gmesh03,gmesh04,gmesh05,gmesh06,gmesh07);
tequila.position.set(x,y,z);

return tequila;
}
