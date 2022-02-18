import * as THREE from '../build/three.module.js';
import {degreesToRadians} from "../libs/util/util.js";


export function createCylinder(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, color)
{
  var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
  var material;
  if(!color)
    material = new THREE.MeshPhongMaterial({color:"rgb(255,0,0)"});
  else
    material = new THREE.MeshPhongMaterial({color:"rgb(230,120,50)"});
  var object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
  return object;
}

export function createCylinder1(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, color)
{
  var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
  var material;
  if(!color)
    material = new THREE.MeshPhongMaterial({color:"rgb(0,0,0)"});
  else
    material = new THREE.MeshPhongMaterial({color:"rgb(230,120,50)"});
  var object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
  return object;
}

export function createTorus(radius, tube, radialSegments, tubularSegments, arc)
{
  const loader = new THREE.TextureLoader();
  const pneutexture = loader.load('../assets/textures/pneu.jpg');
const pneu = new THREE.MeshLambertMaterial({
  map: pneutexture
});
  var geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
  var object = new THREE.Mesh(geometry, pneu);
    object.castShadow = true;
    object.rotateY(degreesToRadians(90));
  return object;
}

export function createTorus1(radius, tube, radialSegments, tubularSegments, arc)
{
  const loader = new THREE.TextureLoader();
  const fibratexture = loader.load('../assets/textures/fibra.jpg');
  const fibra = new THREE.MeshLambertMaterial({
    map: fibratexture
  });
  var geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
  var object = new THREE.Mesh(geometry, fibra);
    object.castShadow = true;
    object.rotateY(degreesToRadians(90));
  return object;
}

export function createSphere(radius, widthSegments, heightSegments)
{
  var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 0, Math.PI * 2, 0, Math.PI);
  var material = new THREE.MeshBasicMaterial({color:"rgb(255,255,50)"});
  var object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
  return object;
}