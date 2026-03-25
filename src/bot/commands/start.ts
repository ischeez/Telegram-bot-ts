import { Context } from "node:vm";
import { Command } from "./command.class";

export class StartCommand extends Command {
    commandName = 'start';

    execute(ctx: Context): void | Promise<void> {
        ctx.reply('Привет! это pc-ассистент. Нажми /play, чтобы запустить приложение.');
    }
}