import { useEffect, useRef, VFC } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { GammaCoorectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader'
import { extend ,useFrame, useThree } from "@react-three/fiber";

