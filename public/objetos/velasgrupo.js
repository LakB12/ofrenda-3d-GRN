import * as THREE from "../js/three.module.js";

export default function velasclonadas({x, y, z}){

    

//VELA

var ggeometry05 = new THREE.CylinderGeometry(3,3,12.5,30,15);
var gmaterial04 = new THREE.MeshLambertMaterial({
    color:0xFFE5A8, side: THREE.DoubleSide
});
var gmesh06 = new THREE.Mesh(ggeometry05,gmaterial04);
//scene.add(gmesh06);
gmesh06.position.set(0,6,0);
gmesh06.castShadow = true; 


var ggeometry06 = new THREE.CylinderGeometry(.2,.2,15,30,15);
var gmaterial05 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
});
var gmesh07 = new THREE.Mesh(ggeometry06,gmaterial05);
//scene.add(gmesh07);
gmesh07.position.set(0,7.3,0);
gmesh07.castShadow = true; 



//FUEGO
var ggeometry07 = new THREE.CircleGeometry(1,32);
var gmaterial06 = new THREE.MeshLambertMaterial({
    color:0xFAE641, side: THREE.DoubleSide
});
var gmesh08 = new THREE.Mesh(ggeometry07,gmaterial06);
//scene.add(gmesh08);
gmesh08.position.set(0,14,0);
gmesh08.scale.set(1,1.7,1);
gmesh08.castShadow = true; 


var ggeometry08 = new THREE.CircleGeometry(1.4,32);
var gmaterial07 = new THREE.MeshLambertMaterial({
    color:0xED5A00, side: THREE.DoubleSide
});
var gmesh09 = new THREE.Mesh(ggeometry08,gmaterial07);
//scene.add(gmesh09);
gmesh09.position.set(0,14.5,0);
gmesh09.rotation.set(0,1.57,0);
gmesh09.scale.set(1,1.7,1);
gmesh09.castShadow = true; 


//DECORACION DE LA VELA
var ggeometry09 = new THREE.SphereGeometry(1);
var gmesh10 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh10);
gmesh10.position.set(0,5,2.5);
gmesh10.castShadow = true; 

var gmesh11 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh11);
gmesh11.position.set(0,6.5,2.5);
gmesh11.castShadow = true; 

var gmesh12 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh12);
gmesh12.position.set(0,8,2.5);
gmesh12.castShadow = true; 

var gmesh13 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh13);
gmesh13.position.set(0,3.5,2.5);
gmesh13.castShadow = true; 

var gmesh14 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh14);
gmesh14.position.set(0,9.5,2.5);
gmesh14.castShadow = true; 

var gmesh15 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh15);
gmesh15.position.set(1.3,8,2.2);
gmesh15.castShadow = true; 

var gmesh16 = new THREE.Mesh(ggeometry09,gmaterial07);
//scene.add(gmesh16);
gmesh16.position.set(-1.3,8,2.2);
gmesh16.castShadow = true; 


//VELA GRUPO

var vela = new THREE.Group();
vela.add(gmesh06,gmesh07,gmesh08,gmesh09,gmesh10,gmesh11,gmesh12,gmesh13,gmesh14,gmesh15,gmesh16);
//scene.add(vela);
    
var vela2 = vela.clone();
//scene.add(vela2);
vela2.position.set(50,0,0);

var vela3 = vela.clone();
//scene.add(vela2);
vela3.position.set(50,0,30);

var vela4 = vela.clone();
//scene.add(vela2);
vela4.position.set(50,0,60);

var vela5 = vela.clone();
//scene.add(vela2);
vela5.position.set(50,0,60);

var vela6 = vela.clone();
//scene.add(vela2);
vela6.position.set(50,0,90);

var vela7 = vela.clone();
//scene.add(vela2);
vela7.position.set(50,0,120);


var vela8 = vela.clone();
//scene.add(vela2);
vela8.position.set(-50,0,0);

var vela9 = vela.clone();
//scene.add(vela2);
vela9.position.set(-50,0,30);

var vela10 = vela.clone();
//scene.add(vela2);
vela10.position.set(-50,0,60);

var vela11 = vela.clone();
//scene.add(vela2);
vela11.position.set(-50,0,60);

var vela12 = vela.clone();
//scene.add(vela2);
vela12.position.set(-50,0,90);

var vela13 = vela.clone();
//scene.add(vela2);
vela13.position.set(-50,0,120);



gmesh08.rotation.y += 0.02;
    
gmesh09.rotation.y += 0.04;


const VELASCLONADAS = new THREE.Group();
VELASCLONADAS.add(vela2,vela3,vela4,vela5,vela6,vela7,vela8,vela9,vela10,vela11,vela12,vela13);
VELASCLONADAS.position.set(x,y,z);

return VELASCLONADAS;

}