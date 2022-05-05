import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{MatSortModule} from '@angular/material/sort';
import{ MatTableModule} from '@angular/material/table';
import { BankpageComponent } from './bankpage/bankpage.component'
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankpageComponent,
    ReactiveFormsModule
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
 MatSortModule,
 MatTableModule,
 BankpageComponent,
 MatPaginatorModule,
 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
