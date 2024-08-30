import { BoardDescription, MaterialContext } from '@gamepark/react-game'
import { LocationType } from '@gamepark/umbrella/material/LocationType'
import { PlayerColor } from '@gamepark/umbrella/PlayerColor'
import GreenBoard from '../images/boards/GreenBoard.jpg'
import PinkBoard from '../images/boards/PinkBoard.jpg'
import RedBoard from '../images/boards/RedBoard.jpg'
import YellowBoard from '../images/boards/YellowBoard.jpg'

class PersonalBoardDescription extends BoardDescription {
  width = 18
  height = 29
  images = {
    [PlayerColor.Red]: RedBoard,
    [PlayerColor.Green]: GreenBoard,
    [PlayerColor.Yellow]: YellowBoard,
    [PlayerColor.Pink]: PinkBoard
  }

  getStaticItems({ rules }: MaterialContext) {
    return rules.players.map(player => this.getPersonalBoard(player))
  }

  getPersonalBoard(player: PlayerColor) {
    return { id: player, location: { type: LocationType.PersonalBoardSpot, player } }
  }
}

export const personalBoardDescription = new PersonalBoardDescription()
