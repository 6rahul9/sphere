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
        let folder = this._gui.folders.find(f => f._title === title )
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

    addColor =(
        obj : object, 
        propertyName : string,
        rgbScale? : number | undefined,
        displayName? : string | undefined,
        folderName? : string | undefined
    ) => {
        const controllersName  = displayName ? displayName : propertyName
        const gui = this._getGui(folderName)

        if(this._uncontainedName(gui, controllersName)){
            gui.addColor(obj, propertyName, rgbScale).name(controllersName)
        }
    }

    	/**
	 * add numeric slider controls
	 * @reference https://lil-gui.georgealways.com/#Guide#Numbers-and-Sliders
	 */

    addNumericSlider (  
        obj : object, 
        propertyName : string,
        displayName? : string | undefined,
        folderName? : string | undefined,
        min:number,
        mix:number,
        step:number 
    ) =>{
        const controllerName = displayName ? displayName : propertyName
        const gui = this._getGui(folderName)
        
        if (this._uncontainedName(gui, controllerName)){
            gui.add(obj, propertyName, mn, mix, step)
        }
    }

/**
	 * add dropdown controls
	 * @reference https://lil-gui.georgealways.com/#Guide#Dropdowns
	 */

    addDropDown =(
        
    ) =>{

    }
}