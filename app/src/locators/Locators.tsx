import { Locator } from '@gamepark/react-game'
import { LocationType } from '@gamepark/umbrella/material/LocationType'
import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { PlayerColor } from '@gamepark/umbrella/PlayerColor'
import { personalBoardSpotLocator } from './PersonalBoardSpotLocator'
import { sideWaitingZoneSpotLocator } from './SideWaitingZoneSpotLocator'
import { stageLocator } from './StageLocator'
import { centralWaitingZoneLocator } from './CentralWaitingZoneLocator'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {
  [LocationType.PersonalBoardSpot]: personalBoardSpotLocator,
  [LocationType.SideWaitingZoneSpot]: sideWaitingZoneSpotLocator,
  [LocationType.CentralWaitingZone]: centralWaitingZoneLocator,
  [LocationType.Stage]: stageLocator
}
