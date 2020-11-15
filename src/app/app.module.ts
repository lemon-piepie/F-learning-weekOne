import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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

import {DataTransformService} from './service/data-transform.service'
import { from } from 'rxjs';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    HeaderComponent,
    NewGoodsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },DataTransformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
