import React, { FC } from 'react'
import { LinkIconButton } from './LinkIconButton'
import { TCanvas } from './three/TCanvas'

export const App : FC = () => {
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <TCanvas />
            <LinkIconButton imagePath ="/assets/icons/github.svg" linkPath= "https://github.com/6rahul9/sphere"/>
        </div>
    )
}