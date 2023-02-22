import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

public signUpForm: FormGroup;
@Input() accountSettings: any = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.displaySignUpForm();
  }

  public displaySignUpForm() {
    this.signUpForm = this.fb.group({
      email: [''],
      pseudo: [''],
      password: [''],
      confirmPassord: ['']
    })
  }

  public signUp() {
    console.log(this.signUpForm)
  }

}
