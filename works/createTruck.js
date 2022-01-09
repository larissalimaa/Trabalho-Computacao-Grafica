
import { createCylinder, createSphere,  createCylinder1, createTorus1, createTorus } from "./car.js";
import * as THREE from '../build/three.module.js';
import {degreesToRadians} from "../libs/util/util.js";


export var roda1;
export var roda2;
export var roda3;
export var roda4;

export function createTruck() {

  
    var truck = new THREE.Group();
  
///////////////////////parte de baixo do carro
var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 8.9);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
      
  });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(3.9, -0.2, 0.0)
cube.rotateZ(degreesToRadians(103));

var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 8.9);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
 
  });
var cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube1.position.set(-3.9, -0.2, 0.0)
cube1.rotateZ(degreesToRadians(-103));
////////////////////////////////////////////
var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
   
  });

  var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube2.position.set(3.8, 2.8, 8.0)
cube2.rotateZ(degreesToRadians(90));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
       
  });
var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube3.position.set(3.8, 1.212, 5.4)
cube3.rotateX(degreesToRadians(120));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
     
  });
var cube4 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube4.position.set(3.8, 1.212, 10.6)
cube4.rotateX(degreesToRadians(-120));
/////////////////////////////////////////////////////////////////
var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
      
  });

  var cube5 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube5.position.set(-3.8, 2.8, 8.0)
cube5.rotateZ(degreesToRadians(90));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
      
  });
var cube6 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube6.position.set(-3.8, 1.212, 5.4)
cube6.rotateX(degreesToRadians(120));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
     
  });
var cube7 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube7.position.set(-3.8, 1.212, 10.6)
cube7.rotateX(degreesToRadians(-120));
///////////////////////////////////////////////////////////////////////
///
var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
  
  });
var cube8 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube8.position.set(3.8, 2.8, -8.0)
cube8.rotateZ(degreesToRadians(90));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
  
  });
var cube9 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube9.position.set(3.8, 1.212, -10.6)
cube9.rotateX(degreesToRadians(120));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
  
  });
var cube10 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube10.position.set(3.8, 1.212, -5.4)
cube10.rotateX(degreesToRadians(-120));
/////////////////////////////////////////////////////////////////
var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,

  });

  var cube11 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube11.position.set(-3.8, 2.8, -8.0)
cube11.rotateZ(degreesToRadians(90));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
   
  });
var cube12 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube12.position.set(-3.8, 1.212, -10.6)
cube12.rotateX(degreesToRadians(120));

var cubeGeometry = new THREE.BoxGeometry(1.0, 1, 4.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
   
  });
var cube13 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube13.position.set(-3.8, 1.212, -5.4)
cube13.rotateX(degreesToRadians(-120));

///////////////////////////////////////
//

var cubeGeometry = new THREE.BoxGeometry(6.0, 3, 5.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
      
  });
var cube14 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube14.position.set(0.0, 1.69, 11.0)
cube14.rotateX(degreesToRadians(103));

var cubeGeometry = new THREE.BoxGeometry(6.0, 5.5, 2.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
    
  });
var cube15 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube15.position.set(0.0, 3.9, 9.9)
cube15.rotateX(degreesToRadians(109));

//////////cubo grande de baixo
var cubeGeometry = new THREE.BoxGeometry(4.5, 7, 26.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  
  color: 	'#C0C0C0' ,
   
  }); 
  var cube16 = new THREE.Mesh(cubeGeometry, cubeMaterial);
  var cube16 = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube16.castShadow = true;
  
  cube16.position.set(0.0, 1.2, -0.8)
cube16.rotateZ(degreesToRadians(90));

/////////////////////////////vidros//////////////////////
var cubeGeometry = new THREE.BoxGeometry(5.8, 7, 6);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 'rgb(0,0,0)',
  opacity: 0.6,
  transparent: true,
  wireframe: false
});
var cube17 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube17.position.set(0.01, 4.0, 3.4)
cube17.rotateX(degreesToRadians(109));

var cubeGeometry = new THREE.BoxGeometry(5.8, 7.5, 6);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 'rgb(0,0,0)',
  opacity: 0.6,
  transparent: true,
  wireframe: false
});
var cube18 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube18.position.set(0, 4.4, -2.1)
cube18.rotateX(degreesToRadians(-100));
////////////////////////////////////////////
////////virada lateral
var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 27.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
     
  });
