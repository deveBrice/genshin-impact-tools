import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharacterRequest } from 'src/shared-global/services/request/character.request';
import { AuthService } from 'src/shared-global/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Character } from 'src/shared-global/services/models/character.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters-manager-list',
  templateUrl: './characters-manager-list.component.html',
  styleUrls: ['./characters-manager-list.component.scss']
})
export class CharactersManagerListComponent implements OnInit {

  @ViewChild('inputUploadPicture', { static: false }) pRef: ElementRef;
  public addCharacterForm: FormGroup;
  public charactersManagerForm: FormGroup;
  public imageUrl: any;
  public fieldName: string;
  public currentCharacter: any;
  public weaponsImage: any;
  public elementImage: any;
  public authResult: boolean;
  public subscription: Subscription;
  public file: any;
  public arrayFile: any[] = [];
  public filesToUpload: Array<File> = [];
  public path: string = "";
  public requestTitle: string = "";
  public buttonTitle: string = "";
  public requestData: any;
  public filesSettings: any = {files: [], fieldName: []}


  public raretiesList: string[] = [
    "★★★★☆",
    "★★★★★"
  ]

  public locationsList: string[] = [
    "Mondstadt",
    "Liyue",
    "Inazuma",
    "Sumeru",
    "Fontaine",
    "Snezhnaya",
    "Autre monde"
  ]

  public colorsList: any[] = [
    { name: 'Anemo', color: '#74C2A8' },
    { name: 'Electro', color: '#9955CC' },
    { name: 'Pyro', color: '#FE925D' },
    { name: 'Hydro', color: '#21E1EB' },
    { name: 'Cryo', color: '#8BD3CF' },
    { name: 'Geo', color: '#E3B342' },
    { name: 'Dendro', color: '#23C18A' }
  ]

  @Input() public set charactersForm(requestData: any) {
  
    if(requestData) {
      this.requestData = requestData;
      this.requestManager(requestData);
    }
  }


  constructor(
    private fb: FormBuilder,
    private characterRequest: CharacterRequest,
    private authService: AuthService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.userState();
    this.displayCharacterForm();
  }

    public displayCharacterForm() {
      this.charactersManagerForm = this.fb.group({
        num: [''],
        name: ['', Validators.required],
        element: ['', Validators.required],
        characterPicture: this.fb.group({
          url: ['', Validators.required],
          alt: ['', Validators.required]
        }),
        weapon: ['', Validators.required],
        rarety: ['', Validators.required],
        region: ['', Validators.required],
        color: ['', Validators.required],
        weaponPicture: this.fb.group({
          url: ['', Validators.required],
          alt: ['', Validators.required]
        }),
        elementPicture: this.fb.group({
          url: ['', Validators.required],
          alt: ['', Validators.required]
        })
      });
    }

    
  public requestManager(requestData: any) {
    console.log(requestData.requestType)
    switch (requestData.requestType) {
      case "add":
        this.requestTitle = "Ajouter un personnage";
        this.buttonTitle = "Création";
        break;
      case "update":
        this.requestTitle = "Modifier le personnage";
        this.charactersManagerForm.patchValue(requestData.data);
        this.currentCharacter = requestData.data.characterPicture.url;
        this.buttonTitle = "Modifier";
      default:
        break;
    }
  }


  uploadPicture(event, fieldName: string) {
    let reader = new FileReader(); // HTML5 FileReader API
    const file: File = event.target.files[0];
    this.file = file;
    const pictureList = {
      character: null,
      weapon: null,
      element: null
    }
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      switch (fieldName) {
        case 'characters':
          this.charactersManagerForm.patchValue({ characterPicture: { url: file.name, alt: '' } });
          this.filesSettingUpdate(file, fieldName)
          reader.onload = () => { this.currentCharacter = reader.result }
          break;
        case 'weapons':
          this.charactersManagerForm.patchValue({ weaponPicture: { url: file.name, alt: '' } });
          this.filesSettingUpdate(file, fieldName)
          break;
        case 'elements':
          this.charactersManagerForm.patchValue({ elementPicture: { url: file.name, alt: '' } });
          this.filesSettingUpdate(file, fieldName)
          break;
      }
    }
  }

  public filesSettingUpdate(file: File, fieldName: string) {
    
    const check = this.filesSettings.fieldName.map((res: string) => res).indexOf(fieldName)
    if(check === - 1) {
      const cutex = file.name.substring(0, 4)
      
      console.log(file)
      this.filesSettings.files.push(file)
      this.filesSettings.fieldName.push(fieldName)
    } else {
      this.filesSettings.files.splice(check, 1, file)
      this.filesSettings.fieldName.splice(check, 1, fieldName)
    }
  }




  public editFileName(file: File, path: string): File {
    //  console.log(file)
    let newFile = new File(
      [new Blob()],
      `${path}/${file.name}`,
      {
        type: file.type,
        lastModified: new Date().getTime()
      })

    return newFile;
  }

  public checkedUploadPicture(file: File, name: string) {

    const newFile = {
      name: name,
      file: file
    }

    const checked = this.arrayFile.map((res: any) => res.name).indexOf(name);
    if (checked === -1) {

      this.arrayFile.push(newFile);
    }
    this.file = newFile;
  }




  public userState() {
    this.subscription = this.authService.authChanged.subscribe((auth: boolean) => {
      console.log(auth)
      this.authResult = auth;
    })
  }

  public characterManagerSubmit() {
    let character = new Character();
    character = this.charactersManagerForm.value;
    switch (this.requestData.requestType) {
      case "add":
        console.log(character)
        this.characterRequest.create(character, this.filesSettings).subscribe();
       // this.characterRequest.uploadPicture(this.filesSettings);
        break;
        case "update":
        this.characterRequest.update(character, this.requestData.id).subscribe();
        break;
    }
    
    this.filesToUpload = [];
   // this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
