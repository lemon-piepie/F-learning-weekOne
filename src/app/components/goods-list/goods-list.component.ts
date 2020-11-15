import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTransformService } from '../../service/data-transform.service';

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
  
  constructor(public http: HttpClient) { 
    let getAllUrl = "http://localhost:8080/goodsItem";
    this.http.get(getAllUrl).subscribe( (response : any) => {
      this.listOfGoodsData = response;
    })
  }

  ngOnInit(): void {
  }

  
}