var cube19 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube19.position.set(2.9, 3.6, -0.6)
cube19.rotateZ(degreesToRadians(103));

var cubeGeometry = new THREE.BoxGeometry(0.8, 1, 27.0);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
     
  });
var cube20 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube20.position.set(-2.9, 3.6, -0.6)
cube20.rotateZ(degreesToRadians(-103));

//////////////////////////////////////////////

///////////////////////////cubos traseiros//////////////////


var cubeGeometry = new THREE.BoxGeometry(5.8, 8.5, 6.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
      
  });
var cube21 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube21.position.set(0.0, 3.23, -10.0)
cube21.rotateX(degreesToRadians(-100));
/////////////////////////////////////////////////////////////////
//////////////////parachoque f e t///////////////
var cubeGeometry = new THREE.BoxGeometry(2.0, 1, 8.6);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
      
  });
var cube22 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube22.position.set(0.0, -0.5 , 11.4)
cube22.rotateY(degreesToRadians(90));

var cubeGeometry = new THREE.BoxGeometry(3.0, 1, 8.6);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#A9A9A9' ,
    
  });
var cube23 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube23.position.set(0.0, -0.5 , -12.4)
cube23.rotateY(degreesToRadians(90));
////////////////////////////////////////////////////////////

var cubeGeometry = new THREE.BoxGeometry(0.5, 8, 0.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
    
  });
var cube24 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube24.position.set(2.6, 7.54, -2.76)
cube24.rotateX(degreesToRadians(-100));

var cubeGeometry = new THREE.BoxGeometry(0.5, 7.5, 0.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
    
  });
var cube25 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube25.position.set(-2.6, 7.54, -2.76)
cube25.rotateX(degreesToRadians(-100));

var cubeGeometry = new THREE.BoxGeometry(0.5, 7.3, 0.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
   
  });
var cube26 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube26.position.set(2.6, 7.0, 4.2)
cube26.rotateX(degreesToRadians(109));

var cubeGeometry = new THREE.BoxGeometry(0.5, 7.3, 0.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
  
  });
var cube27 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube27.position.set(-2.6, 7.0, 4.2)
cube27.rotateX(degreesToRadians(109));

var cubeGeometry = new THREE.BoxGeometry(0.5, 5.8, 0.5);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#C0C0C0' ,
   
  });
var cube28 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube28.position.set(0.0, 8.4, 1.0)
cube28.rotateZ(degreesToRadians(90));

////////////////////////////////////////////////////////////
/////////////////////bancos do carro////////////////////
var cubeGeometry = new THREE.BoxGeometry(4.5, 0.8, 5.8);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#000000' ,
    
  });
var cube29 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube29.position.set(0.0, 3.9, -5.0)
cube29.rotateX(degreesToRadians(-100));

var cubeGeometry = new THREE.BoxGeometry(4.5, 0.8, 5.8);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 	'#000000' ,
 
  });
var cube30 = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube30.position.set(0.0, 3.9, 1.5)
cube30.rotateX(degreesToRadians(-100));











var det = createCylinder1(0.1, 0.1, 1.0, 10, 10, false);
det.rotateX(degreesToRadians(90));
det.position.set(3.5, 3.5, 2.0);

var det1 = createCylinder1(0.1, 0.1, 1.0, 10, 10, false);
det1.rotateX(degreesToRadians(90));
det1.position.set(3.5, 3.5, -4.0);

var det2 = createCylinder1(0.1, 0.1, 1.0, 10, 10, false);
det2.rotateX(degreesToRadians(90));
det2.position.set(-3.5, 3.5, 2.0);

var det3 = createCylinder1(0.1, 0.1, 1.0, 10, 10, false);
det3.rotateX(degreesToRadians(90));
det3.position.set(-3.5, 3.5, -4.0);
///////////////////volante/////////////////////////
var det4 = createCylinder1(0.6, 0.6, 1.0, 10, 10, false);
det4.rotateX(degreesToRadians(106));
det4.position.set(1.4, 4.5, 7.5);
///////////////////////////////////////////////////
////////////////////////parabrisa//////////////
var det5 = createCylinder1(0.3, 0.3, 1.0, 10, 10, false);
det5.rotateY(degreesToRadians(90));
det5.position.set(3.5, 2.35, 8.0);

