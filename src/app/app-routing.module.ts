import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecustomerComponent} from './customers/createcustomer/createcustomer.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';


const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full'},
  { path: 'clientes', component: CustomerslistComponent},
  { path: 'add', component: CreatecustomerComponent },
  { path: 'crearcli', component: CreatecustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
