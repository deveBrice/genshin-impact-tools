import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

  }

 public accountSettings: any = {
    signIn: true,
    signUp: false
  }
   
  public accountManager(signInState: boolean, signUpState: boolean) {
    this.accountSettings = { 
     signIn: signInState,
     signUp: signUpState
    }
  }
  public signIn() {
     this.accountManager(true, false);   
  }

  public signUp() {
    this.accountManager(false, true);  
  }
}
