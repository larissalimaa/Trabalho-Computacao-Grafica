import { SecondaryBox } from "../libs/util/util.js";
import * as THREE from '../build/three.module.js';
import Stats from '../build/jsm/libs/stats.module.js';
import KeyboardState from '../libs/util/KeyboardState.js';
import { TrackballControls } from '../build/jsm/controls/TrackballControls.js';
import {
  initRenderer,
  degreesToRadians,
  onWindowResize,
  initDefaultBasicLight,
  InfoBox
} from "../libs/util/util.js";

const top_speed = 1.3;
const additional_speed_speed = 0.02;
const x = 10;
const y = 50;
const camera_position_y = 60;
var speed = 0;
const displacement = 22.3;
var inspec = false;
var time_counter = new SecondaryBox("Loading...");
var time = 0;
var arrayPista = new Array();
var arrayPistaOne = new Array();
var arrayPistaTwo = new Array();
var stats = new Stats();          // To show FPS information
var keyboard = new KeyboardState();
var renderer = initRenderer();    // View function in util/utils
renderer.setClearColor('rgb(9, 9, 42)');

//Create camera and Init position
var camera = new THREE.PerspectiveCamera(49, window.innerWidth / window.innerHeight, 1, 1000);
var perspec_cam = new THREE.Group();
perspec_cam.rotateY(degreesToRadians(-90));

//create Scene
var scene = new THREE.Scene();

var trackballControls = new TrackballControls(camera, renderer.domElement);
initDefaultBasicLight(scene, true);

//Create base plan
var planeGeometry2 = new THREE.PlaneGeometry(150, 150);
var planeMaterial2 = new THREE.MeshPhongMaterial({
  color: "rgb(127, 128, 118)",
  side: THREE.DoubleSide,
});
var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
plane2.rotateX(degreesToRadians(-90));
plane2.position.x = 0;
plane2.position.y = - 0.0001;
plane2.position.z = 0;
scene.add(plane2);



// Listen window size changes
window.addEventListener('resize', function () { onWindowResize(camera, renderer) }, false);

showInformation();

//Create the first track
function createAmbient() {


  //Cube Dimensions
  var base = 25;
  var altura = 0.3;
  var profundidade = 25;
  var delta = 0.00;

  //Cube
  var cubeGeometry = new THREE.BoxGeometry(base * 0.99, altura, profundidade * 0.99);
  var cubeMaterial = new THREE.MeshPhongMaterial();


  //Initial spot
  // alterar aqui, translada a pista sobre o plano base(chao)
  var posInitialX = 50.0;
  var posInitialY = 0.0;
  var posInitialZ = 50.0;

  //Coordenates
  var x = posInitialX;
  var y = posInitialY;
  var z = posInitialZ;

  //Displacement (auxiliam nas posicoes dos blocos)
  var dx = (base + delta);
  var dz = (profundidade + delta);

  //Variavel auxiliar para criacao do cubo
  var cube;

  //Primeira Fileira (Inferior)

  //For: De 0 a 5, pois sao 5 blocos

  for (var j = 0; j < 5; j++) {
    //cria novo cubo

    //se posicao inicial, marca laranja
    if (j == 3) {
      cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
      cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    }
    //se nao, marca pista em
    else {
      var floorTexture = new THREE.TextureLoader().load('black-orange-grid.png');;
      floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
      var cubeMaterial = new THREE.MeshPhongMaterial({ map: floorTexture, side: THREE.DoubleSide });
      cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    }

    //seta a posicao do cubo
    cube.position.set(x, y, z);

    //adiciona o cubo ao array dos cubos
    arrayPistaOne.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });

    //da o espacemento entre um bloco e outro, com delta para marcacao (para nao mesclar)
    x -= dx;
  }

  //Segunda Fileira (Superior da Esquerda)

  //seta o x para posicao do ultimo bloco colocado na primeira fileira
  x += dx;

  //restaura variaveis para as posicoes inicias
  y = posInitialY;
  z = posInitialZ;

  //For: Vai de zero a 4 pois sao 3 blocos
  for (var j = 0; j < 4; j++) {
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //Transladamos em z antes de setar sua posicao 
    z -= dz;

    //Seta Posicao
    cube.position.set(x, y, z);

    //adiciona o cubo ao array dos cubos
    arrayPistaOne.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });

  }

  //Terceira Fileira

  //restaura variaveis para as posicoes inicias
  x = posInitialX;
  y = posInitialY;
  z = posInitialZ;

  for (var j = 0; j < 4; j++) {

    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //Transladamos em z antes de setar sua posicao 
    z -= dz;
    //Seta posicao do cubo
    cube.position.set(x, y, z);

    //adicionamos ao array de cubos
    arrayPistaOne.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });

  }

  //Quarta Fileira
  var x = posInitialX;
  var y = 0;


  for (var j = 0; j < 4; j++) {
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // position the cube
    cube.position.set(x, y, z);

    x -= dx;

    arrayPistaOne.push(cube);


    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });
  }
  //Esse for ira percorrer todos os cubos, adicionando-os a cena
  for (var i = 0; i < arrayPistaOne.length; i++) {
    scene.add(arrayPistaOne[i]);
  }


}

