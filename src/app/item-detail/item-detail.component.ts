import { Component, OnInit, Input } from '@angular/core';
// import { Item } from '../item';
// import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  @Input() childItem = '';

  // items = ITEMS;


  currentItem = 'bananas in boxes';

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/