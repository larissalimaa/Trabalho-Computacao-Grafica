import * as THREE from '../build/three.module.js';
import {
    degreesToRadians,
} from "../libs/util/util.js";

//Para texturas
var repeatFactor = 4;


//-----------------------------------------------PISTA 1----------------------------------------//
//Cria o plano centro da pista 1
var planeGeometry2 = new THREE.PlaneGeometry(2500,2500);
var floorTexture2 = new THREE.TextureLoader().load('sand.jpg');
floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture2.repeat.set(15,15);
var planeMaterial2 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var planoCentral = new THREE.Mesh(planeGeometry2, planeMaterial2);
planoCentral.rotateX(degreesToRadians(-90));
planoCentral.position.x = -270;
planoCentral.position.y = 0;
planoCentral.position.z = -300;



/*
//Cria o plano fora da pista 1 ''esquerda''
//TODO: Arrumar o rotation dele
var planeGeometry3 = new THREE.PlaneGeometry(1200,1200);
var floorTexture = new THREE.TextureLoader().load('sand.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(9, 9);
var planeMaterial3 = new THREE.MeshPhongMaterial({ map: floorTexture, side: THREE.DoubleSide });
export var planoEsquerda = new THREE.Mesh(planeGeometry3, planeMaterial3);
planoEsquerda.rotateX(degreesToRadians(-90));
planoEsquerda.position.x = -270;
planoEsquerda.position.y = 0.2;
planoEsquerda.position.z = 630;

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
export var planoFrente = new THREE.Mesh(planeGeometry3, planeMaterial3);
planoFrente.rotateX(degreesToRadians(-90));
planoFrente.position.x = -1200;
planoFrente.position.y = 0.2;
planoFrente.position.z = -580;

//externo ''direita''
export var planoDireita = new THREE.Mesh(planeGeometry3, planeMaterial3);
planoDireita.rotateX(degreesToRadians(-90));
planoDireita.position.x = 0;
planoDireita.position.y = 0.2;
planoDireita.position.z = -1240;

//externo ''tras''
var planeGeometry7 = new THREE.PlaneGeometry(650,650);


var floorTexture7 = new THREE.TextureLoader().load('sand.jpg');
floorTexture7.wrapS = floorTexture7.wrapT = THREE.RepeatWrapping;
floorTexture7.repeat.set(4, 4);
var planeMaterial7 = new THREE.MeshPhongMaterial({ map: floorTexture7, side: THREE.DoubleSide });
export var planoTras = new THREE.Mesh(planeGeometry7, planeMaterial7);
planoTras.rotateX(degreesToRadians(-90));
planoTras.position.x = 380;
planoTras.position.y = 0.2;
planoTras.position.z = -305;

*/
//---------------------------------------------FIM--PISTA 1----------------------------------------//

//-----------------------------------------------PISTA 2----------------------------------------//

//Cria o plano centro da pista 1
var planeGeometry2 = new THREE.PlaneGeometry(2500,2500);
var floorTexture2 = new THREE.TextureLoader().load('grass.jpg');
floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture2.repeat.set(15,15);
var planeMaterial2 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var planoCentral2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
planoCentral2.rotateX(degreesToRadians(-90));
planoCentral2.position.x = -270;
planoCentral2.position.y = 0;
planoCentral2.position.z = -150;

