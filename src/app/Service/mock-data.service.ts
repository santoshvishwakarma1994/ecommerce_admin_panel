import { Injectable } from '@angular/core';
import { Attribute } from '../Model/attribute.model';
import { Category } from '../Model/category.model';
import { Product } from '../Model/product.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private attributes: Attribute[] = [
    // Mock attribute data here
    { id: 1, name: 'Color', values: ['Red', 'Blue', 'Green'] },
    { id: 2, name: 'Size', values: ['Small', 'Medium', 'Large'] },
  ];

  private categories: Category[] = [
    // Mock category data here
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Clothing', parentId: null },
    { id: 3, name: 'Laptops', parentId: 1 },
    { id: 4, name: 'T-Shirts', parentId: 2 },
  ];

  private products: Product[] = [
    // Mock product data here
    {
      id: 1,
      name: 'Laptop 1',
      description: 'High-performance laptop',
      categoryId: 3,
      attributes: [
        { id: 1, name: 'Color', values: ['Silver'] },
        { id: 2, name: 'Size', values: ['Medium'] },
      ],
    },
    {
      id: 2,
      name: 'T-Shirt 1',
      description: 'Comfortable cotton t-shirt',
      categoryId: 4,
      attributes: [
        { id: 1, name: 'Color', values: ['Red'] },
        { id: 2, name: 'Size', values: ['Large'] },
      ],
    },
  ];

  // Get all attributes
  getAttributes(): Attribute[] {
    return this.attributes;
  }

  // Get all categories
  getCategories(): Category[] {
    return this.categories;
  }

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Create a new attribute
  createAttribute(attribute: Attribute): void {
    this.attributes.push(attribute);
  }

  // Create a new category
  createCategory(category: Category): void {
    this.categories.push(category);
  }

  // Create a new product
  createProduct(product: Product): void {
    this.products.push(product);
  }

  // Update an existing attribute
  updateAttribute(attribute: Attribute): void {
    const index = this.attributes.findIndex((a) => a.id === attribute.id);
    if (index !== -1) {
      this.attributes[index] = attribute;
    }
  }

  // Update an existing category
  updateCategory(category: Category): void {
    const index = this.categories.findIndex((c) => c.id === category.id);
    if (index !== -1) {
      this.categories[index] = category;
    }
  }

  // Update an existing product
  updateProduct(product: Product): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  // Delete an attribute
  deleteAttribute(attributeId: number): void {
    this.attributes = this.attributes.filter((a) => a.id !== attributeId);
  }

  // Delete a category
  deleteCategory(categoryId: number): void {
    this.categories = this.categories.filter((c) => c.id !== categoryId);
  }

  // Delete a product
  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
