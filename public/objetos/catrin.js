import * as THREE from "./three.module.js"
export default function catrin01({x,y,z}){

    //OBJETOS 2D
//// CRANEO

var geometryN03 = new THREE.CapsuleGeometry(6,1,20,40); 
var materialN03 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN03 =new THREE.Mesh(geometryN03,materialN03);
meshN03.position.set(30,20,0);
meshN03.castShadow = true;
////

var geometryN04 = new THREE.CylinderGeometry(3,6,3,32,15); 
var materialN04 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN04 =new THREE.Mesh(geometryN04,materialN04);
meshN04.position.set(30,13,0); 
meshN04.castShadow = true; 

////
var geometryN05 = new THREE.CapsuleGeometry(1.5,1,14,30); 
var materialN05 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN05 =new THREE.Mesh(geometryN05,materialN05);
meshN05.position.set(26,14,0);
meshN05.rotation.set(1.5708,0,1.5708);
meshN05.castShadow = true;

////
var geometryN06 = new THREE.CapsuleGeometry(1.5,1,14,30); 
var materialN06 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN06 =new THREE.Mesh(geometryN06,materialN06);
meshN06.position.set(34,14,0);
meshN06.rotation.set(1.5708,0,1.5708);
meshN06.castShadow = true;

////
var geometryN07 = new THREE.SphereGeometry(2,32,16); 
var materialN07 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN07 =new THREE.Mesh(geometryN07,materialN07);
meshN07.position.set(33,19,4);
meshN07.castShadow = true;

////
var geometryN08 = new THREE.SphereGeometry(2,32,16); 
var materialN08 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN08 =new THREE.Mesh(geometryN08,materialN08);
meshN08.position.set(27,19,4);
meshN08.castShadow = true;

////

////
var geometryN09 = new THREE.CylinderGeometry(0.2,0.2,2,32); 
var materialN09 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN09 =new THREE.Mesh(geometryN09,materialN09);
meshN09.position.set(30,12,5.5);
meshN09.rotation.set(-0.785,0,0);
meshN09.castShadow = true;

////
var geometryN010 = new THREE.CylinderGeometry(0.2,0.2,2,32); 
var materialN010 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN010 =new THREE.Mesh(geometryN010,materialN010);
meshN010.position.set(29,12,5.5);
meshN010.rotation.set(-0.785,0,0);
meshN010.castShadow = true;
////
var geometryN011 = new THREE.CylinderGeometry(0.2,0.2,2,32); 
var materialN011 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN011 =new THREE.Mesh(geometryN011,materialN011);
meshN011.position.set(31,12,5.5);
meshN011.rotation.set(-0.785,0,0);
meshN011.castShadow = true;

/// CUERPO CATRINA
var geometryN012 = new THREE.CylinderGeometry(1,1,5,32); 
var materialN012 = new THREE.MeshLambertMaterial({
 color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN012 =new THREE.Mesh(geometryN012,materialN012);
meshN012.position.set(30,9.5,0);
meshN012.castShadow = true;
//
var geometryN013 = new THREE.CylinderGeometry(1.5,1.5,0.5,32); 
var materialN013 = new THREE.MeshLambertMaterial({
color:0xC2B9A5, side: THREE.DoubleSide
})

var meshN013 =new THREE.Mesh(geometryN013,materialN013);
meshN013.position.set(30,10.5,0);
meshN013.castShadow = true;
//
var geometryN014 = new THREE.CylinderGeometry(1.5,1.5,0.5,32); 
var materialN014 = new THREE.MeshLambertMaterial({
 color:0xC2B9A5, side: THREE.DoubleSide
})

var meshN014 =new THREE.Mesh(geometryN014,materialN014);
meshN014.position.set(30,8.5,0); 
meshN014.castShadow = true;

//

var geometryN016 = new THREE.CylinderGeometry(10,7,19,32,10); 
var materialN016 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN016 =new THREE.Mesh(geometryN016,materialN016);
meshN016.position.set(30,-2,0);
meshN016.castShadow = true;
//

var geometryN017 = new THREE.CylinderGeometry(7,9,9,32,5); 
var materialN017 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN017 =new THREE.Mesh(geometryN017,materialN017);
meshN017.position.set(30,-16,0);
meshN017.castShadow = true;
//

var geometryN018 = new THREE.CylinderGeometry(2,2,25,32,15); 
var materialN018 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN018 =new THREE.Mesh(geometryN018,materialN018);
meshN018.position.set(35,-30,0);
meshN018.castShadow = true;
//
var meshN019 =new THREE.Mesh(geometryN018,materialN018);
meshN019.position.set(25,-30,0);
meshN019.castShadow = true;
//

var geometryN058 = new THREE.CapsuleGeometry(2.5,3,20,40);
var materialN058 = new THREE.MeshLambertMaterial({
 color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN058 = new THREE.Mesh(geometryN058,materialN058);
meshN058.position.set(35,-45,2);
meshN058.rotation.set(0,1.5708,1.5708);
meshN058.castShadow = true;

//
var meshN059 = new THREE.Mesh(geometryN058,materialN058);
meshN059.position.set(25,-45,2);
meshN059.rotation.set(0,1.5708,1.5708);
meshN059.castShadow = true;

////

var geometryN060 = new THREE.CapsuleGeometry(3.2,6,25,50);
var materialN060 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN060 = new THREE.Mesh(geometryN060,materialN060);
meshN060.position.set(35,-46.5,3);
meshN060.rotation.set(0,1.5708,1.5708);
meshN060.castShadow = true;
//
var meshN061 = new THREE.Mesh(geometryN060,materialN060);
meshN061.position.set(25,-46.5,3);
meshN061.rotation.set(0,1.5708,1.5708);
meshN061.castShadow = true;
//
//
var geometryN020 = new THREE.CylinderGeometry(1.5,1.5,5,32); 
var materialN020 = new THREE.MeshLambertMaterial({
 color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN020 =new THREE.Mesh(geometryN020,materialN020);
meshN020.position.set(35,-45,0);
meshN020.castShadow = true;
//
var meshN021 =new THREE.Mesh(geometryN020,materialN020);
meshN021.position.set(25,-45,0);
meshN021.castShadow = true;

//
var geometryN022 = new THREE.CylinderGeometry(0.5,2,3,32); 
var materialN022 = new THREE.MeshLambertMaterial({
color:0xEB8AFF, side: THREE.DoubleSide
})

var meshN022 =new THREE.Mesh(geometryN022,materialN022);
meshN022.position.set(32,6,11);
meshN022.rotation.set(1.5708,0,1.5708);
meshN022.castShadow = true;
//
var meshN023 =new THREE.Mesh(geometryN022,materialN022);
meshN023.position.set(28,6,11);
meshN023.rotation.set(1.5708,0,-1.5708);
meshN023.castShadow = true;
//
//
var geometryN024 = new THREE.SphereGeometry(1,32,16);
var materialN024 = new THREE.MeshLambertMaterial({
color:0xEB8AFF, side: THREE.DoubleSide
})

var meshN024 =new THREE.Mesh(geometryN024,materialN024);
meshN024.position.set(30,6,11);
meshN024.rotation.set(1.5708,0,1.5708);
meshN024.castShadow = true;

//
var geometryN025 = new THREE.CylinderGeometry(6,2,18,32, 5); 
var materialN025 = new THREE.MeshLambertMaterial({
 color:0x9967DB, side: THREE.DoubleSide
})

var meshN025 =new THREE.Mesh(geometryN025,materialN025);
meshN025.position.set(30,-2,5);
meshN025.castShadow = true;

//
var geometryN026 = new THREE.SphereGeometry(0.5,32,16);
var materialN026 = new THREE.MeshLambertMaterial({
 color:0xEB8AFF, side: THREE.DoubleSide
})

var meshN026 =new THREE.Mesh(geometryN026,materialN026);
meshN026.position.set(30,-4,8.5);
meshN026.castShadow = true;
//
var meshN027 =new THREE.Mesh(geometryN026,materialN026);
meshN027.position.set(30,0,9.5);
meshN027.castShadow = true;
//
var meshN028 =new THREE.Mesh(geometryN026,materialN026);
meshN028.position.set(30,4,10.5);
meshN028.castShadow = true;


//////////////////////////////sombrero

var geometryNS0 = new THREE.CapsuleGeometry(5,1,20,40); 
var materialNS0 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshNS0 =new THREE.Mesh(geometryNS0,materialNS0);
meshNS0.position.set(30,28,0);
meshNS0.castShadow = true;

///

var geometryNS01 = new THREE.CylinderGeometry(14,14,3,32);
var materialNS01 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshNS01 =new THREE.Mesh(geometryNS01,materialNS01);
meshNS01.position.set(30,24,0);
meshNS01.castShadow = true;
///

var geometryNS02 = new THREE.CylinderGeometry(6,6,3,32);
var materialNS02 = new THREE.MeshLambertMaterial({
 color:0x9967DB, side: THREE.DoubleSide
})

var meshNS02 =new THREE.Mesh(geometryNS02,materialNS02);
meshNS02.position.set(30,25.5,0);
meshNS02.castShadow = true;

////
var geometryN062 = new THREE.SphereGeometry(0.6,32,16); 
var materialN062 = new THREE.MeshLambertMaterial({
color:0x78BCFF, side: THREE.DoubleSide 
})

var meshN062 = new THREE.Mesh(geometryN062,materialN062);
meshN062.position.set(28.5,20.5,5.5);
meshN062.castShadow = true;
//
var meshN063 = new THREE.Mesh(geometryN062,materialN062);
meshN063.position.set(26.5,21.5,4.5);
meshN063.castShadow = true;
//
var meshN064 = new THREE.Mesh(geometryN062,materialN062);
meshN064.position.set(25,20.5,2.8);
meshN064.castShadow = true;
//
var meshN065 = new THREE.Mesh(geometryN062,materialN062);
meshN065.position.set(31.5,20.5,5.5);
meshN065.castShadow = true;
//
var meshN066 = new THREE.Mesh(geometryN062,materialN062);
meshN066.position.set(33.3,21.5,4.5);
meshN066.castShadow = true;
//
var meshN067 = new THREE.Mesh(geometryN062,materialN062);
meshN067.position.set(35,20.5,2.8);
meshN067.castShadow = true;

///
var geometryN068 = new THREE.TorusKnotGeometry(0.2,0.24,100,16,15,20); 
var materialN068 = new THREE.MeshLambertMaterial({
 color:0xFF78EA, side: THREE.DoubleSide
})

var meshN068 = new THREE.Mesh(geometryN068,materialN068);
meshN068.position.set(30,21.5,6);
meshN068.castShadow = true;
//
var geometryN015 = new THREE.ConeGeometry(1,2,32,2); 
var materialN015 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN015 =new THREE.Mesh(geometryN015,materialN015);
meshN015.position.set(30,16,5);
meshN015.castShadow = true;


var geometryN070 = new THREE.CylinderGeometry(1,1,20,32, 5); 
var materialN070 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN070 =new THREE.Mesh(geometryN070,materialN070);
meshN070.position.set(39,-5,-2);
meshN070.rotation.set(0.2617,0.5235,0);
meshN070.castShadow = true;


var geometryN071 = new THREE.CylinderGeometry(1,1,12,32, 5); 
var materialN071 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN071 =new THREE.Mesh(geometryN071,materialN071);
meshN071.position.set(20,0,1);
meshN071.rotation.set(-0.2617,0.5235,0);
meshN071.castShadow = true;



var geometryN072 = new THREE.CylinderGeometry(1,1,11,32, 5); 
var materialN072 = new THREE.MeshLambertMaterial({
     color:0x000000, side: THREE.DoubleSide
})

var meshN072 =new THREE.Mesh(geometryN072,materialN072);
meshN072.position.set(19,-3,6);
meshN072.rotation.set(1.0472,0,0.261799);
meshN072.castShadow = true;

var geometryN073 = new THREE.SphereGeometry(1.5,32,16); 
var materialN073 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN073 =new THREE.Mesh(geometryN073,materialN073);
meshN073.position.set(20,-5.5,2);
meshN073.rotation.set(1.0472,0,0.261799);
meshN073.castShadow = true;

var meshN074 =new THREE.Mesh(geometryN073,materialN073);
meshN074.position.set(39,-5.5,-2);
meshN074.rotation.set(1.0472,0,0.261799);
meshN074.castShadow = true;

var geometryN075 = new THREE.CapsuleGeometry(3,3,4,8); 
var materialN075 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN075 =new THREE.Mesh(geometryN075,materialN075);
meshN075.position.set(16,2,10);
meshN075.rotation.set(0,0,0.523599);
meshN075.castShadow = true;

var meshN076 =new THREE.Mesh(geometryN075,materialN075);
meshN076.position.set(39,-16,-4);
meshN076.rotation.set(0,0.523599,0);
meshN076.castShadow = true;

const CATRIN = new THREE.Group();
CATRIN.add(meshN03,meshN04,meshN05,meshN06,meshN07,meshN08,meshN010,meshN011,meshN012,meshN013,meshN014,meshN015,meshN016,meshN017,meshN018,meshN019,meshN020,meshN021,meshN022,meshN023,meshN024,meshN025,meshN026,meshN027,meshN028,meshNS0,meshNS01,meshNS02,meshN058,meshN059,meshN060,meshN061,meshN062,meshN063,meshN064,meshN065,meshN066,meshN067,meshN068,meshN070,meshN071,meshN072,meshN073,meshN074,meshN075,meshN076);
CATRIN.position.set(x,y,z);

return CATRIN;

}