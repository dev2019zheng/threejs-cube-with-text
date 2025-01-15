import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function createCenteredText(options = {}) {
    const {
        text = '',
        font,
        size = 0.5,
        height = 0.02,
        color = 0xffffff,
        curveSegments = 12,
        bevelEnabled = false
    } = options;

    // Create text geometry
    const textGeometry = new TextGeometry(text, {
        font,
        size,
        height,
        curveSegments,
        bevelEnabled
    });

    // Center the text geometry
    textGeometry.computeBoundingBox();
    const centerOffset = new THREE.Vector3();
    centerOffset.x = -(textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x) / 2;
    centerOffset.y = -(textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y) / 2;
    centerOffset.z = -(textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z) / 2;
    textGeometry.translate(centerOffset.x, centerOffset.y, centerOffset.z);

    // Create and return mesh
    return new THREE.Mesh(
        textGeometry,
        new THREE.MeshBasicMaterial({ color })
    );
}

export { createCenteredText };