import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidator } from 'src/shared-global/services/Validators/password-validator.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit, OnChanges {

  @Input() public account: any = {};
  public accountForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private ar: ActivatedRoute, 
              private passwordValidator: PasswordValidator) { }

  ngOnChanges(changes: SimpleChanges): void {

    const accountSetting = changes.account.currentValue;
    switch(accountSetting.name){
      case'signUp':
        this.accountForm = this.fb.group(
          accountSetting.signUpForm, 
          {validator: this.passwordValidator.confirmPasswordValidator("password", "confirmPassword")
        });
        this.inputValidator(accountSetting.signUpForm)
        break;
      case 'signIn':
        this.accountForm = this.fb.group(accountSetting.signInForm);
        this.inputValidator(accountSetting.signInForm)
        break;
    }

  }

  ngOnInit(): void {

  }

  public inputValidator(formControl: any) {
      for(let fc in formControl) {
        this.accountForm.get(fc)?.setValidators([Validators.required]);
        this.accountForm.updateValueAndValidity();
      }
  }

  public signIn() {
    this.router.navigate(['/Connexion']);
  }

  public signUp() {
    this.router.navigate(['/Inscription']); 
  }

  public validateForm() {
    console.log(this.accountForm)
  }
}
