import { BotApp } from "./bot/client";
import { MenuCommand } from "./bot/commands/menu";
import { PlayCommand } from "./bot/commands/play";
import { StartCommand } from "./bot/commands/start";
import { AuthMiddleware } from "./bot/middlewares/auth.middleware";
import { IOperationSystem } from "./bot/typings";
import { PlayCallback } from "./callbacks/action.play";
import { ConfigService } from "./services/config";
import { PcControlFacade } from "./services/facade/pc.control";
import { LinuxAdapter } from "./services/os/linux";
import { MacAdapter } from "./services/os/mac";
import { WindowsAdapter } from "./services/os/windows";
import { PcService } from "./services/pc";
import os from 'os';

const startBot = ()=>{
    console.log('Иницилизация бота');

    let currentOs: IOperationSystem;
    const platform = os.platform();

    switch (platform){
        case 'darwin':
            currentOs = new MacAdapter();
            break;
        case 'win32':
            currentOs = new WindowsAdapter();
            break;
        case 'linux':
            currentOs = new LinuxAdapter();
            break;
        default:
            throw new Error (`OS ${platform} не поддерживается!`);
           
    }

    const configServise = new ConfigService();
    const pcService = new PcService(currentOs);
    const pcControl = new PcControlFacade(pcService)

    const startCmd = new StartCommand();
    const playCmd = new PlayCommand(pcControl);
    const menuCmd = new MenuCommand ();

    const allCommand = [ startCmd, playCmd, menuCmd];

    const playCallback = new PlayCallback(pcControl);

    const allCallbacks = [playCallback]

    const authMiddleware = new AuthMiddleware(configServise);

    const botApp = new BotApp(configServise, allCommand, authMiddleware, allCallbacks);

    botApp.start();
}


startBot();