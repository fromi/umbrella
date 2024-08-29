import { BoardDescription } from '@gamepark/react-game'
import { PlayerColor } from '@gamepark/umbrella/PlayerColor'
import GreenBoard from '../images/boards/GreenBoard.jpg'
import PinkBoard from '../images/boards/PinkBoard.jpg'
import RedBoard from '../images/boards/RedBoard.jpg'
import YellowBoard from '../images/boards/YellowBoard.jpg'

class PersonalBoardDescription extends BoardDescription {
  images = {
    [PlayerColor.Red]: RedBoard,
    [PlayerColor.Green]: GreenBoard,
    [PlayerColor.Yellow]: YellowBoard,
    [PlayerColor.Pink]: PinkBoard
  }
}

export const personalBoardDescription = new PersonalBoardDescription()
