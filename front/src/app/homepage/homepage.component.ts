import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { UserService } from "app/service/users.service";
import {AuthenService} from '../service/index';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _router: Router,
              private _http: Http,
              private _userservice: UserService,
              private authenservice: AuthenService) { }
  user:any;
  note = localStorage.note;
  
  
  ngOnInit() {
    this.user = localStorage.getItem("user");
    
  }
  
  onLogout() {

  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("note");
  this._router.navigate(['/login']); 
    
}

  getUser(){
    this._router.navigate(["user"]);
   
  } 

}
