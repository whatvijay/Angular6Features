import {Pipe,PipeTransform} from '@angular/core';

@Pipe(
    {
        name:'CustomPipe2'
    })
export class CustomPipe2 implements PipeTransform
{
    transform(oldValue :String,oldValue2 :String) :String
    {
        return oldValue+":"+oldValue2 +"custompipe2 is implemented";
    }
}