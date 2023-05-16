import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-products-box",
  templateUrl: "./products-box.components.html",
})
export class ProductsBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  // product: Product;

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {}
}
