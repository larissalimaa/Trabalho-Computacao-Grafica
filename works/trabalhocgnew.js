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
import {createPista, cleanAmbient, getArrayPistaOne, getArrayPistaTwo, getArrayPistaThree,getArrayPistaFour} from "./Pista.js";


//Constantes e Variaveis Globais

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

//
var time_counter = new SecondaryBox("Loading...");

//
var time = 0;

//variavel do tamanho do bloco, comprimento/profundidade 
var blockSize = 30;

//Larissa:27/12 ----------------------//
//posicao inicial do carrinho, e camera
var xInicial = 0;
var yInicial = 0;
var zInicial = 0;
//Larissa:27/12 ----------------------//

//variavel que recebe numero da pista
var pista = 0;

//array de Boundings Boxs
export var arrayCubeBBox = new Array();

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

renderer.setClearColor('rgb(9, 9, 42)');

//Create camera and Init position
var camera = new THREE.PerspectiveCamera(49, window.innerWidth / window.innerHeight, 1, 1000);


//Davi: 03/01//////////////////INICIO///////////////////////////

const camPosition = new THREE.Vector3(0.0, 500, -180.0);
const MP_Width = 150;
const MP_Heidth = 150;



var camera2 = new THREE.PerspectiveCamera(50, MP_Width / MP_Heidth, 1.0, 700 + 2);
camera2.position.copy(camPosition);
camera2.up.set(-1.0, 1.0, 0.0);
camera2.lookAt(0.0, 0.0, -180.0);
camera2.translateY(120);
camera2.translateX(-20);

/*//Change Camera2 Fov (Tentei utilizar para tentar aumentar a distancia de renderização da cena, porém não obtive resultados positivos, caso o "camera2.fov" da linha abaixo seja habilitado
novamente, poderá ser observado que o mapa aparecerá por completo, porem totalmente fora de resolução. E caso observem atentamente o mesmo ainda continua com a faixa que não renderiza na sua
parte superior). */
//camera2.fov = 70;
//camera2.near = 100;
//camera2.far = 5000;
//camera2.updateProjectionMatrix();

//Davi: 03/01//////////////////FIM///////////////////////////

//Perspec Cam
var perspec_cam = new THREE.Group();
perspec_cam.rotateY(degreesToRadians(-90));


// Listen window size changes
window.addEventListener('resize', function () { onWindowResize(camera2, renderer) }, false);

//create Scene
var scene = new THREE.Scene();

function createSphere(radius, widthSegments, heightSegments) {
    var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 0, Math.PI * 2, 0, Math.PI);
    var material = new THREE.MeshBasicMaterial({ color: "rgb(255,255,50)" });
    var object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
    return object;
}
var trackballControls = new TrackballControls(camera, renderer.domElement);
var light = initDefaultSpotlight(scene, new THREE.Vector3(35, 20, 30)); // Use default light
var lightSphere42 = createSphere(0.3, 10, 10);
lightSphere42.position.copy(light.position);
light.position.copy(camera.position);

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


// Camera

//colocar objeto para add a camera
var cube7Geometry = new THREE.BoxGeometry(2, 2, 2);
//var cube7Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });

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
scene.add(perspec_cam);
scene.add(cube7);
lightSphere42.add(light); //Davi: 02/01
cube7.add(truck);
scene.add(camera2); //Davi: 03/01


//Davi: 03/01//////////////////INICIO///////////////////////////
//Adiciona a luz base na pista (Anteriormente só tinhamos esse formato de luz, porem adicionei o modo defautspotlight para ser a luz do modo inspeção)
initDefaultBasicLight(scene, true);
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
        plane2.visible = inspec;
        inspec == true ? (inspec = false) : (inspec = true);
    }
});


render();


function resetThings() {

    truck.position.set(xInicial, yInicial, zInicial);
    cube7.position.set(xInicial, 2.2, zInicial);
    time = 0;

}

