import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { CustomerdetailsComponent } from './customers/customerdetails/customerdetails.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { CreatecustomerComponent } from './customers/createcustomer/createcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent,
    CustomerslistComponent,
    CreatecustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
