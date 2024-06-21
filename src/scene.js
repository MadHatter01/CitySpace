import * as THREE from 'three';

export function initScene(){
    const world = document.getElementById('container');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x212121);
    


    const camera = new THREE.PerspectiveCamera(75, world.offsetWidth/ world.offsetHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(world.offsetWidth, world.offsetHeight);
    world.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const renderFcn=()=>{;
        mesh.rotation.x+=0.01;
        mesh.rotation.y-=0.01;
        renderer.render(scene, camera);
    }

    const start=()=>{
        renderer.setAnimationLoop(renderFcn);
    }

    const stop=()=>{
        renderer.setAnimationLoop(null);
    }



    return {
        start, stop
    }
}