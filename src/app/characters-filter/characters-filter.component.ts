import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'app-characters-filter',
    templateUrl: './characters-filter.component.html',
    styleUrls: ['./characters-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class CharactersFilterComponent implements OnInit, AfterViewInit {

  public _characters: any[] = [];
  public filterState: boolean = false;
  public characters: any[] = [];

  /*public elementsCheckbox: any[];
  public multiFilterForm: FormGroup;*/
  public activeFilter: any = {}
  public filtersState: boolean = false;
  public paddingState: boolean = false;
  public filterDisplayManager: boolean = true;


  @Input()
  public set charactersList(characters: any[]) {
    this._characters = characters;
  }

  public get charactersList() {
    return this._characters;
  }

  @Input()
  public set charactersSearch(search: string) {
    if (search || search === '') {
      this.activeFilter['name'] = search;
      this.filtersState = Object.is(this.activeFilter.name, '');
      this.removeFilter(this.filtersState, 'name');
    }
  }

  @Output() public characterFilterResult: EventEmitter<any[]> = new EventEmitter<any[]>()
  //@ViewChild('scroll') input: ElementRef;


  constructor(public fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.displayMultiFilter();
  }

  ngAfterViewInit() {
   /* if(this.input.nativeElement.clientHeight < this.input.nativeElement.scrollHeight) {
       this.paddingState = true;
    }
    this.cdr.detectChanges();*/
  }

  public displayMultiFilter() {
    /*this.multiFilterForm = this.fb.group({
      element: this.fb.array([])
    })*/

  }

  /*public elementCheckboxState($event) {

    this.activeFilter['element'] = $event;

    this.filtersState = $event.length !== 0 ? false : true;

    this.removeFilter(this.filtersState, 'element')
  }*/

  public starsCheckboxState($event: any[]) {
    this.activeFilter['rarety'] = $event;

    this.filtersState = $event.length !== 0 ? false : true;

    this.removeFilter(this.filtersState, 'rarety')
  }

  public emitweapons($event: any[]) {
    this.activeFilter['weapon'] = $event;

    this.filtersState = $event.length !== 0 ? false : true;

    this.removeFilter(this.filtersState, 'weapon')
  }

  public emitCities($event: any[]) {
    this.activeFilter['location'] = $event;

    this.filtersState = $event.length !== 0 ? false : true;

    this.removeFilter(this.filtersState, 'location')
  }

  public typeChecked(value: any): string {
    let type = '';
    if (Array.isArray(value)) {
      return type = 'array';
    } else {
      return typeof value
    }
  }

  public removeFilter(filtersState: boolean, currentFilter: string) {
    if (filtersState) {
      delete this.activeFilter[currentFilter]
    }
    console.log(this.activeFilter)
    this.filteredCharacter();
  }

  public filteredCharacter() {
    let characters = [...this._characters]
     console.log(this.activeFilter)
    let newCharacterList = characters.filter(obj =>
      
      Object.entries<any>(this.activeFilter).every(([prop, find]) => {
        console.log(prop)
        console.log(find)
        return this.searchText(find, obj, prop) &&
          this.searchArray(find, obj, prop)
      }
        // const typeResult = this.typeChecked(find)
        /*this.typeChecked(find) === "array" ? find.includes(obj[prop]):
        obj[prop].includes(find)*/
      ));
      console.log(newCharacterList)
      this.characterFilterResult.emit(newCharacterList);
  }


  public searchText(char: any, obj: any, key: any): boolean {
    let result: boolean = false;
    if (typeof char === "string") {
      result = obj[key].includes(char)
    }
    console.log(result)
    return result
  }

  public searchArray(array: any, obj: any, key: any): boolean {
    if (Array.isArray(array)) {
      return array.includes(obj[key].toLowerCase())
    }
    return array
  }
}
