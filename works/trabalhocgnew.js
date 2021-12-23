import { radiansToDegrees, SecondaryBox } from "../libs/util/util.js";
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
import { createTruck, getRoda1, getRoda2, getRoda3, getRoda4 } from "./createTruck.js";


//Classe Pista que cria o cubo, e coloca na posicao por parametro, o bloco inicial eh marcado com laranja
export default class Pista extends THREE.Mesh {

  constructor(x, z, inicio = false) {

    const cubeGeometry = new THREE.BoxGeometry(30, 0.3, 30);
    let cubeMaterial
    if (inicio) cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xfd8612 });
    else cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    if (inicio) cube.name = 'PosicaoInicial'
    cube.position.set(x, 0, z)
    return cube;


  }

}

//Constantes e Variaveis Globais

//TODO: comentar 
const top_speed = 1.3;

//TODO: comentar
const additional_speed_speed = 0.02;

//TODO: comentar
const camera_position_y = 60;

//TODO: comentar
var speed = 0;

//TODO: comentar
const displacement = 22.3;

//TODO: comentar
var inspec = false;

//TODO: comentar
var time_counter = new SecondaryBox("Loading...");

//TODO: comentar
var time = 0;

//array que contem coordenadas da Pista
var arrayPista = new Array();

//array de cubos contem pista 1 
var arrayPistaOne = new Array();

//array de cubos contem pista 2 
var arrayPistaTwo = new Array();

//array de cubos contem pista 3
var arrayPistaThree = new Array();

//array de cubos que contem pista 4
var arrayPistaFour = new Array();

//variavel do tamanho do bloco, comprimento/profundidade 
var tamBloco = 32;




//Larissa: alteracao 20/12 -------------------------------------------------//

//var knot = new THREE.Mesh(
//new THREE.TorusKnotGeometry(0.5, 0.1),
//new MeshNormalMaterial({}));

//var knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
//knotBBox.setFromObject(knot);

var cubeBBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
//var dotGeo = new THREE.SphereGeometry(0.05);
//var point = new THREE.Mesh(dotGeo, new THREE.MeshNormalMaterial());
var point = new THREE.Vector3();


//--------------------------------------------------------------------------//


// To show FPS information
var stats = new Stats();

// To use keyboard
var keyboard = new KeyboardState();

var renderer = initRenderer();

renderer.setClearColor('rgb(9, 9, 42)');

//Create camera and Init position
var camera = new THREE.PerspectiveCamera(49, window.innerWidth / window.innerHeight, 1, 1000);
var perspec_cam = new THREE.Group();
perspec_cam.rotateY(degreesToRadians(-90));


//create Scene
var scene = new THREE.Scene();

var trackballControls = new TrackballControls(camera, renderer.domElement);
initDefaultBasicLight(scene, true);

//Cria o plano base
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
//scene.add(plane2);



// Listen window size changes
window.addEventListener('resize', function () { onWindowResize(camera, renderer) }, false);

showInformation();

//Cria o carro de "createTruck.js"
var truck = new THREE.Group();
truck = createTruck();

//Recupera rodas
var roda1 = getRoda1();
var roda2 = getRoda2();
var roda3 = getRoda3();
var roda4 = getRoda4();

//Recupera rodas
var roda1 = getRoda1();
var roda2 = getRoda2();
var roda3 = getRoda3();
var roda4 = getRoda4();

// Camera

//colocar objeto para add a camera
var cube7Geometry = new THREE.BoxGeometry(4, 4, 4);
var cube7Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
var cube7 = new THREE.Mesh(cube7Geometry, cube7Material);
cube7.position.set(-7, 2.2, 50.0);


//Adiciona carro/camera a cena
scene.add(perspec_cam);
scene.add(cube7);
cube7.add(truck);

//Move para posicao inicial
cube7.translateY(20.0);
cube7.rotateY(degreesToRadians(-90));
cube7.position.set(0.00, 2.2, 50.0);


//POSICAO INICIAL DO CARRINHO 
//truck.position.set(-7, 2.2, 50.0);

// Modo inspecionar
document.addEventListener('keypress', function (e) {
  if (e.keyCode === 32) {
    plane2.visible = inspec;
    inspec == true ? (inspec = false) : (inspec = true);
  }
});


render();



