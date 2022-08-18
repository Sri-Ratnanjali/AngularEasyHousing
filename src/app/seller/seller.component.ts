import { Component, OnInit } from '@angular/core';
import { SellerserviceService } from '../services/sellerservice.service';
import { NgForm } from '@angular/forms';
import { Seller } from '../models/seller.model';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})

export class SellerComponent implements OnInit {

  model=new Seller();
    constructor(public sellerservice : SellerserviceService) { }

    ngOnInit(): void {
    }
    onSubmit(myForm:NgForm){    //NgForm
      this.sellerservice.addSeller().subscribe({
        next:(data) => {console.log("Successfully added your details.You will shortly receive an email." ); },
        complete:() => {console.log("Successfully added your details.You will shortly receive an email." ); },
        error:(err) => { console.log("Unable to Create New User" + err);}
        })
      }
    }
