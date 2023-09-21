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
    { label: 'Value 1', value: 'Value 1' },
    { label: 'Value 2', value: 'Value 2' },
    { label: 'Value 3', value: 'Value 3' },
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
