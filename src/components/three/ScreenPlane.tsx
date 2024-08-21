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
        shader.uniforms.u_mouse.value.lerp(vec.set(mouse.x / 2, mouse.y / 2), 0.05)
    })

    return (
        <Plane args={[2, 2]}>
        <shaderMaterial args={[shader]} />
        </Plane>
    )
}

const vertexShader = `
varying vec2 v_uv;

void main(){
v_uv 
gl_Position = projectionMatrix * modeViewMatrix * vec4(position, 1.0)
}
`

const fragmentShader = `
    uniform float u_time;
    uniform float u_aspect;
    uniform float u_mouse;
    uniform float v_uv;

    const float PI = 3.14159265358979;

    ${rotate}
    ${fresnel}

    //polymal smooth min 1 (k=0.1)
    float simn(flaot a, float b, float k){
        float h = clamp(0.5+0.5*(b-a)/k, 0.0, 1.0)
        return mix (b, a, h) - k*h*(1.0 - h)
    }

    float opUnion (float d1, float d2){return min(d1, d2)}
    float opUnion (float d1, float d2){return max(-d1, d2)}
    float opUnion (float d1, float d2){return max(d1, d2)}

    flaot opSmoothSubtraction(flaot d1, flaot d2, float k){
    float h = clamp(0.5+0.5*(d2+d1))/k, 0.0, 1.0)
        return mix (d2, -d1, h) - k*h*(1.0 - h)
    }

    flaot sd
`