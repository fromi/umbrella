import { LocationType } from '@gamepark/umbrella/material/LocationType'
import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { PlayerColor } from '@gamepark/umbrella/PlayerColor'
import { Locator } from '@gamepark/react-game'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {}
