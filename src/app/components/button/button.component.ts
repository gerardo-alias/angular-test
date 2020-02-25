import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonIconSrc: string;
  @Input() disabled: boolean;
  @Input() transparentContainer: boolean;
  @Input() floating: boolean;
  @Input() onClick: () => any;

  constructor() { }

  get buttonContainerClass(): string {
    let modifiers = 'button__container';

    if (this.floating) {
      modifiers += ' button__container--floating';
    }

    return modifiers;
  }

  get buttonElementClass(): string {
    let modifiers = 'button__element';

    if (this.transparentContainer) {
      modifiers += ' button__element--transparent';
    }

    if (this.floating) {
      modifiers += ' button__element--floating';
    }

    return modifiers;
  }

  ngOnInit(): void {
  }
}
