import { CharRarity, CharType, CharVision, CharWeapon } from "./character-enum";

export type Character = {
    name: string;
    weapon: CharWeapon;
    vision: CharVision;
    rarity: CharRarity;
    type: CharType;
}