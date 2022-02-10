import { arrayCubeBBox } from "./trabalhocg_new.js";
import * as THREE from '../build/three.module.js';


//array de cubos contem pista 1 
 var arrayPistaOne = new Array();

//array de cubos contem pista 2 
var arrayPistaTwo = new Array();

//array de cubos contem pista 3
var arrayPistaThree = new Array();

//array de cubos que contem pista 4
 var arrayPistaFour = new Array();

//variavel do tamanho do bloco, comprimento/profundidade 
var blockSize = 60;

//Para texturas
var repeatFactor = 2;
var wrapModeS  = THREE.RepeatWrapping;
var wrapModeT  = THREE.RepeatWrapping;
var minFilter = THREE.LinearFilter;
var magFilter = THREE.LinearFilter;

var cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9,cube10,cube11,cube12,cube13,cube14,cube15

//Larissa: 23/12/////////////////////////////////////////////////////
//Classe Pista que cria o cubo, e coloca na posicao por parametro, o bloco inicial eh marcado com laranja
export default class Pista extends THREE.Mesh {

    constructor(x, z, inicio = false, scene, npista) {
        
        const loader = new THREE.TextureLoader();
        const chegadatexture = loader.load('../assets/textures/chegada.png');
        chegadatexture.repeat.set(1,1);
        const chegada = new THREE.MeshLambertMaterial({
          map: chegadatexture
        });
        const cubeGeometry = new THREE.BoxGeometry(60, 0.3, 60);
        var cubeMaterial;
        //Larissa: 23/12/////////////////////////////////////////////////////
        if (inicio) {
            
            cubeMaterial = chegada;
            //createFinishLine(x, z, scene, npista);
        
        }

        //Larissa: 23/12/////////////////////////////////////////////////////
        else{

           
        var floorTexture = new THREE.TextureLoader().load('asfalto5.jpg');
        floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set(repeatFactor, repeatFactor);

        //var textureLoader = new THREE.TextureLoader();
        //var floor  = textureLoader.load('asfalto.jpg');
        
        cubeMaterial = new THREE.MeshPhongMaterial({map: floorTexture , side: THREE.DoubleSide });
        
            //cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 });
        }


        
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        //cube.material.map = floor;
        //cube.material.map.wrapS = wrapModeS;
        //cube.material.map.wrapT = wrapModeT;
        //cube.material.map.minFilter = minFilter;
        //cube.material.map.magFilter = magFilter;
        //cube.material.map.repeat.set(repeatFactor,repeatFactor);

        if (inicio)
        cube.name = 'PosicaoInicial';
        cube.position.set(x, 0, z);
        cube.receiveShadow = true;
        //Larissa: 27/12/////////////////////////////////////////////////////
        //arrayPista.push({ x: x, auxZ: auxZ });
        //Descomente para ver arrayPista (coordenadas)
        //console.log(arrayPista);
        //Larissa: 23/12/////////////////////////////////////////////////////
        return cube;
    }

}

