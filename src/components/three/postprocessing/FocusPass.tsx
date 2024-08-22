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

export const FocusPass : VFC = () =>{
    const passRef = useRef<ShaderPass>(null)

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

    
    useFrame(({}) =>{
        update()
    })

    return <shaderPass ref={passRef} attachArray='passes' args={[shader]} />

    const vertexShader = `
        varying vec2 v_uv;
        void main (){
            v_uv = uv;
            gl_Position = projectionMatrix * modelViewmatrix * vec4(position, 1.0);
        }
    `

    const fragmentShader = `
        uniform sampler2D tDiffuse;
        uniform float u_focus;
        uniform float u_blur;
        uniform float u_samples;
        varying vec2 v_vu;

        const int MAX_ SAMPLES = 100;
        const float PI = 3.14159265358979;

        
    `
}