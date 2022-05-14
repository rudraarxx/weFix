import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm : FormGroup | any;


  constructor() { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      'email': new FormControl(),
      'password' : new FormControl()
    })
  }
  onSubmit(){
    console.log(this.signinForm.value)
  }

}
