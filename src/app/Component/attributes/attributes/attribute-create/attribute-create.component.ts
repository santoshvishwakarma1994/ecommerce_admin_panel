import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-attribute-create',
  templateUrl: './attribute-create.component.html',
})
export class AttributeCreateComponent {
  attributeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mockDataService: MockDataService // Inject the service
  ) {
    this.attributeForm = this.fb.group({
      name: ['', Validators.required],
      values: [[]],
    });
  }

  onSubmit(): void {
    if (this.attributeForm.valid) {
      const newAttribute = this.attributeForm.value; // Get the form values
      
      // Call the service to create the attribute
      this.mockDataService.createAttribute(newAttribute);
      
      // Optionally, you can reset the form after successful creation
      this.attributeForm.reset({
        name: '', // Reset the 'name' input
        values: [], // Reset the 'values' input
      });
  
      // You can also provide user feedback, e.g., display a success message
      console.log('Attribute created:', newAttribute);
    }
  }
  }