//Larissa: 23/12/////////////////////////////////////////////////////
export function createFinishLine(x, z, scene, npista) {

    //console.log("linha");
    ///console.log(x);
    //console.log(auxZ);
    //console.log("--");

    var auxX = x;
    var auxZ = z;

    

    const cubeGeometry = new THREE.BoxGeometry(2, 0.3, 2);
    let cubeMaterial_black = new THREE.MeshPhongMaterial({ color: 'rgb(0,0,0)' });
    let cubeMaterial_write = new THREE.MeshPhongMaterial({ color: 'rgb(255,255,255)' });

    cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube1.position.set(auxX - 12, 0.1, auxZ + 0);

    cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube2.position.set(auxX - 12, 0.1, auxZ + 2);

    cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube3.position.set(auxX - 12, 0.1, auxZ - 2);

    cube4 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube4.position.set(auxX - 12, 0.1, auxZ - 4);

    cube5 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube5.position.set(auxX - 12, 0.1, auxZ  + 4);

    cube6 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube6.position.set(auxX - 12, 0.1, auxZ  + 6);

    cube7 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube7.position.set(auxX - 12, 0.1, auxZ  + 8);

    cube8 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube8.position.set(auxX - 12, 0.1, auxZ  + 10);

    cube9 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube9.position.set(auxX - 12, 0.1, auxZ  + 12);

    cube10 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube10.position.set(auxX - 12, 0.1, auxZ  + 14);

    cube11 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube11.position.set(auxX - 12, 0.1, auxZ - 6);

    cube12 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube12.position.set(auxX - 12, 0.1, auxZ - 8);

    cube13 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube13.position.set(auxX - 12, 0.1, auxZ - 10);

    cube14 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube14.position.set(auxX - 12, 0.1, auxZ - 12);

    cube15 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube15.position.set(auxX - 12, 0.1, auxZ - 14);

    if(npista == 2 || npista == 3){
        auxZ = -132
        if(npista == 3){
            auxZ = -406
        }
        cube1.position.set(auxX + 0 , 0.1, auxZ);
        cube2.position.set(auxX + 2 , 0.1, auxZ);
        cube3.position.set(auxX - 2 , 0.1, auxZ);
        cube4.position.set(auxX - 4 , 0.1, auxZ);
        cube5.position.set(auxX + 4 , 0.1, auxZ);
        cube6.position.set(auxX + 6 , 0.1, auxZ);
        cube7.position.set(auxX + 8, 0.1, auxZ);
        cube8.position.set(auxX + 10 , 0.1, auxZ);
        cube9.position.set(auxX + 12 , 0.1, auxZ);
        cube10.position.set(auxX + 14 , 0.1, auxZ);
        cube11.position.set(auxX - 6 , 0.1, auxZ);
        cube12.position.set(auxX - 8 , 0.1, auxZ);
        cube13.position.set(auxX - 10 , 0.1, auxZ);
        cube14.position.set(auxX - 12 , 0.1, auxZ);
        cube15.position.set(auxX - 14 , 0.1, auxZ);
    }
    
    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);
    scene.add(cube4);
    scene.add(cube5);
    scene.add(cube6);
    scene.add(cube7);
    scene.add(cube8);
    scene.add(cube9);
    scene.add(cube10);
    scene.add(cube11);
    scene.add(cube12);
    scene.add(cube13);
    scene.add(cube14);
    scene.add(cube15);
}



