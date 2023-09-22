
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Service/mock-data.service';
import { Product } from 'src/app/Model/product.model';
import { Category } from 'src/app/Model/category.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [MessageService],

})
export class ProductCreateComponent implements OnInit {
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    categoryId: 0,
    attributes: []
  };

  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor(private mockDataService: MockDataService, private router: Router,private messageService: MessageService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories = this.mockDataService.getCategories();
  }

  createProduct() {
    if (this.selectedCategory) {
      this.newProduct.categoryId = this.selectedCategory.id;
    }

    this.mockDataService.createProduct(this.newProduct);

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product created successfully',
    });

    setTimeout(() => {
      this.router.navigate(['/products/list']);
    }, 1000);
  }
}
