import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/shared-global/services/auth/auth.service';
import { CharacterRequest } from 'src/shared-global/services/request/character.request';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-character',
    templateUrl: './update-character.component.html',
    styleUrls: ['./update-character.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UpdateCharacterComponent implements OnInit {
  public subscription: Subscription;
  public authResult: boolean;
  public updateCharacterData: any;
  
  constructor(private authService: AuthService,
    private characterRequest: CharacterRequest,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOneCharacter();
    this.userState();
  }

  

  public userState() {
    this.subscription = this.authService.authChanged.subscribe((auth: boolean) => {
      console.log(auth)
        this.authResult = auth;
    })
  }

  public getOneCharacter() {
   const paramId = this.ar.snapshot.paramMap.get('id');

    this.characterRequest.readone(paramId).subscribe((ro: any) => {
    
      this.updateCharacterData = {
        requestType: "update",
        data: ro,
        id: paramId
      }
    })
  }

}
