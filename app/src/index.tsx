/** @jsxImportSource @emotion/react */
import { UmbrellaOptionsSpec } from '@gamepark/umbrella/UmbrellaOptions'
import { UmbrellaRules } from '@gamepark/umbrella/UmbrellaRules'
import { UmbrellaSetup } from '@gamepark/umbrella/UmbrellaSetup'
import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="umbrella" Rules={UmbrellaRules} optionsSpec={UmbrellaOptionsSpec} GameSetup={UmbrellaSetup}
                  material={Material} locators={Locators} animations={new MaterialGameAnimations()}>
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
