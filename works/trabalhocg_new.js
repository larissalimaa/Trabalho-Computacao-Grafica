import { radiansToDegrees, SecondaryBox } from "../libs/util/util.js";
import * as THREE from '../build/three.module.js';
import Stats from '../build/jsm/libs/stats.module.js';
import KeyboardState from '../libs/util/KeyboardState.js';
import { TrackballControls } from '../build/jsm/controls/TrackballControls.js';
import {
    initRenderer,
    degreesToRadians,
    onWindowResize,
    initDefaultSpotlight,
    initDefaultBasicLight,
    initCamera,
    InfoBox


} from "../libs/util/util.js";

import { createTruck, getRoda1, getRoda2, getRoda3, getRoda4 } from "./createTruck.js";
import { createPista, cleanAmbient, getArrayPistaOne, getArrayPistaTwo, getArrayPistaThree, getArrayPistaFour } from "./Pista.js";
import { planoCentral, planoCentral2, planoCentral3, planoCentral4 } from './Texturas.js';
//import { cone1, cone2, cone3, cone4, cone5, cone6, cone7, cone8, cone9, cone10, cone11, cylinder63, cylinder64, cylinder65, cylinder66, cylinder67, cylinder68, cylinder69, cylinder70, cylinder71, cylinder72, cylinder73, circle, circle2, circle4, circle5, circle6, circle7, circle8, circle9, circle10, circle11 } from './objetos.js';
import { obj, obj2 } from './objetos.js';
import { obj3, obj4 } from './objetos2.js';

//Constantes e Variaveis Globais
//console.log(cylinder64);
//velocidade maxima a ser atingida 
var top_speed = 2.0;

//velocidade minima a ser atingida
var min_speed = -5.0;

//variavel de adicao para velocidade
const additional_speed_speed = 0.02;

//variavel para posicao em y da camera
const camera_position_y = 60;


//variavel que armazena velocidade
var speed = 0;

//variavel para incrementar aceleracao
const incrementSpeed = 0.02;

const displacement = 22.3;

//variavel booleana para ativar ou modo de inspensao
var inspec = false;

var third_person = false;
//Para texturas
var repeatFactor = 4;

//
var time_counter = new SecondaryBox("Loading...");

//
var lap = 0;
var timerVoltas = [];
var laps = [];
timerVoltas[0] = 0
var canFinish = true;
var time = 0;
var voltaAtual = 0;
var contadorCheck = 0;
var checkvalue = 0;
var total = 0;
var timerTotal = 0;
var melhorVolta = 0;

var timer = new THREE.Clock();
var totalTimer = new THREE.Clock();
timer.start();
totalTimer.start();

//LARISSA 03/02 --------------------------------------------//
//bounding box

/*
var knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.5, 0.1),
    new THREE.MeshNormalMaterial({}));*/

var knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.5, 0.1), new THREE.MeshNormalMaterial({}));
knot.position.x = -290;
knot.position.z = 0;
knot.position.y = 2.2;
var knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
knotBoxHelper.update();
var knotBBox = new THREE.Box3();
knotBBox.setFromObject(knotBoxHelper);
knotBoxHelper.visible = true;

//var knotBBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
//knotBBox.setFromObject(knot);

//var knotBoxHelper = new THREE.BoundingBoxHelper(knot, 0x00ff00);
//knotBoxHelper.position.set(-290, 2.2, 0)

var geometryT = new THREE.BoxGeometry(1, 2, 3)
var material = new THREE.MeshPhongMaterial({ color: '#A9A9A9', })
var mesh = new THREE.Mesh(geometryT, material)
mesh.position.set(-320, 2.2, 0)


//LARISSA 03/02 --------------------------------------------//

var stringLap = 1;

//variavel do tamanho do bloco, comprimento/profundidade 
var blockSize = 60;

//Larissa:27/12 ----------------------//
//posicao inicial do carrinho, e camera
var xInicial = 0;
var yInicial = 0;
var zInicial = 0;
//Larissa:27/12 ----------------------//

//variavel que recebe numero da pista
var pista = 0;


//var seconds = 9999; // Some arbitrary value
//var date = new Date(seconds * 1000); // multiply by 1000 because Date() requires miliseconds
//var timeStr = date.toTimeString().split(' ')[0];

//var timer =  new SecondaryBox(timeStr);

//array de Boundings Boxs
export var arrayCubeBBox = new Array();

var laps = new Array();

//recupera arrays das pistas

var arrayPistaOne = getArrayPistaOne();
var arrayPistaTwo = getArrayPistaTwo();
var arrayPistaThree = getArrayPistaThree();
var arrayPistaFour = getArrayPistaFour();

