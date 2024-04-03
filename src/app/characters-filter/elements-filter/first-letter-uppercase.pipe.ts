import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'firstLetterUppercase'
})

export class FirstLetterUppercase implements PipeTransform {
   transform(value: any, ...args: any[]) {
    return value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();
   }
}