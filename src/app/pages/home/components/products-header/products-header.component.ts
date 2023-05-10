import { Component } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "products-header.components.html",
})
export class ProductsHeaderComponent {
  sort = "desc";
  itemsShowCount = 12;

  constructor() {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
}
