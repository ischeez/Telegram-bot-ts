import { exec } from "node:child_process";
import { IOperationSystem } from "../../bot/typings";

export class MacAdapter implements IOperationSystem {
        openCalculator(): void {
            console.log('[Mac] Открывю калькулятор...');
            exec('open -a Calculator');
        }
        closeCalculator(): void {
            console.log('[Mac] Закрываю калькулятор...');
            exec('killall Calculator');
        }
        launchGame(gamePath: string): void {
            console.log(`[Mac] Запускаю приложение ${gamePath}`);
            exec(`open"${gamePath}"`);
        }
} 