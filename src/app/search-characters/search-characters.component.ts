import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.scss']
})

export class SearchCharactersComponent implements OnInit {

  /*public searchCharacter: FormControl;
  public searchCharacter$: Observable<string>;
  public mixedData$: Observable<any[]>
  public charactersData$: Observable<any[]>;*/
  
  @Output()
  public searchResult$: EventEmitter<Observable<string>> = new EventEmitter<Observable<string>>();


  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.charactersFilter();
  }

  public charactersFilter() {
  /*  this.searchCharacter = new FormControl('');
    this.searchCharacter$ = this.searchCharacter.valueChanges.pipe()*/

   /* this.mixedData$ = combineLatest(charactersData$, this.searchCharacter$)
    .pipe(map(([charactersData, searchCharacter]) => charactersData.filter(res => 
      res.name.indexOf(searchCharacter) !== -1
    )))*/
   
   // this.searchResult$.emit(this.searchCharacter$);
  }

}