var det6 = createCylinder1(0.3, 0.3, 1.0, 10, 10, false);
det6.rotateY(degreesToRadians(90));
det6.position.set(-3.5, 2.35, 8.0);





var axis1 = createCylinder(0.3, 0.3, 7.2, 10, 10, false);
  axis1.rotateZ(degreesToRadians(90));
  axis1.position.set(0.0, -0.1, 8.0);

var axis2 = createCylinder(0.3, 0.3, 7.2, 10, 10, false);
  axis2.rotateZ(degreesToRadians(90));
  axis2.position.set(0.0, -0.1, -8.0);

  roda1 = createTorus1(1.9, 0.3, 20, 20, Math.PI * 17);
  roda1.position.set( 3.8, -0.1, 8.0);
  
  var roda12 = createTorus(2.0, 0.5, 20, 20, Math.PI * 6);
  roda12.rotateY(degreesToRadians(90));
///////////
roda2 = createTorus1(1.8, 0.3, 20, 20, Math.PI * 17);
  roda2.position.set(-3.8, -0.1, 8.0);
  
  var roda21 = createTorus(2.0, 0.5, 20, 20, Math.PI * 6);
  roda21.rotateY(degreesToRadians(90));
////////////
  roda3 = createTorus1(1.8, 0.3, 20, 20, Math.PI * 17);
  roda3.position.set(3.8, -0.1, -8.0);
  
  var roda31 = createTorus(2.0, 0.5, 20, 20, Math.PI * 6);
  roda31.rotateY(degreesToRadians(90));
////////////
 roda4 = createTorus1(1.8, 0.3, 20, 20, Math.PI * 17);
  roda4.position.set(-3.8, -0.1, -8.0);
  
  var roda41 = createTorus(2.0, 0.5, 20, 20, Math.PI * 6);
  roda41.rotateY(degreesToRadians(90));
//////////

 ////////////////lanternas
 var lightSphere1 = createSphere(0.3, 10, 10);
 lightSphere1.position.set(2.7, 3.9, 13.0);
 
 var lightSphere2 = createSphere(0.3, 10, 10);
 lightSphere2.position.set(2.5, 3.9, 13.0);
 
 var lightSphere3 = createSphere(0.3, 10, 10);
 lightSphere3.position.set(2.2, 3.9, 13.0);
 
 var lightSphere4 = createSphere(0.3, 10, 10);
 lightSphere4.position.set(2.0, 3.9, 13.0);
 
 var lightSphere5 = createSphere(0.3, 10, 10);
 lightSphere5.position.set(1.8, 3.9, 13.0);
 
 var lightSphere6 = createSphere(0.3, 10, 10);
 lightSphere6.position.set(1.6, 3.9, 13.0);
 
 var lightSphere7 = createSphere(0.3, 10, 10);
 lightSphere7.position.set(1.4, 3.9, 13.0);
 
 var lightSphere8 = createSphere(0.3, 10, 10);
 lightSphere8.position.set(1.2, 3.9, 13.0);
 
 var lightSphere9 = createSphere(0.3, 10, 10);
 lightSphere9.position.set(-2.7, 3.9, 13.0);
 
 var lightSphere10 = createSphere(0.3, 10, 10);
lightSphere10.position.set(-2.5, 3.9, 13.0);

var lightSphere11 = createSphere(0.3, 10, 10);
lightSphere11.position.set(-2.2, 3.9, 13.0);

var lightSphere12 = createSphere(0.3, 10, 10);
lightSphere12.position.set(-2.0, 3.9, 13.0);

var lightSphere13 = createSphere(0.3, 10, 10);
lightSphere13.position.set(-1.8, 3.9, 13.0);

var lightSphere14 = createSphere(0.3, 10, 10);
lightSphere14.position.set(-1.6, 3.9, 13.0);

var lightSphere15 = createSphere(0.3, 10, 10);
lightSphere15.position.set(-1.4, 3.9, 13.0);

var lightSphere16 = createSphere(0.3, 10, 10);
lightSphere16.position.set(-1.2, 3.9, 13.0);

/////////////////////////////////////////////
var lightSphere16 = createSphere(0.3, 10, 10);
lightSphere16.position.set(-1.0, 3.9, 13.0);

var lightSphere17 = createSphere(0.3, 10, 10);
lightSphere17.position.set(-0.8, 3.9, 13.0);

var lightSphere18 = createSphere(0.3, 10, 10);
lightSphere18.position.set(-0.6, 3.9, 13.0);

