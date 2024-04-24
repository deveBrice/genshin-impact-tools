export class Character {
  _id?: string;
   num?: number;
   name: string;
   element: string;
   characterPicture: CharacterPicture;
   weapon: string;
   rarety: string;
   location: string;
   color: string;
   weaponPicture: WeaponPicture;
   elementPicture: ElementPicture;
}

export class CharacterPicture {
  url: string;
  alt: string;
}

export class WeaponPicture {
  url: string;
  alt: string;
}

export class ElementPicture {
  url: string;
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


