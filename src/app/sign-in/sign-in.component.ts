import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public accountSettings: any = {}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.displaySignInForm();
  }

  public displaySignInForm() {
    this.signInForm = this.fb.group({
      pseudo: [''],
      password: ['']
    })
   
  }

  public signIn() {
    console.log(this.signInForm.value)
  }

}
