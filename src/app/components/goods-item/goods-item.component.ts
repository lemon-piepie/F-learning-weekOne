import { Component, OnInit } from '@angular/core';
import { ApiToBackService } from 'src/app/services/api-to-back.service';
import { ActivatedRoute } from '@angular/router';

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
  goodsId : string;

  constructor(public service: ApiToBackService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((id) => {
      this.goodsId = id.aid;
    })
    this.getGoodsItemDetailById(this.goodsId);
  }

  getGoodsItemDetailById (id) {
    let rxjsGoodsItem : any = this.service.getGoodsItem(id);
    rxjsGoodsItem.subscribe((data) => {
      console.log(data);
      this.goodsItemDetail = data;
    })
  }

}
