import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { UserService } from "app/service/users.service";

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _router: Router,
              private _http: Http,
              private _userservice: UserService) { }
  user:any;
  
  ngOnInit() {
    this.user = localStorage.getItem("user");
  }
  
  onLogout() {

  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("isAdmin")
  this._router.navigate(['/login']) ; 
    
}

  getUser(){
    this._router.navigate(["user"]);
   
  } 

}
