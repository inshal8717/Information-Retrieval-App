import { Component, EventEmitter, Output,inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,

  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent{

  query: string = '';
  @Output() searchEvent = new EventEmitter<any[]>();

  // Use Angular's inject() to get HttpClient
  private http = inject(HttpClient);

  onSearch(): void {
    if (this.query.trim()) {
      this.search(this.query).subscribe({
        next: (results: any[]) => {
          console.log('Search results:', results);
          this.searchEvent.emit(results);
        },
        error: (error: any) => {
          console.error('Error during search:', error);
        }
      });
    }
  }

  private search(query: string): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/api/search', { query });
  }
}
