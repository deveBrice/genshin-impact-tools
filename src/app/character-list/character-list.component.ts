import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/shared-global/services/auth/auth.service';
import { CharacterRequest } from 'src/shared-global/services/request/character.request';
import { Observable, Subscription, of } from 'rxjs';
import { Character } from 'src/shared-global/services/models/character.model';
import { Router } from '@angular/router';


@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.scss'],
    standalone: false
})

export class CharacterListComponent implements OnInit, OnDestroy {

  /*public authResult: boolean;
  public subscription: Subscription;
  public charactersList: any[] = [];
  public charactersSearch: string;
  public newCharactersList: any[] = [];
  public deleteState: boolean = false;
  public characterId: string;*/

  constructor(public authService: AuthService, 
              private characterRequest: CharacterRequest,
              public router: Router
            ) { }

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
   /* this.subscription = this.authService.authChanged.subscribe((auth: boolean) => {
      console.log(auth)
        this.authResult = auth;
    })*/
  }

  public getCharacterList() {
  /* this.characterRequest.read().subscribe((charactersList: Character[]) => {
      this.charactersList = charactersList;
      this.newCharactersList = charactersList;
    })*/
  }

  public characterSelected(character: Character) {
     this.router.navigate(['Details_du_personnage', character._id])
  }



 public searchResult($event: Observable<string>) {
  //  $event.subscribe(res => this.charactersSearch = res);
 }

 public characterFilterResult($event: any[]) {
 
    //this.newCharactersList = $event;
 }

 public updateCharacters(character: Character) {
    this.router.navigate(['Modifier_un_personnage', character._id])
 }

 public deleteCharacter(character: Character) {
 
   //this.characterId = character._id;
 }

 public accept() {
  //this.characterRequest.delete(this.characterId).subscribe();
 }

 public refuse() {
    //this.characterId = null;
 }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
