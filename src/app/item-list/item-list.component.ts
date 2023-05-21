import { Component, Input } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  listItems = ITEMS;
  @Input() items: Item[] = [];

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/