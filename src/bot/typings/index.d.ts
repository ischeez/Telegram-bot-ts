export interface IOperationSystem {
    openCalculator(): void;
    closeCalculator(): void;
    launchGame(gamePath: string): void;
}