import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import * as _ from 'lodash';

interface GoodsItem {
  id: number;
  name: string;
  shop: string;
  url: string;
  unitPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiToBackService {

  url : string;

  constructor(public http: HttpClient) { }

  createNewGoodsItem (newGoodsItem) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.url = "/goodsItem"; 
    this.http.post(this.url,newGoodsItem,httpOptions).subscribe((response) => {
      return response;
    });
  }

  deleteGoods (event) {
    this.url = "/goodsItem/" + event.target.id;

    this.http.delete(this.url).subscribe ((response) => {

    })
  }

  getGoodsListInfo (searchInfo) {
    return new Observable((observer) => {
      if(_.isUndefined(searchInfo)) {
        this.url = "/goodsItem";
      } else {
        this.url = "/goodsItem?name=" + searchInfo;
      }
      this.http.get(this.url).subscribe((response) => {
        observer.next(response);
      })
    })
  }

  getGoodsItem (id) {
    return new Observable((observer) => {
      this.url = "/goodsItem/" + id;
      this.http.get(this.url).subscribe((response) => {
        observer.next(response);
      })
    })
  }

  updateGoodsItem (updateInfo) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.url = "/goodsItem"; 
    this.http.patch(this.url,updateInfo,httpOptions).subscribe(response => {
    });
  }
}
