
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
cone1.castShadow = true;
 
var cone2 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone2.position.set(0.0, 5.0, 0.0)
cone2.castShadow = true;   
 
var cone3 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone3.position.set(-250.0, 5.0, -610.0)
cone3.castShadow = true;  
 
var cone4 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone4.position.set(-350.0, 5.0, 10.0)
cone4.castShadow = true; 
 
var cone5 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone5.position.set(-450.0, 5.0, -590.0)
 cone5.castShadow = true;   
 
 var cone6 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone6.position.set(-150.0, 5.0, -10.0)
 cone6.castShadow = true;
  
 var cone7 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone7.position.set(0.0, 5.0, -610.0)
 cone7.castShadow = true;

 var cone8 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone8.position.set(-450.0, 5.0, -260.0)
 cone8.castShadow = true;
  
 var cone9 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone9.position.set(-590.0, 5.0, -290.0)
 cone9.castShadow = true;
 
 var cone10 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone10.position.set(25.0, 5.0, -140.0)
 cone10.castShadow = true;
  
 var cone11 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone11.position.set(25.0, 5.0, -310.0)
 cone11.castShadow = true;

 var cylinder63 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder63.position.set(0.0, 5.0, 0.0)
cylinder63.castShadow = true;
//////////////////////////////////1//////////////////////////////////////////////////////////
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder64 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder64.position.set(10.0, 5.0, -515.0);
cylinder64.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle = new THREE.Mesh(circleGeometry, barrilc);
circle.position.set(10.0, 10, -515);
circle.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

 var cylinder65 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder65.position.set(-180.0, 5.0, -20.0)
cylinder65.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle2 = new THREE.Mesh(circleGeometry, barrilc);
circle2.position.set(-180.0, 10, -20.0);
circle2.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder66 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder66.position.set(-300.0, 5.0, 5.0);
cylinder66.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle4 = new THREE.Mesh(circleGeometry, barrilc);
circle4.position.set(-300.0, 10, 5);
circle4.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder67 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder67.position.set(50.0, 5.0, -205.0);
cylinder67.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle5 = new THREE.Mesh(circleGeometry, barrilc);
circle5.position.set(50.0, 10, -205);
circle5.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder68 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder68.position.set(-350.0, 5.0, -205.0);
cylinder68.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle6 = new THREE.Mesh(circleGeometry, barrilc);
circle6.position.set(-350.0, 10, -205);
circle6.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder69 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder69.position.set(-270.0, 5.0, -355.0);
cylinder69.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle7 = new THREE.Mesh(circleGeometry, barrilc);
circle7.position.set(-270.0, 10, -355);
circle7.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder70 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder70.position.set(-570.0, 5.0, -615.0);
cylinder70.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle8 = new THREE.Mesh(circleGeometry, barrilc);
circle8.position.set(-570.0, 10, -615);
circle8.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder71 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder71.position.set(-140.0, 5.0, -620.0);
cylinder71.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle9 = new THREE.Mesh(circleGeometry, barrilc);
circle9.position.set(-140.0, 10, -620);
circle9.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder72 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder72.position.set(-280.0, 5.0, -580.0);
cylinder72.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle10 = new THREE.Mesh(circleGeometry, barrilc);
circle10.position.set(-280.0, 10,-580);
circle10.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
 var cylinder73 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder73.position.set(30.0, 5.0, 20.0);
cylinder73.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
 var circle11 = new THREE.Mesh(circleGeometry, barrilc);
circle11.position.set(30.0, 10, 20);
circle11.rotation.x = -Math.PI / 2;

//obj3.add(cone1);
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
//obj3.add(cylinder63);
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
cone12.castShadow = true;  

var cone13 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone13.position.set(-250.0, 5.0, -490.0)
cone13.castShadow = true;  
 
var cone14 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
cone14.position.set(-800.0, 5.0, -710.0)
cone14.castShadow = true;   
 