//array que contem coordenadas da Pista
var arrayPista = new Array();

/*
//array de cubos contem pista 1 
export var arrayPistaOne = new Array();

//array de cubos contem pista 2 
export var arrayPistaTwo = new Array();

//array de cubos contem pista 3
export var arrayPistaThree = new Array();

//array de cubos que contem pista 4
export var arrayPistaFour = new Array();
*/
//variavel booleana que recebe se carro esta fora
var fora = true;

// To show FPS information
var stats = new Stats();

// To use keyboard
var keyboard = new KeyboardState();

var renderer = initRenderer();

//const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor('rgb(9, 9, 42)');

//Create camera and Init position
var camera = new THREE.PerspectiveCamera(49, window.innerWidth / window.innerHeight, 1, 4000);
var camera3 = new THREE.PerspectiveCamera(49, window.innerWidth / window.innerHeight, 1, 4000);
// camera3.near = 2000;
// camera3.far = 4000;

//Davi: 03/01//////////////////INICIO///////////////////////////

const camPosition = new THREE.Vector3(0.0, 500, -180.0);
const MP_Width = 200;
const MP_Heidth = 200;

var camera2 = new THREE.PerspectiveCamera(50, MP_Width / MP_Heidth, 1.0, 4000);
camera2.position.copy(camPosition);
camera2.up.set(-1.0, 1.0, 1.0);
camera2.lookAt(0.0, -400, -500);
camera2.translateY(180);
camera2.translateX(-50);


/*//Change Camera2 Fov (Tentei utilizar para tentar aumentar a distancia de renderização da cena, porém não obtive resultados positivos, caso o "camera2.fov" da linha abaixo seja habilitado
novamente, poderá ser observado que o mapa aparecerá por completo, porem totalmente fora de resolução. E caso observem atentamente o mesmo ainda continua com a faixa que não renderiza na sua
parte superior). */
//camera2.fov = 70;
//camera2.near = 100;
//camera2.far = 5000;
//camera2.updateProjectionMatrix();

//Davi: 03/01//////////////////FIM///////////////////////////

//Perspec Cam
var camera_look = new THREE.Group();
camera_look.rotateY(degreesToRadians(-90));


// Listen window size changes
window.addEventListener('resize', function () { onWindowResize(camera2, renderer) }, false);

//create Scene
var scene = new THREE.Scene();
//muda cor de fundo
//scene.background = new THREE.Color( 0x312A2A );

function createSphere(radius, widthSegments, heightSegments) {
    var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 0, Math.PI * 2, 0, Math.PI);
    var material = new THREE.MeshBasicMaterial({ color: "rgb(255,255,50)" });
    var object = new THREE.Mesh(geometry, material);
    //object.castShadow = true;
    return object;

}

var trackballControls = new TrackballControls(camera, renderer.domElement);
var light = initDefaultSpotlight(scene, new THREE.Vector3(35, 20, 30)); // Use default light
light.intensity = 0.3;
var lightSphere42 = createSphere(15, 50, 50);
//lightSphere42.position.copy(light.position);
light.position.copy(camera.position);


//Luz Para Emitir Sombras
var p_light = new THREE.DirectionalLight(0xffffff, 1, 100);

p_light.castShadow = true; // default false

//p_light.rotateY(degreesToRadians(-90));
//Set up shadow properties for the light
p_light.shadow.mapSize.width = 512; // default
p_light.shadow.mapSize.height = 512; // default
p_light.shadow.camera.near = 0.5; // default
p_light.shadow.camera.far = 500; // default

const helper = new THREE.CameraHelper(light.shadow.camera);
// scene.add( helper );


//Cria Sphere42
//var lightSphere42 = createSphere(0.3, 10, 10);
//lightSphere42.position.copy(light.position);


// Listen window size changes
window.addEventListener('resize', function () { onWindowResize(camera, renderer) }, false);



//showInformation();

//Cria o carro de "createTruck.js"
var truck = new THREE.Group();
truck = createTruck();
truck.castShadow = true;
//truck.scale.set(1.8, 1, 1);
//Recupera rodas
var roda1 = getRoda1();
var roda2 = getRoda2();
var roda3 = getRoda3();
var roda4 = getRoda4();



// Camera

//colocar objeto para add a camera
var cube7Geometry = new THREE.BoxGeometry(2, 2, 2);
//var cube7Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
var cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
var baseMaterial = new THREE.MeshLambertMaterial({
    color: "rgb(255, 69, 0)",
    opacity: 0,
    transparent: true,
    wireframe: false,
});
var cube71 = new THREE.Mesh(cubeGeometry, baseMaterial);
cube71.position.set(0.0, 20.0, -65.0);
truck.add(cube71);

