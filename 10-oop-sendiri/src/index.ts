import { Character } from "./model/character";
import { CharRarity, CharType, CharVision, CharWeapon } from "./model/character-enum";
import { PlayableCharacter } from "./service/playable-character";

const lumine: Character = {
    name: 'Lumine',
    weapon: CharWeapon.sword,
    vision: CharVision.dendro,
    rarity: CharRarity.fiveStar,
    type: CharType.playable
}

const raidenShogun: Character = {
    name: 'Raiden Shogun',
    weapon: CharWeapon.polearm,
    vision: CharVision.electro,
    rarity: CharRarity.fiveStar,
    type: CharType.playable
}

const luminePlayable: PlayableCharacter = new PlayableCharacter(lumine)
console.log(luminePlayable)

// damage lumine
const damageNA1: number = luminePlayable.normalAttack()
const damageNA2: number = luminePlayable.normalAttack()
const damageCA: number = luminePlayable.chargeAttack()

console.log('Damage Lumine: ' + [damageNA1, damageNA2, damageCA])

luminePlayable.getDamaged(287)
const newHp: number = luminePlayable.checkHp()
console.log('HP Lumine: ' + newHp)
luminePlayable.getDamaged(1200)
console.log('Lumine masih hidup?\n' + luminePlayable.isAlive())
// const raidenShogunPlayable: PlayableCharacter = new PlayableCharacter(raidenShogun)
// console.log(raidenShogunPlayable)

