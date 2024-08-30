import { Locator } from '@gamepark/react-game'
import { LocationType } from '@gamepark/umbrella/material/LocationType'
import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { PlayerColor } from '@gamepark/umbrella/PlayerColor'
import { personalBoardSpotLocator } from './PersonalBoardSpotLocator'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {
  [LocationType.PersonalBoardSpot]: personalBoardSpotLocator
}
