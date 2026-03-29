import { exec } from "node:child_process";
import { IOperationSystem } from "../../bot/typings";

export class LinuxAdapter implements IOperationSystem {
        openCalculator(): void {
            console.log('[Linux] Открывю калькулятор...');
            //gnome-calculator - GNOME , kcalc - KDE 
            exec('kcalc');
        }
        closeCalculator(): void {
            console.log('[Linux] Закрываю калькулятор...');
            exec('killall -9 kcalc');
        }
        launchGame(gamePath: string): void {
            console.log(`[Linux] Запускаю приложение ${gamePath}`);
            exec(`"${gamePath}"`);
        }
}