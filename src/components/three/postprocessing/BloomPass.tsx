// import React, { useRef, VFC } from 'react';
// import * as THREE from 'three';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
// import { extend, useFrame } from '@react-three/fiber'
// import { GUIController } from '../../../modules/gui'
// import exp from 'constants';

// extend({ UnrealBloomPass })

// const datas = {
//     enabled: true,
//     exposure: 0.7,
//     strength: 2,
//     radius: 0.2,
//     threshold: 0.6
// }

// export const BloomPass : VFC = () =>{
//     const passRef = useRef<UnrealBloomPass>(null)

//     const gui = GUIController.instance.setFolder('Bloom')
//     gui.setOpen(false);
//     gui.addCheckBox(datas, 'enabled')
//     gui.addNumericSlider(datas, 'exposure', 0.1, 2, 0.01)
//     gui.addNumericSlider(datas, 'strength', 0, 10, 0.1)
//     gui.addNumericSlider(datas, 'radius', 0, 2, 0.01)
//     gui.addNumericSlider(datas, 'threshold', 0, 1, 0.01)
    
//     const update = (gl: THREE.WebGLRenderer) => {
//         passRef.current!.enabled = datas.enabled
//         gl.toneMappingExposure = datas.enabled ? Math.pow(datas.exposure, 4.0) : 1

//         if(datas.enabled){
//             passRef.current!.strength = datas.strength
//             passRef.current!.radius = datas.radius
//             passRef.current!.threshold = datas.threshold    
//         }
//     }

//     useFrame(({ gl }) =>{
//         update(gl)
//     })

//     return <unrealBloomPass ref={passRef} attachArray='passes' />
// }


// import React, { useRef, forwardRef } from 'react';
// import * as THREE from 'three';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
// import { extend, useFrame, ReactThreeFiber } from '@react-three/fiber';
// import { GUIController } from '../../../modules/gui';

// extend({ UnrealBloomPass });

// const datas = {
//     enabled: true,
//     exposure: 0.7,
//     strength: 2,
//     radius: 0.2,
//     threshold: 0.6
// };

// declare global {
//     namespace JSX {
//       interface IntrinsicElements {
//         unrealBloomPass: ReactThreeFiber.Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>;
//       }
//     }
//   }
// export const BloomPass = forwardRef<UnrealBloomPass>((props, ref) => {
//     const passRef = useRef<UnrealBloomPass>(null);

//     const gui = GUIController.instance.setFolder('Bloom');
//     gui.setOpen(false);
//     gui.addCheckBox(datas, 'enabled');
//     gui.addNumericSlider(datas, 'exposure', 0.1, 2, 0.01);
//     gui.addNumericSlider(datas, 'strength', 0, 10, 0.1);
//     gui.addNumericSlider(datas, 'radius', 0, 2, 0.01);
//     gui.addNumericSlider(datas, 'threshold', 0, 1, 0.01);

//     const update = (gl: THREE.WebGLRenderer) => {
//         if (passRef.current) {
//             passRef.current.enabled = datas.enabled;
//             gl.toneMappingExposure = datas.enabled ? Math.pow(datas.exposure, 4.0) : 1;

//             if (datas.enabled) {
//                 passRef.current.strength = datas.strength;
//                 passRef.current.radius = datas.radius;
//                 passRef.current.threshold = datas.threshold;
//             }
//         }
//     };

//     useFrame(({ gl }) => {
//         update(gl);
//     });

    
//     // Forward the ref to the UnrealBloomPass instance
//     return <unrealBloomPass ref={passRef} attachArray="passes" />;
// });
// export default BloomPass;

import React, { useRef, VFC } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { extend, useFrame } from '@react-three/fiber';
import { GUIController } from '../../../modules/gui';

extend({ UnrealBloomPass })

const datas = {
	enabled: true,
	exposure: 0.7,
	strength: 2,
	radius: 0.5,
	threshold: 0.6
}

export const BloomPass: VFC = () => {
	const passRef = useRef<UnrealBloomPass>(null)

	const gui = GUIController.instance.setFolder('Bloom')
	gui.setOpen(false)
	gui.addCheckBox(datas, 'enabled')
	gui.addNumericSlider(datas, 'exposure', 0.1, 2, 0.01)
	gui.addNumericSlider(datas, 'strength', 0, 10, 0.1)
	gui.addNumericSlider(datas, 'radius', 0, 2, 0.01)
	gui.addNumericSlider(datas, 'threshold', 0, 1, 0.01)

	const update = (gl: THREE.WebGLRenderer) => {
		passRef.current!.enabled = datas.enabled
		gl.toneMappingExposure = datas.enabled ? Math.pow(datas.exposure, 4.0) : 1

		if (datas.enabled) {
			passRef.current!.strength = datas.strength
			passRef.current!.radius = datas.radius
			passRef.current!.threshold = datas.threshold
		}
	}

	useFrame(({ gl }) => {
		update(gl)
	})

	return <unrealBloomPass ref={passRef} attachArray="passes" />
}
