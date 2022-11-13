import { Character } from "./model/character";
import { CharRarity, CharType, CharVision, CharWeapon } from "./model/character-enum";
import { PlayableCharacter } from "./service/playable-character";

// buat objecct karakter baru
const lumine: Character = {
    name: 'Lumine',
    weapon: CharWeapon.sword,
    vision: CharVision.dendro,
    rarity: CharRarity.fiveStar,
    type: CharType.playable
}

// buat instance
const luminePlayable: PlayableCharacter = new PlayableCharacter(lumine)

// buat object menggunakan blueprint class PlayableCharacter
async function fightProcess(): Promise<void> {
    try{
        // buat karakter baru
        const createCharacter: object = await luminePlayable.createCharacterAsync(lumine)
        console.log('karakter baru:')
        console.log(createCharacter)

        // karakter damage
        const damageNA: number = await luminePlayable.normalAttackAsync()
        console.log('\ndamage normal attack:')
        console.log(damageNA)

        const damageCA: number = await luminePlayable.chargeAttackAsync()
        console.log('\ndamage charged attack:')
        console.log(damageCA)

        // karakter terkena damage
        const getDamaged: string = await luminePlayable.getDamagedAsync(lumine.name, 287)
        console.log('\n' + getDamaged)
    }
    catch(error){
        console.log(error)
    }
}

fightProcess()

// damage lumine
// const damageNA1: number = luminePlayable.normalAttack()
// const damageNA2: number = luminePlayable.normalAttack()
// const damageCA: number = luminePlayable.chargeAttack()

// console.log('\nDamage Lumine: ' + '\nDamage Normal Attack 1: ' + damageNA1 + '\nDamage Normal Attack 2:' + damageNA2 + '\nDamage Charged Attack: ' + damageCA)

// get damage 1
// luminePlayable.getDamaged(287)
// console.log('\n'+ lumine.name + ' get damage ' + 287)
// const newHp: number = luminePlayable.checkHp()
// console.log('HP Lumine: ' + newHp)
// console.log('\nLumine masih hidup?\n' + luminePlayable.isAlive())

// get damage 2
// luminePlayable.getDamaged(1200)
// console.log('\n'+ lumine.name + ' get damage ' + 1200)
// const newHp2: number = luminePlayable.checkHp()
// console.log('HP Lumine: ' + newHp2)
// console.log('\nLumine masih hidup?\n' + luminePlayable.isAlive())

