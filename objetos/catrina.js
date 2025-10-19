import * as THREE from "./three.module.js"
export default function catrina01({x,y,z}){


//// CRANEO
var geometryN03 = new THREE.CapsuleGeometry(6,1,40,80); 
var materialN03 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN03 =new THREE.Mesh(geometryN03,materialN03);
//scene.add(meshN03);
meshN03.position.set(30,20,0);
meshN03.castShadow = true;
////
var geometryN04 = new THREE.CylinderGeometry(3,6,3,80,35); 
var materialN04 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN04 =new THREE.Mesh(geometryN04,materialN04);
//scene.add(meshN04);
meshN04.position.set(30,13,0);
meshN04.castShadow = true;
////
var geometryN05 = new THREE.CapsuleGeometry(1.5,1,30,60); 
var materialN05 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN05 =new THREE.Mesh(geometryN05,materialN05);
//scene.add(meshN05);
meshN05.position.set(26,14,0);
meshN05.rotation.set(1.5708,0,1.5708);
meshN05.castShadow = true;
////
var geometryN06 = new THREE.CapsuleGeometry(1.5,1,30,60); 
var materialN06 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN06 =new THREE.Mesh(geometryN06,materialN06);
//scene.add(meshN06);
meshN06.position.set(34,14,0);
meshN06.rotation.set(1.5708,0,1.5708);
meshN06.castShadow = true;
////
var geometryN07 = new THREE.SphereGeometry(2,80,40); 
var materialN07 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN07 =new THREE.Mesh(geometryN07,materialN07);
//scene.add(meshN07);
meshN07.position.set(33,19,4);
meshN07.castShadow = true;
////
var geometryN08 = new THREE.SphereGeometry(2,80,40); 
var materialN08 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN08 =new THREE.Mesh(geometryN08,materialN08);
//scene.add(meshN08);
meshN08.position.set(27,19,4);
meshN08.castShadow = true;
////
var geometryN09 = new THREE.ConeGeometry(1,2,32,2); 
var materialN09 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN09 =new THREE.Mesh(geometryN09,materialN09);
//scene.add(meshN09);
meshN09.position.set(30,16,5);

////
var geometryN09 = new THREE.CylinderGeometry(0.2,0.2,2,32); 
var materialN09 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshN09 =new THREE.Mesh(geometryN09,materialN09);
//scene.add(meshN09);
meshN09.position.set(30,12,5.5);
meshN09.rotation.set(-0.785,0,0);
meshN09.castShadow = true;
////
var geometryN010 = new THREE.CylinderGeometry(0.2,0.2,2,32); 
var materialN010 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN010 =new THREE.Mesh(geometryN010,materialN010);
//scene.add(meshN010);
meshN010.position.set(29,12,5.5);
meshN010.rotation.set(-0.785,0,0);
meshN010.castShadow = true;
////
var geometryN011 = new THREE.CylinderGeometry(0.2,0.2,2,32); 
var materialN011 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN011 =new THREE.Mesh(geometryN011,materialN011);
//scene.add(meshN011);
meshN011.position.set(31,12,5.5);
meshN011.rotation.set(-0.785,0,0);
meshN011.castShadow = true;  

/// CUERPO CATRINA
var geometryN012 = new THREE.CylinderGeometry(1,1,5,32, 5); 
var materialN012 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN012 =new THREE.Mesh(geometryN012,materialN012);
//scene.add(meshN012);
meshN012.position.set(30,9.5,0);
meshN012.castShadow = true;
//
var geometryN013 = new THREE.CylinderGeometry(1.5,1.5,0.5,32); 
var materialN013 = new THREE.MeshLambertMaterial({
olor:0xC2B9A5, side: THREE.DoubleSide
})

var meshN013 =new THREE.Mesh(geometryN013,materialN013);
//scene.add(meshN013);
meshN013.position.set(30,10.5,0);
meshN013.castShadow = true;
//
var geometryN014 = new THREE.CylinderGeometry(1.5,1.5,0.5,32); 
var materialN014 = new THREE.MeshLambertMaterial({
color:0xC2B9A5, side: THREE.DoubleSide
})

var meshN014 =new THREE.Mesh(geometryN014,materialN014);
//scene.add(meshN014);
meshN014.position.set(30,8.5,0); 
meshN014.castShadow = true;
//
var geometryN015 = new THREE.BoxGeometry(11, 2, 12, 5, 1, 5 ); 
var materialN015 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN015 =new THREE.Mesh(geometryN015,materialN015);
//scene.add(meshN015);
meshN015.position.set(30,6,0);
meshN015.castShadow = true;
//

var geometryN016 = new THREE.CylinderGeometry(9,4,14,32, 10); 
var materialN016 = new THREE.MeshLambertMaterial({
color:0x9967DB, side: THREE.DoubleSide
})

var meshN016 = new THREE.Mesh(geometryN016,materialN016);
//scene.add(meshN016);
meshN016.position.set(30,-1,0);
meshN016.castShadow = true;
//
var geometryN017 = new THREE.SphereGeometry(4, 32, 16 ); 
var materialN017 = new THREE.MeshLambertMaterial({
color:0x9967DB, side: THREE.DoubleSide
})

var meshN017 = new THREE.Mesh(geometryN017,materialN017);
//scene.add(meshN017);
meshN017.position.set(20.5,6,0);
meshN017.castShadow = true;
//
var meshN018 = new THREE.Mesh(geometryN017,materialN017);
//scene.add(meshN018);
meshN018.position.set(39.5,6,0);
meshN018.castShadow = true;
//

var geometryN019 = new THREE.CylinderGeometry(4,18,26,32, 15); 
var materialN019 = new THREE.MeshLambertMaterial({
color:0x9967DB, side: THREE.DoubleSide
})

var meshN019 = new THREE.Mesh(geometryN019,materialN019);
//scene.add(meshN019);
meshN019.position.set(30,-20,0);
meshN019.castShadow = true;

//
var geometryN020 = new THREE.TorusKnotGeometry(1,0.45,100,16,1,8); 
var materialN020 = new THREE.MeshLambertMaterial({
color:0xEB8AFF, side: THREE.DoubleSide
})

var meshN020 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN020);
meshN020.position.set(30,-9,5);
meshN020.rotation.set(-0.523599,0,0);
meshN020.castShadow = true;
//
var meshN021 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN021);
meshN021.position.set(30,-16,9);
meshN021.rotation.set(-0.523599,0,0);
meshN021.castShadow = true;
//
var meshN022 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN022);
meshN022.position.set(30,-23,13);
meshN022.rotation.set(-0.523599,0,0);
meshN022.castShadow = true;
//
var meshN023 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN023);
meshN023.position.set(30,-30,16.6);
meshN023.rotation.set(-0.523599,0,0);
meshN023.castShadow = true;
////
var meshN024 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN024);
meshN024.position.set(30,-9,-5);
meshN024.rotation.set(0.523599,0,0);
meshN024.castShadow = true;
//
var meshN025 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN025);
meshN025.position.set(30,-16,-9);
meshN025.rotation.set(0.523599,0,0);
meshN025.castShadow = true;
//
var meshN026 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN026);
meshN026.position.set(30,-23,-13);
meshN026.rotation.set(0.523599,0,0);
meshN026.castShadow = true;
//
var meshN027 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN027);
meshN027.position.set(30,-30,-16.6);
meshN027.rotation.set(0.523599,0,0);
meshN027.castShadow = true;
////
var meshN028 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN028);
meshN028.position.set(25,-9,-0.5);
meshN028.rotation.set(1.5708,1.0472,1.309);
meshN028.castShadow = true;
//
var meshN029 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN029);
meshN029.position.set(21,-16,-0.5);
meshN029.rotation.set(1.5708,1.0472,1.309);
meshN029.castShadow = true;
//
var meshN030 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN030);
meshN030.position.set(17,-23,-0.5);
meshN030.rotation.set(1.5708,1.0472,1.309);
meshN030.castShadow = true;
//
var meshN031 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN031);
meshN031.position.set(13,-30,-0.5);
meshN031.rotation.set(1.5708,1.0472,1.309);
meshN031.castShadow = true;
////
var meshN032 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN032);
meshN032.position.set(35,-9,-0.5);
meshN032.rotation.set(1.5708,-1.0472,1.309);
meshN032.castShadow = true;
//
var meshN033 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN033);
meshN033.position.set(39,-16,-0.5);
meshN033.rotation.set(1.5708,-1.0472,1.309);
meshN033.castShadow = true;
//
var meshN034 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN034);
meshN034.position.set(43,-23,-0.5);
meshN034.rotation.set(1.5708,-1.0472,1.309);
meshN034.castShadow = true;
//
var meshN035 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN035);
meshN035.position.set(47,-30,-0.5);
meshN035.rotation.set(1.5708,-1.0472,1.309);
meshN035.castShadow = true;