var lightSphere19 = createSphere(0.3, 10, 10);
lightSphere19.position.set(-0.4, 3.9, 13.0);

var lightSphere20 = createSphere(0.3, 10, 10);
lightSphere20.position.set(-0.2, 3.9, 13.0);

var lightSphere21 = createSphere(0.3, 10, 10);
lightSphere21.position.set(0.0, 3.9, 13.0);

var lightSphere22 = createSphere(0.3, 10, 10);
lightSphere22.position.set(0.2, 3.9, 13.0);

var lightSphere23 = createSphere(0.3, 10, 10);
lightSphere23.position.set(0.4, 3.9, 13.0);

var lightSphere24 = createSphere(0.3, 10, 10);
lightSphere24.position.set(0.6, 3.9, 13.0);

var lightSphere25 = createSphere(0.3, 10, 10);
lightSphere25.position.set(0.8, 3.9, 13.0);

var lightSphere26 = createSphere(0.3, 10, 10);
lightSphere26.position.set(-1.27, 3.9, 13.0);

var lightSphere27 = createSphere(0.3, 10, 10);
lightSphere27.position.set(0.97, 3.9, 13.0);
////////////////////////////parte de tras

var lightSphere29 = createSphere(0.3, 10, 10);
lightSphere29.position.set(-2.63, 5.3, -14.7);

var lightSphere30 = createSphere(0.3, 10, 10);
lightSphere30.position.set(-2.43, 5.3, -14.7);

var lightSphere31 = createSphere(0.3, 10, 10);
lightSphere31.position.set(-2.23, 5.3, -14.7);

var lightSphere32 = createSphere(0.3, 10, 10);
lightSphere32.position.set(-2.03, 5.3, -14.7);

var lightSphere33 = createSphere(0.3, 10, 10);
lightSphere33.position.set(-1.83, 5.3, -14.7);

var lightSphere34 = createSphere(0.3, 10, 10);
lightSphere34.position.set(-1.63, 5.3, -14.7);

var lightSphere35 = createSphere(0.3, 10, 10);
lightSphere35.position.set(-1.43, 5.3, -14.7);

var lightSphere36 = createSphere(0.3, 10, 10);
lightSphere36.position.set(-1.23, 5.3, -14.7);

var lightSphere37 = createSphere(0.3, 10, 10);
lightSphere37.position.set(-1.03, 5.3, -14.7);

var lightSphere38 = createSphere(0.3, 10, 10);
lightSphere38.position.set(-0.83, 5.3, -14.7);

var lightSphere39 = createSphere(0.3, 10, 10);
lightSphere39.position.set(-0.63, 5.3, -14.7);


var lightSphere40 = createSphere(0.3, 10, 10);
lightSphere40.position.set(-0.43, 5.3, -14.7);

var lightSphere41 = createSphere(0.3, 10, 10);
lightSphere41.position.set(-0.23, 5.3, -14.7);

var lightSphere42 = createSphere(0.3, 10, 10);
lightSphere42.position.set(-0.03, 5.3, -14.7);

var lightSphere43 = createSphere(0.3, 10, 10);
lightSphere43.position.set(0.23, 5.3, -14.7);

var lightSphere44 = createSphere(0.3, 10, 10);
lightSphere44.position.set(0.43, 5.3, -14.7);

var lightSphere45 = createSphere(0.3, 10, 10);
lightSphere45.position.set(0.63, 5.3, -14.7);

var lightSphere46 = createSphere(0.3, 10, 10);
lightSphere46.position.set(0.83, 5.3, -14.7);

var lightSphere47 = createSphere(0.3, 10, 10);
lightSphere47.position.set(1.03, 5.3, -14.7);

var lightSphere48 = createSphere(0.3, 10, 10);
lightSphere48.position.set(1.23, 5.3, -14.7);

var lightSphere49 = createSphere(0.3, 10, 10);
lightSphere49.position.set(1.43, 5.3, -14.7);

var lightSphere50 = createSphere(0.3, 10, 10);
lightSphere50.position.set(1.63, 5.3, -14.7);

var lightSphere51 = createSphere(0.3, 10, 10);
lightSphere51.position.set(1.83, 5.3, -14.7);

var lightSphere52 = createSphere(0.3, 10, 10);
lightSphere52.position.set(2.03, 5.3, -14.7);

