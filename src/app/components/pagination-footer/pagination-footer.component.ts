// vendors
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.scss']
})
export class PaginationFooterComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() onClickPrev: () => void;
  @Input() onClickNext: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  get nextEnabled(): boolean {
    return this.currentPage < this.totalPages;
  }

  get prevEnabled(): boolean {
    return this.currentPage > 1;
  }
}
