import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchComponent, ResultsComponent,MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  results: any[] = [];

  updateResults(results: any[]): void {
    this.results = results;
  }
}
