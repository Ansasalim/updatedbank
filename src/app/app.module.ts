import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{MatSortModule} from '@angular/material/sort';
import{ MatTableModule} from '@angular/material/table';
import { BankpageComponent } from './bankpage/bankpage.component'
// import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatSortModule,
    MatTableModule,
    BankpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
