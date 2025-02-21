import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,

  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    if (this.query.trim()) {
      this.searchEvent.emit(this.query);
    }
  }
}
