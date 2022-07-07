import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }
}
