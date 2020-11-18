import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiToBackService } from 'src/app/services/api-to-back.service';

@Component({
  selector: 'app-new-goods-form',
  templateUrl: './new-goods-form.component.html',
  styleUrls: ['./new-goods-form.component.scss']
})
export class NewGoodsFormComponent implements OnInit {
  validateForm: FormGroup;

  constructor( private formBuilder: FormBuilder ,public service: ApiToBackService) {
    this.validateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      shop: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]]
    });
  }

  submitForm(value: { name: string; shop: string; unitPrice: number; imgUrl: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    this.service.createNewGoodsItem(value);
  }

  resetForm(event: MouseEvent): void {
    event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  ngOnInit(): void {

  }
}
