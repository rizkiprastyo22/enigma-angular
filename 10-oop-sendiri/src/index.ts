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

        // darah karakter setela damage
        const getHp: string = await luminePlayable.checkHpAsync(lumine.name)
        console.log('\n' + getHp)

        // cek masih hidup?
        const isAlive: string = await luminePlayable.isAliveAsync(lumine.name)
        console.log('\n' + isAlive)
    }
    catch(error){
        console.log(error)
    }
}

fightProcess()

