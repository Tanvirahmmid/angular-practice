import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Employee} from "../employee";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
employee : Employee []=[];

  title = 'reactive-form';

  reactiveFrom: FormGroup;


  ngOnInit() {
    this.reactiveFrom = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),


    })
  }
OnFormSubmitted(){
    console.log(this.reactiveFrom)
    this.employee.push(this.reactiveFrom.value);

}

}
