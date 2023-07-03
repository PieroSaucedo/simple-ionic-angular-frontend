import { Component } from '@angular/core';
import { ApiService } from "../services/api.service";
import { ActivatedRoute } from '@angular/router';
import { Product } from "../interfaces/product";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  product!: Product;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.api.getProductById(id).subscribe(res => {
        this.product = res.product;
      });
    });
  }

}
