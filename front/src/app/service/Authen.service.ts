import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from "@angular/router";

@Injectable()
export class AuthenService {
   public token: string;
    isAdmin:boolean;
    errorinfo: any;
    user = { isAdmin: true};
     res_body: string;
    constructor(private http: Http,
    private router: Router,) {
        // set token if saved in local storage      
    }


    login(username, password) {
        return this.http.post('http://localhost:1337/api/login',{ username, password})
             .map((response: Response) =>  {
                   if (response.json().token && response.json().isAdmin === true) {
                       localStorage.setItem('token', (response.json().token));
                       localStorage.setItem('user', (response.json().username));
                        console.log(response.json())
                        this.isAdmin=response.json().isAdmin
                        this.router.navigate(['/admin'])  
                    
                   } 
                      
                   else if(response.json().token  && response.json().isAdmin === false) {

                       localStorage.setItem('token',(response.json().token))
                       localStorage.setItem('user', (response.json().username))
                       this.isAdmin=response.json().isAdmin
                         this.router.navigate(['']);


                    }


                   else {
                       this.router.navigate(['/login'])
    
                       
                   }   
             })

                    .catch((err: Response) => {
                        // console.log(err.text())
                        return Observable.throw(err.text())
            
                    });
    }

    logout(): void {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
}