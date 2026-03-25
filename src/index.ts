import { BotApp } from "./bot/client";
import { PlayCommand } from "./bot/commands/play";
import { StartCommand } from "./bot/commands/start";
import { ConfigService } from "./services/config";
import { PcService } from "./services/pc";

const startBot = ()=>{
    console.log('Иницилизация бота');

    const configServise = new ConfigService();

    const pcService = new PcService();

    const startCmd = new StartCommand();
    const playCmd = new PlayCommand(pcService);

    const allCommand = [ startCmd, playCmd];

    const botApp = new BotApp(configServise,allCommand );

    botApp.start();
}


startBot();