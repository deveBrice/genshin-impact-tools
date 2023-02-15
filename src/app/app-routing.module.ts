import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { NavigationComponent } from 'src/shared-global/navigation/navigation.component';
import { SharedGlobalModule } from 'src/shared-global/shared-global.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddCharacterComponent } from './add-character/add-character.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  {path: "Accueil", component: HomeComponent},
  {path: "Personnages", component: CharacterListComponent},
  {path: "Armes", component: HomeComponent},
  {path: "Artefacts", component: HomeComponent},
  {path: "Matériaux", component: HomeComponent},
  {path: "Théorycraft", component: HomeComponent},
  {path: "Ajouter_un_personnage", component: AddCharacterComponent },
  {path: "Connexion", component: SignUpComponent},
  {path: '**', redirectTo: 'Accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [
    SharedGlobalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [NavigationComponent, HomeComponent, CharacterListComponent, AddCharacterComponent, SignUpComponent],
  exports: [RouterModule, NavigationComponent, SharedGlobalModule]
})


export class AppRoutingModule { }
