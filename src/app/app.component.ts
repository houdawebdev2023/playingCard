import { PlayingCardComponent } from './playing-card/playing-card.component';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';
import { MonsterService } from './services/monster/monster.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, PlayingCardComponent, SearchBarComponent,NavbarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {

	monsterService = inject(MonsterService);

	monsters = signal<Monster[]>([]);
	search = model('');

	filteredMonsters = computed(() => {
		return this.monsters().filter(monster => monster.name.includes(this.search()));
	})

	constructor() {
		this.monsters.set(this.monsterService.getAll());
	}

	addGenericMonster() {
		const monster = new Monster();
		this.monsterService.add(monster);
		this.monsters.set(this.monsterService.getAll());
	}

}