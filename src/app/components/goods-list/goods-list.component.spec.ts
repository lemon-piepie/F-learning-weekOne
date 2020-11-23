import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsListComponent } from './goods-list.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoodsListComponent', () => {
  let component: GoodsListComponent;
  let fixture: ComponentFixture<GoodsListComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NzFormModule,
        NzTableModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ GoodsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
