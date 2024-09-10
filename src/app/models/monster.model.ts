import { ThisReceiver } from '@angular/compiler';
import { MonsterType } from "../utils/monster.utils";

export class Monster {

  id: number = -1;
  name: string = "Monster";
  image: string = "../../../public/img/pik.png";
	type: MonsterType = MonsterType.ELECTRIC;
 	hp: number = 60;
 	figureCaption: string = "N°001 Monster";

 	attackName: string = "Standard Attack";
	attackStrength: number = 10;
	attackDescription: string = "This is an attack description...";

  copy(): Monster{
    return Object.assign(new Monster(), this);
  }

}