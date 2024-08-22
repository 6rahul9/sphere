import { useEffect, useRef, VFC } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader'
import { extend ,useFrame, useThree } from "@react-three/fiber";

extend ({ EffectComposer, RenderPass, ShaderPass})

type EffectsProps = {
    children : React.ReactNode
    sRGBCorrection? : boolean;  
}