import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'yourName': ['', Validators.required],
      'whatAnimationDoYouLike': this.formBuilder.array([
        this.initGroup()
      ])
    });
  }

  initGroup() {
    return this.formBuilder.group({
      'answer': ['', Validators.required],
      'reason': ['']
    });
  }

  addGroup() {
    const arrayControls = this.getFormArrayControls();
    arrayControls.push(this.initGroup());
  }

  removeGroup(i: number) {
    const arrayControls = this.getFormArrayControls();
    arrayControls.removeAt(i);
  }


  getFormArrayControls() {
    return <FormArray>this.myForm.controls['whatAnimationDoYouLike'];
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
