import { Component, OnInit } from '@angular/core';
import { ApiToBackService } from 'src/app/services/api-to-back.service';

interface GoodsItem {
  id: number;
  name: string;
  shop: string;
  url: string;
  unitPrice: number;
}

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss']
})
export class GoodsItemComponent implements OnInit {

  goodsItemDetail : GoodsItem;

  constructor(public service: ApiToBackService) {
    this.getGoodsItemDetailById(1);
  }

  ngOnInit(): void {
  }

  getGoodsItemDetailById (id) {
    let rxjsGoodsItem : any = this.service.getGoodsItem(id);
    rxjsGoodsItem.subscribe((data) => {
      console.log(data);
      this.goodsItemDetail = data;
    })
  }

}
