import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findContentWithTitle'
})
export class FindContentWithTitlePipe implements PipeTransform {

  transform(contentList: Content[], title: String) {
    return null;
  }

}
