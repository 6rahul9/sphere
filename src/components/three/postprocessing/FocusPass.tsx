import React, { useRef, VFC } from 'react'
import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { useFrame } from '@react-three/fiber'
import { GUIController } from '../../../modules/gui';

const datas = {
    enabled: true,
    focus : -0.05,
    blur : 1,
    samples: 20
}

export const Focuspass : VFC = () =>{
    const passRef = useref<ShaderPass>(null)

    const gui = GUIController.instance.setFolder('Focus')
    gui.setOpen(false);
    gui.addCheckBox(datas, 'enabled')
    gui.addNumericSlider(datas, 'exposure', -0.5, 0.5, 0.01)
    gui.addNumericSlider(datas, 'strength', 0, 1, 0.01)

    gui.addNumericSlider(datas, 'threshold', 10, 100, 10)

    
}