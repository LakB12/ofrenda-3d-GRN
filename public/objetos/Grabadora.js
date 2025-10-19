import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

import * as THREE from "../js/three.module.js";
export default function bocina({x, y, z}){

//grabadora rectangulo


var ggeometry01 = new RoundedBoxGeometry (25,10,7,15,0.8);
var gmaterial01 = new THREE.MeshLambertMaterial({
color: 0x001663, side: THREE.DoubleSide
});

var gmesh01 = new THREE.Mesh(ggeometry01,gmaterial01);
//scene.add(gmesh01);
gmesh01.position.set(0,5,0);
gmesh01.castShadow = true;

//Bocina 

var ggeometry02 = new THREE.SphereGeometry(3);
var gmaterial02 = new THREE.MeshLambertMaterial({
color: 0x8A8A8A, side: THREE.DoubleSide
});
var gmesh02 = new THREE.Mesh(ggeometry02,gmaterial02);
//scene.add(gmesh02);
gmesh02.position.set(-7,5,3);
gmesh02.scale.set(1,1,0.5);
gmesh02.castShadow = true;

var gmesh03 = new THREE.Mesh(ggeometry02,gmaterial02);
//scene.add(gmesh03);
gmesh03.position.set(7,5,3);
gmesh03.scale.set(1,1,0.5);
gmesh03.castShadow = true;

//Rejillas
var ggeometry03 = new THREE.SphereGeometry(3);
var gmaterial03 = new THREE.MeshLambertMaterial({
color: 0x00, side: THREE.DoubleSide, wireframe:true
});
var gmesh04 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh04);
gmesh04.position.set(-7,5,3.1);
gmesh04.scale.set(1,1,0.5);
gmesh04.castShadow = true;

var gmesh05 = new THREE.Mesh(ggeometry03,gmaterial03);
//scene.add(gmesh05);
gmesh05.position.set(7,5,3.1);
gmesh05.scale.set(1,1,0.5);
gmesh05.castShadow = true;

//caset

var ggeometry04 = new RoundedBoxGeometry (6,4,7,1,0.8);
var gmaterial04 = new THREE.MeshLambertMaterial({
color: 0x666666, side: THREE.DoubleSide
});

var gmesh06 = new THREE.Mesh(ggeometry04,gmaterial04);
//scene.add(gmesh06);
gmesh06.position.set(0,4,0.5);
gmesh06.castShadow = true;


var ggeometry05 = new THREE.RingGeometry(0.1,0.5,25);
var gmaterial05 = new THREE.MeshLambertMaterial({
color: 0x235C94, side: THREE.DoubleSide
});

var gmesh07 = new THREE.Mesh(ggeometry05,gmaterial05);
//scene.add(gmesh07);
gmesh07.position.set(-1,4,4.1);
gmesh07.castShadow = true;


var gmesh08 = new THREE.Mesh(ggeometry05,gmaterial05);
//scene.add(gmesh08);
gmesh08.position.set(1,4,4.1);
gmesh08.castShadow = true;

var ggeometry06 = new THREE.PlaneGeometry (5,3,8,8);
var gmaterial06 = new THREE.MeshLambertMaterial({
color: 0x000000, side: THREE.DoubleSide
});

var gmesh09 = new THREE.Mesh(ggeometry06,gmaterial06);
//scene.add(gmesh09);
gmesh09.position.set(0,4,4.05);
gmesh09.castShadow = true;



var ggeometry07 = new RoundedBoxGeometry (5,0.2,7,1,0.8);
var gmesh10 = new THREE.Mesh(ggeometry07,gmaterial02);
//scene.add(gmesh10);
gmesh10.position.set(0,3,2.4);
gmesh10.scale.set(1,1,0.5);
gmesh10.castShadow = true;



var gmesh11 = new THREE.Mesh(ggeometry07,gmaterial02);
//scene.add(gmesh11);
gmesh11.position.set(0,2.5,2.4);
gmesh11.scale.set(1,1,0.5);
gmesh11.castShadow = true;


var ggeometry08 = new RoundedBoxGeometry (0.2,0.5,1,1,0.8);
var gmesh111 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh111);
gmesh111.position.set(-2.35,2.75,3.9);
gmesh111.scale.set(1,1,0.5);
gmesh111.castShadow = true;

