import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  async navTabs(){
    this.route.navigateByUrl("/app/tabs/tab1:tab1")
  }

  ngOnInit() {
  }

  signin(){

  }

  signup(){
    
  }
}
