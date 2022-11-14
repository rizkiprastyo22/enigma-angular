"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayableCharacter = void 0;
class PlayableCharacter {
    constructor(character) {
        this.character = character;
        this.hp = 1000;
    }
    createCharacterAsync(character) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (character) {
                    resolve(character);
                }
                reject({
                    error: 'character gagal dibuat'
                });
            }, 1000);
        });
    }
    callbackAttack(damage, resolve, reject) {
        setTimeout(() => {
            if (damage) {
                resolve(damage);
            }
            reject('input damage tidak sesuai');
        }, 1000);
    }
    normalAttackAsync() {
        let damage = Math.floor((Math.random() * 100) + 10);
        return new Promise((resolve, reject) => {
            this.callbackAttack(damage, resolve, reject);
        });
    }
    chargeAttackAsync() {
        let damage = Math.floor((Math.random() * 100) + 100);
        return new Promise((resolve, reject) => {
            this.callbackAttack(damage, resolve, reject);
        });
    }
    getDamagedAsync(charName, damage) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let newHp = this.hp - damage;
                this.hp = newHp;
                if (newHp) {
                    resolve(charName + ' terkena damage sebesar: ' + damage);
                }
                reject('input tidak sesuai');
            }, 1000);
        });
    }
    checkHpAsync(charName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.hp < 0) {
                    this.hp = 0;
                    resolve('darah ' + charName + ': ' + this.hp);
                }
                reject('darah ' + charName + ': ' + this.hp);
            }, 1000);
        });
    }
    isAliveAsync(charName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.hp > 0) {
                    resolve(charName + ' masih hidup');
                }
                reject(charName + ' sudah mati');
            }, 1000);
        });
    }
}
exports.PlayableCharacter = PlayableCharacter;
