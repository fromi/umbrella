import { FlexLocator } from '@gamepark/react-game';
import { MaterialType } from '@gamepark/umbrella/material/MaterialType';
import { umbrellaTokenDescription } from '../material/UmbrellaTokenDescription';

class CentralWaitingZoneLocator extends FlexLocator{

    // Parent 
    parentItemType = MaterialType.CentralWaitingZone;
    positionOnParent = {
        x : 0,
        y: 0
    }

    // Espace entre deux Objet dans une ligne
    gap = { 
        x: umbrellaTokenDescription.width + 0.5,
    }

    // Espace entre deux lignes
    lineGap =  {
        y: umbrellaTokenDescription.height + 0.5,
    }

    // Nombre d'élements par lignes
    lineSize = 5;

}

export const centralWaitingZoneLocator = new CentralWaitingZoneLocator();