//////////////////////////---alterado dia 27/12 por larissa---//////////////////////////////////////
var baseMaterial = new THREE.MeshLambertMaterial({
    color: "rgb(255, 69, 0)",
    opacity: 0,
    transparent: true,
    wireframe: false,
});
//////////////////////////---alterado dia 27/12 por larissa---//////////////////////////////////////


var cube7 = new THREE.Mesh(cube7Geometry, baseMaterial);
cube7.position.set(-5.5, 2.2, 50.0);





//Adiciona carro/camera a cena
scene.add(camera_look);
scene.add(cube7);
//lightSphere42.add(light); //Davi: 02/01
cube7.add(truck);
//scene.add(camera2); //Davi: 03/01
scene.add(camera);
camera.add(p_light);
//scene.add(p_light);
//p_light.position.copy(camera);
cube71.add(camera3);
//larissa 03/02
//scene.add(mesh);
//scene.add(knotBoxHelper);


//Davi: 03/01//////////////////INICIO///////////////////////////
//Adiciona a luz base na pista (Anteriormente só tinhamos esse formato de luz, porem adicionei o modo defautspotlight para ser a luz do modo inspeção)
var d_light;
d_light = initDefaultBasicLight(scene, true);
d_light.intensity = 0.15;
//Davi: 03/01//////////////////FIM///////////////////////////



//Move para posicao inicial
cube7.translateY(20.0);
cube7.rotateY(degreesToRadians(-90));
cube7.position.set(xInicial, yInicial, zInicial);

//POSICAO INICIAL DO CARRINHO 
//truck.position.set(-7, 2.2, 50.0);

// Modo inspecionar
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 32) {
        inspec == true ? (inspec = false) : (inspec = true);
    }
});




// Atualiza o timer
showInformation();

render();

timerUpdate();


function resetThings(x, y, z, rt) {

    //truck.position.set(0, 0, 0);
    cube7.position.set(x, 2.2, z);
    cube7.rotation.x = 0;
    //cube7.rotation.y = 0;
    cube7.rotation.z = 0;
    time = 0;
    //truck.rotation.y = 0;
    lap = 0;
    cube7.rotation.y = rt;
    canFinish = true;
    //alteracao 31/01 larissa
    voltaAtual = 0;
    contadorCheck = 0;
    checkvalue = 0;

    //FIXME: Tentativa de arrumar zerar ao clicar
    for (var i = 0; i < timerVoltas.length; i++) {
        timerVoltas[i] = 0;
    }
    timerVoltas[0] = 0;
    timerVoltas[lap] = 0;
    melhorVolta = 0;
    //////////////////
    scene.remove(obj);
    scene.remove(obj2);
    scene.remove(obj3);
    scene.remove(obj4);
    //scene.remove(plane3)
    //scene.remove(plane5)
    scene.remove(planoCentral);
    scene.remove(planoCentral2);
    scene.remove(planoCentral3);
    scene.remove(planoCentral4);


}


function timerUpdate() {
    if (contadorCheck >= 1) {

        // console.log(lap)

        var seconds = timerVoltas[lap] % 60;
        var minutes = (timerVoltas[lap] - seconds) / 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var total = 0;

        for (var i = 0; i <= lap; i++) {
            total += timerVoltas[i];
            laps[i] = timerVoltas[i];
            console.log('timer=')
            //console.log(timerVoltas[i]);
        }
        //console.log(timerVoltas[0]);

        var secondsTotal = total % 60;
        var minutesTotal = (total - secondsTotal) / 60;

        var secondsMelhorVolta = melhorVolta % 60;
        var minutesMelhorVolta = (melhorVolta - secondsMelhorVolta) / 60;

        minutesTotal = minutesTotal < 10 ? "0" + minutesTotal : minutesTotal;
        secondsTotal = secondsTotal < 10 ? "0" + secondsTotal : secondsTotal;

        minutesMelhorVolta = minutesMelhorVolta < 10 ? "0" + minutesMelhorVolta : minutesMelhorVolta;
        secondsMelhorVolta = secondsMelhorVolta < 10 ? "0" + secondsMelhorVolta : secondsMelhorVolta;

        if (document.getElementById("InfoxBox") == null) {
            information = new InfoBox();
            information.infoBox.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
            information.infoBox.style.color = "rgb(242, 242, 242)";
            information.show();
        }

        var information = document.getElementById("InfoxBox");
        information.innerHTML = "Volta (" + lap + "/4)<br><br>Tempo da volta: " + minutes + ":" + seconds + "<br>Tempo total: " + minutesTotal + ":" + secondsTotal
            + "<br>Melhor Volta: " + minutesMelhorVolta + ":" + secondsMelhorVolta

        timerVoltas[lap]++;

    }


    setTimeout(function () {
        timerUpdate();
    }, 1000);
}
function melhorVoltaCarro() {
    melhorVolta = timerVoltas[0];
    for (var i = 0; i <= lap; i++) {
        if (melhorVolta > timerVoltas[i] && timerVoltas[i] != 0) {
            melhorVolta = timerVoltas[i];
        }
    }
}