var gmesh12 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh12);
gmesh12.position.set(-1.85,2.75,3.9);
gmesh12.scale.set(1,1,0.5);
gmesh12.castShadow = true;

var gmesh13 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh13);
gmesh13.position.set(-1.35,2.75,3.9);
gmesh13.scale.set(1,1,0.5);
gmesh13.castShadow = true;

var gmesh14 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh14);
gmesh14.position.set(-0.85,2.75,3.9);
gmesh14.scale.set(1,1,0.5);
gmesh14.castShadow = true;

var gmesh15 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh15);
gmesh15.position.set(-0.35,2.75,3.9);
gmesh15.scale.set(1,1,0.5);
gmesh15.castShadow = true;

var gmesh16 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh16);
gmesh16.position.set(0.15,2.75,3.9);
gmesh16.scale.set(1,1,0.5);
gmesh16.castShadow = true;

var gmesh17 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh17);
gmesh17.position.set(0.65,2.75,3.9);
gmesh17.scale.set(1,1,0.5);
gmesh17.castShadow = true;


var gmesh18 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh18);
gmesh18.position.set(1.15,2.75,3.9);
gmesh18.scale.set(1,1,0.5);
gmesh18.castShadow = true;


var gmesh19 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh19);
gmesh19.position.set(1.65,2.75,3.9);
gmesh19.scale.set(1,1,0.5);
gmesh19.castShadow = true;



var gmesh119 = new THREE.Mesh(ggeometry08,gmaterial02);
//scene.add(gmesh119);
gmesh119.position.set(2.25,2.75,3.9);
gmesh119.scale.set(1,1,0.5);
gmesh119.castShadow = true;

//Botones circulares

var ggeometry09 = new THREE.SphereGeometry(0.8);
var gmesh20 = new THREE.Mesh(ggeometry09,gmaterial06);
//scene.add(gmesh20);
gmesh20.position.set(-3,7.5,3.5);
gmesh20.scale.set(1,1,0.5);
gmesh20.castShadow = true;

var ggeometry10 = new RoundedBoxGeometry (1,0.2,1,1,0.8);
var gmesh21 = new THREE.Mesh(ggeometry10,gmaterial02);
//scene.add(gmesh21);
gmesh21.position.set(-3,7.5,3.8);
gmesh21.scale.set(1,1,0.5);
gmesh21.castShadow = true;



var gmesh22 = new THREE.Mesh(ggeometry09,gmaterial06);
//scene.add(gmesh22);
gmesh22.position.set(-1,7.5,3.5);
gmesh22.scale.set(1,1,0.5);
gmesh22.castShadow = true;


var gmesh23 = new THREE.Mesh(ggeometry10,gmaterial02);
//scene.add(gmesh23);
gmesh23.position.set(-1,7.5,3.8);
gmesh23.scale.set(1,1,0.5);
gmesh23.rotation.set(0,0,0.785);
gmesh23.castShadow = true;


var gmesh24 = new THREE.Mesh(ggeometry09,gmaterial06);
//scene.add(gmesh24);
gmesh24.position.set(1,7.5,3.5);
gmesh24.scale.set(1,1,0.5);
gmesh24.castShadow = true;


var gmesh25 = new THREE.Mesh(ggeometry10,gmaterial02);
//scene.add(gmesh25);
gmesh25.position.set(1,7.5,3.8);
gmesh25.scale.set(1,1,0.5);
gmesh25.rotation.set(0,0,1.785);
gmesh25.castShadow = true;

var gmesh26 = new THREE.Mesh(ggeometry09,gmaterial06);
//scene.add(gmesh26);
gmesh26.position.set(3,7.5,3.5);
gmesh26.scale.set(1,1,0.5);
gmesh26.castShadow = true;


var gmesh27 = new THREE.Mesh(ggeometry10,gmaterial02);
//scene.add(gmesh27);
gmesh27.position.set(3,7.5,3.8);
gmesh27.scale.set(1,1,0.5);
gmesh27.rotation.set(0,0,0.285);
gmesh27.castShadow = true;


//botones cuadrados
var ggeometry11 = new RoundedBoxGeometry (1,2,1,2,0.2);
var gmesh28 = new THREE.Mesh(ggeometry11,gmaterial06);
//scene.add(gmesh28);
gmesh28.position.set(2,10,2.5);
gmesh28.castShadow = true;

