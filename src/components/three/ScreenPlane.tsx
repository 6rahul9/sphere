import React, { VFC } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { fresnel, rotate } from '../../modules/glsl';

export const ScreenPlane: VFC = () => {
    const shader : THREE.Shader ={
        uniforms:{
            u_time : { value : 0 },
            u_aspect: { value : 0 },
            u_mouse: { value : new THREE.Vector2(0, 0) }
        },
        vertexShader : vertexShader,
        fragmentShader: fragmentShader 
    }

    const vec = new THREE.Vector2()
    useFrame(({ size, mouse }) => {
        shader.uniforms.u_time.value += 0.005
        shader.uniforms.u_aspect.value = size.width / size.height
        shader.uniforms.u_mouse.value.lerp(vec.set(mouse.x / 2, mouse.y / 2, 0.05)
    })
    
}