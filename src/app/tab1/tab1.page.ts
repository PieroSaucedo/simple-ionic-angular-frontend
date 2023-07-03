import { Component } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Product } from "../interfaces/product";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  products: Product[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllProducts().subscribe((res) => {
      this.products = res.products;
    });
  }

}
