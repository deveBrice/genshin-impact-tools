import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  public sideMenu: any[] = [];
  constructor(private router: Router) {
    // console.log(this.router.config)
    //this.sideMenu = this.router.config
  }

  ngOnInit(): void {
   /* this.displayRouting();
    this.addIcons();*/
  }

  public routerList: any[] = [
    {name: "Accueil", path: "/Accueil", icon: "assets/imgs/home-icon.png"},
    {name: "Personnages", path: "/Personnages", icon: "assets/imgs/character-icon.png"},
    {name: "Armes", path: "/Armes", icon: "assets/imgs/weapon-icon.png"},
    {name: "Artefacts", path: "/Artefacts", icon: "assets/imgs/artefact-icon.png"},
    {name: "Matériaux", path: "/Matériaux", icon: "assets/imgs/material-icon.png"},
    {name: "Théorycraft", path: "/Theorycraft", icon: "assets/imgs/teorycraft-icon.png"}
  ]

 /* public displayRouting() {
    const sideMenu: any[] = [];
    this.router.config.filter((res) => {
      if (res.path !== "" && res.path !== "**") {
        sideMenu.push(res)
      }
    })
    this.sideMenu = sideMenu;
  }

 public addIcons() {
  const sideMenu: any[] = [];
  this.iconsList.filter((ai) => {
    this.sideMenu.filter((sm) => {
      if(sm.path === ai.name) {
        sideMenu.push({...sm, icon:ai.icon})
      }
    })
  })
  console.log(this.sideMenu)
  this.sideMenu = sideMenu;
 }*/

 public addCharacter() {
   this.router.navigate(['/Ajouter_un_personnage'])
 }

 public signIn() {
  this.router.navigate(['/Connexion'])
 }



  /*public sideMenu: any[] = [
    { name: 'Accueil', path: '/home', icon: 'assets/imgs/home-icon.png' },
    { name: 'Personnages', path: '/themes', icon: 'assets/imgs/character-icon.png' },
    { name: 'Armes', path: '/weapons', icon: 'assets/imgs/weapon-icon.png' },
    { name: 'Artefacts', path: '/artefacts', icon: 'assets/imgs/artefact-icon.png' },
    { name: 'Matériaux', path: '/materials', icon: 'assets/imgs/material-icon.png' },
    { name: 'Théorycraft', path: '/theorycraft', icon: 'assets/imgs/teorycraft-icon.png' },
  ];*/



}
