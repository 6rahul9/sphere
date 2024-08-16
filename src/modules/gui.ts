import GUI from 'lil-gui'

export class GUIController{
    private static _instance : GUIController | null
    private _gui
    private _currentFolderName : string | undefined

    private constructor(){
        this._gui = new GUI()
    }

    static get instance(){
        if(!this._instance){
            this._instance = new GUIController()
        }

        this._instance._currentFolderName = undefined
        return this._instance
    }

    
}