import React, { VFC } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { fresnel, rotate } from '../../modules/glsl';