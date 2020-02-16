// vendors
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

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

  nextEnabled: boolean;
  prevEnabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes) {
      return;
    }

    const currentPageChanged = changes.currentPage && changes.currentPage.currentValue !== changes.currentPage.previousValue;
    const totalPagesChanged = changes.totalPages && changes.totalPages.currentValue !== changes.totalPages.previousValue;
    if (currentPageChanged || totalPagesChanged) {
      const currentPage = (changes.currentPage && changes.currentPage.currentValue) || this.currentPage;
      const totalPages = (changes.totalPages && changes.totalPages.currentValue) || this.totalPages;
      this.checkButtonsEnabled(currentPage, totalPages);
    }
  }

  checkButtonsEnabled = (currentPage: number, totalPages: number): void => {
    this.nextEnabled = currentPage < totalPages;
    this.prevEnabled = currentPage > 1;
  }
}
