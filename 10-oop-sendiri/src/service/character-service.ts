export interface ICharacterFeature{
    normalAttack(): number;
    chargeAttack(): number;
    getDamaged(damage: number): void;
    checkHp(): number;
    isAlive(): string;
}