import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-universal-tab',
  templateUrl: './universal-tab.component.html',
  styleUrls: ['./universal-tab.component.scss']
})
export class UniversalTabComponent {

  @Input() tabTitle: string = 'Tab';
  @Input() active: boolean = false;
  @Input() tabNum: number = 0; // Index of this tab within the tabbed-card
  @Input() parentUniqueId: number = 0; // Allows for two tabbed cards within the same page to not interfere with each other

  constructor() {}
}