/////
var meshN036 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN036);
meshN036.position.set(30,6,9);
meshN036.rotation.set(0,0,0);
meshN036.castShadow = true;

//
var meshN037 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN037);
meshN037.position.set(33.5,6,8);
meshN037.rotation.set(0,0.523599,0);
meshN037.castShadow = true;

//
var meshN038 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN038);
meshN038.position.set(26.5,6,8);
meshN038.rotation.set(0,-0.523599,0);
meshN038.castShadow = true;
//
var meshN039 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN039);
meshN039.position.set(23.5,6,6);
meshN039.rotation.set(0,-0.523599,0);
meshN039.castShadow = true;
//

//
var meshN041 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN041);
meshN041.position.set(36.5,6,6);
meshN041.rotation.set(0,0.523599,0);
meshN041.castShadow = true;

////
var meshN042 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN042);
meshN042.position.set(35.5,-13,5);
meshN042.rotation.set(2.00713,-1.0472,0);
meshN042.castShadow = true;

//
var meshN043 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN043);
meshN043.position.set(38.5,-20,7.5);
meshN043.rotation.set(2.00713,-1.0472,0);
meshN043.castShadow = true;

//
var meshN044 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN044);
meshN044.position.set(40.5,-27,11);
meshN044.rotation.set(2.00713,-1.0472,0);
meshN044.castShadow = true;

