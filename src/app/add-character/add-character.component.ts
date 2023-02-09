import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  @ViewChild('inputUploadPicture', { static: false }) pRef: ElementRef;
  public addCharacterForm: FormGroup;
  public imageUrl: any;
  public fieldName: string;
  public characterImage: any;

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.displayCharacterForm();
  }

  public displayCharacterForm() {
    this.addCharacterForm = this.fb.group({
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

  public characterPicture(uploadCharacterPicture, $event) {
    uploadCharacterPicture.click();
    $event.stopPropagation();
  }

  public weaponPicture(inputUploadPicture, $event) {
    inputUploadPicture.click();
    $event.stopPropagation();
  }

  public elementPicture(uploadElementPicture, $event) {
    uploadElementPicture.click();
    $event.stopPropagation();
  }

  uploadPicture(event, fieldName: string) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      switch (fieldName) {
        case 'character':
          this.setPicture(reader, { picture: file.name })
          break;
        case 'weapon':
          this.setPicture(reader, { weapon: { picture: file.name, alt: '' } })
          break;
        case 'element':
          this.setPicture(reader, { element: { picture: file.name, alt: '' } })
          break;
      }
    }
  }

  public setPicture(reader: FileReader, data: any) {
    reader.onload = () => {
      this.imageUrl = reader.result;
      if(data.picture) {
        this.characterImage = reader.result;
      }
      this.addCharacterForm.patchValue(
        data
      );
    };
  }

  public createCharacter() {
    console.log(this.addCharacterForm)
  }
}
