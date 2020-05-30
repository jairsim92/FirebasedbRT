import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-customerslist",
  templateUrl: "./customerslist.component.html",
  styleUrls: ["./customerslist.component.css"],
})
export class CustomerslistComponent implements OnInit {
  customers: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.customerService.getCustomerList().snapshotChanges()
      .pipe(map(changes => changes.map( c =>
          ({ key: c.payload.key, ...c.payload.val() })
            )
          )
        ).subscribe(customers => {
          this.customers = customers;
        });
  }

  deleteCustomers(){
    this.customerService.deleteAll().catch(err => console.log(err));
  }
}
