import { useRef, VFC } from 'react'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { extend ,useFrame, useThree } from "@react-three/fiber";
import { GUIController } from '../../../modules/gui';

extend({ShaderPass})

const datas = {
    enabled: true
}
export const FXAAPass : VFC = () =>{
    const passRef = useRef<ShaderPass>(null)
    const {  size } = useThree()

    const gui = 
}