function createPista(npista) {

  //indica qual pista
  var track = npista;

  //posicao inicial x do primeiro bloco
  var xPos = 25.00;

  //posicao inicial z do primeiro bloco
  var zPos = 50;

  //tamanho do bloco
  var blockSize = 32;
  
  //matriz de orientacao de criacao dos blocos
  let layout;

  if (track == 1) {
    layout = [[-1, 0, 10],
    [0, -1, 10],
    [1, 0, 10],
    [0, 1, 10],
    ]
  } else {
    if (track == 2) {
      layout = [[-1, 0, 10],
      [0, -1, 10],
      [1, 0, 5],
      [0, 1, 5],
      [1, 0, 5],
      [0, 1, 5],
      ]
    }
    else {
      if (track == 3) {

        layout = [[-1, 0, 6],
        [0, -1, 3],
        [-1, 0, 4],
        [0, -1, 6],
        [1, 0, 4],
        [0, 1, 3],
        [1, 0, 6],
        [0, 1, 6],
        ]

      }
      else {
        if (track == 4) {
          layout = [[-1, 0, 8],
          [0, -1, 8],
          [-1, 0, 6],
          [0, -1, 6],
          [-1, 0, 4],
          [0, -1, 4],
          [1, 0, 4],
          [0, 1, 4],
          [1, 0, 6],
          [0, 1, 6],
          [1, 0, 8],
          [0, 1, 8]
          ]
        }
      }
    }
  }


  let cube
  for (let i = 0; i < layout.length; i++) {
    let dir = layout[i]
    for (let j = 0; j < dir[2]; j++) {
      //posicao inicial
      if (i == 0 && j == 0) {
        cube = new Pista(dir[0] * blockSize + xPos, dir[1] * blockSize + zPos, 1)
      }
      else {
        cube = new Pista(dir[0] * blockSize + xPos, dir[1] * blockSize + zPos)
      }

      if (track == 1) {
        arrayPistaOne.push(cube)
      }
      else {
        if (track == 2) {
          arrayPistaTwo.push(cube)
        }
        else {
          if (track == 3) {
            arrayPistaThree.push(cube)
          }
          else {
            if (track == 4) {
              arrayPistaFour.push(cube)
            }
          }
        }
      }
      //array de coordenadas
      arrayPista.push(xPos);

      //20/12 -----------------------------------------------------//

      //var knot = new THREE.Mesh(
      // new THREE.TorusKnotGeometry(0.5, 0.1),
      //new MeshNormalMaterial({}));

      cube.geometry.computeBoundingBox();


      cubeBBox.setFromObject(cube);


      //-----------------------------------------------------------//

      xPos += dir[0] * blockSize
      zPos += dir[1] * blockSize
    }
  }



}

function cleanAmbient() {

  for (var i = 0; i < arrayPistaOne.length; i++) {
    scene.remove(arrayPistaOne[i]);
  }

  for (var i = 0; i < arrayPistaTwo.length; i++) {
    scene.remove(arrayPistaTwo[i]);

  }
  for (var i = 0; i < arrayPistaThree.length; i++) {
    scene.remove(arrayPistaThree[i]);

  }
  for (var i = 0; i < arrayPistaFour.length; i++) {
    scene.remove(arrayPistaFour[i]);

  }

}

function resetThings() {

  truck.position.set(0.0, 0.0, -20.0);
  cube7.position.set(-25.0, 2.2, 50.0);
  time = 0;

}