function keyboardUpdate() {

    keyboard.update();
    var angle = Math.PI / 2 * 0.0025 * 10;

    if (keyboard.pressed("X")) {
        if (speed < top_speed) {
            speed += additional_speed_speed;
        }
    }
    if (keyboard.pressed("down")) {

        if (speed > -top_speed) {
            speed -= additional_speed_speed;
        }
    }
    if (speed > 0.1) {
        if (keyboard.pressed("left")) {
            cube7.rotateY(angle);
            camera_look.rotateY(angle);
            //p_light.rotateY(angle);
        }
        if (keyboard.pressed("right")) {
            cube7.rotateY(-angle);
            camera_look.rotateY(-angle);
            //p_light.rotateY(-angle);
        }
    }

    if (speed < -0.1) {
        if (keyboard.pressed("left")) {
            cube7.rotateY(-angle);
            camera_look.rotateY(-angle);
            //p_light.rotateY(-angle);
        }
        if (keyboard.pressed("right")) {
            cube7.rotateY(angle);
            camera_look.rotateY(angle);
            //p_light.rotateY(angle);
        }
    }

    if (inspec == true) {
        scene.remove(obj);
        scene.remove(obj2);
        scene.remove(obj3);
        scene.remove(obj4);
        scene.remove(planoCentral);
        scene.remove(planoCentral2);
        scene.remove(planoCentral3);
        scene.remove(planoCentral4);
        //scene.remove(p_light);
        speed = 0.1; //Adicionei essa redução de velocidade para que o carro não saia do lugar no modo inspecionar (Davi: 03/01)
        cube7.position.x = 0;
        cube7.position.y = 0;
        cube7.position.z = 0;
        scene.add(light); //Adiciona a luz do modo inspecionar. (Davi: 03/01)
        scene.remove(d_light); //Quando o modo inspecionar for ativado, a basiclight será removida para evitar problemas de saturação em relação as duas luzes conflitando. (Davi: 03/01)
        camera.up.set(0, 1, 0);

        cleanAmbient(scene);
        trackballControls.update();

    }
    //adiciona objetos
    if (keyboard.pressed("1")) {




    }

    if (keyboard.pressed("2")) {




    }






    // Criacao das Pistas

    if (keyboard.pressed("1")) {
        pista = 1;
        cleanAmbient(scene);
        //scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista, scene);
        //scene.add(p_light);
        scene.add(d_light);
        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.add(arrayPistaOne[i]);

        }

        //alteracao 23/01
        console.log(arrayPistaOne);

        resetThings(-270, 2.2, 0, degreesToRadians(-90));
        scene.add(obj);
        scene.add(planoCentral);  //plano central
        //TODO: nao zera quando aperta as teclas


        //cube7.rotation.y =   Math.PI ;
        camera2.position.copy(camPosition);
        camera2.up.set(-100, 10, 0);
        camera2.lookAt(0, 0, -180);
        camera2.translateY(250);

        camera2.translateX(120);

        camera2.translateZ(330);


        //adicao dos planos e texturas

    }

    if (keyboard.pressed("2")) {
        pista = 2;
        cleanAmbient(scene);
        //scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista, scene);
        //scene.add(p_light);
        scene.add(d_light);
        for (var i = 0; i < arrayPistaTwo
            .length; i++) {
            scene.add(arrayPistaTwo
            [i]);

        }
        resetThings(30, 2.2, -120, degreesToRadians(180));
        scene.add(obj2);
        //cube7.rotation.y =  - Math.PI;
        //2truck.rotation.y = -Math.PI /2;
        scene.add(planoCentral2);  //plano central
        camera2.position.copy(camPosition);
        camera2.up.set(-100, 10, 0);
        camera2.lookAt(0, 0, -180);
        camera2.translateY(250);

        camera2.translateX(120);

        camera2.translateZ(330);
    }

    if (keyboard.pressed("3")) {
        pista = 3;
        cleanAmbient(scene);
        //scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista, scene);
        //scene.add(p_light);
        scene.add(d_light);
        console.log(arrayPistaThree);

        for (var i = 0; i < arrayPistaThree.length; i++) {
            scene.add(arrayPistaThree
            [i]);

        }
        resetThings(-570, 2.2, -420, degreesToRadians(-360));
        scene.add(obj3);
        //cube7.rotation.y =   Math.PI ;
        scene.add(planoCentral3);  //plano central

        //truck.rotation.y = Math.PI ;
        camera2.position.copy(camPosition);
        camera2.up.set(-100, 10, 0);
        camera2.lookAt(0, 0, -180);
        camera2.translateY(250);

        camera2.translateX(120);

        camera2.translateZ(330);
    }

    if (keyboard.pressed("4")) {

        pista = 4;
        cleanAmbient(scene);
        //scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista, scene);
        //scene.add(p_light);
        scene.add(d_light);
        for (var i = 0; i < arrayPistaFour.length; i++) {
            scene.add(arrayPistaFour[i]);

        }
        resetThings(-270, 2.2, 0, degreesToRadians(-90));
        scene.add(obj4);
        //cube7.rotation.y =   Math.PI ;
        //var camera2 = new THREE.PerspectiveCamera(50, MP_Width / MP_Heidth, 1.0, 1000 + 2);
        scene.add(planoCentral4);  //plano central
        //alteracao 31/01 larissa
        voltaAtual = 0;
        contadorCheck = 0;
        checkvalue = 0;
        timerVoltas[lap] = 0;
        timer.start();
        totalTimer.start();

        const camPosition1 = new THREE.Vector3(0.0, 500, -180);
        camera2.position.copy(camPosition1);
        camera2.up.set(-100, 10, 0);
        camera2.lookAt(0, 0, -180);
        camera2.translateY(500);
        camera2.translateX(350);

        camera2.translateZ(850);

    }

    //Fim Criacao das Pistas
}

