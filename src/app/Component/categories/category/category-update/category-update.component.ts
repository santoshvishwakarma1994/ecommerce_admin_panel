import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Category } from 'src/app/model/category.model'; 
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  category: Category = { id: 0, name: '', parentId: null }; 

  constructor(
    private categoryService: MockDataService, 
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const categoryId = +params['id'];
      if (categoryId) {
        this.category = this.categoryService.getCategoryById(categoryId) || this.category;
      }
    });
  }

  updateCategory(): void {
    this.categoryService.updateCategory(this.category);

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Category updated successfully!',
    });

    setTimeout(() => {
      this.router.navigate(['/categories/list']);
    }, 1000);
  }
}
