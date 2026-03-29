import {Bot} from 'grammy';
import {ConfigService} from '../services/config';
import { Command } from './commands/command.class';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { Callback } from '../callbacks/callback.class';


export class BotApp {
    private _bot: Bot;

    public constructor(
        private _configService: ConfigService,
        private _commands: Command[],
        private _authMiddleware: AuthMiddleware,
        private _callbacks: Callback[]
    ){
        const token = this._configService.get('TOKEN');

        this._bot = new Bot(token); 

        this._bot.use(this._authMiddleware.middleware);

        this.registerCommand();
        this.registerCallbacks();
    }

    private registerCommand() {
        console.log('Регестрирую  команды бота');


        for( const command of this._commands){
            this._bot.command(command.commandName,(ctx)=> command.execute(ctx));  

            console.log(`Комана/${command.commandName} зарегестрирована`)
        }
    }
    private registerCallbacks(){
        console.log('Регестрирую коллбэки бота');

        for (const callback of this._callbacks){
            this._bot.callbackQuery(callback.callbackName, (ctx )=> callback.execute(ctx));

            console.log(`Кольбэк ${callback.callbackName} зарегестрирован `);

        }
    }



    public start (){

        console.log('Бот запущен и готов к работе');
        this._bot.start();
    }
}