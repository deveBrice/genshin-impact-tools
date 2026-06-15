import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
//import { AuthService } from 'src/shared-global/services/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
  
}
