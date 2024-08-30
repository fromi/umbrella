import { MaterialGameSetup } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { Umbrella, umbrellas } from './material/Umbrella'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'
import { UmbrellaOptions } from './UmbrellaOptions'
import { UmbrellaRules } from './UmbrellaRules'

/**
 * This class creates a new Game based on the game options
 */
export class UmbrellaSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, UmbrellaOptions> {
  Rules = UmbrellaRules

  setupMaterial(_options: UmbrellaOptions) {
    this.setupStagesUmbrellas()
  }

  setupStagesUmbrellas() {
    for (const player of this.game.players) {
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          this.material(MaterialType.UmbrellaToken).createItem({
            id: stagesSetup[player][y][x],
            location: { type: LocationType.Stage, player, x, y }
          })
        }
      }
    }
  }

  start() {
    this.startPlayerTurn(RuleId.SlideUmbrella, this.game.players[0])
  }
}

const [R, B, G, Y] = umbrellas

const stagesSetup: Record<PlayerColor, Umbrella[][]> = {
  [PlayerColor.Red]: [
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y]
  ],
  [PlayerColor.Green]: [
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y]
  ],
  [PlayerColor.Yellow]: [
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y]
  ],
  [PlayerColor.Pink]: [
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y],
    [R, B, G, Y]
  ]
}
