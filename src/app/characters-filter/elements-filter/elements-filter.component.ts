import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-elements-filter',
  templateUrl: './elements-filter.component.html',
  styleUrls: ['./elements-filter.component.scss'],
  animations: [
   
    trigger("rotatedState", [
      state("arrow-down", style({ transform: "rotate(0)" })),
      state("arrow-up", style({ transform: "rotate(180deg)" })),
       transition('arrow-up => arrow-down', animate('300ms ease-out')),
       transition("arrow-down => arrow-up", animate("300ms ease-in"))
    ])
  ]
})

export class ElementsFilterComponent implements OnInit {

  @Input() public characterList: any[];
  @Output() public elementCheckboxState: EventEmitter<FormArray<any>> = new EventEmitter<FormArray<any>>(); 

  public elementFilterForm: FormGroup;
  public elements: string[] = [];
  public elementToggle: boolean = true;
  public arrowState: string = "arrow-down";


  public elementsList: any[] = [
   {name: "pyro", checked: false},
   {name: "hydro", checked: false},
   {name: "electro", checked: false},
   {name: "cryo", checked: false},
   {name: "anemo", checked: false},
   {name: "geo", checked: false},
   {name: "dendro", checked: false}
  ]

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
     this.displayCharacterFilter();
     this.createElementForm();
     this.elementCheckboxChange();
  }

  public toggleFilter() {
    this.elementToggle = !this.elementToggle;
   
  }

  public displayCharacterFilter() {
     this.elementFilterForm = this.fb.group({
        elements: this.fb.array([])
     })
  }


  public get elementsArray(): FormArray {
    return this.elementFilterForm.get('elements') as FormArray
  }

  public createElementForm() {
   this.elementsList.filter((res: any) => {
     this.elementsArray.push(
       this.fb.group({
         name: res.name,
         checked: res.checked,
       })
     );
   });
   return this.elementsArray;
 }

  public elementCheckboxChange() {
  //  this.elementCheckboxState.emit(this.elementsArray);
    this.elementsArray.valueChanges.subscribe((res) => {
 
    const elementsResult = res.filter((b: any) => b.checked).map((s: any) => s.name)
  
      this.elementCheckboxState.emit(elementsResult);
    })
  }

  public rotateArrow() {
     this.arrowState = this.arrowState === "arrow-down" ? "arrow-up" : "arrow-down"
  }
}
