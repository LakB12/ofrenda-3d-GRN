import * as THREE from "../js/three.module.js";

export default function E07 ({x, y, z}){



//PISO 1

var geometry1 = new THREE.BoxGeometry (60,15,60);
var material1 = new THREE.MeshLambertMaterial( {
    color: 0x630F95,side: THREE.DoubleSide } ); 
var piso1 = new THREE.Mesh( geometry1, material1 );
piso1.position.set (0,0,0);
//scene.add(piso1);
piso1.receiveShadow=true;
var mantel01 = new THREE.BoxGeometry (58,0.1,58);
var materialmantel1 = new THREE.MeshLambertMaterial({
     color: 0x470B6B,side: THREE.DoubleSide 
})
var Mantel1 = new THREE.Mesh(mantel01,materialmantel1);
Mantel1.position.set(0,7.5,0);
//scene.add(Mantel1);
Mantel1.receiveShadow=true;


//PAPEL PICADO PAREDES PISO 1

var geometry7= new THREE.BoxGeometry(30,15 ,0.1);
var texture4=new THREE.TextureLoader().load("./assets/PapelPicado1.png");



var material7 = new THREE.MeshLambertMaterial({map:texture4});
    
    var Picado1 = new THREE.Mesh(geometry7,material7);
    Picado1.position.set(-15,0,29.99);
    //scene.add(Picado1);   
Picado1.receiveShadow=true;

var Picado2 = Picado1.clone(); 
//scene.add(Picado2);
Picado2.position.set(15,0,29.99);
Picado2.receiveShadow=true;

var Picado3 = Picado1.clone();
//scene.add(Picado3);
Picado3.rotation.set(0,1.57,0);
Picado3.position.set(30,0,15);
Picado3.receiveShadow=true;

var Picado4 = Picado3.clone();
//scene.add(Picado4);
Picado4.position.set(30,0,-15);
Picado4.receiveShadow=true;


var Picado5 = Picado3.clone();
//scene.add(Picado5);
Picado5.position.set(-30,0,-15);
Picado5.receiveShadow=true;


var Picado6 = Picado4.clone();
//scene.add(Picado6);
Picado6.position.set(-30,0,15);
Picado6.receiveShadow=true;


var Picado7 = Picado1.clone();
//scene.add(Picado7);
Picado7.position.set(15,0,-30);
Picado7.receiveShadow=true;

var Picado8 = Picado7.clone();
//scene.add(Picado8);
Picado8.position.set(-15,0,-30);
Picado8.receiveShadow=true;

//PISO 2

var geometry2 = new THREE.BoxGeometry (40,10,40);
var material2 = new THREE.MeshLambertMaterial( {
    color: 0x630F95,side: THREE.DoubleSide } ); 
var piso2 = new THREE.Mesh( geometry2, material2 );
piso2.position.set (10,10,0);
//scene.add(piso2);
piso2.receiveShadow=true;

var mantel02 = new THREE.BoxGeometry (38,0.1,38);
var materialmantel2 = new THREE.MeshLambertMaterial({
     color: 0x470B6B,side: THREE.DoubleSide 
})
var Mantel2 = new THREE.Mesh(mantel02,materialmantel2);
Mantel2.position.set(10,15,0);
//scene.add(Mantel2);
Mantel2.receiveShadow=true;


//PISO 3

var geometry3 = new THREE.BoxGeometry (20,10,20);
var material3 = new THREE.MeshLambertMaterial( {
    color: 0x630F95,side: THREE.DoubleSide } ); 
var piso3 = new THREE.Mesh( geometry3, material3 );
piso3.position.set (20,20,0);
//scene.add(piso3);
piso3.receiveShadow=true;

var mantel03 = new THREE.BoxGeometry (18,0.1,18);
var materialmantel3 = new THREE.MeshLambertMaterial({
     color: 0x470B6B,side: THREE.DoubleSide 
})
var Mantel3 = new THREE.Mesh(mantel03,materialmantel3);
Mantel3.position.set(20,25,0);
//scene.add(Mantel3);
Mantel3.receiveShadow=true;


var PisosJuntos = new THREE.Group();
PisosJuntos.add(piso1,Mantel1,Picado1,Picado2,Picado3,Picado4,Picado5,Picado6,Picado7,Picado8,piso2,
   Mantel2,piso3,Mantel3 );

PisosJuntos.position.set(10,0,0);



const PisosOfrenda= new THREE.Group();
PisosOfrenda.add(PisosJuntos);
PisosOfrenda.position.set(x,y,z);

return PisosOfrenda;

}