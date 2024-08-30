import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

class PersonalBoardSpotLocator extends Locator {
  // player = rules.players[0] => spectator default point of view
  getCoordinates(location: Location, { rules, player = rules.players[0] }: MaterialContext) {
    if (location.player === player) {
      return { y: 25 }
    } else {
      return { x: 30, y: 25 }
    }
  }
}

export const personalBoardSpotLocator = new PersonalBoardSpotLocator()
