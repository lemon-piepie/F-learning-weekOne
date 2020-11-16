import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  submitForm(value: { name: string; shop: string; unitPrice: number; imgUrl: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const UpdateInfo: GoodsItem = {
      'id': this.targetGoodsId,
      'name': value.name,
      'shop': value.shop,
      'unitPrice': value.unitPrice,
      'url': value.imgUrl
    }
    var url = "http://localhost:8080/goodsItem"; 
    this.http.patch(url,UpdateInfo,httpOptions).subscribe(response => {
    });
    alert("修改商品成功");
    location.reload();
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  constructor( private fb: FormBuilder , public http: HttpClient ) {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      shop: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]],
      imgUrl: ['']
    });
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

  updateGoods (event) {
    let goodsIdSpan : any = document.getElementById("goodsIdInput")
    goodsIdSpan.innerHTML = event.target.id;
    this.updateGoodsFlag = true;
    this.targetGoodsId = event.target.id;
  }
}
