import { arrayCubeBBox } from "./trabalhocgnew.js";
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
var blockSize = 30;

//Larissa: 23/12/////////////////////////////////////////////////////
//Classe Pista que cria o cubo, e coloca na posicao por parametro, o bloco inicial eh marcado com laranja
export default class Pista extends THREE.Mesh {

    constructor(x, z, inicio = false) {

        const cubeGeometry = new THREE.BoxGeometry(30, 0.3, 30);
        let cubeMaterial;
        //Larissa: 23/12/////////////////////////////////////////////////////
        if (inicio) {
            cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xfd8612 });
            //createFinishLine(x, z);
        }

        //Larissa: 23/12/////////////////////////////////////////////////////
        else
            cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        if (inicio)
            cube.name = 'PosicaoInicial';
        cube.position.set(x, 0, z);
        //Larissa: 27/12/////////////////////////////////////////////////////
        //arrayPista.push({ x: x, z: z });
        //Descomente para ver arrayPista (coordenadas)
        //console.log(arrayPista);
        //Larissa: 23/12/////////////////////////////////////////////////////
        return cube;


    }

}

//Larissa: 23/12/////////////////////////////////////////////////////
export function createFinishLine(x, z) {
    const cubeGeometry = new THREE.BoxGeometry(5, 0.3, 7.5);
    let cubeMaterial_black = new THREE.MeshPhongMaterial({ color: 'rgb(0,0,0)' });
    let cubeMaterial_write = new THREE.MeshPhongMaterial({ color: 'rgb(255,255,255)' });

    const cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube1.position.set(x - 12, 0.1, z + 4.5);

    const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube2.position.set(x - 12, 0.1, z + 12);

    const cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial_black);
    cube3.position.set(x - 12, 0.1, z - 3);

    const cube4 = new THREE.Mesh(cubeGeometry, cubeMaterial_write);
    cube4.position.set(x - 12, 0.1, z - 10.5);


    //scene.add(cube1);
    //scene.add(cube2);
    //scene.add(cube3);
    //scene.add(cube4);
}



export function createPista(npista) {

    //indica qual pista
    var track = npista;

    //posicao inicial x do primeiro bloco
    var xPos = 30.00;

    //posicao inicial z do primeiro bloco
    var zPos = 0;

    //tamanho do bloco
    //var blockSize = 30;

    //matriz de orientacao de criacao dos blocos
    let layout;

    //---alterado dia 27/12 por larissa (arrumando pista 3)----/

    //variacao da pista 3 (sub_bloco)
    if (track == 5) {
        xPos = 30;
        zPos = -180;
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
                [1, 0, 2],
                [0, 1, 4],
                [1, 0, 8],
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
                            [-1, 0, 8]
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
            if (i == 0 && j == 0 && track != 5) {
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
            //arrayPista.push({ x: dir[0] * blockSize + xPos, z: dir[1] * blockSize + zPos });
            //console.log(arrayPista)

            //Larissa: 27/12 ---------------------------------------------//


            //20/12 -----------------------------------------------------//

            //var knot = new THREE.Mesh(
            // new THREE.TorusKnotGeometry(0.5, 0.1),
            //new MeshNormalMaterial({}));

            //fazer uma chamada manual com Geometry.computeBoundingBox com antecedencia
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
