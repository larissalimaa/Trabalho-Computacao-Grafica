
import * as THREE from '../build/three.module.js';

var loader = new THREE.TextureLoader();
var conetexture = loader.load('../assets/textures/conetextura.jpg');
var conet = new THREE.MeshLambertMaterial({
map: conetexture
});

var cilitexture = loader.load('../assets/textures/pneuteste.jpg');
var cilit = new THREE.MeshLambertMaterial({
map: cilitexture
});

var loader = new THREE.TextureLoader();
var madeiratex = loader.load('../assets/textures/wood.png');
var madeiratex2 = loader.load('../assets/textures/woodtop.png');
var madeiraMaterial = new THREE.MeshLambertMaterial({
    map: madeiratex
});
var madeiratexx = new THREE.MeshLambertMaterial({
    map: madeiratex2
});

export var cone1 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone1.position.set(25.0, 5.0, -300.0)


 

export var cone2 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone2.position.set(0.0, 5.0, 0.0)
        
// export var BoxCone2 = new THREE.Box3();
// otherBox2.setFromObject(cone2);

export var cone3 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone3.position.set(-250.0, 5.0, -610.0)
       
 export var cone4 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone4.position.set(-350.0, 5.0, 10.0)
       
export var cone5 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone5.position.set(-450.0, 5.0, -590.0)
       
export var cone6 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone6.position.set(-570.0, 5.0, -10.0)
 
 export var cone7 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone7.position.set(0.0, 5.0, -610.0)
 
 export var cone8 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone8.position.set(-550.0, 5.0, -160.0)
 
 export var cone9 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone9.position.set(-590.0, 5.0, -290.0)
 
 export var cone10 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone10.position.set(25.0, 5.0, -140.0)
 
 export var cone11 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone11.position.set(25.0, 5.0, -310.0)

export var cylinder63 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder63.position.set(0.0, 5.0, 0.0)

//////////////////////////////////1//////////////////////////////////////////////////////////
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder64 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder64.position.set(10.0, 5.0, -515.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle = new THREE.Mesh(circleGeometry, cilit);
circle.position.set(10.0, 10, -515);
circle.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

export var cylinder65 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder65.position.set(-180.0, 5.0, -20.0)

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle2 = new THREE.Mesh(circleGeometry, cilit);
circle2.position.set(-180.0, 10, -20.0);
circle2.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder66 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder66.position.set(-400.0, 5.0, 5.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle4 = new THREE.Mesh(circleGeometry, cilit);
circle4.position.set(-400.0, 10, 5);
circle4.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder67 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder67.position.set(50.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle5 = new THREE.Mesh(circleGeometry, cilit);
circle5.position.set(50.0, 10, -205);
circle5.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder68 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder68.position.set(-570.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle6 = new THREE.Mesh(circleGeometry, cilit);
circle6.position.set(-570.0, 10, -205);
circle6.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder69 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder69.position.set(-570.0, 5.0, -55.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle7 = new THREE.Mesh(circleGeometry, cilit);
circle7.position.set(-570.0, 10, -55);
circle7.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder70 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder70.position.set(-570.0, 5.0, -615.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle8 = new THREE.Mesh(circleGeometry, cilit);
circle8.position.set(-570.0, 10, -615);
circle8.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder71 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder71.position.set(-140.0, 5.0, -620.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle9 = new THREE.Mesh(circleGeometry, cilit);
circle9.position.set(-140.0, 10, -620);
circle9.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder72 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder72.position.set(-280.0, 5.0, -580.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle10 = new THREE.Mesh(circleGeometry, cilit);
circle10.position.set(-280.0, 10,-580);
circle10.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
export var cylinder73 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder73.position.set(30.0, 5.0, 20.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
export var circle11 = new THREE.Mesh(circleGeometry, cilit);
circle11.position.set(30.0, 10, 20);
circle11.rotation.x = -Math.PI / 2;