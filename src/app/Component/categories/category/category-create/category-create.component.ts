import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Category } from 'src/app/model/category.model';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
  providers: [MessageService],
})
export class CategoryCreateComponent {
  messages: Message[] = [];
  categoriesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockDataService: MockDataService,
    private messageService: MessageService
  ) {
    this.categoriesForm = this.fb.group({
      name: ['', Validators.required],
      parentId: null,
    });
  }

  onSubmit(): void {
    if (this.categoriesForm.valid) {
      const newCategory: Category = this.categoriesForm.value;
      this.mockDataService.createCategory(newCategory);
      this.categoriesForm.reset({
        name: '',
        parentId: null,
      });

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Category created successfully',
      });

      setTimeout(() => {
        this.router.navigate(['/categories/list']);
      }, 1000);
    }
  }
}
