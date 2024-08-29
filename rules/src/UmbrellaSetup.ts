import { MaterialGameSetup } from '@gamepark/rules-api'
import { UmbrellaOptions } from './UmbrellaOptions'
import { UmbrellaRules } from './UmbrellaRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class UmbrellaSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, UmbrellaOptions> {
  Rules = UmbrellaRules

  setupMaterial(_options: UmbrellaOptions) {
  }

  start() {
    this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0])
  }
}