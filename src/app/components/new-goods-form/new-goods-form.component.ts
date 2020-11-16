import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new-goods-form',
  templateUrl: './new-goods-form.component.html',
  styleUrls: ['./new-goods-form.component.scss']
})
export class NewGoodsFormComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(value: { name: string; shop: string; unitPrice: number; imgUrl: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    this.createNewGoodsItem(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  constructor( private fb: FormBuilder , public http: HttpClient ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      shop: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]],
      imgUrl: ['']
    });
    console.log(this.validateForm.valid);
  }

  createNewGoodsItem (newGoodsItem) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var url = "http://localhost:8080/goodsItem"; 
    this.http.post(url,newGoodsItem,httpOptions).subscribe(response => {
      console.log(response); 
    });
  }

  ngOnInit(): void {

  }
}
