import { BoardDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/umbrella/material/LocationType'
import CentralWaitingZone from '../images/boards/CentralWaitingZone.jpg'

class CentralWaitingZoneDescription extends BoardDescription {
  width = 13.6
  height = 13.6
  image = CentralWaitingZone

  staticItem = { location: { type: LocationType.CentralWaitingZoneSpot } }
}

export const centralWaitingZoneDescription = new CentralWaitingZoneDescription()
