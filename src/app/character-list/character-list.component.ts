import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/shared-global/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit, OnDestroy {
  public authResult: boolean;
  public subscription: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userState();
  }

  public charactersList: any[] = [
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
  ]

  public userState() {
    this.subscription = this.authService.authChanged.subscribe((auth: boolean) => {
      console.log(auth)
        this.authResult = auth;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
