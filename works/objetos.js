
import * as THREE from '../build/three.module.js';

var loader = new THREE.TextureLoader();
var conetexture = loader.load('../assets/textures/conetextura.jpg');
var conet = new THREE.MeshLambertMaterial({
map: conetexture
});


export var cone1 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone1.position.set(25.0, 5.0, -300.0)
    
 export var cone2 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone2.position.set(0.0, 5.0, 0.0)
        
export var cone3 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone3.position.set(-150.0, 5.0, -600.0)
       
 export var cone4 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone4.position.set(-300.0, 5.0, 0.0)
       
export var cone5 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone5.position.set(-450.0, 5.0, -600.0)
       
export var cone6 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone6.position.set(-570.0, 5.0, 0.0)
 
 export var cone7 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone7.position.set(0.0, 5.0, -600.0)
 
 export var cone8 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone8.position.set(-570.0, 5.0, -150.0)
 
 export var cone9 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone9.position.set(-570.0, 5.0, -300.0)
 
 export var cone10 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone10.position.set(25.0, 5.0, -150.0)
 
 export var cone11 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone11.position.set(25.0, 5.0, -300.0)
 
