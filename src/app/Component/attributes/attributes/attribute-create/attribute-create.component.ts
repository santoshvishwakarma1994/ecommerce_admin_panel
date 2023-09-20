import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Attribute } from 'src/app/Model/attribute.model';
import { Product } from 'src/app/Model/product.model';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-attribute-create',
  templateUrl: './attribute-create.component.html',
  styleUrls: ['./attribute-create.component.scss'],
})
export class AttributeCreateComponent implements OnInit {
  availableAttributes: Attribute[] = [];
  selectedAttribute: Attribute = { id: 0, name: '', values: [] };
  constructor(private mockDataService: MockDataService,private router: Router) {}

  ngOnInit(): void {
    // Fetch available attributes from your service
    this.availableAttributes = this.mockDataService.getAttributes();
  }
  createProduct(): void {
    // Create a new product with the selected attribute and other properties
    const newProduct: Product = {
      id: this.generateUniqueId(), // Call a function to generate a unique product ID
      name: 'Product Name', // Get the product name from the form or set a default value
      description: 'Product Description', // Get the product description or set a default value
      categoryId: 1, // Get the product category ID from the form or set a default value
      attributes: [this.selectedAttribute],
    };

    // Save the new product using your service
    this.mockDataService.createProduct(newProduct);

    // Reset the form
    this.selectedAttribute = { id: 0, name: '', values: [] };
    // Reset other form fields as needed

    // Redirect to the product list or any other page as needed
    this.router.navigate(['/products']);
  }

  private generateUniqueId(): number {
    // Replace this with your logic to generate a unique product ID
    // For example, you can use a timestamp or a random number generator
    return Math.floor(Math.random() * 1000000); // Example: Generate a random ID
  }
  // Implement createProduct method here
}