//cria a Segunda Pista
function createAmbientTwo() {

  //dimensoes cubo (bloco do chao)
  var base = 25;
  var altura = 0.3;
  var profundidade = 25;
  var delta = 0.00;

  //cube
  var cubeGeometry = new THREE.BoxGeometry(base * 0.99, altura, profundidade * 0.99);
  var cubeMaterial = new THREE.MeshPhongMaterial();

  //posicoes iniciais (ou coordenadas do centro)
  // alterar aqui, translada a pista sobre o plano base(chao)
  var posInitialX = 50.0;
  var posInitialY = 0.0;
  var posInitialZ = 50.0;

  //deslocamentos (auxiliam nas posicoes dos blocos)
  var dx = (base + delta);
  var dz = (profundidade + delta);

  //posicoes iniciais
  var x = posInitialX;
  var y = posInitialY;
  var z = posInitialZ;

  //array para Pista
  var arrayPista = [];

  //array the cube
  var cube;

  //Primeira Fileira (Inferior)

  for (var j = 0; j < 5; j++) {
    //cria novo cubo

    //se posicao inicial, marca laranja
    if (j == 3) {
      cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
      cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    }
    //se nao, marca pista em
    else {

      var floorTexture = new THREE.TextureLoader().load('black-orange-grid.png');;
      floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
      var cubeMaterial = new THREE.MeshPhongMaterial({ map: floorTexture, side: THREE.DoubleSide });
      cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    }

    // position the cube
    cube.position.set(x, y, z);

    arrayPistaTwo.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });

    x -= dx;
  }

  //Segunda Fileira (Direita)
  x = posInitialX;
  y = posInitialY;
  z = posInitialZ;

  for (var j = 0; j < 2; j++) {
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    z -= dz;
    // position the cube
    cube.position.set(x, y, z);

    arrayPistaTwo.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });
  }

  //Terceira Fileira (Esquerda)
  x = posInitialX - 4 * (dx);
  y = posInitialY;
  z = posInitialZ;

  for (var j = 0; j < 4; j++) {
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    z -= dz;

    // position the cube
    cube.position.set(x, y, z);

    arrayPistaTwo.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });
  }

  //Quarta Fileira (Superior)
  x = posInitialX - 2 * (dx);
  y = 0;

  for (var j = 0; j < 2; j++) {
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //Seta posicao 
    cube.position.set(x, y, z);

    //Atualiza o deslocamento
    x -= dx;

    //Adiciona ao array de cubos
    arrayPistaTwo.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });
  }

  //Quinta Fileira (Central)
  x = posInitialX - 2 * (dx);
  z = posInitialZ - dz;

  for (var j = 0; j < 2; j++) {
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //Atualiza o deslocamento
    z -= dz;
    //Seta posicao 
    cube.position.set(x, y, z);

    arrayPistaTwo.push(cube);

    //adiciona coordenadas a um array que tera todas as coordenadas
    arrayPista.push({ x: x, z: z });
  }

  //Sexta Fileira (Central)
  x = posInitialX - dx;
  z += dz;

  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(x, y, z);
  arrayPistaTwo.push(cube);

  arrayPista.push({ x: x, z: z });

  //Esse for ira percorrer todos os cubos, adicionando-os a cena
  for (var i = 0; i < arrayPistaTwo.length; i++) {
    scene.add(arrayPistaTwo[i]);
  }
}
var truck = new THREE.Group();
// Set the parts of the pseudo-car
var cubeGeometry = new THREE.BoxGeometry(4, 12, 4);
var cubeMaterial = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0.0, 0.5, 0.0)
cube.rotateX(degreesToRadians(90));