//////////////////////////---alterado dia 23/12 por hugo---//////////////////////////////////////
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
            perspec_cam.rotateY(angle);
        }
        if (keyboard.pressed("right")) {
            cube7.rotateY(-angle);
            perspec_cam.rotateY(-angle);
        }
    }

    if (speed < -0.1) {
        if (keyboard.pressed("left")) {
            cube7.rotateY(-angle);
            perspec_cam.rotateY(-angle);
        }
        if (keyboard.pressed("right")) {
            cube7.rotateY(angle);
            perspec_cam.rotateY(angle);
        }
    }



    if (speed > 0.1) {

        roda1.rotateZ(angle);
        roda2.rotateZ(angle);
        roda3.rotateZ(angle);
        roda4.rotateZ(angle);

    }

    else if (speed < -0.1) {
        roda1.rotateZ(-angle);
        roda2.rotateZ(-angle);
        roda3.rotateZ(-angle);
        roda4.rotateZ(-angle);

    }

    if (keyboard.pressed('left')) {
        if (roda1.rotation._y > 1.3) {
            roda1.rotateY(-angle / 2);
            roda2.rotateY(-angle / 2);
        }
    }
    else if (keyboard.pressed('right')) {
        if (roda1.rotation._y > 1.3) {
            roda1.rotateY(angle / 2);
            roda2.rotateY(angle / 2);
        }
    }

    //logica: se eu nao estiver apertando nada, resert as rodas para voltar 
    //problema: so volta para a posicao "normal" quando paro de apertar X
    //problema: se aperta para a direita, ela fica na direita ate soltar o X,
    //problema: se aperta para a esquerda, ela fica na esquerda ate soltar o X,

    //&& (!keyboard.pressed('X') && !keyboard.pressed('down'))

    //talvez varios if's? (se estiver precionando para esquerda e nao precionando na direita faca...)
    /*
    if (!keyboard.pressed('left') && !keyboard.pressed('right')) {
        if (keyboard.pressed('X')) {

        }
        else {
            roda1.setRotationFromEuler(new THREE.Euler(3.14, 1.57, 3.14, 'XYZ')
            );
            roda2.setRotationFromEuler(new THREE.Euler(3.14, 1.57, 3.14, 'XYZ')
            );
        }
    }*/

    if (!keyboard.pressed('left') && !keyboard.pressed('right') && (!keyboard.pressed('X') && !keyboard.pressed('down'))) {
        roda1.setRotationFromEuler(new THREE.Euler(roda1.rotationX, 1.57, 3.14, 'XYZ')
        );
        roda2.setRotationFromEuler(new THREE.Euler(roda1.rotationX, 1.57, 3.14, 'XYZ')
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (inspec == true) {


        speed = 0.1; //Adicionei essa redução de velocidade para que o carro não saia do lugar no modo inspecionar (Davi: 03/01)
        cube7.position.x = 0;
        cube7.position.y = 0;
        cube7.position.z = 0;
        scene.add(light); //Adiciona a luz do modo inspecionar. (Davi: 03/01)
        scene.remove(initDefaultBasicLight); //Quando o modo inspecionar for ativado, a basiclight será removida para evitar problemas de saturação em relação as duas luzes conflitando. (Davi: 03/01)
        camera.up.set(0, 1, 0);

        cleanAmbient(scene);
        trackballControls.update();

    }





    // Criacao das Pistas

    if (keyboard.pressed("1")) {

        pista = 1;
        cleanAmbient(scene);
        scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista);

        for (var i = 0; i < arrayPistaOne.length; i++) {
            scene.add(arrayPistaOne[i]);

        }
        resetThings();

    }

    if (keyboard.pressed("2")) {
        pista = 2;
        cleanAmbient(scene);
        scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista);


        for (var i = 0; i < arrayPistaTwo
        .length; i++) {
            scene.add(arrayPistaTwo
            [i]);

        }
        resetThings();
    }

    if (keyboard.pressed("3")) {
        pista = 3;
        cleanAmbient(scene);
        scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista);


        for (var i = 0; i < arrayPistaThree
            .length; i++) {
            scene.add(arrayPistaThree
                [i]);

        }
        resetThings();
    }

    if (keyboard.pressed("4")) {

        pista = 4;
        cleanAmbient(scene);
        scene.remove(lightSphere42); //Assim como no modo inspecionar, havia problemas com as duas luzes conflitando, isso arruma o conflito, o mesmo serve pra variavel "light". (Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
        createPista(pista);


        for (var i = 0; i < arrayPistaFour.length; i++) {
            scene.add(arrayPistaFour[i]);

        }
        resetThings();
    }

    //Fim Criacao das Pistas
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

    //OUTRA IDEIA: Utilizar a Funcao

    /*
    if(verificaDentroPista(cube7,arrayPistaOne).length > 0){
        //top_speed = 5
        fora= false;
    }
    else{
        if(!fora){
                //top_speed = top_speed /2
                speed = speed / 2;

            
        
        }
        fora = true;
    }*/

    //Outra ideia: pegar valores de fora
    /*
    
    //fora do quadradao (somente externo)
    if (( ((cube7.position.x <= -320) || (cube7.position.x >= 25) ) || ( (cube7.position.z <= -295) || (cube7.position.z >= 52) ) )) {

        if (speed > 1) {
            speed = speed / 2;
        }


    }*/
    //27/12 Larissa -------------------------------------------//


    //23/12 Larissa -------------------------------------------//

    //posicao atual do carrinho em x
    var xTruck = cube7.position.x;

    //posicao atual do carrinho em y  
    //var yTruck = truck.position.y;

    //posicao atual do carrinho em z  
    var zTruck = cube7.position.z;

    //23/12 Larissa -------------------------------------------//

    //Debug
    //Descomente aqui caso queira ver posicao do cube7 ou truck

    console.log(`Posicaox = ${xTruck}`);
    console.log(`Posicaoz = ${zTruck}`);

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
        scene.remove(lightSphere42); //(Davi: 03/01)
        scene.remove(light); //(Davi: 03/01)
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


/*Davi: 03/01//////////////////INICIO/////////////////////////// (Essa parte tem sido bastante problemática, aparentemente a resolução do mini mapa acompanha a resolução da tela,
logo, conforme a janela do navegador é redimensionada, o minimapa se distorce. Além disso a parte superior do mesmo não é renderizada.)*/
function controlledRender() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    // Set main viewport
    renderer.setViewport(0, 0, width, height);
    renderer.setScissorTest(false);
    renderer.setClearColor("rgb(80, 70, 170)");
    renderer.clear();
    renderer.render(scene, camera);

    // Set virtual camera viewport 
    renderer.setViewport(0, height - MP_Heidth, MP_Width, MP_Heidth);
    renderer.setScissor(0, height - MP_Heidth, MP_Width, MP_Heidth);
    renderer.setScissorTest(true);
    renderer.setClearColor("rgb(60, 50, 150)");
    renderer.clear();
    renderer.render(scene, camera2);
}

//Davi: 03/01//////////////////FIM///////////////////////////

function render() {
    stats.update(); // Update FPS 

    //verifica se carro esta dentro da pista
    verificaCarro();

    if (inspec == true)
        trackballControls.update(); //Faz a luz acompanhar a camera no modo inspecionar (Davi: 03/01)
    light.position.copy(camera.position);
    keyboardUpdate();
    acceleration();
    requestAnimationFrame(render);
    renderer.render(scene, camera,) // Render scene
    stalker_cam();
    controlledRender() //Renderiza o mini mapa (Davi: 03/01)
}
