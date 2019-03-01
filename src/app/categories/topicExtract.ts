import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'topics'})

export class topicExtract implements PipeTransform{
  transform(value: any): any {
        return Object.entries(value);//.map(key => value[key]);
    }
}
