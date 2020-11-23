import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoodsFormComponent } from './new-goods-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewGoodsComponent', () => {
  let component: NewGoodsFormComponent;
  let fixture: ComponentFixture<NewGoodsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NzFormModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ NewGoodsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoodsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
