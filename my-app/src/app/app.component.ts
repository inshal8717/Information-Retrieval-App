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
  results: { title: string; description: string }[] = [];
  loading: boolean = false;

  handleSearch(query: string) {
    this.loading = true;

    // Simulate an API call
    setTimeout(() => {
      this.results = [
        { title: 'Result 1', description: `This is the first result for "${query}"` },
        { title: 'Result 2', description: `This is the second result for "${query}"` },
      ];
      this.loading = false;
    }, 2000);
  }
}
