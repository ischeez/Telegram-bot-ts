import { Context } from "node:vm";
import { Command } from "./command.class";
import { PcService } from "../../services/pc";

export class PlayCommand extends Command {
    commandName = 'play';

    constructor(private _pcService: PcService){
        super();
    }

    execute(ctx: Context): void | Promise<void> {
        ctx.reply('Запускаяю процесс на твоем пк');

        this._pcService.launchGame();
    }
} 