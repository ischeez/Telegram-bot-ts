import { Context } from "node:vm";
import { Command } from "./command.class";
import { InlineKeyboard } from "grammy";

export class MenuCommand extends Command {
    commandName = 'menu';

    execute(ctx: Context): void {
        const keyboard = new InlineKeyboard()
        .text('Запустить калькулятор', 'action_play');


        ctx.reply('Пульт управления ПК:', {reply_markup: keyboard } )
    }
    
    
} 