var cone15 = new THREE.Mesh( geometry, conet );
var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone15.position.set(-450.0, 5.0, -590.0)
 cone15.castShadow = true;   
 
 var cone16 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone16.position.set(-570.0, 5.0, -480.0)
 cone16.castShadow = true;
  
 var cone17 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone17.position.set(-1050.0, 5.0, -880.0)
 cone17.castShadow = true;
  
 var cone18 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone18.position.set(-450.0, 5.0, -160.0)
 cone18.castShadow = true;
  
 var cone19 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone19.position.set(-690.0, 5.0, -840.0)
 cone19.castShadow = true;
 
 var cone20 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone20.position.set(5.0, 5.0, -240.0)
 cone20.castShadow = true;
  
 var cone21 = new THREE.Mesh( geometry, conet );
 var geometry = new THREE.ConeGeometry( 2, 8, 14 );
 cone21.position.set(25.0, 5.0, -310.0)
 cone21.castShadow = true;
 //////////////////////////////////1//////////////////////////////////////////////////////////
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder74 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder74.position.set(-450.0, 5.0, -315.0);
cylinder74.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle12 = new THREE.Mesh(circleGeometry, barrilc);
circle12.position.set(-450.0, 10, -315);
circle12.rotation.x = -Math.PI / 2;

/////////////////////////////////2/////////////////////////////////////////////

var cylinder75 = new THREE.Mesh(cylinderGeometry, cilit);
var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
cylinder75.position.set(-180.0, 5.0, -20.0)
cylinder75.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle13 = new THREE.Mesh(circleGeometry, barrilc);
circle13.position.set(-180.0, 10, -20.0);
circle13.rotation.x = -Math.PI / 2;


//////////////////////////////////3/////////////////////////////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder76 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder76.position.set(-400.0, 5.0, 5.0);
cylinder76.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle14 = new THREE.Mesh(circleGeometry, barrilc);
circle14.position.set(-400.0, 10, 5);
circle14.rotation.x = -Math.PI / 2;

////////////////////////////////////////4///////////////////////////////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder77 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder77.position.set(50.0, 5.0, -205.0);
cylinder77.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle15 = new THREE.Mesh(circleGeometry, barrilc);
circle15.position.set(50.0, 10, -205);
circle15.rotation.x = -Math.PI / 2;

/////////////////////////////////////////////5///////////////////////////////////a/////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder78 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder78.position.set(-570.0, 5.0, -850.0);
cylinder78.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle16 = new THREE.Mesh(circleGeometry, barrilc);
circle16.position.set(-570.0, 10, -850);
circle16.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////6///////////////////////////a////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder79 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder79.position.set(-870.0, 5.0, -850.0);
cylinder79.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle17 = new THREE.Mesh(circleGeometry, barrilc);
circle17.position.set(-870.0, 10, -850);
circle17.rotation.x = -Math.PI / 2;

////////////////////////////////////////////////////7/////////////////////a///////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder80 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder80.position.set(-820.0, 5.0, -615.0);
cylinder80.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle18 = new THREE.Mesh(circleGeometry, barrilc);
circle18.position.set(-820.0, 10, -615);
circle18.rotation.x = -Math.PI / 2;

////////////////////////////////////////////8//////////////////////////a//////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder81 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder81.position.set(-440.0, 5.0, -620.0);
cylinder81.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle19 = new THREE.Mesh(circleGeometry, barrilc);
circle19.position.set(-440.0, 10, -620);
circle19.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////9/////////////////////////a/////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder82 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder82.position.set(-980.0, 5.0, -1080.0);
cylinder82.castShadow = true;

var circleGeometry = new THREE.CircleGeometry(4, 32);
var circle20 = new THREE.Mesh(circleGeometry, barrilc);
circle20.position.set(-980.0, 10,-1080);
circle20.rotation.x = -Math.PI / 2;

//////////////////////////////////////////////////10/////////////////////////a///////////

