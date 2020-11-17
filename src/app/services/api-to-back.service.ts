import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

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

  constructor(public http: HttpClient) { }

  createNewGoodsItem (newGoodsItem) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var url = "/goodsItem"; 
    this.http.post(url,newGoodsItem,httpOptions).subscribe((response) => {

    });
  }

  deleteGoods (event) {
    let deleteUrl = "/goodsItem/" + event.target.id;

    this.http.delete(deleteUrl).subscribe ((response) => {

    })
  }

  getGoodsListInfo (searchInfo) {
    return new Observable((observer) => {
      let dataUrl : string;
      if(searchInfo !== undefined) {
        dataUrl = "/goodsItem?name=" + searchInfo;
      } else {
        dataUrl = "/goodsItem";
      }
      this.http.get(dataUrl).subscribe((response) => {
        observer.next(response);
      })
    })
  }

  updateGoodsItem (updateInfo) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var url = "/goodsItem"; 
    this.http.patch(url,updateInfo,httpOptions).subscribe(response => {
    });
  }
}
