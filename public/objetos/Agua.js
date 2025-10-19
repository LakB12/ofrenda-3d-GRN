import * as THREE from "../js/three.module.js";
export default function E02({x,y,z}){
// BOTELLA AWA

var Botella = new THREE.Group();

// Cuerpo principal de la botella
var geometry17 = new THREE.CylinderGeometry(2, 2, 8, 32);
var material17 = new THREE.MeshLambertMaterial({ 
    color: 0x87CEEB });
var cuerpo = new THREE.Mesh(geometry17, material17);
cuerpo.position.set(0, 0, 0);
Botella.add(cuerpo);
cuerpo.castShadow=true;
// Cuello de la botella
var geometry18 = new THREE.CylinderGeometry(1, 2, 3, 32);
var material18 = new THREE.MeshLambertMaterial({ 
    color: 0x87CEEB });
var cuello = new THREE.Mesh(geometry18, material18);
cuello.position.set(0, 5.5, 0);
Botella.add(cuello);
cuello.castShadow=true;
// Boca de la botella
var geometry19 = new THREE.CylinderGeometry(0.8, 1, 1, 32);
var material19 = new THREE.MeshLambertMaterial({ 
    color: 0x87CEEB });
var boca = new THREE.Mesh(geometry19, material19);
boca.position.set(0, 7, 0);
Botella.add(boca);
boca.castShadow=true;
// Tapa de la botella
var geometry20 = new THREE.CylinderGeometry(0.9, 0.9, 0.8, 32);
var material20 = new THREE.MeshLambertMaterial({ 
    color: 0xC0C0C0 });
var tapa = new THREE.Mesh(geometry20, material20);
tapa.position.set(0, 7.7, 0);
Botella.add(tapa);
tapa.castShadow=true;
Botella.position.set(15, 15, 0);

//scene.add(Botella);

const agua= new THREE.Group();
agua.add(cuerpo,cuello,boca,tapa);
agua.position.set(x,y,z);
agua.castShadow=true;
return agua;
}
