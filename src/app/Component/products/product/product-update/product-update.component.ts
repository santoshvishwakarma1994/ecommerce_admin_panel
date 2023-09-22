import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MockDataService } from 'src/app/Service/mock-data.service';
import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { MessageService } from 'primeng/api';
import { Attribute } from 'src/app/model/attribute.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
  providers: [MessageService],
})
export class ProductUpdateComponent implements OnInit {
  productUpdateForm: FormGroup;
  selectedProduct: Product | null = null;
  attributes: Attribute[] = [];
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor(
    private mockDataService: MockDataService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.productUpdateForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productCategory: [null, Validators.required],
      productAttributes: [[], Validators.required],
    });

    this.selectedCategory = null;
  }

  ngOnInit() {
    this.loadCategories();
    this.loadAttributes();
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.loadProduct(productId);
    });
  }

  loadCategories() {
    this.categories = this.mockDataService.getCategories();
  }

  loadAttributes() {
    this.attributes = this.mockDataService.getAttributes();
  }

  loadProduct(productId: number) {
    const product = this.mockDataService.getProductById(productId);
    if (product) {
      this.selectedProduct = product;
      this.selectedCategory = this.categories.find(
        (category) => category.id === product.categoryId
      ) || null;
  
      this.productUpdateForm.patchValue({
        productName: product.name,
        productDescription: product.description,
        productCategory: this.selectedCategory,
        productAttributes: product.attributes, // Set initial value here
      });
    }
  }
  

  updateProduct() {
    if (this.productUpdateForm.valid) {
      const updatedProductData: Product = {
        id: this.selectedProduct?.id || 0,
        name: this.productUpdateForm.value.productName,
        description: this.productUpdateForm.value.productDescription,
        categoryId: this.productUpdateForm.value.productCategory?.id || 0,
        attributes: this.productUpdateForm.value.productAttributes,
      };
      if (this.selectedProduct) {
        this.mockDataService.updateProduct(updatedProductData);

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product updated successfully',
        });
        setTimeout(() => {
          this.router.navigate(['/products/list']);
        }, 1000);
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill out all required fields.',
      });
    }
  }

}
