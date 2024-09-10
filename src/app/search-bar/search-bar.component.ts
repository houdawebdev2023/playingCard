import { Component, model,  output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchButtonClicked = output<void>({
    alias:'submit'
  });

    search = model('Initial');
  // @Input() search = 'Initial';
  // @Output() searchChange = new EventEmitter<string>();

    // updateSearch(value:string){
    //   this.search.set(value);
    // }

  // @Output('submit') searchButtonClicked = new EventEmitter();

  searchClick() {
    this.searchButtonClicked.emit();
  }

}
