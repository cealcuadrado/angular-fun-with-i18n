import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  tasksCount = 3;
  genderCode = 0;
  today: number = Date.now();

  company = 'CE2 Corps';
  createdBy = $localize`Created by ${this.company}`;

  constructor() {}

  ngOnInit(): void {}

  /* For Select */
  male() {
    this.genderCode = 0;
  }
  female() {
    this.genderCode = 1;
  }
  other() {
    this.genderCode = 2;
  }
}
