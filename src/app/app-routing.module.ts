import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { NavigationComponent } from 'src/shared-global/navigation/navigation.component';
import { SharedGlobalModule } from 'src/shared-global/shared-global.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddCharacterComponent } from './add-character/add-character.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersFilterComponent } from './characters-filter/characters-filter.component';
import { SearchCharactersComponent } from './search-characters/search-characters.component';
import { ElementsFilterComponent } from './characters-filter/elements-filter/elements-filter.component';
import { FirstLetterUppercase } from './characters-filter/elements-filter/first-letter-uppercase.pipe';
import { StarsFilterComponent } from './characters-filter/stars-filter/stars-filter.component';
import { WeaponFilterComponent } from './weapon-filter/weapon-filter.component';
import { LocationFilterComponent } from './location-filter/location-filter.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';
import { CharactersManagerListComponent } from './characters-manager-list/characters-manager-list.component';
import { RGBA } from 'src/shared-global/pipes/rgba.pipe';

const routes: Routes = [
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  {path: "Accueil", component: HomeComponent},
  {path: "Personnages", component: CharacterListComponent},
  {path: "Armes", component: HomeComponent},
  {path: "Artefacts", component: HomeComponent},
  {path: "Matériaux", component: HomeComponent},
  {path: "Théorycraft", component: HomeComponent},
  {path: "Ajouter_un_personnage", component: AddCharacterComponent },
  {path: "Modifier_un_personnage/:id", component: UpdateCharacterComponent },
  {path: "Inscription", component: SignUpComponent},
  {path: "Connexion", component: SignInComponent},
  {path: "Account", component: AccountComponent},
  {path: '**', redirectTo: 'Accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [
    SharedGlobalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [NavigationComponent, 
                 HomeComponent, 
                 CharacterListComponent, 
                 AddCharacterComponent, 
                 UpdateCharacterComponent,
                 SignUpComponent, 
                 SignInComponent,
                 AccountComponent,
                 CharactersFilterComponent,
                 SearchCharactersComponent,
                 ElementsFilterComponent,
                 FirstLetterUppercase,
                 StarsFilterComponent,
                 WeaponFilterComponent,
                 LocationFilterComponent,
                 CharactersManagerListComponent,
                 RGBA
                ],
  exports: [RouterModule, 
            NavigationComponent, 
            SharedGlobalModule
           ],
           providers: []

})


export class AppRoutingModule { }
