import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './components/header/header.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NewGoodsFormComponent } from './components/new-goods-form/new-goods-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ApiToBackService } from '../app/services/api-to-back.service';
import { GoodsItemComponent } from './components/goods-item/goods-item.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    HeaderComponent,
    NewGoodsFormComponent,
    GoodsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, ApiToBackService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
