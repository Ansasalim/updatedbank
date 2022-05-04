import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { BankhttpService } from '../bankhttp.service';

@Component({
  selector: 'app-bankpage',
  templateUrl: './bankpage.component.html',
  styleUrls: ['./bankpage.component.css']
})
export class BankpageComponent implements OnInit {
  aim = "perfect banking partner"
  accno = "account number please"
  acno = ""
  pswd = ""

  // register form model creation
  loginForm = this.fb.group({
    // form array create
    acno: ['' ,[Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    
  })

  constructor(private routerLogin: Router, private ds: BankhttpService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login() {

    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
   
if(this.loginForm.valid){
  // asynchronous call -login
  this.ds.login(acno, pswd) 
//   .subscribe((result:any)=> {
//     if(result ){
//       localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
//       localStorage.setItem('currentUname',JSON.stringify(result.currentUname))
//       localStorage.setItem('token',JSON.stringify(result.token))
// alert(result.message)
// this.routerLogin.navigateByUrl("home")
//     }
//   },
//   (result:any)=>{
//     alert(result.error.message)

//   }
//   )
// }
//     else{
//       alert("invalid form")
//     }
//   }
}
  }
}

