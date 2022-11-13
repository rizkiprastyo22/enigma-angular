import { ICharacterFeature } from "./character-service";
import { Character } from "../model/character";

export class PlayableCharacter implements ICharacterFeature{
    // penggunaan private
    private hp: number = 1000;

    constructor(private readonly character?: Character){}

    // method buat karakter async
    createCharacterAsync(character: Character): Promise<object>{
        return new Promise<object>((resolve, reject) => {
            setTimeout(() => {
                if(character){
                    resolve(character)
                }

                reject({
                    error: 'character gagal dibuat'
                })
            }, 1000)
        })
    }

    // method callback untuk duplicate 2 jenis attack
    private callbackAttack(damage: number, resolve: any, reject: any): void{
        setTimeout(() => {
            if(damage){
                resolve(damage)
            }
            reject('input damage tidak sesuai')
        }, 1000)
    }
    
    // normal attack menggunakan callback
    normalAttackAsync(): Promise<number> {
        let damage: number = Math.floor((Math.random() * 100) + 10);
        return new Promise<number>((resolve, reject) => {
            this.callbackAttack(damage, resolve, reject)
        })
    }

    // charged attack menggunakan callback
    chargeAttackAsync(): Promise<number> {
        let damage: number = Math.floor((Math.random() * 100) + 100);
        return new Promise<number>((resolve, reject) => {
            this.callbackAttack(damage, resolve, reject)
        })
    }

    getDamagedAsync(charName: string, damage: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                let newHp = this.hp - damage;
                this.hp = newHp;

                if(newHp){
                    resolve(charName + ' terkena damage sebesar: ' + damage)
                }
                reject('input tidak sesuai')

            }, 1000)
        })
    }

    checkHp(): number {
        if(this.hp < 0){
            this.hp = 0;
            return this.hp;
        }
        return this.hp;
    }

    isAlive(): string {
        if(this.hp > 0){
            return 'Lumine masih hidup';
        }
        return 'Lumine sudah mati';
    }
}