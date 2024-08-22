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
    gui.addNumericSlider(datas, 'focus', -0.5, 0.5, 0.01)
    gui.addNumericSlider(datas, 'blur', 0, 1, 0.01)

    gui.addNumericSlider(datas, 'samples', 10, 100, 10)

    const shader : THREE.Shader = {
        uniforms : {
            tDiffuse : { value : null},
            u_focus : { value: datas.focus },
            u_blur : { value: datas.blur },
            u_samples : { value: datas.samples },
        },
        vertexShader : vertexShader,
        fragmentShader : fragmentShader
    }

    cosnt update = () => {
        passRef.current!.enabled = datas.enabled

        if(datas.enabled){
            passRef.current!.uniforms.u_focus.value = datas.focus
            passRef.current!.uniforms.u_blur.value = datas.blur
            passRef.current!.uniforms.u_samples.value = datas.samples
        }
    }

    
}