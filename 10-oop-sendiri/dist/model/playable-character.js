"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayableCharacter = void 0;
class PlayableCharacter {
    constructor(character) {
        this.character = character;
    }
    normalAttack() {
        let damage = Math.floor((Math.random() * 100) + 10);
        return damage;
    }
    chargeAttack() {
        let damage = Math.floor((Math.random() * 1000) + 100);
        return damage;
    }
}
exports.PlayableCharacter = PlayableCharacter;
