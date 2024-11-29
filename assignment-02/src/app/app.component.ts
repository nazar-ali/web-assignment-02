import { Component, OnInit } from '@angular/core';
import { BbcService} from './bbc-end-point.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf, NgForOf], // Ensure these are imported
})
export class AppComponent implements OnInit {
  headlines: string[] = [];
  constructor(private bbcScraperService: BbcService) {}
  ngOnInit(): void {
    this.bbcScraperService?.fetchBbcHeadlines()?.subscribe({
      next: (data) => {
        this.headlines = data?.headlines;
        console.error(data?.headlines);
      },
      error:(error) => {
        console.error('Error fetching headlines:', error);
      }
    });
  }
}
