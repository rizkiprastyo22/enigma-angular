"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_enum_1 = require("./model/character-enum");
const playable_character_1 = require("./service/playable-character");
const lumine = {
    name: 'Lumine',
    weapon: character_enum_1.CharWeapon.sword,
    vision: character_enum_1.CharVision.dendro,
    rarity: character_enum_1.CharRarity.fiveStar,
    type: character_enum_1.CharType.playable
};
const luminePlayable = new playable_character_1.PlayableCharacter(lumine);
async function fightProcess() {
    try {
        const createCharacter = await luminePlayable.createCharacterAsync(lumine);
        console.log('karakter baru:');
        console.log(createCharacter);
        const damageNA = await luminePlayable.normalAttackAsync();
        console.log('\ndamage normal attack:');
        console.log(damageNA);
        const damageCA = await luminePlayable.chargeAttackAsync();
        console.log('\ndamage charged attack:');
        console.log(damageCA);
        const getDamaged = await luminePlayable.getDamagedAsync(lumine.name, 287);
        console.log('\n' + getDamaged);
        const getHp = await luminePlayable.checkHpAsync(lumine.name);
        console.log('\n' + getHp);
        const isAlive = await luminePlayable.isAliveAsync(lumine.name);
        console.log('\n' + isAlive);
    }
    catch (error) {
        console.log(error);
    }
}
fightProcess();
