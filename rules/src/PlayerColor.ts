import { getEnumValues } from '@gamepark/rules-api'

export enum PlayerColor {
  Red = 1, Green, Yellow, Pink
}

export const playerColors = getEnumValues(PlayerColor)
