import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title = 'Registration Form'
  bookForm!: FormGroup;
  constructor(public formmodule: FormBuilder) {
    this.bookForm = this.formmodule.group({
      Bookname: ['', [Validators.required]],
      author: [''],
      Publications: [''],
      price: [''],
      Genre: [''],
      dop: [''],
      country: [''],
      description: ['']
    })
  }
  onSubmit() {
    console.log(this.bookForm);
    alert("successfully submitted");
  }
}
