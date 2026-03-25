import { exec } from "node:child_process";

export class PcService {
        public launchGame():void{
            console.log('Поступила команда на запуск');

            const command = 'calc'
            exec(command, (error, stdout, stderr)=>{
                if (error) {
                    console.error(`Ошибка запуска:`, error);
                    return;
                }

                console.log('Программа успешно запушена!')
            })
        }
}