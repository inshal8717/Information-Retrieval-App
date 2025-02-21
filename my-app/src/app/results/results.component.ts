import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule,CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  @Input() results: { title: string; description: string }[] = [];
  @Input() loading: boolean = false;
}
