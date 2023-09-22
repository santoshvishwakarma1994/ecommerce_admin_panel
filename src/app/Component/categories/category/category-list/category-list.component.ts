import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from 'src/app/Model/category.model';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class CategoryListComponent {
  categories: Category[] = [];
  filteredcategories: Category[] = [];
  globalFilter: string = '';
  selectedValues: string[] = [];

  @ViewChild('dt', { static: true }) table!: Table;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private mockDataService: MockDataService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.mockDataService.getCategories();
    this.filterCategories();
  }

  editCategories(id: number): void {
    if (id !== undefined && !isNaN(id)) {
      this.router.navigate(['/categories/update', id]);
    } else {
      alert('Something went wrong');
    }
  }

  deleteCategories(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Category?',
      icon: 'pi pi-trash',
      accept: () => {
        this.mockDataService.deleteCategory(id);
        this.categories = this.mockDataService.getCategories();
        setTimeout(() => {
        this.filterCategories();
      }, 1000); 
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Deletion cancelled' });
      }
    });
  }
  filterCategories(): void {
    this.filteredcategories = this.categories.filter((attribute) => {
      const nameMatch = attribute.name.toLowerCase().includes(this.globalFilter.toLowerCase());
      const idMatch = attribute.id.toString().includes(this.globalFilter);
  
      return nameMatch || idMatch;
    });
  
    this.table.reset();
  }
}
