import {Pipe,PipeTransform} from  '@angular/core';

@Pipe(
{
    name:'CustomPipe'
})
export class CustomPipe implements PipeTransform
{
    transform(oldValue :String) :String
    {
        return oldValue+"transformation achieved";
    }
}
