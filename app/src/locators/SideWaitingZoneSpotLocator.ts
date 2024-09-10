import { getRelativePlayerIndex, Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

class SideWaitingZoneSpotLocator extends Locator {
  // player = rules.players[0] => spectator default point of view
  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player = rules.players[0] } = context
    if (rules.players.length === 4) {
      switch (getRelativePlayerIndex(context, rules.players[location.id])) {
        case 0:
          return { x: -25, y: 25}
        case 1:
          return { x: -25 }
        case 2:
          return { y: -25 }
        case 3:
          return { x: 25 }
      }
    }

    if (rules.players.length === 3){
      switch (getRelativePlayerIndex(context, rules.players[location.id])) {
        case 0:
          return { y: 25 }
        case 1:
          return { x: -25, y: -20}
        case 2:
          return { x: 25, y: -20 }
      }
    }

    if (location.player === player) {
      return { y: 25 }
    } else {
      return { x: 30, y: 25 }
    }
  }

  getRotateZ(location: Location, context: MaterialContext) {
    const { rules } = context
    if (rules.players.length === 4) {
      switch (getRelativePlayerIndex(context, rules.players[location.id])) {
        case 0:
          return 45
        case 1:
          return 90
        case 2:
          return 180
        case 3:
          return 270
      }
    }

    if(rules.players.length === 3){
      switch (getRelativePlayerIndex(context,rules.players[location.id])) {
        case 0:
          return 0
        case 1:
          return 130
        case 2:
          return 230
      }
    }

    return 0;
  }
}

export const sideWaitingZoneSpotLocator = new SideWaitingZoneSpotLocator()
