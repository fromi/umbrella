import { TokenDescription } from '@gamepark/react-game'
import { Umbrella } from '@gamepark/umbrella/material/Umbrella'
import BlueUmbrella from '../images/tokens/BlueUmbrella.jpg'
import GreenUmbrella from '../images/tokens/GreenUmbrella.jpg'
import RedUmbrella from '../images/tokens/RedUmbrella.jpg'
import YellowUmbrella from '../images/tokens/YellowUmbrella.jpg'

class UmbrellaTokenDescription extends TokenDescription {
  width = 2.5
  height = 2.5
  images = {
    [Umbrella.Red]: RedUmbrella,
    [Umbrella.Blue]: BlueUmbrella,
    [Umbrella.Green]: GreenUmbrella,
    [Umbrella.Yellow]: YellowUmbrella
  }
}

export const umbrellaTokenDescription = new UmbrellaTokenDescription()
