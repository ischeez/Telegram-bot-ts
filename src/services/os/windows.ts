import { exec } from "node:child_process";
import { IOperationSystem } from "../../bot/typings";

export class WindowsAdapter implements IOperationSystem {
    openCalculator(): void {
        console.log('[Windows] Открывю калькулятор...');
        exec('calc');
    }
    closeCalculator(): void {
        console.log('[Windows] Закрываю калькулятор...');
        exec('taskkill /IM CalculatorApp.exe /F');
    }
    launchGame(gamePath: string): void {
        console.log(`[Windows] Запускаю приложение ${gamePath}`);
        exec(`"${gamePath}"`);
    }
}