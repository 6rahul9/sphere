import React, { useRef, VFC } from 'react'
import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { useFrame } from '@react-three/fiber'
import { GUIController } from '../../../modules/gui';