var gmesh29 = new THREE.Mesh(ggeometry11,gmaterial06);
//scene.add(gmesh29);
gmesh29.position.set(3.5,10,2.5);
gmesh29.castShadow = true;


var gmaterial07 = new THREE.MeshLambertMaterial({
color: 0xB30000, side: THREE.DoubleSide
});
var gmesh30 = new THREE.Mesh(ggeometry11,gmaterial07);
//scene.add(gmesh30);
gmesh30.position.set(5,9.5,2.5);
gmesh30.castShadow = true;

var gmesh31 = new THREE.Mesh(ggeometry11,gmaterial07);
//scene.add(gmesh31);
gmesh31.position.set(6.5,10,2.5);
gmesh31.castShadow = true;

var gmesh32 = new THREE.Mesh(ggeometry11,gmaterial07);
//scene.add(gmesh32);
gmesh32.position.set(8,10,2.5);
gmesh32.castShadow = true;

var gmesh33 = new THREE.Mesh(ggeometry11,gmaterial06);
//scene.add(gmesh33);
gmesh33.position.set(9.5,10,2.5);
gmesh33.castShadow = true;


var gmesh34 = new THREE.Mesh(ggeometry11,gmaterial06);
//scene.add(gmesh34);
gmesh34.position.set(11,10,2.5);
gmesh34.castShadow = true;

//Franjas 
var ggeometry12 = new RoundedBoxGeometry (23,1,1,15,0.1);
var gmaterial08 = new THREE.MeshLambertMaterial({
color: 0x5C0063, side: THREE.DoubleSide
});

var gmesh35 = new THREE.Mesh(ggeometry12,gmaterial08);
//scene.add(gmesh35);
gmesh35.position.set(0,9.7,1);
gmesh35.castShadow = true;

var gmesh36 = new THREE.Mesh(ggeometry12,gmaterial08);
//scene.add(gmesh36);
gmesh36.position.set(0,9.7,-1);
gmesh36.castShadow = true;

//agarradera
var ggeometry13 = new RoundedBoxGeometry (1,5,1,15,0.1);
var gmesh37 = new THREE.Mesh(ggeometry13,gmaterial04);
//scene.add(gmesh37);
gmesh37.position.set(-4,11,0);
gmesh37.castShadow = true;


var gmesh38 = new THREE.Mesh(ggeometry13,gmaterial04);
//scene.add(gmesh38);
gmesh38.position.set(4,11,0);
gmesh38.castShadow = true;

var gmesh39 = new THREE.Mesh(ggeometry13,gmaterial04);
//scene.add(gmesh39);
gmesh39.position.set(0,13,0);
gmesh39.rotation.set(0,0,1.57);
gmesh39.scale.set(1,1.5,1);
gmesh39.castShadow = true;

/*
var bocina = new THREE.Group();
bocina.add(gmesh01,gmesh111,gmesh119,gmesh02,gmesh03,gmesh04,gmesh05,
    gmesh06,gmesh07,gmesh08,gmesh09,gmesh10,gmesh11,gmesh12,gmesh13,
    gmesh14,gmesh15,gmesh16,gmesh17,gmesh18,gmesh19,gmesh20,gmesh21,
    gmesh22,gmesh23,gmesh24,gmesh25,gmesh26,gmesh27,gmesh29,gmesh29,
    gmesh30,gmesh31,gmesh32,gmesh33,gmesh34,gmesh35,gmesh36,gmesh37,
    gmesh38,gmesh39
);
scene.add(bocina);
*/

const Sonidero = new THREE.Group();
Sonidero.add(gmesh01,gmesh111,gmesh119,gmesh02,gmesh03,gmesh04,gmesh05,
    gmesh06,gmesh07,gmesh08,gmesh09,gmesh10,gmesh11,gmesh12,gmesh13,
    gmesh14,gmesh15,gmesh16,gmesh17,gmesh18,gmesh19,gmesh20,gmesh21,
    gmesh22,gmesh23,gmesh24,gmesh25,gmesh26,gmesh27,gmesh29,gmesh29,
    gmesh30,gmesh31,gmesh32,gmesh33,gmesh34,gmesh35,gmesh36,gmesh37,
    gmesh38,gmesh39

);
Sonidero.position.set(x,y,z);
return Sonidero;
}
