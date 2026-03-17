import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Camera
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(2,2,5);
camera.lookAt(0,0,0);

// Renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("canvas-container")
.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(geometry,material);
scene.add(cube);

// Degrees → radians
const degToRad = (d)=> d*Math.PI/180;
// Translation
transX.oninput = (e)=> cube.position.x = e.target.value;
transY.oninput = (e)=> cube.position.y = e.target.value;
transZ.oninput = (e)=> cube.position.z = e.target.value;

// Rotation
rotX.oninput = (e)=> cube.rotation.x = degToRad(e.target.value);
rotY.oninput = (e)=> cube.rotation.y = degToRad(e.target.value);
rotZ.oninput = (e)=> cube.rotation.z = degToRad(e.target.value);

// Scaling
scaleAll.oninput = (e)=>{
let s = e.target.value;
cube.scale.set(s,s,s);
};

// Animation
function animate(){
requestAnimationFrame(animate);
renderer.render(scene,camera);
}

animate();

// Resize
window.addEventListener("resize",()=>{
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
});