////
var meshN045 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN045);
meshN045.position.set(24.5,-13,5);
meshN045.rotation.set(2.00713,1.0472,0);
meshN045.castShadow = true;

//
var meshN046 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN046);
meshN046.position.set(21.5,-20,7.5);
meshN046.rotation.set(2.00713,1.0472,0);
meshN046.castShadow = true;

//
var meshN047 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN047);
meshN047.position.set(19.5,-27,11);
meshN047.rotation.set(2.00713,1.0472,0);
meshN047.castShadow = true;

////
var meshN048 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN048);
meshN048.position.set(24.5,-13,-5);
meshN048.rotation.set(-2.00713,-1.0472,0);
meshN048.castShadow = true;

//
var meshN049 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN049);
meshN049.position.set(21.5,-20,-7.5);
meshN049.rotation.set(-2.00713,-1.0472,0);
meshN049.castShadow = true;

//
var meshN050 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN050);
meshN050.position.set(19.5,-27,-11);
meshN050.rotation.set(-2.00713,-1.0472,0);
meshN050.castShadow = true;

////
var meshN051 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN051);
meshN051.position.set(35,-13,-5);
meshN051.rotation.set(-2.00713,1.0472,0);
meshN051.castShadow = true;

//
var meshN052 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN052);
meshN052.position.set(38,-20,-7.5);
meshN052.rotation.set(-2.00713,1.0472,0);
meshN052.castShadow = true;

//
var meshN053 = new THREE.Mesh(geometryN020,materialN020);
//scene.add(meshN053);
meshN053.position.set(40,-27,-11);
meshN053.rotation.set(-2.00713,1.0472,0);
meshN053.castShadow = true;

//// PIERNAS

var geometryN056 = new THREE.CylinderGeometry(1,1,15,32, 10); 
var materialN056 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN056 = new THREE.Mesh(geometryN056,materialN056);
//scene.add(meshN056);
meshN056.position.set(25,-40,0);
meshN056.castShadow = true;


