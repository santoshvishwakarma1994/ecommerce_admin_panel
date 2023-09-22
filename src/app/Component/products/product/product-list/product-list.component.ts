import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { Attribute } from 'src/app/Model/attribute.model';
import { Category } from 'src/app/Model/category.model';
import { Product } from 'src/app/Model/product.model';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct!: Product;
  displayDialog: boolean = false;
  categories: Category[] = [];
  attributes: Attribute[] = [];
  searchText: string = '';
  selectedAttributes: SelectItem[] = [];
  availableAttributes: SelectItem[] = [];
  
  constructor(private confirmationService: ConfirmationService, private router: Router,private messageService: MessageService,private mockDataService: MockDataService) { }

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
    this.attributes = this.mockDataService.getAllProductAttributes();
  }
  selectedCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
  editProduct(id: number): void {
    if (id !== undefined && !isNaN(id)) {
      this.router.navigate(['/products/update', id]);
    } else {
      alert('Something went wrong');
    }
  }
  deleteProduct(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Category?',
      icon: 'pi pi-trash',
      accept: () => {
        this.mockDataService.deleteProduct(id);
        this.products = this.mockDataService.getProducts();
        setTimeout(() => {
        this.loadProducts();
      }, 1000); 
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Deletion cancelled' });
      }
    });
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