var cube2Geometry = new THREE.BoxGeometry(3.8, 3.8, 3.8);
var cube2Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
var cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
cube2.position.set(0.0, 4, 3.6)
cube2.rotateX(degreesToRadians(90));

var cube3Geometry = new THREE.BoxGeometry(4.1, 2.6, 2.6);
var cube3Material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
var cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
cube3.position.set(0.0, 4, 3.6)
cube3.rotateX(degreesToRadians(90));

var cube4Geometry = new THREE.BoxGeometry(3, 4.2, 2.8);
var cube4Material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
var cube4 = new THREE.Mesh(cube4Geometry, cube4Material);
cube4.position.set(0.0, 4, 3.6)
cube4.rotateX(degreesToRadians(90));

var cube5Geometry = new THREE.BoxGeometry(3, 6.2, 2.8);
var cube5Material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
var cube5 = new THREE.Mesh(cube5Geometry, cube5Material);
cube5.position.set(0.0, 1.2, -2)
cube5.rotateX(degreesToRadians(90));

var cube6Geometry = new THREE.BoxGeometry(3.5, 6.2, 2.9);
var cube6Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
var cube6 = new THREE.Mesh(cube6Geometry, cube6Material);
cube6.position.set(0.0, 1.0, 4)
cube6.rotateX(degreesToRadians(90));



//Car Details (Santantonio)
var axis3 = createCylinder(0.3, 0.3, 7.0, 10, 10, false);
axis3.rotateX(degreesToRadians(-120));
axis3.position.set(1.6, 3.8, -1.0);

var axis4 = createCylinder(0.3, 0.3, 7.0, 10, 10, false);
axis4.rotateX(degreesToRadians(-120));
axis4.position.set(1.6, 3.8, 1.0);

var axis5 = createCylinder(0.3, 0.3, 7.0, 10, 10, false);
axis5.rotateX(degreesToRadians(-120));
axis5.position.set(-1.6, 3.8, 1.0);

var axis6 = createCylinder(0.3, 0.3, 7.0, 10, 10, false);
axis6.rotateX(degreesToRadians(-120));
axis6.position.set(-1.6, 3.8, -1.0);

var axis7 = createCylinder(0.3, 0.3, 7.0, 10, 10, false);
axis7.rotateX(degreesToRadians(-120));
axis7.position.set(-1.6, 3.8, -1.0);

var axis14 = createCylinder(0.3, 0.3, 3.9, 10, 10, false);
axis14.rotateZ(degreesToRadians(90));
axis14.position.set(0, -1.2, 5.8);

var axis15 = createCylinder(0.3, 0.3, 11.9, 10, 10, false);
axis15.rotateX(degreesToRadians(90));
axis15.position.set(1.81, -1.2, -0.0002);

var axis16 = createCylinder(0.3, 0.3, 11.9, 10, 10, false);
axis16.rotateX(degreesToRadians(90));
axis16.position.set(-1.81, -1.2, -0.0002);

var axis17 = createCylinder(0.3, 0.3, 3.9, 10, 10, false);
axis17.rotateZ(degreesToRadians(90));
axis17.position.set(0, -1.2, -5.8);

//Hubcap
var axis8 = createCylinder(0.3, 1.5, 0.10, 20, 20, false);
axis8.rotateX(degreesToRadians(90));

var axis9 = createCylinder(0.3, 1.5, -0.10, 20, 20, false);
axis9.rotateX(degreesToRadians(-90));

var axis10 = createCylinder(0.3, 1.5, 0.10, 20, 20, false);
axis10.rotateX(degreesToRadians(90));

var axis11 = createCylinder(0.3, 1.5, -0.10, 20, 20, false);
axis11.rotateX(degreesToRadians(90));

//Fairing details
var lightSphere1 = createSphere(0.3, 10, 10);
lightSphere1.position.set(1.4, 2.1, 7);

var lightSphere2 = createSphere(0.3, 10, 10);
lightSphere2.position.set(-1.4, 2.1, 7);