//////////////////////////////////////////

var textureLoader = new THREE.TextureLoader();
//Skybox
let materialArray = [];
let textura_ft = textureLoader.load('../assets/textures/t.jpg');
let textura_f = textureLoader.load('../assets/textures/floresta.jpg');
let textura_t = textureLoader.load('../assets/textures/t.jpg');
let textura_a = textureLoader.load('../assets/textures/sky.png');
let textura_d = textureLoader.load('../assets/textures/d.png');
let textura_e = textureLoader.load('../assets/textures/e.png');

var floorTexture4 = new THREE.TextureLoader().load('../assets/textures/ar.jpg');
floorTexture4.wrapS = floorTexture4.wrapT = THREE.RepeatWrapping;
floorTexture4.repeat.set(1, 1);



materialArray.push(new THREE.MeshBasicMaterial({ map: textura_f }));
materialArray.push(new THREE.MeshBasicMaterial({ map: textura_t }));
materialArray.push(new THREE.MeshBasicMaterial({ map: textura_d }));//
materialArray.push(new THREE.MeshBasicMaterial({ map: textura_e }));
materialArray.push(new THREE.MeshBasicMaterial({ map: floorTexture4 }));
materialArray.push(new THREE.MeshBasicMaterial({ map: floorTexture4 }));

for (let i = 0; i < 6; i++) {
    materialArray[i].side = THREE.BackSide;
}

var skyboxGeo = new THREE.BoxGeometry(2000, 2000, 600);
var skybox = new THREE.Mesh(skyboxGeo, materialArray);
skybox.position.set(-250, 90, -150);
skybox.rotateX(degreesToRadians(90));
console.log(skybox.position);
scene.add(skybox);

////////////////////////////////////
//atualiza
roda1.matrixAutoUpdate = false;
roda2.matrixAutoUpdate = false;
roda3.matrixAutoUpdate = false;
roda4.matrixAutoUpdate = false;

//skybox.matrixAutoUpdate = false;


var mat4 = new THREE.Matrix4();
var angulo = 0;

/////////identidade
roda1.matrix.identity();
roda2.matrix.identity();
roda3.matrix.identity();
roda4.matrix.identity();

//skybox.matrix.identity();
//skybox.matrix.multiply(mat4.makeRotationX(degreesToRadians(90)));


