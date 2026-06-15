import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'app-weapon-filter',
    templateUrl: './weapon-filter.component.html',
    styleUrls: ['./weapon-filter.component.scss'],
    animations: [
        trigger("rotatedState", [
            state("arrow-down", style({ transform: "rotate(0)" })),
            state("arrow-up", style({ transform: "rotate(180deg)" })),
            transition('arrow-up => arrow-down', animate('300ms ease-out')),
            transition("arrow-down => arrow-up", animate("300ms ease-in"))
        ])
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class WeaponFilterComponent implements OnInit {

 /* public weaponFilterForm: FormGroup;
  public idx: number;
  public checked: boolean;
  public arrowState: string = "arrow-down";

  public weaponsList: any[] = [
    { name: "Épée à une main", logo: "assets/imgs/weapons/sword-logo.png", checked: false },
    { name: "Catalyseur", logo: "assets/imgs/weapons/catalyst-logo.png", checked: false },
    { name: "Épée à deux main", logo: "assets/imgs/weapons/claymore-logo.png", checked: false },
    { name: "Lance", logo: "assets/imgs/weapons/polearm-logo.png", checked: false },
    { name: "Arc", logo: "assets/imgs/weapons/bow-logo.png", checked: false }
  ]

  @Output() emitweapons: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private fb: FormBuilder) { }*/

  ngOnInit(): void {
    /*this.displayWeaponForm();
    this.createWeaponsControl();*/
  }

 /* public displayWeaponForm() {
     this.weaponFilterForm = this.fb.group({
       weapons: this.fb.array([])
     })
  }

  public get weaponsArray() {
    return this.weaponFilterForm.get("weapons") as FormArray;
  }

  public createWeaponsControl() {
    this.weaponsList.filter((w: any) => {
      this.weaponsArray.push(
        this.fb.group({
          name: w.name,
          logo: w.logo,
          checked: w.checked
        })
      )
    })
    return this.weaponsArray
  }

  public weaponSelect(index: number, checked: boolean) {
     this.idx = index;
     this.weaponsList.map((res, i) => {
        if(i === index) {
          this.checked = res.checked
          this.checked = !this.checked
          res.checked = this.checked;
        }
     })

     const weaponsResult = this.weaponsList.filter((w) => w.checked).map((res) => res.name.toLowerCase());
     this.emitweapons.emit(weaponsResult);
  }

  public rotateArrow() {
    this.arrowState = this.arrowState === "arrow-down" ? "arrow-up" : "arrow-down"
 }*/
}
