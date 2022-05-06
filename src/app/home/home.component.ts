

import { Component, OnInit, Inject, ViewChild,  ElementRef} from '@angular/core';
 import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//  import { MatSort,MatTableDataSource,MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table'
 import {MatSort} from '@angular/material/sort'
 import { MatPaginator } from '@angular/material/paginator';
 import { BankhttpService } from '../bankhttp.service';
// MatCheckboxModule
 export interface User {
    ifsc: string;
    bank_id: string;
    branch: string;
    address: string;
    city: string,
    district: string,
    state: string,
    bank_name: string,
    
  }

  @Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
   styles: [
     `
       table {
       width: 100%;
       }
       th.mat-sort-header-sorted {
       color: black;
       }
     `
     ]
   })
   export class HomeComponent implements OnInit {

    
   selectedRowIndex : any;
   displayedColumns: string[] = ['favorite','ifsc', 'bank_id', 'branch',  
   'city', 'district', 'state', 'bank_name'];
    dataSource: any;
    user: any;

   users: User[] | any;

   @ViewChild('button')  button : ElementRef | any; 
   @ViewChild(MatPaginator) paginator: MatPaginator | any ;
   @ViewChild(MatSort ) sort: MatSort  |any;

   constructor(public bankHttpService : BankhttpService,  public dialog:  MatDialog  ) {
  
}

   ngOnInit() {
       this.bankHttpService.getBankBranches()
        .subscribe((users: User[]) => {

       this.users = users;
       console.log(this.users)
       this.dataSource = new MatTableDataSource(users);
       console.log(this.dataSource)
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     });
     }

      applyFilter(filterValue: string) {
       filterValue = filterValue.trim();
       filterValue = filterValue.toLowerCase(); 
       this.dataSource.filter = filterValue;
       }

       toggle = true;
       status = 'Enable'; 
       selectedUser : any;

       activeSkill(element:any) {
         let user1 = [];
         this.selectedUser=element;
         console.log(element)
         this.bankHttpService.setUserInfoInLocalStorage(element)
         console.log(this.bankHttpService.getUserInfoFromLocalStorage())
       }
      }

    