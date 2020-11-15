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

  listOfGoodsData: GoodsItem[] = [
    // {
    //   id:1,
    //   name: 'apple',
    //   shop: 'supermarket',
    //   unitPrice: 5.00,
    //   url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605173982956&di=b11bf7ee60f40600974c813d33a41175&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2967184424%2C1225288718%26fm%3D214%26gp%3D0.jpg"
    // },
    // {
    //   id:2,
    //   name: 'orange',
    //   shop: 'supermarket',
    //   unitPrice: 5.00,
    //   url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2518948504,482528975&fm=26&gp=0.jpg"
    // },
    // {
    //   id:3,
    //   name: 'banana',
    //   shop: 'supermarket',
    //   unitPrice: 5.50,
    //   url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2371969298,2530790421&fm=26&gp=0.jpg"
    // }
  ];
  
  constructor(public http: HttpClient) { 
    let getAllUrl = "http://localhost:8080/goodsItem";
    this.http.get(getAllUrl).subscribe( (response : any) => {
      this.listOfGoodsData = response;
    })
  }

  ngOnInit(): void {
  }

  deleteGoods (event) {
    //event.target.id
    let deleteUrl = "http://localhost:8080/goodsItem/"+event.target.id;
    this.http.delete(deleteUrl).subscribe ( (response) => {

    })
    alert("删除商品成功！");
    location.reload();
  }
  
}
