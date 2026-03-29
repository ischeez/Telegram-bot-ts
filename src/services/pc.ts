import { IOperationSystem } from "../bot/typings";

export class PcService {
    constructor (private _os: IOperationSystem){}

    public openCalculator(): void{
        this._os.openCalculator();
    }

    public closeCalculator():void {
        this._os.closeCalculator();
    }
        public launchGame(gamePath: string):void{
        this._os.launchGame(gamePath);
        }

    }