import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-new-goods-form',
  templateUrl: './new-goods-form.component.html',
  styleUrls: ['./new-goods-form.component.scss']
})
export class NewGoodsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
