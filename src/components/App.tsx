import React, { VFC } from 'react'
import { LinkIconButton } from './LinkIconButton'
import { TCanvas } from './three/TCanvas'

export const App : VFC = () => {
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <TCanvas />
            <LinkIconButton imagepath ="/assets/icons/github.svg" linkpath= "https://github.com/6rahul9/sphere"/>
        </div>
    )
}