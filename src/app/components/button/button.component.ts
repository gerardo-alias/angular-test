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
  @Input() onClick: () => any;

  constructor() { }

  get buttonElementClass(): string {
    let modifiers = 'button__element';

    if (this.transparentContainer) {
      modifiers += ' button__element--transparent';
    }

    return modifiers;
  }

  ngOnInit(): void {
  }
}
