import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
 constructor($root, options) {
  super($root, options.listeners)
 }
 
 // Возвращает шаблон компонента 
 toHTML() {
  return ''
 }

}
