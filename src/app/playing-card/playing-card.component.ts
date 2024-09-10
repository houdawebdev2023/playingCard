import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, InputSignal, OnChanges, OnInit, SimpleChanges, computed, input } from '@angular/core';
import { Monster } from '../models/monster.model';
import { MonsterTypeProperties } from '../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})

  
export class PlayingCardComponent  {
  monster = input<Monster>(new Monster());
 	monsterTypeIcon = computed(() => {
 		return MonsterTypeProperties[this.monster().type].imageUrl;
 	});
 	backgroundColor = computed(() => {
 		return MonsterTypeProperties[this.monster().type].color;
 	});


  // ngOnInit(): void {
  //   this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
  //   this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
  // }

  // ngOnChanges(changes: SimpleChanges): void{
  //   if (changes['monster']) {
  //     if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
  //       this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imageUrl;
  //       this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
  //     }
  //   }
  // }

  // constructor() {
  //   this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imageUrl;
  //   this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['monster']) {
  //     if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
  //       this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imageUrl;
  //       this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
  //     }
  //   }
  // }
}
