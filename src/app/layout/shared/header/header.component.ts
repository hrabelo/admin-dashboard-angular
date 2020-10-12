import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName: string;

  @Output() toggleSideBarEventEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.appName = environment.appName;
  }

  toggleSideBar(){
    this.toggleSideBarEventEmitter.emit();

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 200);
  }

}