var lightSphere3 = createSphere1(0.3, 10, 10);
lightSphere3.position.set(1.4, 2.1, -6);

var lightSphere4 = createSphere1(0.3, 10, 10, false);
lightSphere4.position.set(-1.4, 2.1, -6);

var lightSphere5 = createSphere1(0.3, 10, 10);
lightSphere5.position.set(1.0, 2.1, -6);

var lightSphere6 = createSphere1(0.3, 10, 10, false);
lightSphere6.position.set(-1.0, 2.1, -6);

var axis12 = createCylinder1(0.3, 0.3, 1.0, 10, 10, false);
axis12.rotateX(degreesToRadians(90));
axis12.position.set(1.4, 2.1, 6.62);

var axis13 = createCylinder1(0.3, 0.3, 1.0, 10, 10, false);
axis13.rotateX(degreesToRadians(90));
axis13.position.set(-1.4, 2.1, 6.62);

var axis18 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis18.rotateX(degreesToRadians(90));
axis18.position.set(-1.4, -1.1, -6.0);

var axis19 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis19.rotateX(degreesToRadians(90));
axis19.position.set(1.4, -1.1, -6.0);

var axis20 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis20.rotateZ(degreesToRadians(90));
axis20.position.set(0.0, -1.2, 6.0);

var axis21 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis21.rotateZ(degreesToRadians(90));
axis21.position.set(0.0, -1.2, -6.0);

var axis22 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis22.rotateZ(degreesToRadians(90));
axis22.position.set(0.0, 2.0, -6.0);

var axis23 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis23.rotateX(degreesToRadians(90));
axis23.position.set(2.0, 2.0, 3.0);

var axis24 = createCylinder2(0.3, 0.3, 1.0, 10, 10, false);
axis24.rotateX(degreesToRadians(90));
axis24.position.set(-2.0, 2.0, 3.0);

var axis6 = createCylinder(0.3, 0.3, 7.0, 10, 10, false);
axis6.rotateX(degreesToRadians(-120));
axis6.position.set(-1.6, 3.8, -1.0);

//Wheels
var axis1 = createCylinder(0.3, 0.3, 5.5, 10, 10, false);
axis1.rotateZ(degreesToRadians(90));
axis1.position.set(0.0, -0.5, 4.0);

var axis2 = createCylinder(0.3, 0.3, 5.5, 10, 10, false);
axis2.rotateZ(degreesToRadians(90));
axis2.position.set(0.0, -0.5, -4.0);

var roda1 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
roda1.position.set(2.5, -0.5, 4.0);

var roda2 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
roda2.position.set(-2.5, -0.5, 4.0);

var roda3 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
roda3.position.set(2.5, -0.5, -4.0);

var roda4 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
roda4.position.set(-2.5, -0.5, -4.0);

// Add objects to the truck
truck.add(cube);
truck.add(cube2);
truck.add(cube3);
truck.add(cube4);
truck.add(cube5);
truck.add(cube6);
truck.add(axis1);
truck.add(axis2);
truck.add(axis3);
truck.add(axis4);
truck.add(axis5);
truck.add(axis6);
truck.add(axis7);
truck.add(axis12);
truck.add(axis13);
truck.add(axis14);
truck.add(axis15);
truck.add(axis16);
truck.add(axis17);
truck.add(axis18);
truck.add(axis19);
truck.add(axis20);
truck.add(axis21);
truck.add(axis22);
truck.add(axis23);
truck.add(axis24);
truck.add(lightSphere1);
truck.add(lightSphere2);
truck.add(lightSphere3);
truck.add(lightSphere4);
truck.add(lightSphere5);
truck.add(lightSphere6);
roda1.add(axis9);
roda2.add(axis10);
roda3.add(axis8);
roda4.add(axis11);
truck.add(roda1);
truck.add(roda2);
truck.add(roda3);
truck.add(roda4);
scene.add(truck);
scene.add(perspec_cam);

// Move all to the start position
truck.translateY(20.0);
truck.rotateY(degreesToRadians(-90));
truck.position.set(-25.00, 2.2, 50.0);
render();

