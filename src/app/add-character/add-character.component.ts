import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharacterRequest } from 'src/shared-global/services/request/character.request';
import { AuthService } from 'src/shared-global/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Character } from 'src/shared-global/services/models/character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit, OnDestroy {

  @ViewChild('inputUploadPicture', { static: false }) pRef: ElementRef;
  public addCharacterForm: FormGroup;
  public imageUrl: any;
  public fieldName: string;
  public characterImage: any;
  public weaponsImage: any;
  public elementImage: any;
  public authResult: boolean;
  public subscription: Subscription;
  public file: any;
  public arrayFile: any[] = [];
  public filesToUpload: Array<File> = [];
  public path: string = "";




  public raretiesList: string[] = [
    "★★★★",
    "★★★★★"
  ]

  public locationsList: string[] = [
    "Mondstadts",
    "Liyue",
    "Inazuma",
    "Sumeru"
  ]

  public colorsList: any[] = [
    {name: 'Electro', color: '#9955CC'},
    {name: 'Pyro', color: '#FE925D'},
    {name: 'Hydro', color: '#21E1EB'},
    {name: 'Cryo', color: '#8BD3CF'},
    {name: 'Geo', color: '#E3B342'},
    {name: 'Dendro', color: '#23C18A'}
  ]

  constructor(private fb: FormBuilder, 
              private characterRequest: CharacterRequest,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
    this.displayCharacterForm();
    this.userState();
  }

  public displayCharacterForm() {
    this.addCharacterForm = this.fb.group({
      num: ['', Validators.required],
      name: ['', Validators.required],
      picture: ['', Validators.required],
      alt: ['', Validators.required],
      location: ['', Validators.required],
      rarety: ['', Validators.required],
      color: ['', Validators.required],
      weapon: this.fb.group({
        picture: ['', Validators.required],
        alt: ['', Validators.required]
      }),
      element: this.fb.group({
        picture: ['', Validators.required],
        alt: ['', Validators.required]
      })
    });
  }


  uploadPicture(event, fieldName: string) {
    let reader = new FileReader(); // HTML5 FileReader API
    const file = event.target.files[0];
     this.file = file;
   
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      switch (fieldName) {
        case 'characters':
          reader.onload = () =>{ this.characterImage = reader.result}
          this.addCharacterForm.patchValue({picture: file.name});
          this.characterRequest.uploadPicture('characters', file)
          break;
        case 'weapons':
          reader.onload = () =>{ this.weaponsImage = reader.result}
          this.addCharacterForm.patchValue({ weapon: { picture: file.name, alt: '' }});
          this.characterRequest.uploadPicture('weapons', file)
          break;
        case 'elements':
          reader.onload = () =>{ this.elementImage = reader.result}
          this.addCharacterForm.patchValue({ element: { picture: file.name, alt: '' } });
          this.characterRequest.uploadPicture('elements', file)
          break;
      }
    }
  }


  public editFileName(file: File, path: string): File {
  //  console.log(file)
  let newFile = new File(
    [new Blob()], 
    `${path}/${file.name}`, 
    {
      type: file.type, 
      lastModified:new Date().getTime()
    })
  
     return newFile;
  }

  public checkedUploadPicture(file: File, name: string) {
    
    const newFile = {
      name: name,
      file: file
    }

   const checked = this.arrayFile.map((res: any) => res.name).indexOf(name);
   if(checked === -1) {

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

  public createCharacter() {
    let character = new Character();
    character = this.addCharacterForm.value;
    this.characterRequest.create(character).subscribe();
    this.filesToUpload = [];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
