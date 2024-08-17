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

    private _getGui = (folderName : string | undefined) => {
        let gui = this._gui
        if(foldrName){
            gui = this._folder(folderName)
        }else if (this._currentFolderName){
            gui = this._folder(this._currentFolderName)
        }
    }

    private _folder = (title: string)=> {
        let _flder = this._gui._folders.find(f =>f._title === title )
        if(!folder) folder = this._gui.addFolder(title)
            return folder
    }
}