function commandKeyboard() {

    keyboard.update();


    if (keyboard.pressed("left")) {

        if (angulo < 60) {
            roda1.matrix.multiply(mat4.makeRotationY(angle[0]));
            roda2.matrix.multiply(mat4.makeRotationY(angle[0]));
            angulo = angulo + 1.1;
        }
    }

    else if (keyboard.pressed("right")) {

        if (angulo > -60) {
            roda1.matrix.multiply(mat4.makeRotationY(angle[1]));
            roda2.matrix.multiply(mat4.makeRotationY(angle[1]));
            angulo = angulo - 1.1;
        }
    }

    if (keyboard.pressed("X")) {
        if (speed > 0) {
            roda1.matrix.multiply(mat4.makeRotationZ(angle[2]));
            roda2.matrix.multiply(mat4.makeRotationZ(angle[2]));
            roda3.matrix.multiply(mat4.makeRotationZ(angle[2]));
            roda4.matrix.multiply(mat4.makeRotationZ(angle[2]));

        }
    }
    if (keyboard.pressed("down")) {
        if (speed > 0) {
            roda1.matrix.multiply(mat4.makeRotationZ(angle[3]));
            roda2.matrix.multiply(mat4.makeRotationZ(angle[3]));
            roda3.matrix.multiply(mat4.makeRotationZ(angle[3]));
            roda4.matrix.multiply(mat4.makeRotationZ(angle[3]));

        }
    }
}

roda1.matrix.multiply(mat4.makeTranslation(3.8, -0.1, 8.0));
roda1.matrix.multiply(mat4.makeRotationY(degreesToRadians(90)));

roda2.matrix.multiply(mat4.makeTranslation(-3.8, -0.1, 8.0));
roda2.matrix.multiply(mat4.makeRotationY(degreesToRadians(90)));

roda3.matrix.multiply(mat4.makeTranslation(3.8, -0.1, -8.0));
roda3.matrix.multiply(mat4.makeRotationY(degreesToRadians(90)));

roda4.matrix.multiply(mat4.makeTranslation(-3.8, -0.1, -8.0));
roda4.matrix.multiply(mat4.makeRotationY(degreesToRadians(90)));

var angle = [-1.57, 0, 0, 0];

angle[0] = degreesToRadians(0.3);
angle[1] = degreesToRadians(-0.3);

//var angle1 = [-1.57, 0, 0, 0];

angle[2] = degreesToRadians(5);
angle[3] = degreesToRadians(-5);


