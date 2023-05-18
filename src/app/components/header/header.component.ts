import { Component, OnInit } from "@angular/core";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  constructor() {}

  ngOnInit(): void {}
}