function createCylinder1(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, color) {
  var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
  var material;
  if (!color)
    material = new THREE.MeshPhongMaterial({ color: "rgb(255, 255, 0)" });
  else
    material = new THREE.MeshPhongMaterial({ color: "rgb(230,120,50)" });
  var object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  return object;
}

function createCylinder(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, color) {
  var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
  var material;
  if (!color)
    material = new THREE.MeshPhongMaterial({ color: "rgb(38,38,38)" });
  else
    material = new THREE.MeshPhongMaterial({ color: "rgb(230,120,50)" });
  var object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  return object;
}

function createCylinder2(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, color) {
  var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
  var material;
  if (!color)
    material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
  else
    material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
  var object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  return object;
}

function createTorus(radius, tube, radialSegments, tubularSegments, arc) {
  var geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
  var material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
  var object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  object.rotateY(degreesToRadians(90));
  return object;
}

function createSphere(radius, widthSegments, heightSegments) {
  var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 0, Math.PI * 2, 0, Math.PI);
  var material = new THREE.MeshPhongMaterial({ color: "rgb(255, 255, 0)" });
  var object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  return object;
}

function createSphere1(radius, widthSegments, heightSegments) {
  var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 0, Math.PI * 2, 0, Math.PI);
  var material = new THREE.MeshPhongMaterial({ color: "rgb(255,0,0)" });
  var object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  return object;
}

function keyboardUpdate() {

  keyboard.update();
  var angle = Math.PI / 2 * 0.0025 * x;

  if (keyboard.pressed("X")) {
    if (speed < top_speed) {
      speed += additional_speed_speed;
    }
    if ( keyboard.pressed("X")) roda3.rotateZ(  -1 );
    if ( keyboard.pressed("X")) roda4.rotateZ(  -1 );
  }
  if (keyboard.pressed("down")) {

    if (speed > -top_speed) {
      speed -= additional_speed_speed;
    }
    if ( keyboard.pressed("down")) roda3.rotateZ( 1 );
    if ( keyboard.pressed("down")) roda4.rotateZ( 1 );
  }
  if (speed != 0) {
    if (keyboard.pressed("X")) {
    if (keyboard.pressed("left")) {
      truck.rotateY(angle);
      perspec_cam.rotateY(angle);
    }
    if (keyboard.pressed("right")) {
      truck.rotateY(-angle);
      perspec_cam.rotateY(-angle);
    }
  }
    else if (keyboard.pressed("down")) {
      if (keyboard.pressed("left")) {
        truck.rotateY(-angle);
        perspec_cam.rotateY(-angle);
      }
      if (keyboard.pressed("right")) {
        truck.rotateY(angle);
        perspec_cam.rotateY(angle);
    } 
  }
}

 if (keyboard.pressed('left')) {
    if (roda1.rotation._y > 1.3) {
      roda1.rotateY(angle / 2);
      roda2.rotateY(angle / 2);
     }
     else if  (keyboard.pressed('X')) {
      roda1.rotateZ( -1 );
      roda2.rotateZ( -1 );
    }
    else if  (keyboard.pressed('down')) {
      roda1.rotateZ( 1 );
      roda2.rotateZ( 1 );
    }
  } 
  else if (keyboard.pressed('right')) {
    if (roda1.rotation._y > 1.3) {
      roda1.rotateY(-angle / 2);
      roda2.rotateY(-angle / 2);
    }
    else if  (keyboard.pressed('X')) {
      roda1.rotateZ( -1 );
      roda2.rotateZ( -1 );
    }
    else if  (keyboard.pressed('down')) {
      roda1.rotateZ( 1 );
      roda2.rotateZ( 1 );
    }
  }
  if (!keyboard.pressed('right') && !keyboard.pressed('left')) {
    roda1.setRotationFromEuler(new THREE.Euler(roda1.rotationX, 1.57, roda1.rotationZ, 'XYZ')
    );
    roda2.setRotationFromEuler(new THREE.Euler(roda1.rotationX, 1.57, roda2.rotationZ, 'XYZ')
    );
  }

  if (keyboard.pressed("space")) {
    inspec = true;
    plane2.visible = false;

  }

  if (keyboard.pressed("shift") || keyboard.pressed("1") || keyboard.pressed("2")) {
    plane2.visible = true;
    inspec = false;
    //truck.translateY(20.0);
    //truck.rotateY(degreesToRadians(-90));
    truck.position.set(-25.00, 2.2, 50.0);


  }

  if (inspec == true) {

    truck.position.x = 6;
    truck.position.y = 5.3;
    truck.position.z = 6;

    camera.up.set(0, 1, 0);

    for (var i = 0; i < arrayPistaTwo.length; i++) {
      scene.remove(arrayPistaTwo[i]);

    }

    for (var i = 0; i < arrayPistaOne.length; i++) {
      scene.remove(arrayPistaOne[i]);
    }

  }

  if (inspec == false) {


  }

  if (keyboard.pressed("1")) {
    for (var i = 0; i < arrayPistaTwo.length; i++) {
      scene.remove(arrayPistaTwo[i]);
      truck.position.set(-25.00, 2.2, 50.0);
      
    }
    createAmbient();
    time = 0;

  };

  if (keyboard.pressed("2")) {
    for (var i = 0; i < arrayPistaOne.length; i++) {
      scene.remove(arrayPistaOne[i]);
      truck.position.set(-25.00, 2.2, 50.0);
    }
    createAmbientTwo();
    time = 0;
  };


  // Inspec Mode
  if (inspec == true) {

    trackballControls.update();
  }
}
function acceleration() {

  // Slow down Truck
  if ((speed < additional_speed_speed && speed > 0) || speed > additional_speed_speed && speed < 0) {
    speed = 0;
  }

  //Testa se o carrinho esta dentro da pista

  //posicao atual do carrinho em x
  var posX = truck.position.x;

  var posZ = truck.position.z;

  console.log(`Posicaox = ${posX}`);
  console.log(`Posicaoz = ${posZ}`);
  //posicao atual do carrinho em z


   // Verifica se o carro ta dentro da pista

  if ( ((truck.position.x <= -57) || (truck.position.x >= 57) || (truck.position.z <= -57) || (truck.position.z >= 57)) ) {

    if (speed > 1) {
      speed = speed / 2;
    }

    
  }

  if ( ((truck.position.x <= 30) && (truck.position.x >= -25) && (truck.position.z <= 30) && (truck.position.z >= -25)) ) {

    if (speed > 1) {
      speed = speed / 2;
    }

    
  }


  truck.translateZ(speed);

  keyboard.update();

  // To slow down the truck
  if (!(keyboard.pressed("X") || keyboard.pressed("down"))) {
    if (speed != 0 && speed > 0) {
      speed -= additional_speed_speed;
    }
    if (speed != 0 && speed < 0) {
      speed += additional_speed_speed;
    }
  }
  if (speed < 0 && keyboard.pressed("XX")) {
    speed += additional_speed_speed * 2;
  }

  if (speed > 0 && keyboard.pressed("down")) {
    speed -= additional_speed_speed * 2;
  }
}
setInterval(calculator, 1000);
function calculator() {
  time++;
  time_counter.changeMessage("Time: " + time + "s.");
}

