import { Context } from "node:vm";
import { Command } from "./command.class";
import { PcControlFacade } from "../../services/facade/pc.control";

export class PlayCommand extends Command {
    commandName = 'play';

    constructor(private _pcControl:  PcControlFacade){
        super();
    }

    execute(ctx: Context): void | Promise<void> {
        ctx.reply('Запускаяю процесс на твоем пк');

        this._pcControl.activateMathMode();
    }
} 