import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-attribute-create',
  templateUrl: './attribute-create.component.html',
  providers: [MessageService],
})
export class AttributeCreateComponent implements OnInit {
  messages: Message[] = [];

  attributeForm: FormGroup;
  attributeValues: any[] = [
    { label: 'Color', value: 'color' },
    { label: 'Size', value: 'size' },
    { label: 'Material', value: 'material' },
    { label: 'Style', value: 'style' },
    { label: 'Category', value: 'category' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockDataService: MockDataService,
    private messageService: MessageService
  ) {
    this.attributeForm = this.fb.group({
      name: ['', Validators.required],
      values: [[]],
    });
  }
  ngOnInit() { }

  onSubmit(): void {
    if (this.attributeForm.valid) {
      const newAttribute = this.attributeForm.value;

      this.mockDataService.createAttribute(newAttribute);

      this.attributeForm.reset({
        name: '',
        values: [],
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Content',
      });
      setTimeout(() => {
        this.router.navigate(['/attributes/list']);
      }, 1000);
    }
  }
}
