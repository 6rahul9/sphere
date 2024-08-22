import React, { useRef, VFC } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { extend, useFrame } from '@react-three/fiber'
import { GUIController } from '../../../modules/gui'
import exp from 'constants';

extend({ UnrealBloomPass })

const datas = {
    enabled: true,
    exposure: 0.7,
    strength: 2,
    radius: 0.2,
    threshold: 0.6
}

export const BloomPass : VFC = () =>{
    const passRef = useRef<UnrealBloomPass>(null)

    const gui = GUIController.instance.setFolder('Bloom')
    gui.setOpen(false);
    gui.addCheckBox(datas, 'enabled')
    gui.addNumericSlider(datas, 'exposure', 0.1, 2, 0.01)
    gui.addNumericSlider(datas, 'strength', 0, 10, 0.1)
    gui.addNumericSlider(datas, 'radius', 1, 2, 0.01)
    gui.addNumericSlider(datas, 'threshold', 0, 1, 0.01)
}