var lightSphere53 = createSphere(0.3, 10, 10);
lightSphere53.position.set(2.23, 5.3, -14.7);

var lightSphere54 = createSphere(0.3, 10, 10);
lightSphere54.position.set(2.23, 5.3, -14.7);

var lightSphere55 = createSphere(0.3, 10, 10);
lightSphere55.position.set(2.43, 5.3, -14.7);

var lightSphere56 = createSphere(0.3, 10, 10);
lightSphere56.position.set(2.63, 5.3, -14.7);


/////////////////////////////
var lightSphere57 = createSphere(0.3, 10, 10);
lightSphere57.position.set(3.1, 3.8, -14.1);
 
var lightSphere28 = createSphere(0.3, 10, 10);
lightSphere28.position.set(3.1, 3.5, -14.1);

var lightSphere58 = createSphere(0.3, 10, 10);
lightSphere58.position.set(-3.1, 3.8, -14.1);
 
var lightSphere59 = createSphere(0.3, 10, 10);
lightSphere59.position.set(-3.1, 3.5, -14.1);
//////////////////////
////////////////////////////parte de cima

var lightSphere60 = createSphere(0.3, 10, 10);
lightSphere60.position.set(-2.63, 8.4, 1.3);

var lightSphere61 = createSphere(0.3, 10, 10);
lightSphere61.position.set(-2.43, 8.4, 1.3);

var lightSphere62 = createSphere(0.3, 10, 10);
lightSphere62.position.set(-2.23, 8.4, 1.3);

var lightSphere63 = createSphere(0.3, 10, 10);
lightSphere63.position.set(-2.03, 8.4, 1.3);

var lightSphere64 = createSphere(0.3, 10, 10);
lightSphere64.position.set(-1.83, 8.4, 1.3);

var lightSphere65 = createSphere(0.3, 10, 10);
lightSphere65.position.set(-1.63, 8.4, 1.3);

var lightSphere66 = createSphere(0.3, 10, 10);
lightSphere66.position.set(-1.43, 8.4, 1.3);

var lightSphere67 = createSphere(0.3, 10, 10);
lightSphere67.position.set(-1.23, 8.4, 1.3);

var lightSphere68 = createSphere(0.3, 10, 10);
lightSphere68.position.set(-1.03, 8.4, 1.3);

var lightSphere69 = createSphere(0.3, 10, 10);
lightSphere69.position.set(-0.83, 8.4, 1.3);

var lightSphere70 = createSphere(0.3, 10, 10);
lightSphere70.position.set(-0.63, 8.4, 1.3);


var lightSphere71 = createSphere(0.3, 10, 10);
lightSphere71.position.set(-0.43, 8.4, 1.3);

var lightSphere72 = createSphere(0.3, 10, 10);
lightSphere72.position.set(-0.23, 8.4, 1.3);

var lightSphere73 = createSphere(0.3, 10, 10);
lightSphere73.position.set(-0.03, 8.4, 1.3);

var lightSphere74 = createSphere(0.3, 10, 10);
lightSphere74.position.set(0.23, 8.4, 1.3);

var lightSphere75 = createSphere(0.3, 10, 10);
lightSphere75.position.set(0.43, 8.4, 1.3);

var lightSphere76 = createSphere(0.3, 10, 10);
lightSphere76.position.set(0.63, 8.4, 1.3);

var lightSphere77 = createSphere(0.3, 10, 10);
lightSphere77.position.set(0.83, 8.4, 1.3);

var lightSphere78 = createSphere(0.3, 10, 10);
lightSphere78.position.set(1.03, 8.4, 1.3);

var lightSphere79 = createSphere(0.3, 10, 10);
lightSphere79.position.set(1.23, 8.4, 1.3);

var lightSphere80 = createSphere(0.3, 10, 10);
lightSphere80.position.set(1.43, 8.4, 1.3);

var lightSphere81 = createSphere(0.3, 10, 10);
lightSphere81.position.set(1.63, 8.4, 1.3);

var lightSphere82 = createSphere(0.3, 10, 10);
lightSphere82.position.set(1.83, 8.4, 1.3);

var lightSphere83 = createSphere(0.3, 10, 10);
lightSphere83.position.set(2.03, 8.4, 1.3);

var lightSphere84 = createSphere(0.3, 10, 10);
lightSphere84.position.set(2.23, 8.4, 1.3);

var lightSphere85 = createSphere(0.3, 10, 10);
lightSphere85.position.set(2.23, 8.4, 1.3);

