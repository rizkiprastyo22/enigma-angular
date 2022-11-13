import { Character } from "../model/character";

export interface ICharacterFeature{
    createCharacterAsync(character: Character): Promise<object>
    normalAttackAsync(): Promise<number>
    chargeAttackAsync(): Promise<number>
    getDamagedAsync(charName: string, damage: number): Promise<string>
    checkHp(): number
    isAlive(): string
}