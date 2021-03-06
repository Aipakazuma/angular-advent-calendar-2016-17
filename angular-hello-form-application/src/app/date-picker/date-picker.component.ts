import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

// 宣言？
const Pikaday = require('../../../node_modules/pikaday/pikaday');
const PikadayStyle = require('../../../node_modules/pikaday/scss/pikaday.scss');

@Component({
  selector: '[appDatePicker]',
  template: '',
  styleUrls: [PikadayStyle],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent {

  @Input('appDatePicker') datePickerField: any;

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    var picker = new Pikaday({
      field: this.elementRef.nativeElement,
      format: 'YYYY/MM/DD',
      i18n: {
        previousMonth : '先月',
        nextMonth     : '来月',
        months        : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        weekdays      : ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        weekdaysShort : ['日','月','火','水','木','金','土']
      },
      onSelect: (date) => {
        this.datePickerField.setValue(picker.toString());
      }
    });
  }

}
