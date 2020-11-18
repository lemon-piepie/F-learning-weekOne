import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiToBackService } from 'src/app/services/api-to-back.service';

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
  updateGoodsFlag : boolean = false;  
  validateForm: FormGroup;
  updateTargetGoods: GoodsItem;
  targetGoodsId : number;

  constructor( private formBuilder: FormBuilder , public http: HttpClient, public service: ApiToBackService ) {
    this.validateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      shop: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]],
      imgUrl: ['']
    });
    this.getGoodsListInfo();
  }

  submitForm(value: { name: string; shop: string; unitPrice: number; imgUrl: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    const UpdateInfo: GoodsItem = {
      'id': this.targetGoodsId,
      'name': value.name,
      'shop': value.shop,
      'unitPrice': value.unitPrice,
      'url': value.imgUrl
    }
    this.service.updateGoodsItem(UpdateInfo);
    alert("修改商品成功");
    this.updateGoodsFlag = false;
    this.getGoodsListInfo();
  }

  getGoodsListInfo () {
    let rxjsGoodsListData : any = this.service.getGoodsListInfo(this.searchInfo);
    rxjsGoodsListData.subscribe((data) => {
      this.listOfGoodsData = data;
    })
  }

  search () {
    let searchWord :any = document.getElementById('searchInfo');
    this.searchInfo = searchWord.value;
    this.getGoodsListInfo();
  }

  ngOnInit(): void {

  }

  deleteGoods (event) {
    if(event.target.id){
      this.service.deleteGoods(event);
      alert("删除商品成功！");
      this.getGoodsListInfo();
    }
  }

  updateGoods (event) {
    let goodsIdSpan : any = document.getElementById("goodsIdInput")
    goodsIdSpan.innerHTML = event.target.id;
    this.updateGoodsFlag = true;
    this.targetGoodsId = event.target.id;
  }
}
