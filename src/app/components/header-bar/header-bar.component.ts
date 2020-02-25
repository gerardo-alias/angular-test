// vendors
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Input() text: string;
  @Input() onClickGoBack: () => void;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  handleGoBack = (): void => {
    this.location.back();
  }
}
