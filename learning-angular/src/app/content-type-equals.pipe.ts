import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeEquals'
})
export class ContentTypeEqualsPipe implements PipeTransform {

  transform(contentList: Content[],type:String): Content[] {
    
    return contentList.filter(item => 
      item.type === type
    );
  }

}