var geometryN057 = new THREE.CylinderGeometry(1,1,30,32, 15); 
var materialN057 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN057 = new THREE.Mesh(geometryN057,materialN057);
//scene.add(meshN057);
meshN057.position.set(35,-30,0);
meshN057.castShadow = true;


var geometryN058 = new THREE.CapsuleGeometry(2.5,3,20,40);
var materialN058 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN058 = new THREE.Mesh(geometryN058,materialN058);
//scene.add(meshN058);
meshN058.position.set(35,-45,2);
meshN058.rotation.set(0,1.5708,1.5708);
meshN058.castShadow = true;

//
var meshN059 = new THREE.Mesh(geometryN058,materialN058);
//scene.add(meshN059);
meshN059.position.set(25,-45,2);
meshN059.rotation.set(0,1.5708,1.5708);
meshN059.castShadow = true;

//// ZAPATOS

var geometryN060 = new THREE.CapsuleGeometry(3.2,6,25,50);
var materialN060 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN060 = new THREE.Mesh(geometryN060,materialN060);
//scene.add(meshN060);
meshN060.position.set(35,-46.5,3);
meshN060.rotation.set(0,1.5708,1.5708);
meshN060.castShadow = true;
//
var meshN061 = new THREE.Mesh(geometryN060,materialN060);
//scene.add(meshN061);
meshN061.position.set(25,-46.5,3);
meshN061.rotation.set(0,1.5708,1.5708);
meshN061.castShadow = true;
////
var geometryN062 = new THREE.SphereGeometry(0.6,32,16); 
var materialN062 = new THREE.MeshLambertMaterial({
color:0xFF78EA, side: THREE.DoubleSide
})

var meshN062 = new THREE.Mesh(geometryN062,materialN062);
//scene.add(meshN062);
meshN062.position.set(28.5,20.5,5.5);
meshN062.castShadow = true;
//
var meshN063 = new THREE.Mesh(geometryN062,materialN062);
//scene.add(meshN063);
meshN063.position.set(26.5,21.5,4.5);
meshN063.castShadow = true;

//
var meshN064 = new THREE.Mesh(geometryN062,materialN062);
//scene.add(meshN064);
meshN064.position.set(25,20.5,2.8);
meshN064.castShadow = true;
//
var meshN065 = new THREE.Mesh(geometryN062,materialN062);
//scene.add(meshN065);
meshN065.position.set(31.5,20.5,5.5);
meshN065.castShadow = true;

//
var meshN066 = new THREE.Mesh(geometryN062,materialN062);
//scene.add(meshN066);
meshN066.position.set(33.3,21.5,4.5);
meshN066.castShadow = true;
//
var meshN067 = new THREE.Mesh(geometryN062,materialN062);
//scene.add(meshN067);
meshN067.position.set(35,20.5,2.8);
meshN067.castShadow = true;
///
var geometryN068 = new THREE.TorusKnotGeometry(0.2,0.24,100,16,15,20); 
var materialN068 = new THREE.MeshLambertMaterial({
 color:0x78BCFF, side: THREE.DoubleSide
})

var meshN068 = new THREE.Mesh(geometryN068,materialN068);
//scene.add(meshN068);
meshN068.position.set(30,21.5,6);
meshN068.castShadow = true;


//////////////////////////////sombrero

var geometryNS0 = new THREE.CapsuleGeometry(5,1,20,40); 
var materialNS0 = new THREE.MeshLambertMaterial({
 color:0x000000, side: THREE.DoubleSide
})

var meshNS0 =new THREE.Mesh(geometryNS0,materialNS0);
///scene.add(meshNS0);
meshNS0.position.set(30,28,0);
meshNS0.castShadow = true;
///

var geometryNS01 = new THREE.CylinderGeometry(14,14,3,32);
var materialNS01 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshNS01 =new THREE.Mesh(geometryNS01,materialNS01);
///scene.add(meshNS01);
meshNS01.position.set(30,24,0);
meshNS01.castShadow = true;
///

var geometryNS02 = new THREE.CylinderGeometry(6,6,3,32);
var materialNS02 = new THREE.MeshLambertMaterial({
color:0x9967DB, side: THREE.DoubleSide
})

