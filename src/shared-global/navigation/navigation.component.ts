import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sideMenu: any[] = [
    { name: 'Accueil', path: '/home', icon: 'assets/imgs/home-icon.png' },
    { name: 'Personnages', path: '/themes', icon: 'assets/imgs/character-icon.png' },
    { name: 'Armes', path: '/weapons', icon: 'assets/imgs/weapon-icon.png' },
    { name: 'Artefacts', path: '/artefacts', icon: 'assets/imgs/artefact-icon.png' },
    { name: 'Matériaux', path: '/materials', icon: 'assets/imgs/material-icon.png' },
    { name: 'Théorycraft', path: '/theorycraft', icon: 'assets/imgs/teorycraft-icon.png' },
  ];

}