export function createPista(npista, scene) {

    //indica qual pista
    var track = npista;

    //posicao inicial x do primeiro bloco
    var xPos = 30.00;

    //posicao inicial auxZ do primeiro bloco
    var zPos = 0;

    //tamanho do bloco
    //var blockSize = 30;

    //matriauxZ de orientacao de criacao dos blocos
    let layout;

    //---alterado dia 27/12 por larissa (arrumando pista 3)----/

    //variacao da pista 3 (sub_bloco) //antigo bloco 33 do console p bloco tamanho 30
    if (track == 5) {
        xPos = 30;
        zPos = -360;
        //inicio = false;
    }
    //---alterado dia 27/12 por larissa----/

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
                [0, -1, 4],
                [-1, 0, 4],
                [0, -1, 6],
                [1, 0, 4],
                [0, 1, 4],
                [1, 0, 6],
                [0, 1, 6],
                ]
                createPista(5);

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
                //---alterado dia 27/12 por larissa----/
                else {
                    if (track == 5) {
                        layout = [
                            [0, -1, 4],
                            [-1, 0, 6]
                        ]
                    }
                }
                //---alterado dia 27/12 por larissa----/
            }
        }
    }


    let cube
    for (let i = 0; i < layout.length; i++) {
        let dir = layout[i]
        //dir[2] eh a qtd dos blocos (10 etc...)
        for (let j = 0; j < dir[2]; j++) {
            //posicao inicial
            if (i == 0 && j == 4 && track != 5 && track != 3 && track!=2) {
                cube = new Pista(dir[0] * blockSize + xPos, dir[1] * blockSize + zPos, 1 , scene, npista)
            }
            else {
                //pinta laranja posicao pista 3
                if(i == 3 && j == 2 && track == 3){
                    //var auxX = dir[0] * blockSize + xPos;
                    //var auxauxZ = dir[1] * blockSize + zPos;
                    cube = new Pista(dir[0] * blockSize + xPos, dir[1] * blockSize + zPos, 1, scene, npista)
                    //console.log(auxX);
                    //console.log(auxauxZ);
                    
                }
                else{
                if(i==5 && j==2 && track == 2){
                    var auxX = dir[0] * blockSize + xPos;
                    var auxauxZ = dir[1] * blockSize + zPos;
                    cube = new Pista(dir[0] * blockSize + xPos, dir[1] * blockSize + zPos, 1, scene , npista);
                    console.log(auxX);
                    console.log(auxauxZ);
                }
                else{
                cube = new Pista(dir[0] * blockSize + xPos, dir[1] * blockSize + zPos, 0 , scene, npista)
                }
            }
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
                        } else {
                            //---alterado dia 27/12 por larissa----/
                            if (track == 5) {
                                arrayPistaThree.push(cube)
                            }
                            //---alterado dia 27/12 por larissa----/
                        }
                    }
                }
            }

            //Larissa: 27/12 ---------------------------------------------//
            //arrayPista.push({ x: dir[0] * blockSize + xPos, auxZ: dir[1] * blockSize + zPos });
            //console.log(arrayPista)

            //Larissa: 27/12 ---------------------------------------------//


            //20/12 -----------------------------------------------------//

            //var knot = new THREE.Mesh(
            // new THREE.TorusKnotGeometry(0.5, 0.1),
            //new MeshNormalMaterial({}));

            //faauxZer uma chamada manual com Geometry.computeBoundingBox com antecedencia
            //cube.geometry.computeBoundingBox();


            // definir esses limite posteriormente com Box3.setFromObject, o que calcula as dimensoes
            // levando em consideracao as transformacoes de uma entidade 3D.
            var cubeBBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            cubeBBox.setFromObject(cube);
            //console.log(cubeBBox);

            arrayCubeBBox.push(cubeBBox);


            //-----------------------------------------------------------//

            xPos += dir[0] * blockSize
            zPos += dir[1] * blockSize
        }
    }



}

export function cleanAmbient(scene) {

    for (var i = 0; i < arrayPistaOne.length; i++) {
        scene.remove(arrayPistaOne[i]);
    }

    for (var i = 0; i < arrayPistaTwo
    .length; i++) {
        scene.remove(arrayPistaTwo[i]);

    }
    for (var i = 0; i < arrayPistaThree
        .length; i++) {
        scene.remove(arrayPistaThree[i]);

    }
    for (var i = 0; i < arrayPistaFour.length; i++) {
        scene.remove(arrayPistaFour[i]);

    }

    scene.remove(cube1);
    scene.remove(cube2);
    scene.remove(cube3);
    scene.remove(cube4);
    scene.remove(cube5);
    scene.remove(cube6);
    scene.remove(cube7);
    scene.remove(cube8);
    scene.remove(cube9);
    scene.remove(cube10);
    scene.remove(cube11);
    scene.remove(cube12);
    scene.remove(cube13);
    scene.remove(cube14);
    scene.remove(cube15);

}



export function getArrayPistaOne()
{
  return arrayPistaOne;
}

export function getArrayPistaTwo()
{
  return arrayPistaTwo;
}

export function getArrayPistaThree()
{
  return arrayPistaThree;
}

export function getArrayPistaFour()
{
  return arrayPistaFour;
}

