import { createCylinder, createSphere, createSphere1, createCylinder1, createCylinder2, createTorus } from "./car.js";
import * as THREE from '../build/three.module.js';
import {degreesToRadians} from "../libs/util/util.js";


var roda1;
var roda2;
var roda3;
var roda4;

export function createTruck() {



    var truck = new THREE.Group();


    // Set the parts of the pseudo-car
    var cubeGeometry = new THREE.BoxGeometry(4, 12, 4);
    var cubeMaterial = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0.0, 0.5, 0.0);
    cube.rotateX(degreesToRadians(90));

    var cube2Geometry = new THREE.BoxGeometry(3.8, 3.8, 3.8);
    var cube2Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
    var cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
    cube2.position.set(0.0, 4, 3.6);
    cube2.rotateX(degreesToRadians(90));

    var cube3Geometry = new THREE.BoxGeometry(4.1, 2.6, 2.6);
    var cube3Material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
    var cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
    cube3.position.set(0.0, 4, 3.6);
    cube3.rotateX(degreesToRadians(90));

    var cube4Geometry = new THREE.BoxGeometry(3, 4.2, 2.8);
    var cube4Material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
    var cube4 = new THREE.Mesh(cube4Geometry, cube4Material);
    cube4.position.set(0.0, 4, 3.6);
    cube4.rotateX(degreesToRadians(90));

    var cube5Geometry = new THREE.BoxGeometry(3, 6.2, 2.8);
    var cube5Material = new THREE.MeshPhongMaterial({ color: "rgb(0,0,0)" });
    var cube5 = new THREE.Mesh(cube5Geometry, cube5Material);
    cube5.position.set(0.0, 1.2, -2);
    cube5.rotateX(degreesToRadians(90));

    var cube6Geometry = new THREE.BoxGeometry(3.5, 6.2, 2.9);
    var cube6Material = new THREE.MeshPhongMaterial({ color: "rgb(255, 69, 0)" });
    var cube6 = new THREE.Mesh(cube6Geometry, cube6Material);
    cube6.position.set(0.0, 1.0, 4);
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

    roda1 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
    roda1.position.set(2.5, -0.5, 4.0);

    roda2 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
    roda2.position.set(-2.5, -0.5, 4.0);

    roda3 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
    roda3.position.set(2.5, -0.5, -4.0);

    roda4 = createTorus(1.5, 0.3, 20, 20, Math.PI * 7);
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


    return truck;
}


export function getRoda1()
{
  return roda1;
}

export function getRoda2()
{
  return roda2;
}

export function getRoda3()
{
  return roda3;
}

export function getRoda4()
{
  return roda4;
}