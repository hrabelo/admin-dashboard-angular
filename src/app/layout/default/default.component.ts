import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {
  sideBarOpened = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar(event: any) {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
