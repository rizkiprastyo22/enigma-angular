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
const raidenShogun = {
    name: 'Raiden Shogun',
    weapon: character_enum_1.CharWeapon.polearm,
    vision: character_enum_1.CharVision.electro,
    rarity: character_enum_1.CharRarity.fiveStar,
    type: character_enum_1.CharType.playable
};
const luminePlayable = new playable_character_1.PlayableCharacter(lumine);
console.log(luminePlayable);
const damageNA1 = luminePlayable.normalAttack();
const damageNA2 = luminePlayable.normalAttack();
const damageCA = luminePlayable.chargeAttack();
console.log('Damage Lumine: ' + [damageNA1, damageNA2, damageCA]);
luminePlayable.getDamaged(287);
const newHp = luminePlayable.checkHp();
console.log('HP Lumine: ' + newHp);
luminePlayable.getDamaged(1200);
console.log('Lumine masih hidup?\n' + luminePlayable.isAlive());
