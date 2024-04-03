import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.scss'],
  animations: [
    trigger("rotatedState", [
      state("arrow-down", style({ transform: "rotate(0)" })),
      state("arrow-up", style({ transform: "rotate(180deg)" })),
       transition('arrow-up => arrow-down', animate('300ms ease-out')),
       transition("arrow-down => arrow-up", animate("300ms ease-in"))
    ])
  ]
})

export class LocationFilterComponent implements OnInit {

  public idx: number;
  public checked: boolean;
  public arrowState: string = "arrow-down";

  public citiesList: any[] = [
    { name: "Mondstadt", logo: "assets/imgs/cities/mondstadt-logo.png", checked: false },
    { name: "Liyue", logo: "assets/imgs/cities/liyue-logo.png", checked: false },
    { name: "Inazuma", logo: "assets/imgs/cities/inazuma-logo.png", checked: false },
    { name: "Sumeru", logo: "assets/imgs/cities/sumeru-logo.png", checked: false },
    { name: "Fontaine", logo: "assets/imgs/cities/fontaine-logo.png", checked: false }
  ]

  @Output() emitCities: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {}


  public citySelected(index: number) {
     this.idx = index;
     this.citiesList.map((res, i) => {
        if(i === index) {
          this.checked = res.checked
          this.checked = !this.checked
          res.checked = this.checked;
        }
     })

     const citiesResult = this.citiesList.filter((c) => c.checked).map((res) => res.name);
     this.emitCities.emit(citiesResult);
  }

  public rotateArrow() {
    this.arrowState = this.arrowState === "arrow-down" ? "arrow-up" : "arrow-down"
 }

}
