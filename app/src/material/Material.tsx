import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game'
import { personalBoardDescription } from './PersonalBoardDescription'

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.PersonalBoard]: personalBoardDescription
}
