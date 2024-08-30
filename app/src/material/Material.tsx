import { MaterialDescription } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { centralWaitingZoneDescription } from './CentralWaitingZoneDescription'
import { personalBoardDescription } from './PersonalBoardDescription'
import { umbrellaTokenDescription } from './UmbrellaTokenDescription'

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.PersonalBoard]: personalBoardDescription,
  [MaterialType.CentralWaitingZone]: centralWaitingZoneDescription,
  [MaterialType.UmbrellaToken]: umbrellaTokenDescription
}
