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
    this.setupStagesUmbrellas();
    this.setupPersonalWaitingZoneUmbrellas();
    this.setupSideWaitingZoneSpotUmbrellas();
    this.setupCentralWaitingZoneSpotUmbrellas();
  }

  setupStagesUmbrellas() {
    for (const player of this.game.players) {
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          this.material(MaterialType.UmbrellaToken).createItem({
            id: stagesSetup[player][y][x],
            location: { type: LocationType.Stage, player, x, y }
          });
        }
      }
    }
  }

  // Zone d'attente de chaque joueur
  setupPersonalWaitingZoneUmbrellas(){

  }

  // Zone d'attente entre les joueurs
  setupSideWaitingZoneSpotUmbrellas(){

  }

  // Zone d'attete centrale
  setupCentralWaitingZoneSpotUmbrellas(){
    for(const umbrella of umbrellas){
      this.material(MaterialType.UmbrellaToken).createItem({
        id: umbrella,
        location: { type: LocationType.CentralWaitingZone}
      });
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
    [Y, R, B, G],
    [G, Y, R, B],
    [B, G, Y, R]
  ],
  [PlayerColor.Green]: [
    [Y, R, G, B],
    [R, B, Y, G],
    [G, Y, B, R],
    [B, G, R, Y]
  ],
  [PlayerColor.Yellow]: [
    [B, R, Y, G],
    [Y, B, G, R],
    [R, G, B, Y],
    [G, Y, R, B]
  ],
  [PlayerColor.Pink]: [
    [G, Y, R, B],
    [Y, R, B, G],
    [R, B, G, Y],
    [B, G, Y, R]
  ]
}
