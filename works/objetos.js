
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
//////////////////////////////////////////////pista 1 inicio////////////////////////////////////////////////

export var obj = new THREE.Group();

var cone1 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone1.position.set(25.0, 5.0, -300.0)

 var cone2 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone2.position.set(0.0, 5.0, 0.0);


 var cone3 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone3.position.set(-250.0, 5.0, -610.0)
       
 var cone4 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone4.position.set(-350.0, 5.0, 10.0)
       
 var cone5 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone5.position.set(-450.0, 5.0, -590.0)
       
 var cone6 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone6.position.set(-570.0, 5.0, -10.0)
 
  var cone7 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone7.position.set(0.0, 5.0, -610.0)
 
 var cone8 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone8.position.set(-550.0, 5.0, -160.0)
 
  var cone9 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone9.position.set(-590.0, 5.0, -290.0)
 
 var cone10 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone10.position.set(25.0, 5.0, -140.0)
 
  var cone11 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone11.position.set(25.0, 5.0, -310.0)

var cylinder63 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder63.position.set(0.0, 5.0, 0.0)

//////////////////////////////////1//////////////////////////////////////////////////////////
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder64 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder64.position.set(10.0, 5.0, -515.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle = new THREE.Mesh(circleGeometry, cilit);
circle.position.set(10.0, 10, -515);
circle.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

 var cylinder65 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder65.position.set(-180.0, 5.0, -20.0)

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle2 = new THREE.Mesh(circleGeometry, cilit);
circle2.position.set(-180.0, 10, -20.0);
circle2.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder66 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder66.position.set(-400.0, 5.0, 5.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle4 = new THREE.Mesh(circleGeometry, cilit);
circle4.position.set(-400.0, 10, 5);
circle4.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder67 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder67.position.set(50.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle5 = new THREE.Mesh(circleGeometry, cilit);
circle5.position.set(50.0, 10, -205);
circle5.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder68 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder68.position.set(-570.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle6 = new THREE.Mesh(circleGeometry, cilit);
circle6.position.set(-570.0, 10, -205);
circle6.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder69 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder69.position.set(-570.0, 5.0, -55.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle7 = new THREE.Mesh(circleGeometry, cilit);
circle7.position.set(-570.0, 10, -55);
circle7.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder70 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder70.position.set(-570.0, 5.0, -615.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle8 = new THREE.Mesh(circleGeometry, cilit);
circle8.position.set(-570.0, 10, -615);
circle8.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder71 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder71.position.set(-140.0, 5.0, -620.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle9 = new THREE.Mesh(circleGeometry, cilit);
circle9.position.set(-140.0, 10, -620);
circle9.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder72 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder72.position.set(-280.0, 5.0, -580.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle10 = new THREE.Mesh(circleGeometry, cilit);
circle10.position.set(-280.0, 10,-580);
circle10.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder73 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder73.position.set(30.0, 5.0, 20.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle11 = new THREE.Mesh(circleGeometry, cilit);
circle11.position.set(30.0, 10, 20);
circle11.rotation.x = -Math.PI / 2;

export var arrayObjetos = new Array();

obj.add(cone1);
obj.add(cone2);
obj.add(cone3);
obj.add(cone4);
obj.add(cone5);
obj.add(cone6);
obj.add(cone7);
obj.add(cone8);
obj.add(cone9);
obj.add(cone10);
obj.add(cone11);
obj.add(cylinder63);
obj.add(cylinder64);
obj.add(cylinder65);
obj.add(cylinder66);
obj.add(cylinder67);
obj.add(cylinder68);
obj.add(cylinder69);
obj.add(cylinder70);
obj.add(cylinder71);
obj.add(cylinder72);
obj.add(cylinder73);
obj.add(circle);
obj.add(circle2);
obj.add(circle4);
obj.add(circle5);
obj.add(circle6);
obj.add(circle7);
obj.add(circle8);
obj.add(circle9);
obj.add(circle10);
obj.add(circle11);



/////////////////////////////////////////pista 1 final//////////////////////////////////////
//////////////////////////////////pista 2 inicio////////////////////////////////

export var obj2 = new THREE.Group();

var cone12 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone12.position.set(0.0, 5.0, 0.0)
        
 var cone13 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone13.position.set(-250.0, 5.0, -610.0)
       
 var cone14 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone14.position.set(-350.0, 5.0, 10.0)
       
 var cone15 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone15.position.set(-450.0, 5.0, -590.0)
       
 var cone16 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone16.position.set(-570.0, 5.0, -10.0)
 
  var cone17 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone17.position.set(-100.0, 5.0, -280.0)
 
  var cone18 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone18.position.set(-550.0, 5.0, -160.0)
 
  var cone19 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone19.position.set(-590.0, 5.0, -290.0)
 
 var cone20 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone20.position.set(5.0, 5.0, -240.0)
 
  var cone21 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone21.position.set(25.0, 5.0, -310.0)

 //////////////////////////////////1//////////////////////////////////////////////////////////
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder74 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder74.position.set(-200.0, 5.0, -315.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle12 = new THREE.Mesh(circleGeometry, cilit);
circle12.position.set(-200.0, 10, -315);
circle12.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

var cylinder75 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder75.position.set(-180.0, 5.0, -20.0)

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle13 = new THREE.Mesh(circleGeometry, cilit);
circle13.position.set(-180.0, 10, -20.0);
circle13.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder76 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder76.position.set(-400.0, 5.0, 5.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle14 = new THREE.Mesh(circleGeometry, cilit);
circle14.position.set(-400.0, 10, 5);
circle14.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder77 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder77.position.set(50.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle15 = new THREE.Mesh(circleGeometry, cilit);
circle15.position.set(50.0, 10, -205);
circle15.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder78 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder78.position.set(-570.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle16 = new THREE.Mesh(circleGeometry, cilit);
circle16.position.set(-570.0, 10, -205);
circle16.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder79 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder79.position.set(-570.0, 5.0, -55.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle17 = new THREE.Mesh(circleGeometry, cilit);
circle17.position.set(-570.0, 10, -55);
circle17.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder80 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder80.position.set(-570.0, 5.0, -615.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle18 = new THREE.Mesh(circleGeometry, cilit);
circle18.position.set(-570.0, 10, -615);
circle18.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder81 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder81.position.set(-440.0, 5.0, -620.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle19 = new THREE.Mesh(circleGeometry, cilit);
circle19.position.set(-440.0, 10, -620);
circle19.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder82 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder82.position.set(-280.0, 5.0, -580.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle20 = new THREE.Mesh(circleGeometry, cilit);
circle20.position.set(-280.0, 10,-580);
circle20.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder83 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder83.position.set(30.0, 5.0, 20.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle21 = new THREE.Mesh(circleGeometry, cilit);
circle21.position.set(30.0, 10, 20);
circle21.rotation.x = -Math.PI / 2;
 
 
 obj2.add(cone12);
 obj2.add(cone13);
 obj2.add(cone14);
 obj2.add(cone15);
obj2.add(cone16);
obj2.add(cone17);
obj2.add(cone18);
obj2.add(cone19);
obj2.add(cone20);
obj2.add(cone21);
 obj2.add(cylinder74);
 obj2.add(cylinder75);
 obj2.add(cylinder76);
 obj2.add(cylinder77);
 obj2.add(cylinder78);
 obj2.add(cylinder79);
 obj2.add(cylinder80);
 obj2.add(cylinder81);
 obj2.add(cylinder82);
 obj2.add(cylinder83);
 obj2.add(circle12);
 obj2.add(circle13);
 obj2.add(circle14);
 obj2.add(circle15);
 obj2.add(circle16);
 obj2.add(circle17);
 obj2.add(circle18);
 obj2.add(circle19);
 obj2.add(circle20);
 obj2.add(circle21);



 //TODO:

 //add larissa 12/02
arrayObjetos.push(cone1);
arrayObjetos.push(cone2);
arrayObjetos.push(cone3);
arrayObjetos.push(cone4);
arrayObjetos.push(cone5);
arrayObjetos.push(cone6);
arrayObjetos.push(cone7);
arrayObjetos.push(cone8);
arrayObjetos.push(cone9);
arrayObjetos.push(cone10);
arrayObjetos.push(cone11);

//
arrayObjetos.push(cylinder63);
arrayObjetos.push(cylinder64);
arrayObjetos.push(cylinder65);
arrayObjetos.push(cylinder66);
arrayObjetos.push(cylinder67);
arrayObjetos.push(cylinder68);
arrayObjetos.push(cylinder69);
arrayObjetos.push(cylinder70);
arrayObjetos.push(cylinder71);
arrayObjetos.push(cylinder72);
arrayObjetos.push(cylinder73);

 //FIXME: //add larissa 12/02

export var arrayBondBoxes = new Array();

var BoxCone1 = new THREE.Box3();
BoxCone1.setFromObject(cone1);
arrayBondBoxes.push(BoxCone1);

var BoxCone2 = new THREE.Box3();
BoxCone2.setFromObject(cone2);
arrayBondBoxes.push(BoxCone2);

var BoxCone3 = new THREE.Box3();
BoxCone3.setFromObject(cone3);
arrayBondBoxes.push(BoxCone3);

var BoxCone4 = new THREE.Box3();
BoxCone4.setFromObject(cone4);
arrayBondBoxes.push(BoxCone4);

var BoxCone5 = new THREE.Box3();
BoxCone5.setFromObject(cone5);
arrayBondBoxes.push(BoxCone5);

var BoxCone6 = new THREE.Box3();
BoxCone6.setFromObject(cone6);
arrayBondBoxes.push(BoxCone6);

var BoxCone7 = new THREE.Box3();
BoxCone7.setFromObject(cone7);
arrayBondBoxes.push(BoxCone7);

var BoxCone8 = new THREE.Box3();
BoxCone8.setFromObject(cone8);
arrayBondBoxes.push(BoxCone8);

var BoxCone9 = new THREE.Box3();
BoxCone9.setFromObject(cone9);
arrayBondBoxes.push(BoxCone9);

var BoxCone10 = new THREE.Box3();
BoxCone10.setFromObject(cone10);
arrayBondBoxes.push(BoxCone10);

//
/*
cylinder63
cylinder64
cylinder65
cylinder66
cylinder67
cylinder68
cylinder69
cylinder70
cylinder71
cylinder72
cylinder73*/

var BoxCilinder = new THREE.Box3();
BoxCilinder.setFromObject(cylinder63);
arrayBondBoxes.push(BoxCilinder);