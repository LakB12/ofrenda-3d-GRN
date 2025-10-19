import * as THREE from "../js/three.module.js";
export default function gretrato3({x, y, z}){


      
var ggeometry01 = new THREE.BoxGeometry( 20,0.5,20 );
var texture1 = new THREE.TextureLoader().load("./assets/valentin.jpeg");
var material01 = new THREE.MeshLambertMaterial({ map: texture1 });
var gmesh01 = new THREE.Mesh(ggeometry01, material01);
//scene.add(gmesh01);
gmesh01.castShadow = true;
gmesh01.position.set(0,11.5,0);
gmesh01.rotation.set(1,0,0);
gmesh01.castShadow = true; 

var ggeometry02 = new THREE.BoxGeometry( 24,2,24 );
var gmaterial02 = new THREE.MeshLambertMaterial({
  color:0x00780F, side: THREE.DoubleSide
});
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial02);
//scene.add(gmesh02);
gmesh02.position.set(0,11,-1);
gmesh02.rotation.set(1,0,0);
gmesh02.castShadow = true; 


var ggeometry03 = new THREE.BoxGeometry(5,1,.5);
var gmaterial03 = new THREE.MeshLambertMaterial({
  color:0x781E00, side: THREE.DoubleSide
});

var gmesh03 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh03);
gmesh03.position.set(-8.5,20.5,-6.5);
gmesh03.rotation.set(1,0,0);
gmesh03.castShadow = true; 

var gmesh04 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh04);
gmesh04.position.set(-10.8,18.6,-5.25);
gmesh04.rotation.set(1,1.57,0);
gmesh04.castShadow = true; 


var decoracion =  new THREE.Group();
decoracion.add(gmesh03,gmesh04);
//scene.add(decoracion);
decoracion.castShadow = true; 

var decoracion2 = decoracion.clone();
//scene.add(decoracion2);
decoracion2.rotation.set(3.14,0,0);
decoracion2.position.set(0,22.5,-1.);
decoracion2.castShadow = true; 

var gmesh05 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh05);
gmesh05.position.set(8.5,2,5.5);
gmesh05.rotation.set(1,0,0);
gmesh05.castShadow = true; 


var gmesh06 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh06);
gmesh06.position.set(10.8,4,4.25);
gmesh06.rotation.set(1,1.57,0);
gmesh06.castShadow = true; 


var gmesh07 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh07);
gmesh07.position.set(10.8,18.6,-5.25);
gmesh07.rotation.set(1,1.57,0);
gmesh07.castShadow = true; 

var gmesh08 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh08);
gmesh08.position.set(8.5,20.5,-6.5);
gmesh08.rotation.set(1,0,0);
gmesh08.castShadow = true; 

var gmesh09 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh09);
gmesh09.position.set(0,20.5,-6.5);
gmesh09.rotation.set(1,0,0);
gmesh09.castShadow = true; 

var gmesh10 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh10);
gmesh10.position.set(10.8,11,-0.1);
gmesh10.rotation.set(1,1.57,0);
gmesh10.castShadow = true; 

var gmesh11 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh11);
gmesh11.position.set(-10.8,11,-0.1);
gmesh11.rotation.set(1,1.57,0);
gmesh11.castShadow = true; 

var gmesh12 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh12);
gmesh12.position.set(0,2,5.5);
gmesh12.rotation.set(1,0,0);
gmesh12.castShadow = true; 

var ggeometry04 = new THREE.BoxGeometry(2,.5,15);
var gmesh13 = new THREE.Mesh(ggeometry04,gmaterial02);
//scene.add(gmesh13);
gmesh13.position.set(0,8,-4);
gmesh13.rotation.set(1.57,0,0);
gmesh13.castShadow = true; 

/*
var retrato = new THREE.Group();
retrato.add(gmesh01,gmesh02,decoracion,decoracion2,gmesh05,gmesh06,gmesh07,
    gmesh08,gmesh09,gmesh10,gmesh11,gmesh12,gmesh13);
scene.add(retrato);
*/


const retrato3 = new THREE.Group();
retrato3.add(gmesh01,gmesh02,decoracion,decoracion2,gmesh05,gmesh06,gmesh07,
    gmesh08,gmesh09,gmesh10,gmesh11,gmesh12,gmesh13);
retrato3.position.set(x,y,z);

return retrato3;
}
