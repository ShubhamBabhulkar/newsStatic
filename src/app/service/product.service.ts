import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addedProducs = [];
  constructor(private httpRequest: HttpClient) { }

  getAddedProduct() {
    if (this.addedProducs) {
      return this.addedProducs;
    }
  }
  getAddedProductsCount() {
    if (this.addedProducs) {
      return this.addedProducs.length;
    }
  }
}