function contaVoltasPista(truck) {
    //var checkpoint = arrayPistaOne[0]
    //checkpoint.set

    var checkpoint_x;
    var checkpoint_z;
    var checkx2;
    var checkz2;
    let posicaoBlocoInicial_x;
    let posicaoBlocoInicial_z;
    var posicaoCarroX = truck.position.x
    var posicaoCarroZ = truck.position.z

    //TODO: Primeiro problema: o valor do primeiro check point ser do bloco inicial, para o timer
    // comecar no inicio do jogo, como colocado a baixo
    if (pista == 1) {
        checkpoint_x = -270;
        checkpoint_z = 0;
        checkx2 = -510;
        checkz2 = -600;
        posicaoBlocoInicial_x = -270;
        posicaoBlocoInicial_z = 0;
    }

    if (pista == 2) {
        checkpoint_x = 30;
        checkpoint_z = -120;
        //FIXME: 
        checkx2 = -510;
        checkz2 = -600;
        posicaoBlocoInicial_x = 30;
        posicaoBlocoInicial_z = -120;
    }


    if (

        posicaoCarroX >= posicaoBlocoInicial_x
        - blockSize / 2 &&
        posicaoCarroZ >= posicaoBlocoInicial_z - blockSize / 2 &&
        posicaoCarroX <= posicaoBlocoInicial_x
        + blockSize / 2 &&
        posicaoCarroZ <= posicaoBlocoInicial_z + blockSize / 2 &&
        voltaAtual < checkvalue
    ) {
        canFinish = true;


        //TODO: contador se estiver dentro do bloco para saber se passou da linha dachegada
        // Problema 2: Se o carrinho estiver parado, esse contador ficara iterando e somando
        // infinitamente, isso eh um problema, pois associamos o contador
        // a volta, por exemplo, se o carrinho passou uma vez, isso significa que ponto a ponto,
        // passou 30 vezes e isso contabiliza a 1 volta (lap) 

        voltaAtual += 1;
        contadorCheck = 0;
        checkvalue = 0;
        // minutes = 0
        //timer.start();



        if (voltaAtual == 0) {
            lap = 0;
        }
        if (voltaAtual == 1) {
            lap = 1;
        }
        if (voltaAtual == 2) {
            lap = 2;
        }
        if (voltaAtual == 3) {
            lap = 3;
        }
        if (voltaAtual == 4) {
            lap = 4;
        }


        //console.log("voltaAtual=")
        //console.log(voltaAtual)

        //console.log("lap=")
        //console.log(lap)
        //timerUpdate();

        timerVoltas[lap] = 0;
        //timeTotal 
        //canFinish = false;

        melhorVoltaCarro();


    }
    /*
    if(voltaAtual > 0){
        if(lap < 5){
            lap++;
        }
        
        voltaAtual = 0;
     }*/
    /*
   if (canFinish == true) {
       console.log("entrou");
       if (lap < 5) {
           lap++;
       }

       timerVoltas[lap] = 0;
       canFinish = false;
   }*/

    if (posicaoCarroX >= checkpoint_x - blockSize / 2 &&
        posicaoCarroZ >= checkpoint_z - blockSize / 2 &&
        posicaoCarroX <= checkpoint_x + blockSize / 2 &&
        posicaoCarroZ <= checkpoint_z + blockSize / 2
    ) {
        //console.log("contadorCheck=")
        //console.log(contadorCheck)
        /*
        if (contadorCheck < 50) {

            contadorCheck += 10

        }*/

        // TODO: Terceiro problema seria se colocar mais de um checkpoint,
        // e como o checkpoint poderia "segurar" o valor do contador volta Atual
        contadorCheck = contadorCheck + 1;
    }

    if (posicaoCarroX >= checkx2 - blockSize / 2 &&
        posicaoCarroZ >= checkz2 - blockSize / 2 &&
        posicaoCarroX <= checkx2 + blockSize / 2 &&
        posicaoCarroZ <= checkz2 + blockSize / 2
    ) {
        //console.log("contadorCheck=")
        //console.log(contadorCheck)
        /*
        if (contadorCheck < 50) {

            contadorCheck += 10

        }*/

        // TODO: Terceiro problema seria se colocar mais de um checkpoint,
        // e como o checkpoint poderia "segurar" o valor do contador volta Atual
        checkvalue += 1;
    }



}
function verificaCarro() {

    if (pista == 1) {


        if (verificaDentroPista(cube7, arrayPistaOne).length > 0) {
            top_speed = 2.0;
            //min_speed= -5.0;
            fora = false;
        }
        else {
            if (!fora) {
                top_speed = top_speed / 2;
                speed = speed / 2;
            }
            fora = true;
        }
    }

    if (pista == 2) {


        if (verificaDentroPista(cube7, arrayPistaTwo
        ).length > 0) {
            top_speed = 2.0;
            //min_speed= -5.0;
            fora = false;
        }
        else {
            if (!fora) {
                top_speed = top_speed / 2;
                speed = speed / 2;
            }
            fora = true;
        }
    }

    if (pista == 3) {


        if (verificaDentroPista(cube7, arrayPistaThree
        ).length > 0) {
            top_speed = 2.0;
            //min_speed= -5.0;
            fora = false;
        }
        else {
            if (!fora) {
                top_speed = top_speed / 2;
                speed = speed / 2;
            }
            fora = true;
        }
    }

    if (pista == 4) {


        if (verificaDentroPista(cube7, arrayPistaFour).length > 0) {
            top_speed = 2.0;
            //min_speed= -5.0;
            fora = false;
        }
        else {
            if (!fora) {
                top_speed = top_speed / 2;
                speed = speed / 2;
            }
            fora = true;
        }
    }

}

//////////////////////////---alterado dia 27/12 por larissa---//////////////////////////////////////
//Funcao que verifica a partir da posicao do carrinho,(x e z) dentro de um laco que contem
//CUBOS, verificando se a posicao x e z do CENTRO DO CUBO +/- (mais ou menos) o tamanho do BLOCO dividido por 2 (que sao os limites)
function verificaDentroPista(truck, road) {
    //array que armazenara blocos que estivem dentro 
    //console.log('chamou')
    let blocks = []
    let xTruck = truck.position.x;
    let zTruck = truck.position.z;
    for (let i = 0; i < road.length; i++) {
        let xAux = road[i].position.x
        let zAux = road[i].position.z
        //se, as coordenadas estao dentro do limite, adicione cubo[i] no array blocks, para retornar
        if (
            xTruck >= xAux - blockSize / 2 &&
            zTruck >= zAux - blockSize / 2 &&
            xTruck <= xAux + blockSize / 2 &&
            zTruck <= zAux + blockSize / 2) {
            blocks.push(road[i])
        }
    }
    //retorna array de blocos, caso encontre 
    return blocks

}
//////////////////////////---alterado dia 27/12 por larissa---//////////////////////////////////////

