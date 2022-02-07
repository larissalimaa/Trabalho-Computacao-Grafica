import * as THREE from '../build/three.module.js';
import {
    degreesToRadians,
} from "../libs/util/util.js";

//Para texturas
var repeatFactor = 4;

//Cria o plano centro da pista 1
var planeGeometry2 = new THREE.PlaneGeometry(545,545);
var floorTexture2 = new THREE.TextureLoader().load('sand.jpg');
floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture2.repeat.set(repeatFactor, repeatFactor);
var planeMaterial2 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
plane2.rotateX(degreesToRadians(-90));
plane2.position.x = -270;
plane2.position.y = 0.2;
plane2.position.z = -300;

//Cria o plano fora da pista 1 ''esquerda''
var planeGeometry3 = new THREE.PlaneGeometry(1200,1200);
var floorTexture = new THREE.TextureLoader().load('sand.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(8, 8);
var planeMaterial3 = new THREE.MeshPhongMaterial({ map: floorTexture, side: THREE.DoubleSide });
export var plane3 = new THREE.Mesh(planeGeometry3, planeMaterial3);
plane3.rotateX(degreesToRadians(-90));
plane3.position.x = -270;
plane3.position.y = 0.2;
plane3.position.z = 620;

//linha de chegada pista 1

var planeGeometry4 = new THREE.PlaneGeometry(30,40);
var floorTexture4 = new THREE.TextureLoader().load('chegada.jpg');
floorTexture4.wrapS = floorTexture4.wrapT = THREE.RepeatWrapping;
floorTexture4.repeat.set(1,1);
var planeMaterial4 = new THREE.MeshPhongMaterial({ map: floorTexture4, side: THREE.DoubleSide });
export var plane4 = new THREE.Mesh(planeGeometry4, planeMaterial4);
plane4.rotateX(degreesToRadians(-90));
plane4.position.x = -270;
plane4.position.y = 0.2;
plane4.position.z = 0;


//externo ''frente''
export var plane5 = new THREE.Mesh(planeGeometry3, planeMaterial3);
plane5.rotateX(degreesToRadians(-90));
plane5.position.x = -1200;
plane5.position.y = 0.2;
plane5.position.z = -580;

//externo ''direita''
export var plane6 = new THREE.Mesh(planeGeometry3, planeMaterial3);
plane6.rotateX(degreesToRadians(-90));
plane6.position.x = 0;
plane6.position.y = 0.2;
plane6.position.z = -1230;

//externo ''tras''
var planeGeometry7 = new THREE.PlaneGeometry(650,650);
export var plane7 = new THREE.Mesh(planeGeometry7, planeMaterial3);
plane7.rotateX(degreesToRadians(-90));
plane7.position.x = 380;
plane7.position.y = 0.2;
plane7.position.z = -305;

