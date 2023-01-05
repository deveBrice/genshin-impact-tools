import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public charactersList: any[] = [
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
}
