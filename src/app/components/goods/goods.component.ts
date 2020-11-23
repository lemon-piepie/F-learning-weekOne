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
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goodsItemDetail : GoodsItem;
  goodsId : string;
  constructor(public service: ApiToBackService) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((id) => {
    //   this.goodsId = id.aid;
    // })
    // this.getGoodsItemDetailById(this.goodsId);
  }

  getGoodsItemDetailById (id) {
    // let rxjsGoodsItem : any = this.service.getGoodsItem(id);
    // rxjsGoodsItem.subscribe((data) => {
    //   this.goodsItemDetail = data;
    // })
  }
}
