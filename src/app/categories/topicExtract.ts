import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'topics'})

export class topicExtract implements PipeTransform{
  transform(value: any): any {
      console.log(Object.entries(value));
        return Object.entries(value);//.map(key => value[key]);
    }
}
