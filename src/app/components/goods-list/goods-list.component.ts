import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GoodsItem {
  id: number;
  name: string;
  shop: string;
  url: string;
  unitPrice: number;
}

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  listOfGoodsData: GoodsItem[] = [];
  public searchInfo : string ;
  
  
  constructor(public http: HttpClient) { 
    this.getData();
  }

  ngOnInit(): void {

  }

  getData () {
    let getDataUrl : string;
    if(this.searchInfo != undefined) {
      getDataUrl = "http://localhost:8080/goodsItem?name="+this.searchInfo;
    } else {
      getDataUrl = "http://localhost:8080/goodsItem";
    }
    this.http.get(getDataUrl).subscribe( (response : any) => {
      this.listOfGoodsData = response;
    })
  }

  deleteGoods (event) {
    //event.target.id
    let deleteUrl = "http://localhost:8080/goodsItem/"+event.target.id;
    this.http.delete(deleteUrl).subscribe ( (response) => {

    })
    alert("删除商品成功！");
    location.reload();
  }

  search () {
    let searchWord:any = document.getElementById('searchInfo');
    this.searchInfo = searchWord.value;
    this.getData();
  }

  searchWithEnter (event) {
    if(event.keyCode == 13) {
      this.search();
    }
  }
  
}
