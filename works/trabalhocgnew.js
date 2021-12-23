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



    // Criacao das Pistas

    if (keyboard.pressed("1")) {


        for (var i = 0; i < arrayPistaTwo.length; i++) {
            scene.remove(arrayPistaTwo[i]);

        }

        for (var i = 0; i < arrayPistaThree.length; i++) {
            scene.remove(arrayPistaThree[i]);

        }

        for (var i = 0; i < arrayPistaFour.length; i++) {
            scene.remove(arrayPistaFour[i]);

        }

        createPista(1);

        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.add(arrayPistaOne[i]);

        }



    }

    if (keyboard.pressed("2")) {


        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.remove(arrayPistaOne[i]);

        }

        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.remove(arrayPistaThree[i]);

        }

        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.remove(arrayPistaFour[i]);

        }


        createPista(2);


        for (var i = 0; i < arrayPistaTwo.length; i++) {
            scene.add(arrayPistaTwo[i]);

        }


    }

    if (keyboard.pressed("3")) {


        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.remove(arrayPistaOne[i]);

        }

        for (var i = 0; i < arrayPistaTwo.length; i++) {
            scene.remove(arrayPistaTwo[i]);

        }

        for (var i = 0; i < arrayPistaTwo.length; i++) {
            scene.remove(arrayPistaFour[i]);

        }


        createPista(3);


        for (var i = 0; i < arrayPistaThree.length; i++) {
            scene.add(arrayPistaThree[i]);

        }


    }

    if (keyboard.pressed("4")) {


        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.remove(arrayPistaOne[i]);

        }

        for (var i = 0; i < arrayPistaTwo.length; i++) {
            scene.remove(arrayPistaTwo[i]);

        }

        for (var i = 0; i < arrayPistaTwo.length; i++) {
            scene.remove(arrayPistaThree[i]);

        }


        createPista(4);


        for (var i = 0; i < arrayPistaFour.length; i++) {
            scene.add(arrayPistaFour[i]);

        }



    }

    //Fim Criacao das Pistas

}


// Use this to show information onscreen
function showInformation() {
    var controls = new InfoBox();
    controls.addParagraph();
    controls.add("𝗧𝗿𝗮𝗰𝗸");
    controls.addParagraph();
    controls.add("Press 1 to select the first track.");
    controls.add("Press 2 to select the first track.");
    controls.add("Press 3 to select the first track.");
    controls.add("Press 4 to select the first track.");
    controls.show();
    controls.show();
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