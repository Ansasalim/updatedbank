

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from 
'@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
 providedIn: 'root'
})

export class BankhttpService {
   private baseUrl = " https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
   public myCity = "MUMBAI"

   constructor(private _http : HttpClient) {
       console.log('Bank http service called');
   }

   private handleError(err:HttpErrorResponse){
   console.log('Handle http error');
   console.log(err.message);
  //  return Observable.throw (err.message);
 }
 public getBankBranches(): any {
    let myResponse = this._http.get(this.baseUrl + '?city=' + 
      this.myCity);
    console.log(myResponse);
    return myResponse;
 }

 public getUserInfoFromLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem('fav')||"");
 }

 public setUserInfoInLocalStorage = (data:any)=>{
  localStorage.setItem('fav',JSON.stringify(data))
 }
 

//  Log in page of bank
 login(acno: any, password: any) {

  // rqst body
  const data = {
    acno, password
  }

}
}