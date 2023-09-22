import { Component, OnInit } from '@angular/core';
import { Attribute } from 'src/app/Model/attribute.model';
import { Category } from 'src/app/Model/category.model';
import { Product } from 'src/app/Model/product.model';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct!: Product;
  displayDialog: boolean = false;
  categories: Category[] = [];
  attributes: Attribute[] = [];
  searchText: string = '';

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
    this.loadAttributes();
  }

  loadProducts() {
    this.products = this.mockDataService.getProducts();
  }

  loadCategories() {
    this.categories = this.mockDataService.getCategories();
  }

  loadAttributes() {
    this.attributes = this.mockDataService.getAttributes();
  }

  save() {
    if (this.selectedProduct.id) {
      this.mockDataService.updateProduct(this.selectedProduct);
    } else {
      this.mockDataService.createProduct(this.selectedProduct);
    }

    this.displayDialog = false;
    this.loadProducts();
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }

  filterTable() {
    this.products = this.mockDataService.getProducts().filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.categoryId.toString().toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  
}