//---------------------------------------------------------------------//
/*
//Cria o plano externo para pista 2
var planeGeometry2 = new THREE.PlaneGeometry(295,300);
var floorTexture2 = new THREE.TextureLoader().load('sand.jpg');
floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture2.repeat.set(3.5,3.5);
var planeMaterial2 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var planoExt2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
planoExt2.rotateX(degreesToRadians(-90));
planoExt2.position.x = -92.5;
planoExt2.position.y = 0.2;
planoExt2.position.z = -480;

//Cria o plano central 2
var planeGeometry2 = new THREE.PlaneGeometry(240,300);
var floorTexture2 = new THREE.TextureLoader().load('grass.jpg');
floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture2.repeat.set(repeatFactor, repeatFactor);
var planeMaterial2 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var planoCentral31 = new THREE.Mesh(planeGeometry2, planeMaterial2);
planoCentral31.rotateX(degreesToRadians(-90));
planoCentral31.position.x = -420;
planoCentral31.position.y = 0.2;
planoCentral31.position.z = -420;

//---------------------------------------------------------------------//


//Cria o plano fora da pista 2 ''esquerda''
//TODO: Arrumar o rotation dele
var planeGeometry3 = new THREE.PlaneGeometry(1200,1200);
var floorTexture = new THREE.TextureLoader().load('grass.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(9, 9);
var planeMaterial3 = new THREE.MeshPhongMaterial({ map: floorTexture, side: THREE.DoubleSide });
export var planoEsquerda2 = new THREE.Mesh(planeGeometry3, planeMaterial3);
planoEsquerda2.rotateX(degreesToRadians(-90));
planoEsquerda2.position.x = -270;
planoEsquerda2.position.y = 0.2;
planoEsquerda2.position.z = 620;

//linha de chegada pista 2

var planeGeometry4 = new THREE.PlaneGeometry(30,40);
var floorTexture4 = new THREE.TextureLoader().load('chegada.jpg');
floorTexture4.wrapS = floorTexture4.wrapT = THREE.RepeatWrapping;
floorTexture4.repeat.set(1,1);
var planeMaterial4 = new THREE.MeshPhongMaterial({ map: floorTexture4, side: THREE.DoubleSide });
export var plane42 = new THREE.Mesh(planeGeometry4, planeMaterial4);
plane42.rotateX(degreesToRadians(-90));
plane42.position.x = -270;
plane42.position.y = 0.2;
plane42.position.z = 0;


//externo ''frente''
export var planoFrente2 = new THREE.Mesh(planeGeometry3, planeMaterial3);
planoFrente2.rotateX(degreesToRadians(-90));
planoFrente2.position.x = -1200;
planoFrente2.position.y = 0.2;
planoFrente2.position.z = -580;

//externo ''direita''
export var planoDireita2 = new THREE.Mesh(planeGeometry3, planeMaterial3);
planoDireita2.rotateX(degreesToRadians(-90));
planoDireita2.position.x = 0;
planoDireita2.position.y = 0.2;
planoDireita2.position.z = -1230;

//externo ''tras''
var planeGeometry7 = new THREE.PlaneGeometry(650,650);


var floorTexture7 = new THREE.TextureLoader().load('grass.jpg');
floorTexture7.wrapS = floorTexture7.wrapT = THREE.RepeatWrapping;
floorTexture7.repeat.set(9,9);
var planeMaterial7 = new THREE.MeshPhongMaterial({ map: floorTexture7, side: THREE.DoubleSide });
export var planoTras2 = new THREE.Mesh(planeGeometry7, planeMaterial7);
planoTras2.rotateX(degreesToRadians(-90));
planoTras2.position.x = 380;
planoTras2.position.y = 0.2;
planoTras2.position.z = -305;
*/ 

//--------------------------------------------------------------------------------------------------------------------------//]

//PISTA 3//

//Cria o plano centro da pista 1
var planeGeometry2 = new THREE.PlaneGeometry(2500,2500);
var floorTexture2 = new THREE.TextureLoader().load('grass1.jpg');
floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture2.repeat.set(25,25);
var planeMaterial2 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var planoCentral3 = new THREE.Mesh(planeGeometry2, planeMaterial2);
planoCentral3.rotateX(degreesToRadians(-90));
planoCentral3.position.x = -270;
planoCentral3.position.y = 0;
planoCentral3.position.z = -150;

//FIM PISTA 3

//PISTA 4//

//Cria o plano centro da pista 1
var planeGeometry4 = new THREE.PlaneGeometry(2000,2000);
var floorTexture4 = new THREE.TextureLoader().load('grass1.jpg');
floorTexture4.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
floorTexture4.repeat.set(25,25);
var planeMaterial4 = new THREE.MeshPhongMaterial({ map: floorTexture2, side: THREE.DoubleSide });
//var planeMaterial2 = new THREE.MeshPhongMaterial({
//color: 0x4F614F,
//side: THREE.DoubleSide,
//});
export var planoCentral4 = new THREE.Mesh(planeGeometry4, planeMaterial4);
planoCentral4.rotateX(degreesToRadians(-90));
planoCentral4.position.x = -270;
planoCentral4.position.y = 0;
planoCentral4.position.z = -150;

//FIM PISTA 4