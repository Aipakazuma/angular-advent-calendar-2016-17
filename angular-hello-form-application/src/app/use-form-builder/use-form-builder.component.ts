import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

function fullMatchStringAipa(control: FormControl): { [s: string]: boolean } {
  // 初期値がない場合はエラーになったので
  // nullチェックもする
  if (control.value) {
    if (!control.value.match(/^Aipa/)) {
      return {invalidAipa: true};
    }
  }
}

@Component({
  selector: 'app-use-form-builder',
  templateUrl: './use-form-builder.component.html',
  styleUrls: ['./use-form-builder.component.css']
})

export class UseFormBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) { // <- これがDI（らしい）
    this.myForm = formBuilder.group({
      'myName': ['Aipa', Validators.compose([
          Validators.required,
          Validators.minLength(4),
          fullMatchStringAipa
        ])
      ],
      'inputDatePicker': ['', Validators.required],
    });

    this.myForm.controls['myName'].valueChanges.subscribe(
      (value: string) => {
        console.log('aipa value change: ', value);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log(form.value);
    console.log('わたしの名前は' + form.controls['myName'].value);
  }
}

