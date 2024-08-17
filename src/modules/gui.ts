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
        if(folderName){
            gui = this._folder(folderName)
        }else if (this._currentFolderName){
            gui = this._folder(this._currentFolderName)
        }
    }

    private _folder = (title: string) => {
        let _folder = this._gui.folders.find(f => f._title === title )
        if(!folder) folder = this._gui.addFolder(title)
            return folder
    }

    private _uncontainedName = (gui: GUI, name : string) => {
        return !gui.controllers.find(c => c._name === name)
    }

    setFolder = (name: string) => {
        this._currentFolderName = name
        return this
    }

    setOpen = (open : boolean) => {
        this._getGui(this._currentFolderName).open(open)
    }

    /**
	 * add color controls
	 * @reference https://lil-gui.georgealways.com/#Guide#Colors
	 */

    addClor =(
        obj : object, 
        propertyName : string,
        rgbScale? : number | undefined,
        displayName? : number | undefined,
        folderName? : number | undefined
    ) => {
        const controllersName  = 
    }
}