function keyboardUpdate() {

  keyboard.update();
  var angle = Math.PI / 2 * 0.0025 * 10;

  if (keyboard.pressed("X")) {
    if (speed < top_speed) {
      speed += additional_speed_speed;
    }
    if (keyboard.pressed("X")) roda3.rotateZ(-1);
    if (keyboard.pressed("X")) roda4.rotateZ(-1);
  }
  if (keyboard.pressed("down")) {

    if (speed > -top_speed) {
      speed -= additional_speed_speed;
    }
    if (keyboard.pressed("down")) roda3.rotateZ(1);
    if (keyboard.pressed("down")) roda4.rotateZ(1);
  }
  if (speed != 0) {
    if (keyboard.pressed("X")) {
      if (keyboard.pressed("left")) {
        cube7.rotateY(angle);
        perspec_cam.rotateY(angle);
      }
      if (keyboard.pressed("right")) {
        cube7.rotateY(-angle);
        perspec_cam.rotateY(-angle);
      }
    }
    else if (keyboard.pressed("down")) {
      if (keyboard.pressed("left")) {
        cube7.rotateY(-angle);
        perspec_cam.rotateY(-angle);
      }
      if (keyboard.pressed("right")) {
        cube7.rotateY(angle);
        perspec_cam.rotateY(angle);
      }
    }
  }

  if (keyboard.pressed('left')) {
    if (roda1.rotation._y > 1.3) {
      roda1.rotateY(angle / 2);
      roda2.rotateY(angle / 2);
    }
    else if (keyboard.pressed('X')) {
      roda1.rotateZ(-1);
      roda2.rotateZ(-1);
    }
    else if (keyboard.pressed('down')) {
      roda1.rotateZ(1);
      roda2.rotateZ(1);
    }
  }
  else if (keyboard.pressed('right')) {
    if (roda1.rotation._y > 1.3) {
      roda1.rotateY(-angle / 2);
      roda2.rotateY(-angle / 2);
    }
    else if (keyboard.pressed('X')) {
      roda1.rotateZ(-1);
      roda2.rotateZ(-1);
    }
    else if (keyboard.pressed('down')) {
      roda1.rotateZ(1);
      roda2.rotateZ(1);
    }
  }
  if (!keyboard.pressed('right') && !keyboard.pressed('left')) {
    roda1.setRotationFromEuler(new THREE.Euler(roda1.rotationX, 1.57, roda1.rotationZ, 'XYZ')
    );
    roda2.setRotationFromEuler(new THREE.Euler(roda1.rotationX, 1.57, roda2.rotationZ, 'XYZ')
    );
  }


  if (inspec == true) {

    cube7.position.x = 0;
    cube7.position.y = 0;
    cube7.position.z = 0;


    camera.up.set(0, 1, 0);

    cleanAmbient();
    trackballControls.update();

  }

// Criacao das Pistas

if (keyboard.pressed("1")) {

  cleanAmbient();

  createPista(1);

  for (var i = 0; i < arrayPistaOne.length; i++) {
    scene.add(arrayPistaOne[i]);

  }
  resetThings();
}

if (keyboard.pressed("2")) {

  cleanAmbient();

  createPista(2);


  for (var i = 0; i < arrayPistaTwo.length; i++) {
    scene.add(arrayPistaTwo[i]);

  }
  resetThings();
}

if (keyboard.pressed("3")) {

  cleanAmbient();
  createPista(3);


  for (var i = 0; i < arrayPistaThree.length; i++) {
    scene.add(arrayPistaThree[i]);

  }
  resetThings();
}

if (keyboard.pressed("4")) {

  cleanAmbient();
  createPista(4);


  for (var i = 0; i < arrayPistaFour.length; i++) {
    scene.add(arrayPistaFour[i]);

  }
  resetThings();
}

//Fim Criacao das Pistas
}

function acceleration() {

  // Slow down Truck
  if ((speed < additional_speed_speed && speed > 0) || speed > additional_speed_speed && speed < 0) {
    speed = 0;
  }

  //Testa se o carrinho esta dentro da pista

  //posicao atual do carrinho em x
  var posX = truck.position.x;
  //posicao atual do carrinho em z  
  var posZ = truck.position.z;

  //Debug
  console.log(`Posicaox = ${posX}`);
  console.log(`Posicaoz = ${posZ}`);

  //20/12 -------------------------------------------//
  var xTruck = truck.position.x;
  var yTruck = truck.position.y;
  var zTruck = truck.position.z;

  point.set(xTruck, yTruck, zTruck);

  //cubo contem ponto do carro?
  var dentro = cubeBBox.containsPoint(point);

  /*if (dentro == false) {
    if (speed > 1) {
      speed = speed / 2;
    }
  }*/

  //20/12 -------------------------------------------------//

  cube7.translateZ(speed);

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
  controls.add("Press 3 to select the first track.");
  controls.add("Press 4 to select the first track.");
  controls.addParagraph();
  controls.add("𝗜𝗻𝘀𝗽𝗲𝗰 𝗠𝗼𝗱𝗲");
  controls.addParagraph();
  controls.add("Press Space to able/desable Inspec Mode");
  controls.show();
  controls.show();
}

function stalker_cam() {
  if (inspec == false) {
    perspec_cam.translateZ(displacement);
    perspec_cam.position.x = cube7.position.x;
    perspec_cam.position.y = cube7.position.y;
    perspec_cam.position.z = cube7.position.z;


    camera.position.z = perspec_cam.position.z + 50;
    camera.position.y = camera_position_y;
    camera.position.x = perspec_cam.position.x + 50;
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