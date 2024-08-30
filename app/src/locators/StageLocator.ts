import { Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/umbrella/material/MaterialType'
import { personalBoardDescription } from '../material/PersonalBoardDescription'

class StageLocator extends Locator {
  parentItemType = MaterialType.PersonalBoard

  getParentItem(location: Location) {
    return personalBoardDescription.getPersonalBoard(location.player!)
  }

  positionOnParent = { x: 29.2, y: 45.2 }

  getCoordinates({ x = 0, y = 0 }: Location) {
    return { x: x * 2.5, y: y * 2.5 }
  }
}

export const stageLocator = new StageLocator()
