import { ICharacterFeature } from "./character-service";
import { Character } from "../model/character";

export class PlayableCharacter implements ICharacterFeature{
    // penggunaan private
    private hp: number = 1000;

    constructor(private readonly character?: Character){}
    
    normalAttack(): number {
        let damage = Math.floor((Math.random() * 100) + 10);
        return damage;
    }
    chargeAttack(): number {
        let damage = Math.floor((Math.random() * 1000) + 100);
        return damage;
    }

    getDamaged(damage: number): void {
        let newHp = this.hp - damage;
        this.hp = newHp;
    }

    checkHp(): number {
        return this.hp;
    }

    isAlive(): string {
        if(this.hp > 0){
            return 'Lumine masih hidup';
        }
        return 'Lumine sudah mati';
    }
}