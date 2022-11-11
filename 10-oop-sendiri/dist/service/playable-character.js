"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayableCharacter = void 0;
class PlayableCharacter {
    constructor(character) {
        this.character = character;
        this.hp = 1000;
    }
    normalAttack() {
        let damage = Math.floor((Math.random() * 100) + 10);
        return damage;
    }
    chargeAttack() {
        let damage = Math.floor((Math.random() * 1000) + 100);
        return damage;
    }
    getDamaged(damage) {
        let newHp = this.hp - damage;
        this.hp = newHp;
    }
    checkHp() {
        return this.hp;
    }
    isAlive() {
        if (this.hp > 0) {
            return 'Lumine masih hidup';
        }
        return 'Lumine sudah mati';
    }
}
exports.PlayableCharacter = PlayableCharacter;
