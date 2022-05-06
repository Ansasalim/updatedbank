import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BankpageComponent } from './bankpage/bankpage.component';
import{MatSortModule} from '@angular/material/sort';
import{ MatTableDataSource} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatButtonModule } from '@angular/material/button';
// import {
//   MatSort,
//   MatTableDataSource,
//   MatPaginator

// } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
   MatSortModule,
   MatTableDataSource,
   MatPaginatorModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
