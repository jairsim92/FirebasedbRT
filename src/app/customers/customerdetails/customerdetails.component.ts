import { Component, OnInit, Input } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
import { from } from "rxjs";

@Component({
  selector: "app-customerdetails",
  templateUrl: "./customerdetails.component.html",
  styleUrls: ["./customerdetails.component.css"],
})
export class CustomerdetailsComponent implements OnInit {
  @Input() customer: Customer;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  updateActive(isActive: boolean) {
    this.customerService
      .updateCustomer(this.customer.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }
}
