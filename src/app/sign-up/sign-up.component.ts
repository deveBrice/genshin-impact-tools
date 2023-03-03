import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

public signUpForm: any = {};
@Input() accountSettings: any = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.displaySignUpForm();
  }

  public  displaySignUpForm() {
    const signUpSetting = ({
        name: 'signUp',
        title: 'Inscription',
        signUpForm: {
          email: [''],
          pseudo: [''],
          password: [''],
          confirmPassword: ['']
        },
        textButton: 'Valider'
    })
    this.signUpForm = signUpSetting;
  }

  public signUp() {
    const password = this.signUpForm.get('password').value;
    const confirmPassord = this.signUpForm.get('confirmPassord').value
    console.log(this.signUpForm)
    if(password === confirmPassord) {
  
    }
  }

}
