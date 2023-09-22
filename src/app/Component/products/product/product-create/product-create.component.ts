
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Service/mock-data.service';
import { Product } from 'src/app/Model/product.model';
import { Category } from 'src/app/Model/category.model';
import { MessageService } from 'primeng/api';
import { Attribute } from 'src/app/Model/attribute.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [MessageService],

})
export class ProductCreateComponent implements OnInit {
  selectedAttributes: Attribute[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    categoryId: 0,
    attributes: []
  };
  attributes: Attribute[] = [];
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor(private mockDataService: MockDataService, private router: Router,private messageService: MessageService) { }

  ngOnInit() {
    this.loadCategories();
    this.loadAttributes();
  }

  loadCategories() {
    this.categories = this.mockDataService.getCategories();
  }

  loadAttributes() {
    this.attributes = this.mockDataService.getAttributes();
  }
  addSelectedAttributes(attribute: Attribute) {
    const index = this.selectedAttributes.findIndex((a) => a.id === attribute.id);
    if (index !== -1) {
      this.selectedAttributes.splice(index, 1);
    } else {
      this.selectedAttributes.push(attribute);
    }
  }
  
  isAttributeSelected(attribute: Attribute): boolean {
    return this.selectedAttributes.some((a) => a.id === attribute.id);
  }
  createProduct() {
    this.newProduct.attributes = this.selectedAttributes;
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
