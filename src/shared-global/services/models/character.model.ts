export class Character {
   name: string;
   picture: string;
   alt: string;
   location: string;
   rarety: string;
   color: string;
   weapon: Weapon;
   element: Element;
}

export class Weapon {
    picture: string;
    alt: string;
}

export class Element {
    picture: string;
    alt: string;
}

/*

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
*/


