import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-regular',
  templateUrl: './sidebar-regular.component.html',
  styleUrls: ['./sidebar-regular.component.scss']
})
export class SidebarRegularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public logout(){
    sessionStorage.removeItem("token");
  }
}
