import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stars-filter',
  templateUrl: './stars-filter.component.html',
  styleUrls: ['./stars-filter.component.scss'],
  animations: [
   
    trigger("rotatedState", [
      state("arrow-down", style({ transform: "rotate(0)" })),
      state("arrow-up", style({ transform: "rotate(180deg)" })),
       transition('arrow-up => arrow-down', animate('300ms ease-out')),
       transition("arrow-down => arrow-up", animate("300ms ease-in"))
    ])
  ]
})

export class StarsFilterComponent implements OnInit {

  public starsFilterForm: FormGroup;
  public isChecked: boolean = false;
  public index: number;
  public starsName: string = 'fourStars';
  public arrowState: string = "arrow-down";

  @Output() public starsCheckboxState: EventEmitter<string[]> = new EventEmitter<string[]>()
  @ViewChildren('select') select: QueryList<ElementRef>;;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.displayStarsFilterForm();
    this.createStarsControl();
    this.starsChange();
  }

  public starsList: any[] = [
    { name: "4", logo: "★★★★☆", checked: false },
    { name: "5", logo: "★★★★★", checked: false }
  ]

  public displayStarsFilterForm() {
    this.starsFilterForm = this.fb.group({
      stars: this.fb.array([])
    })
  }

  public get starsArray() {
    return this.starsFilterForm.get("stars") as FormArray;
  }

  public createStarsControl() {
    this.starsList.filter((s: any) => {
      this.starsArray.push(
        this.fb.group({
          name: s.name,
          logo: s.logo,
          checked: s.checked
        })
      )
    })
    return this.starsArray
  }

  public toggleCheckboxAll(index: number, starsList: any[]) {

  }

  public starsChange() {
    this.starsFilterForm.controls['stars'].valueChanges.subscribe((s) => {
      const starssResult = s.filter((b: any) => b.checked).map((s: any) => s.logo)
      this.starsCheckboxState.emit(starssResult)
    })

  }

  public rotateArrow() {
    this.arrowState = this.arrowState === "arrow-down" ? "arrow-up" : "arrow-down"
 }




}
