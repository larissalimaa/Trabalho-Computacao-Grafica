
import * as THREE from '../build/three.module.js';

var loader = new THREE.TextureLoader();
var conetexture = loader.load('../assets/textures/conetextura.jpg');
var conet = new THREE.MeshLambertMaterial({
map: conetexture
});

var cilitexture = loader.load('../assets/textures/barril.png');
var cilit = new THREE.MeshLambertMaterial({
map: cilitexture
});

var barriltex = loader.load('../assets/textures/barrilcima.png');
var barrilc = new THREE.MeshLambertMaterial({
    map: barriltex
});
//////////////////////////////////////////////pista 3 inicio////////////////////////////////////////////////

export var obj3 = new THREE.Group();

var cone1 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone1.position.set(25.0, 5.0, -300.0)

 var cone2 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone2.position.set(0.0, 5.0, 0.0)
        
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
 cone6.position.set(-150.0, 5.0, -10.0)
 
  var cone7 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone7.position.set(0.0, 5.0, -610.0)
 
 var cone8 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone8.position.set(-450.0, 5.0, -260.0)
 
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
 var circle = new THREE.Mesh(circleGeometry, barrilc);
circle.position.set(10.0, 10, -515);
circle.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

 var cylinder65 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder65.position.set(-180.0, 5.0, -20.0)

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle2 = new THREE.Mesh(circleGeometry, barrilc);
circle2.position.set(-180.0, 10, -20.0);
circle2.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder66 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder66.position.set(-300.0, 5.0, 5.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle4 = new THREE.Mesh(circleGeometry, barrilc);
circle4.position.set(-300.0, 10, 5);
circle4.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder67 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder67.position.set(50.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle5 = new THREE.Mesh(circleGeometry, barrilc);
circle5.position.set(50.0, 10, -205);
circle5.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder68 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder68.position.set(-350.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle6 = new THREE.Mesh(circleGeometry, barrilc);
circle6.position.set(-350.0, 10, -205);
circle6.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder69 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder69.position.set(-270.0, 5.0, -355.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle7 = new THREE.Mesh(circleGeometry, barrilc);
circle7.position.set(-270.0, 10, -355);
circle7.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder70 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder70.position.set(-570.0, 5.0, -615.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle8 = new THREE.Mesh(circleGeometry, barrilc);
circle8.position.set(-570.0, 10, -615);
circle8.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder71 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder71.position.set(-140.0, 5.0, -620.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle9 = new THREE.Mesh(circleGeometry, barrilc);
circle9.position.set(-140.0, 10, -620);
circle9.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder72 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder72.position.set(-280.0, 5.0, -580.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle10 = new THREE.Mesh(circleGeometry, barrilc);
circle10.position.set(-280.0, 10,-580);
circle10.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder73 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder73.position.set(30.0, 5.0, 20.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle11 = new THREE.Mesh(circleGeometry, barrilc);
circle11.position.set(30.0, 10, 20);
circle11.rotation.x = -Math.PI / 2;

obj3.add(cone1);
obj3.add(cone2);
obj3.add(cone3);
obj3.add(cone4);
obj3.add(cone5);
obj3.add(cone6);
obj3.add(cone7);
obj3.add(cone8);
obj3.add(cone9);
obj3.add(cone10);
obj3.add(cone11);
obj3.add(cylinder63);
obj3.add(cylinder64);
obj3.add(cylinder65);
obj3.add(cylinder66);
 obj3.add(cylinder67);
obj3.add(cylinder68);
obj3.add(cylinder69);
obj3.add(cylinder70);
obj3.add(cylinder71);
obj3.add(cylinder72);
obj3.add(cylinder73);
obj3.add(circle);
obj3.add(circle2);
obj3.add(circle4);
obj3.add(circle5);
obj3.add(circle6);
obj3.add(circle7);
obj3.add(circle8);
obj3.add(circle9);
obj3.add(circle10);
obj3.add(circle11);

/////////////////////////////////////////pista 3 final//////////////////////////////////////
//////////////////////////////////pista 4 inicio////////////////////////////////

export var obj4 = new THREE.Group();

var cone12 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone12.position.set(0.0, 5.0, 0.0)
        
 var cone13 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone13.position.set(-250.0, 5.0, -490.0)
       
 var cone14 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone14.position.set(-800.0, 5.0, -710.0)
       
 var cone15 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone15.position.set(-450.0, 5.0, -590.0)
       
 var cone16 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone16.position.set(-570.0, 5.0, -480.0)
 
  var cone17 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone17.position.set(-1050.0, 5.0, -880.0)
 
  var cone18 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone18.position.set(-450.0, 5.0, -160.0)
 
  var cone19 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone19.position.set(-690.0, 5.0, -840.0)
 
 var cone20 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone20.position.set(5.0, 5.0, -240.0)
 
  var cone21 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone21.position.set(25.0, 5.0, -310.0)

 //////////////////////////////////1//////////////////////////////////////////////////////////
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder74 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder74.position.set(-450.0, 5.0, -315.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle12 = new THREE.Mesh(circleGeometry, barrilc);
circle12.position.set(-450.0, 10, -315);
circle12.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

var cylinder75 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder75.position.set(-180.0, 5.0, -20.0)

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle13 = new THREE.Mesh(circleGeometry, barrilc);
circle13.position.set(-180.0, 10, -20.0);
circle13.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder76 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder76.position.set(-400.0, 5.0, 5.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle14 = new THREE.Mesh(circleGeometry, barrilc);
circle14.position.set(-400.0, 10, 5);
circle14.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder77 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder77.position.set(50.0, 5.0, -205.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle15 = new THREE.Mesh(circleGeometry, barrilc);
circle15.position.set(50.0, 10, -205);
circle15.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder78 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder78.position.set(-570.0, 5.0, -850.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle16 = new THREE.Mesh(circleGeometry, barrilc);
circle16.position.set(-570.0, 10, -850);
circle16.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder79 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder79.position.set(-870.0, 5.0, -850.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle17 = new THREE.Mesh(circleGeometry, barrilc);
circle17.position.set(-870.0, 10, -850);
circle17.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder80 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder80.position.set(-820.0, 5.0, -615.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle18 = new THREE.Mesh(circleGeometry, barrilc);
circle18.position.set(-820.0, 10, -615);
circle18.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder81 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder81.position.set(-440.0, 5.0, -620.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle19 = new THREE.Mesh(circleGeometry, barrilc);
circle19.position.set(-440.0, 10, -620);
circle19.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder82 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder82.position.set(-980.0, 5.0, -1080.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle20 = new THREE.Mesh(circleGeometry, barrilc);
circle20.position.set(-980.0, 10,-1080);
circle20.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder83 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder83.position.set(-150.0, 5.0, -470.0);

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle21 = new THREE.Mesh(circleGeometry, barrilc);
circle21.position.set(-150.0, 10, -470);
circle21.rotation.x = -Math.PI / 2;
 
 
 obj4.add(cone12);
 obj4.add(cone13);
 obj4.add(cone14);
 obj4.add(cone15);
 obj4.add(cone16);
 obj4.add(cone17);
 obj4.add(cone18);
 obj4.add(cone19);
 obj4.add(cone20);
 obj4.add(cone21);
 obj4.add(cylinder74);
 obj4.add(cylinder75);
 obj4.add(cylinder76);
 obj4.add(cylinder77);
 obj4.add(cylinder78);
 obj4.add(cylinder79);
 obj4.add(cylinder80);
 obj4.add(cylinder81);
 obj4.add(cylinder82);
 obj4.add(cylinder83);
 obj4.add(circle12);
 obj4.add(circle13);
 obj4.add(circle14);
 obj4.add(circle15);
 obj4.add(circle16);
 obj4.add(circle17);
 obj4.add(circle18);
 obj4.add(circle19);
 obj4.add(circle20);
 obj4.add(circle21);