// Use this to show information onscreen
function showInformation() {
  var controls = new InfoBox();
  controls.add("𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝘀");
  controls.addParagraph();
  controls.add("X to drive foward.");
  controls.add("Down Arrow to drive backward.");
  controls.add("Left / Right arrow to turn.");
  controls.addParagraph();
  controls.add("𝗧𝗿𝗮𝗰𝗸");
  controls.addParagraph();
  controls.add("Press 1 to select the first track.");
  controls.add("Press 2 to select the first track.");
  controls.show();
  controls.show();
}

function stalker_cam() {
  if (inspec == false) {
    perspec_cam.translateZ(displacement);
    perspec_cam.position.x = truck.position.x;
    perspec_cam.position.y = truck.position.y;
    perspec_cam.position.z = truck.position.z;


    camera.position.z = perspec_cam.position.z + y;
    camera.position.y = camera_position_y;
    camera.position.x = perspec_cam.position.x + y;
    camera.lookAt(
      perspec_cam.position.x,
      perspec_cam.position.y,
      perspec_cam.position.z,
    );
  }
}

function render() {
  stats.update(); // Update FPS 
  if (inspec == true)
    trackballControls.update();


  acceleration();
  keyboardUpdate();
  requestAnimationFrame(render);
  renderer.render(scene, camera) // Render scene
  stalker_cam();
}