function acceleration() {



    // Slow down Truck
    if ((speed < additional_speed_speed && speed > 0) || speed > additional_speed_speed && speed < 0) {
        speed = 0;
    }



    //posicao atual do carrinho em x
    var xTruck = cube7.position.x;

    //posicao atual do carrinho em y  
    //var yTruck = truck.position.y;

    //posicao atual do carrinho em z  
    var zTruck = cube7.position.z;

    //23/12 Larissa -------------------------------------------//

    //Debug
    //Descomente aqui caso queira ver posicao do cube7 ou truck

    //console.log(`Posicaox = ${xTruck}`);
    //console.log(`Posicaoz = ${zTruck}`);

    //20/12 Larissa-------------------------------------------//

    //seta as coordenadas do carrinho no ponto
    //obs:  y eh fixo
    //point.set(xTruck, 0, zTruck);

    //cubo contem ponto do carro?

    //23/12 Larissa-------------------------------------------//


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

    time_counter.changeMessage("Velocidade: " + Math.abs(Math.round(speed * 22)) + " KM/h");
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
    controls.add("Press 2 to select the second track.");
    controls.add("Press 3 to select the three track.");
    controls.add("Press 4 to select the four track.");
    controls.addParagraph();
    controls.add("𝗜𝗻𝘀𝗽𝗲𝗰 𝗠𝗼𝗱𝗲");
    controls.addParagraph();
    controls.add("Press Space to able/disable Inspec Mode");
    controls.show();
    controls.show();
}

function stalker_cam() {
    if (inspec == false) {

        camera_look.translateZ(displacement);
        camera_look.position.x = cube7.position.x;
        camera_look.position.y = cube7.position.y;
        camera_look.position.z = cube7.position.z;

        p_light.add(lightSphere42);
        p_light.target = truck;
        p_light.shadow.autoUpdate = false;
        p_light.position.x = camera.position.x;
        p_light.position.y = camera.position.y - 7.5;
        p_light.position.z = camera.position.z + 15;
        //scene.remove(lightSphere42); //(Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)

        camera.position.z = camera_look.position.z + 50;
        camera.position.y = camera_position_y;
        camera.position.x = camera_look.position.x + 50;
        camera.lookAt(
            camera_look.position.x,
            camera_look.position.y,
            camera_look.position.z,
        );


    }
}
camera3.rotateY(degreesToRadians(180));

/*Davi: 03/01//////////////////INICIO/////////////////////////// (Essa parte tem sido bastante problemática, aparentemente a resolução do mini mapa acompanha a resolução da tela,
logo, conforme a janela do navegador é redimensionada, o minimapa se distorce. Além disso a parte superior do mesmo não é renderizada.)*/
function controlledRender() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    // Set main viewport
    renderer.setViewport(0, 0, width, height);
    renderer.setScissorTest(false);
    renderer.setClearColor(0x312A2A);
    renderer.clear();
    renderer.render(scene, camera);

    // Set virtual camera viewport 
    renderer.setViewport(0, height - MP_Heidth, MP_Width, MP_Heidth);
    renderer.setScissor(0, height - MP_Heidth, MP_Width, MP_Heidth);
    renderer.setScissorTest(true);
    renderer.setClearColor("rgb(60, 50, 150)");
    renderer.clear();
    renderer.render(scene, camera2);


    if (keyboard.pressed("B")) {
        scene.remove(camera);
        scene.remove(camera2);
        renderer.setViewport(0, 0, width, height);
        renderer.setScissorTest(false);
        renderer.setClearColor(0x312A2A);
        renderer.clear();
        renderer.render(scene, camera3);

        renderer.setViewport(0, height - MP_Heidth, MP_Width, MP_Heidth);
        renderer.setScissor(0, height - MP_Heidth, MP_Width, MP_Heidth);
        renderer.setScissorTest(true);
        renderer.setClearColor("rgb(60, 50, 150)");
        renderer.clear();
        renderer.render(scene, camera2);

    }


}

//Davi: 03/01//////////////////FIM///////////////////////////

function render() {
    stats.update(); // Update FPS 
    if (inspec == false) {


    }

    //verifica se carro esta dentro da pista
    verificaCarro();
    var delta = 0.2;
    //bounding box
    //larissa 03/02
    //knot.rotation.x += (Math.PI / 4) * delta;
    //knotBoxHelper.update();
    knotBBox.setFromObject(knotBoxHelper);


    contaVoltasPista(cube7);
    //checkpoint
    // contaVoltasPista(cube7);
    if (inspec == true)
        trackballControls.update(); //Faz a luz acompanhar a camera no modo inspecionar (Davi: 03/01)
    light.position.copy(camera.position);
    keyboardUpdate();
    acceleration();
    commandKeyboard();
    requestAnimationFrame(render);
    renderer.render(scene, camera,) // Render scene
    stalker_cam();
    controlledRender() //Renderiza o mini mapa (Davi: 03/01)


}





