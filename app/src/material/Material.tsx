import { MaterialDescription } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { centralWaitingZoneDescription } from './CentralWaitingZoneDescription'
import { personalBoardDescription } from './PersonalBoardDescription'
import { umbrellaTokenDescription } from './UmbrellaTokenDescription'
import { sideWaitingZoneDescription } from './SideWaitingZoneDescription'

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.PersonalBoard]: personalBoardDescription,
  [MaterialType.CentralWaitingZone]: centralWaitingZoneDescription,
  [MaterialType.SideWaitingZone]: sideWaitingZoneDescription ,
  [MaterialType.UmbrellaToken]: umbrellaTokenDescription
}
