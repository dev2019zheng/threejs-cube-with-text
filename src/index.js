import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { createCenteredText } from './utils/textCreator.js';

const FONT_URL = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';
const CUBE_FACES = [
    { text: 'Front', position: [0, 0, 0.51], rotation: [0, 0, 0] },
    { text: 'Back', position: [0, 0, -0.51], rotation: [0, Math.PI, 0] },
    { text: 'Left', position: [-0.51, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { text: 'Right', position: [0.51, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { text: 'Top', position: [0, 0.51, 0], rotation: [-Math.PI / 2, 0, 0] },
    { text: 'Bottom', position: [0, -0.51, 0], rotation: [Math.PI / 2, 0, 0] }
];

class CubeScene {
    constructor() {
        this.setupScene();
        this.createCube();
        this.setupCamera();
        this.addTextToCubeFaces();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    createCube() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x007fff, opacity: 0.55, transparent: true });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;
    }

    createTextMesh(font, text, position, rotation) {
        const textMesh = createCenteredText({
            text,
            font,
            size: 0.55,
            height: 0.08,
            color: 0xffffff
        });

        textMesh.position.set(...position);
        textMesh.rotation.set(...rotation);
        textMesh.scale.set(0.3, 0.3, 0.3);

        return textMesh;
    }

    addTextToCubeFaces() {
        const loader = new FontLoader();
        loader.load(FONT_URL, (font) => {
            CUBE_FACES.forEach(({ text, position, rotation }) => {
                this.cube.add(this.createTextMesh(font, text, position, rotation));
            });
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.animate();
    }
}

// Initialize and start the animation
const cubeScene = new CubeScene();
cubeScene.start();
