import { BoardDescription, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/umbrella/material/LocationType'
import FirstSideWaitingZone from '../images/boards/SideWaitingZone1.jpg'
import SecondSideWaitingZone from '../images/boards/SideWaitingZone1.jpg'
import ThirdSideWaitingZone from '../images/boards/SideWaitingZone1.jpg'
import FourthSideWaitingZone from '../images/boards/SideWaitingZone1.jpg'

class SideWaitingZoneDescription extends BoardDescription {
  width = 8.25
  height = 13.6
  images = {
    0: FirstSideWaitingZone,
    1: SecondSideWaitingZone,
    2: ThirdSideWaitingZone,
    3: FourthSideWaitingZone
  }

  getStaticItems({ rules }: MaterialContext) {
    return rules.players.map((_player, index) => this.getSideWaitingBoard(index))
  }

  getSideWaitingBoard(id:number) {
    return { id, location: { type: LocationType.SideWaitingZoneSpot, id } }
  }
}

export const sideWaitingZoneDescription = new SideWaitingZoneDescription()