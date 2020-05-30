import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService ) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save(){
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
