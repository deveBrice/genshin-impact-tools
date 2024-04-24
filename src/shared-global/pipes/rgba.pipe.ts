import {PipeTransform,Pipe} from '@angular/core'

@Pipe({
  name:'rgba'
})

export class RGBA implements PipeTransform{

    transform(value: any, ...args: any[]) {
        console.log(value)
    }
}