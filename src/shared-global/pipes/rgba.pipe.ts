import {PipeTransform,Pipe} from '@angular/core'

@Pipe({
    name: 'rgba',
    standalone: false
})

export class RGBA implements PipeTransform{

    transform(value: any, ...args: any[]) {
        console.log(value)
    }
}