var lightSphere86 = createSphere(0.3, 10, 10);
lightSphere86.position.set(2.43, 8.4, 1.3);

var lightSphere87 = createSphere(0.3, 10, 10);
lightSphere87.position.set(2.63, 8.4, 1.3);
// 
//truck.add( axesHelper );
truck.add( axis1);
truck.add( axis2);
roda1.add( roda12 );
roda2.add( roda21 );
roda3.add( roda31 );
roda4.add( roda41 );

truck.add( roda1 );
truck.add( roda2 );
truck.add( roda3 );
truck.add( roda4 );


truck.add( cube);
truck.add( cube1);
truck.add( cube2);
truck.add( cube3);
truck.add( cube4);
truck.add( cube5);
truck.add( cube6);
truck.add( cube7);
truck.add( cube8);
truck.add( cube9);
truck.add( cube10);
truck.add( cube11);
truck.add( cube12);
truck.add( cube13);
truck.add( cube14);
truck.add( cube15);
truck.add( cube16);
truck.add( cube17);
truck.add( cube18);
truck.add( cube19);
truck.add( cube20);
truck.add( cube21);
truck.add( cube22);
truck.add( cube23);
truck.add( cube24);
truck.add( cube25);
truck.add( cube26);
truck.add( cube27);
truck.add( cube28);
truck.add( cube29);
truck.add( cube30);
truck.add( det);
truck.add( det1);
truck.add( det2);
truck.add( det3);
truck.add( det4);
truck.add( det5);
truck.add( det6);

truck.add(lightSphere1);
truck.add(lightSphere2);
truck.add(lightSphere3);
truck.add(lightSphere4);
truck.add(lightSphere5);
truck.add(lightSphere6);
truck.add(lightSphere7);
truck.add(lightSphere8);
truck.add(lightSphere9);
truck.add(lightSphere10);
truck.add(lightSphere11);
truck.add(lightSphere12);
truck.add(lightSphere13);
truck.add(lightSphere14);
truck.add(lightSphere15);
truck.add(lightSphere16);
truck.add(lightSphere17);
truck.add(lightSphere18);
truck.add(lightSphere19);
truck.add(lightSphere20);
truck.add(lightSphere21);
truck.add(lightSphere22);
truck.add(lightSphere23);
truck.add(lightSphere24);
truck.add(lightSphere25);
truck.add(lightSphere26);
truck.add(lightSphere27);
truck.add(lightSphere28);
truck.add(lightSphere29);
truck.add(lightSphere30);
truck.add(lightSphere31);
truck.add(lightSphere32);
truck.add(lightSphere33);
truck.add(lightSphere34);
truck.add(lightSphere35);
truck.add(lightSphere36);
truck.add(lightSphere37);
truck.add(lightSphere38);
truck.add(lightSphere39);
truck.add(lightSphere40);
truck.add(lightSphere41);
truck.add(lightSphere42);
truck.add(lightSphere43);
truck.add(lightSphere44);
truck.add(lightSphere45);
truck.add(lightSphere46);
truck.add(lightSphere47);
truck.add(lightSphere48);
truck.add(lightSphere49);
truck.add(lightSphere50);
truck.add(lightSphere51);
truck.add(lightSphere52);
truck.add(lightSphere53);
truck.add(lightSphere54);
truck.add(lightSphere55);
truck.add(lightSphere56);
truck.add(lightSphere57);
truck.add(lightSphere58);
truck.add(lightSphere59);
//truck.add(lightSphere60);
truck.add(lightSphere61);
truck.add(lightSphere62);
truck.add(lightSphere63);
truck.add(lightSphere64);
truck.add(lightSphere65);
truck.add(lightSphere66);
truck.add(lightSphere67);
truck.add(lightSphere68);
truck.add(lightSphere69);
truck.add(lightSphere70);
truck.add(lightSphere71);
truck.add(lightSphere72);
truck.add(lightSphere73);
truck.add(lightSphere74);
truck.add(lightSphere75);
truck.add(lightSphere76);
truck.add(lightSphere77);
truck.add(lightSphere78);
truck.add(lightSphere79);
truck.add(lightSphere80);
truck.add(lightSphere81);
truck.add(lightSphere82);
truck.add(lightSphere83);
truck.add(lightSphere84);
truck.add(lightSphere85);
truck.add(lightSphere86);
return truck
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