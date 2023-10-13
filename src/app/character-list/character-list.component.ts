import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/shared-global/services/auth/auth.service';
import { CharacterRequest } from 'src/shared-global/services/request/character.request';
import { Subscription } from 'rxjs';
import { Character } from 'src/shared-global/services/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit, OnDestroy {

  public authResult: boolean;
  public subscription: Subscription;
  public charactersList: any[];

  constructor(public authService: AuthService, private characterRequest: CharacterRequest) { }

  ngOnInit(): void {
    this.userState();
    this.getCharacterList();
  //  this.getOneCharacter();
  }

  /*public charactersList: any[] = [
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      color: "#9955CC",
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Arme à une main'
      },

      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Element Electro'
      }
    },
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Arme à une main'
      },
      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Image element Electro'
      }
    },
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Image Arme à une main'
      },
      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Image element Electro'
      }
    },
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Image Arme à une main'
      },

      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Image element Electro'
      }
    },
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Image Arme à une main'
      },
      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Image element Electro'
      }
    },
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Image Arme à une main'
      },

      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Image element Electro'
      }
    },
    {
      name: 'Keqing', 
      picture: 'assets/imgs/keqing-picture.png',
      alt: "Image Keqing",
      location: 'Liyue',
      rarety: '★★★★★',
      weapon: {
        picture: 'assets/imgs/sword-class-picture.png',
        alt: 'Image Arme à une main'
      },

      element:{
        picture: 'assets/imgs/electro-element.png',
        alt: 'Image element Electro'
      }
    },
  ]*/

  public userState() {
    this.subscription = this.authService.authChanged.subscribe((auth: boolean) => {
      console.log(auth)
        this.authResult = auth;
    })
  }

  public getCharacterList() {
    this.characterRequest.read().subscribe((charactersList: Character[]) => {
      this.charactersList = charactersList;
      console.log(this.charactersList)
    })
  }

  public getOneCharacter() {
    this.characterRequest.readone(this.authService.userId).subscribe((ro: any) => {
      console.log(ro)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
