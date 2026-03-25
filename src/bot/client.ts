import {Bot} from 'grammy';
import {ConfigService} from '../services/config';
import { Command } from './commands/command.class';


export class BotApp {
    private _bot: Bot;

    public constructor(
        private _configService: ConfigService,
        private _commands: Command[]
    ){
        const token = this._configService.get('TOKEN');

        this._bot = new Bot(token); 

        this.registerCommand();
    }

    private registerCommand() {
        console.log('Регестрирую  команды бота');


        for( const command of this._commands){
            this._bot.command(command.commandName,(ctx)=> command.execute(ctx));  

            console.log(`Комана/${command.commandName} зарегестрирована`)
        }
    }

    public start (){

        console.log('Бот запущен и готов к работе');
        this._bot.start();
    }
}