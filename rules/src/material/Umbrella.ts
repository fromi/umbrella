import { getEnumValues } from '@gamepark/rules-api'

export enum Umbrella {
  Red = 1, Blue, Green, Yellow
}

export const umbrellas = getEnumValues(Umbrella)
