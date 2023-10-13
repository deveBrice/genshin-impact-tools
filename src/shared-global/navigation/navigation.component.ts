import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  public sideMenu: any[] = [];

  public authResult: boolean;
  public pseudo: string = '';
  public subscription: Subscription;
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
     this.userState();
  }

  public routerList: any[] = [
    {name: "Accueil", path: "/Accueil", icon: "assets/imgs/home-icon.png"},
    {name: "Personnages", path: "/Personnages", icon: "assets/imgs/character-icon.png"},
    {name: "Armes", path: "/Armes", icon: "assets/imgs/weapon-icon.png"},
    {name: "Artefacts", path: "/Artefacts", icon: "assets/imgs/artefact-icon.png"},
    {name: "Matériaux", path: "/Matériaux", icon: "assets/imgs/material-icon.png"},
    {name: "Théorycraft", path: "/Theorycraft", icon: "assets/imgs/teorycraft-icon.png"}
  ]



 public addCharacter() {
   this.router.navigate(['/Ajouter_un_personnage'])
 }

 public signIn() {
  this.router.navigate(['/Connexion'])
 }

 public userState() {
  this.subscription = this.authService.authChanged.subscribe((auth: boolean) => {
      this.authResult = auth;
      if(auth) {
        this.pseudo = this.authService.pseudo;
      }
  })
}

 public signOut() {
   this.authService.logout();
   this.router.navigate(['/Connexion'])
 }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
