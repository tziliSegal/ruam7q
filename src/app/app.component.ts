import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemImageUrl = '../assets/phone.svg';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';

  currentItems = [{
    id: 21,
    name: 'phone'
  }];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/