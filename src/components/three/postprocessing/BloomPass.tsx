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
    
}