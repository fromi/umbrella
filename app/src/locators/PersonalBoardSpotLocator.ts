import { getRelativePlayerIndex, Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

class PersonalBoardSpotLocator extends Locator {
  // player = rules.players[0] => spectator default point of view
  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player = rules.players[0] } = context
    if (rules.players.length === 4) {
      switch (getRelativePlayerIndex(context, location.player)) {
        case 0:
          return { y: 25 }
        case 1:
          return { x: -25 }
        case 2:
          return { y: -25 }
        case 3:
          return { x: 25 }
      }
    }
    if (location.player === player) {
      return { y: 25 }
    } else {
      return { x: 30, y: 25 }
    }
  }
}

export const personalBoardSpotLocator = new PersonalBoardSpotLocator()