var meshNS02 =new THREE.Mesh(geometryNS02,materialNS02);
///scene.add(meshNS02);
meshNS02.position.set(30,25.5,0);
meshNS02.castShadow = true;

var geometryN069 = new THREE.CylinderGeometry(0.1,1,2,32); 
var materialN069 = new THREE.MeshLambertMaterial({
color:0x000000, side: THREE.DoubleSide
})

var meshN069 =new THREE.Mesh(geometryN069,materialN069);
////scene.add(meshN069);
meshN069.position.set(30,15,4.2);
meshN069.castShadow = true;


var geometryN070 = new THREE.CylinderGeometry(1,1,20,32, 10); 
var materialN070 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN070 =new THREE.Mesh(geometryN070,materialN070);
////scene.add(meshN070);
meshN070.position.set(39,-5,-2);
meshN070.rotation.set(0.2617,0.5235,0);
meshN070.castShadow = true;


var geometryN071 = new THREE.CylinderGeometry(1,1,9,32, 5); 
var materialN071 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN071 =new THREE.Mesh(geometryN071,materialN071);
////scene.add(meshN071);
meshN071.position.set(20,-2,1);
meshN071.rotation.set(-0.2617,0.5235,0);
meshN071.castShadow = true;

var geometryN072 = new THREE.CylinderGeometry(1,1,11,32, 5); 
var materialN072 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN072 =new THREE.Mesh(geometryN072,materialN072);
////scene.add(meshN072);
meshN072.position.set(19,-3,6);
meshN072.rotation.set(1.0472,0,0.261799);
meshN072.castShadow = true;

var geometryN073 = new THREE.SphereGeometry(1.5,32,16); 
var materialN073 = new THREE.MeshLambertMaterial({
color:0xC2B9A5, side: THREE.DoubleSide
})

var meshN073 =new THREE.Mesh(geometryN073,materialN073);
////scene.add(meshN073);
meshN073.position.set(20,-5.5,2);
meshN073.rotation.set(1.0472,0,0.261799);
meshN073.castShadow = true;

var meshN074 =new THREE.Mesh(geometryN073,materialN073);
////scene.add(meshN074);
meshN074.position.set(39,-5.5,-2);
meshN074.rotation.set(1.0472,0,0.261799);
meshN074.castShadow = true;

var geometryN075 = new THREE.CapsuleGeometry(3,3,4,8); 
var materialN075 = new THREE.MeshLambertMaterial({
color:0xF2F0E9, side: THREE.DoubleSide
})

var meshN075 =new THREE.Mesh(geometryN075,materialN075);
////scene.add(meshN075);
meshN075.position.set(16,2,10);
meshN075.rotation.set(0,0,0.523599);
meshN075.castShadow = true;

var meshN076 =new THREE.Mesh(geometryN075,materialN075);
////scene.add(meshN076);
meshN076.position.set(39,-16,-4);
meshN076.rotation.set(0,0.523599,0);
meshN076.castShadow = true;

const CATRINA = new THREE.Group();
CATRINA.add(meshNS02,meshNS0,meshNS01,meshN03,meshN04,meshN05,meshN06,meshN07,meshN08,meshN09,meshN010,meshN011,meshN012,meshN013,meshN014,meshN015,meshN016,meshN017,meshN018,meshN019,meshN020,meshN021,meshN022,meshN023,meshN024,meshN025,meshN026,meshN027,meshN028,meshN029,meshN030,meshN031,meshN032,meshN033,meshN034,meshN035,meshN036,meshN037,meshN038,meshN039,meshN041,meshN042,meshN043,meshN044,meshN045,meshN046,meshN047,meshN048,meshN049,meshN050,meshN051,meshN052,meshN053,meshN056,meshN057,meshN058,meshN059,meshN060,meshN061,meshN062,meshN063,meshN064,meshN065,meshN066,meshN067,meshN068,meshN069,meshN070,meshN071,meshN072,meshN073,meshN074,meshN075,meshN076); 

CATRINA.position.set(x,y,z);

return CATRINA;

}
