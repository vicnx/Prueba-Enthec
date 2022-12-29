import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageFilter'
})
export class LanguageFilter implements PipeTransform {

  transform(list: any[], filters: any) {
     return filters ? list.filter(item => filters.includes(item.language)) : list;
  }
}