var cylinderGeometry = new THREE.CylinderGeometry(4, 4, 10, 32, 32, true);
var cylinder83 = new THREE.Mesh(cylinderGeometry,cilit);
cylinder83.position.set(-150.0, 5.0, -470.0);
cylinder83.castShadow = true;

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


 export var arrayObjetos_2 = new Array();
 //add larissa 12/02
 //arrayObjetos_2.push(cone1);
 arrayObjetos_2.push(cone2);
 arrayObjetos_2.push(cone3);
 arrayObjetos_2.push(cone4);
 arrayObjetos_2.push(cone5);
 arrayObjetos_2.push(cone6);
 arrayObjetos_2.push(cone7);
 arrayObjetos_2.push(cone8);
 arrayObjetos_2.push(cone9);
 arrayObjetos_2.push(cone10);
 arrayObjetos_2.push(cone11);
 arrayObjetos_2.push(cone12);
 arrayObjetos_2.push(cone13);
 arrayObjetos_2.push(cone14);
 arrayObjetos_2.push(cone15);
 arrayObjetos_2.push(cone16);
 arrayObjetos_2.push(cone17);
 arrayObjetos_2.push(cone18);
 arrayObjetos_2.push(cone19);
 arrayObjetos_2.push(cone20);
 arrayObjetos_2.push(cone21);

 
 //
 //arrayObjetos_2.push(cylinder63);
 arrayObjetos_2.push(cylinder64);
 arrayObjetos_2.push(cylinder65);
 arrayObjetos_2.push(cylinder66);
 arrayObjetos_2.push(cylinder67);
 arrayObjetos_2.push(cylinder68);
 arrayObjetos_2.push(cylinder69);
 arrayObjetos_2.push(cylinder70);
 arrayObjetos_2.push(cylinder71);
 arrayObjetos_2.push(cylinder72);
 arrayObjetos_2.push(cylinder73);
 arrayObjetos_2.push(cylinder74);
 arrayObjetos_2.push(cylinder75);
 arrayObjetos_2.push(cylinder76);
 arrayObjetos_2.push(cylinder77);
 arrayObjetos_2.push(cylinder78);
 arrayObjetos_2.push(cylinder79);
 arrayObjetos_2.push(cylinder80);
 arrayObjetos_2.push(cylinder81);
 arrayObjetos_2.push(cylinder82);
 arrayObjetos_2.push(cylinder83);

 
  //FIXME: //add larissa 12/02
 
 export var arrayBondBoxes_2 = new Array();
 
 var BoxCone2 = new THREE.Box3();
 BoxCone2.setFromObject(cone2);
 arrayBondBoxes_2.push(BoxCone2);
 
 var BoxCone3 = new THREE.Box3();
 BoxCone3.setFromObject(cone3);
 arrayBondBoxes_2.push(BoxCone3);
 
 var BoxCone4 = new THREE.Box3();
 BoxCone4.setFromObject(cone4);
 arrayBondBoxes_2.push(BoxCone4);
 
 var BoxCone5 = new THREE.Box3();
 BoxCone5.setFromObject(cone5);
 arrayBondBoxes_2.push(BoxCone5);
 
 var BoxCone6 = new THREE.Box3();
 BoxCone6.setFromObject(cone6);
 arrayBondBoxes_2.push(BoxCone6);
 
 var BoxCone7 = new THREE.Box3();
 BoxCone7.setFromObject(cone7);
 arrayBondBoxes_2.push(BoxCone7);
 
 var BoxCone8 = new THREE.Box3();
 BoxCone8.setFromObject(cone8);
 arrayBondBoxes_2.push(BoxCone8);
 
 var BoxCone9 = new THREE.Box3();
 BoxCone9.setFromObject(cone9);
 arrayBondBoxes_2.push(BoxCone9);
 
 var BoxCone10 = new THREE.Box3();
 BoxCone10.setFromObject(cone10);
 arrayBondBoxes_2.push(BoxCone10);
 
 var BoxCone11 = new THREE.Box3();
 BoxCone11.setFromObject(cone11);
 arrayBondBoxes_2.push(BoxCone11);
 
 var BoxCone12 = new THREE.Box3();
 BoxCone12.setFromObject(cone12);
 arrayBondBoxes_2.push(BoxCone12);

 var BoxCone13 = new THREE.Box3();
 BoxCone13.setFromObject(cone13);
 arrayBondBoxes_2.push(BoxCone13);

 var BoxCone14 = new THREE.Box3();
 BoxCone14.setFromObject(cone14);
 arrayBondBoxes_2.push(BoxCone14);

 
 var BoxCone15 = new THREE.Box3();
 BoxCone15.setFromObject(cone15);
 arrayBondBoxes_2.push(BoxCone15);

 var BoxCone16 = new THREE.Box3();
 BoxCone16.setFromObject(cone16);
 arrayBondBoxes_2.push(BoxCone16);

 var BoxCone17 = new THREE.Box3();
 BoxCone17.setFromObject(cone17);
 arrayBondBoxes_2.push(BoxCone17);

 var BoxCone18 = new THREE.Box3();
 BoxCone18.setFromObject(cone18);
 arrayBondBoxes_2.push(BoxCone18);

 var BoxCone19 = new THREE.Box3();
 BoxCone19.setFromObject(cone19);
 arrayBondBoxes_2.push(BoxCone19);

 var BoxCone20 = new THREE.Box3();
 BoxCone20.setFromObject(cone20);
 arrayBondBoxes_2.push(BoxCone20);
 
 
 var BoxCilinder64 = new THREE.Box3();
 BoxCilinder64.setFromObject(cylinder64);
 arrayBondBoxes_2.push(BoxCilinder64);
 
 var BoxCilinder65 = new THREE.Box3();
 BoxCilinder65.setFromObject(cylinder65);
 arrayBondBoxes_2.push(BoxCilinder65);
 
 var BoxCilinder66 = new THREE.Box3();
 BoxCilinder66.setFromObject(cylinder66);
 arrayBondBoxes_2.push(BoxCilinder66);
 
 var BoxCilinder67 = new THREE.Box3();
 BoxCilinder67.setFromObject(cylinder67);
 arrayBondBoxes_2.push(BoxCilinder67);
 
 var BoxCilinder68 = new THREE.Box3();
 BoxCilinder68.setFromObject(cylinder68);
 arrayBondBoxes_2.push(BoxCilinder68);
 
 var BoxCilinder69 = new THREE.Box3();
 BoxCilinder69.setFromObject(cylinder69);
 arrayBondBoxes_2.push(BoxCilinder69);
 
 var BoxCilinder70 = new THREE.Box3();
 BoxCilinder70.setFromObject(cylinder70);
 arrayBondBoxes_2.push(BoxCilinder70);
 
 var BoxCilinder71 = new THREE.Box3();
 BoxCilinder71.setFromObject(cylinder71);
 arrayBondBoxes_2.push(BoxCilinder71);
 
 var BoxCilinder72 = new THREE.Box3();
 BoxCilinder72.setFromObject(cylinder72);
 arrayBondBoxes_2.push(BoxCilinder72);
 
 var BoxCilinder73 = new THREE.Box3();
 BoxCilinder73.setFromObject(cylinder73);
 arrayBondBoxes_2.push(BoxCilinder73);

 var BoxCilinder74 = new THREE.Box3();
 BoxCilinder74.setFromObject(cylinder74);
 arrayBondBoxes_2.push(BoxCilinder74);
 
 var BoxCilinder75 = new THREE.Box3();
 BoxCilinder75.setFromObject(cylinder75);
 arrayBondBoxes_2.push(BoxCilinder75);

 var BoxCilinder76 = new THREE.Box3();
 BoxCilinder76.setFromObject(cylinder76);
 arrayBondBoxes_2.push(BoxCilinder76);

 var BoxCilinder77 = new THREE.Box3();
 BoxCilinder77.setFromObject(cylinder77);
 arrayBondBoxes_2.push(BoxCilinder77);

 var BoxCilinder78 = new THREE.Box3();
 BoxCilinder78.setFromObject(cylinder78);
 arrayBondBoxes_2.push(BoxCilinder78);

 var BoxCilinder79 = new THREE.Box3();
 BoxCilinder79.setFromObject(cylinder79);
 arrayBondBoxes_2.push(BoxCilinder79);

 var BoxCilinder80 = new THREE.Box3();
 BoxCilinder80.setFromObject(cylinder80);
 arrayBondBoxes_2.push(BoxCilinder80);

 var BoxCilinder81 = new THREE.Box3();
 BoxCilinder81.setFromObject(cylinder81);
 arrayBondBoxes_2.push(BoxCilinder81);

 var BoxCilinder82 = new THREE.Box3();
 BoxCilinder82.setFromObject(cylinder82);
 arrayBondBoxes_2.push(BoxCilinder82);

 var BoxCilinder83 = new THREE.Box3();
 BoxCilinder83.setFromObject(cylinder83);
 arrayBondBoxes_2.push(BoxCilinder83);














