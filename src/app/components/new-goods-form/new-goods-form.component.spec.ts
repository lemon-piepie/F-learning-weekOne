import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoodsFormComponent } from './new-goods-form.component';

describe('NewGoodsFormComponent', () => {
  let component: NewGoodsFormComponent;
  let fixture: ComponentFixture<NewGoodsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
