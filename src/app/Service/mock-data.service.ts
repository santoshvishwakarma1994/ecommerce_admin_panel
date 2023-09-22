import { Injectable } from '@angular/core';
import { Attribute } from '../Model/attribute.model';
import { Category } from '../Model/category.model';
import { Product } from '../Model/product.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private attributes: Attribute[] = [
    { id: 1, name: 'Color', values: ['Red', 'Blue', 'Green'] },
    { id: 2, name: 'Size', values: ['Small', 'Medium', 'Large'] },
    { id: 3, name: 'Material', values: ['Cotton', 'Leather', 'Silk'] },
    { id: 4, name: 'Style', values: ['Casual', 'Formal', 'Sportswear'] },
    { id: 5, name: 'Brand', values: ['Nike', 'Adidas', 'Puma'] },
    { id: 6, name: 'Gender', values: ['Men', 'Women', 'Unisex'] },
    { id: 7, name: 'Type', values: ['T-shirt', 'Jeans', 'Sneakers'] },
    { id: 8, name: 'Occasion', values: ['Party', 'Workout', 'Outdoor'] },
    { id: 9, name: 'Season', values: ['Spring', 'Summer', 'Fall', 'Winter'] },
    { id: 10, name: 'Pattern', values: ['Stripes', 'Plaid', 'Floral', 'Solid'] },
    { id: 11, name: 'Sleeve Length', values: ['Short Sleeve', 'Long Sleeve', 'Sleeveless'] },
    { id: 12, name: 'Neckline', values: ['Round Neck', 'V-Neck', 'Crew Neck'] },
    { id: 13, name: 'Closure', values: ['Button', 'Zipper', 'Elastic'] },
    { id: 14, name: 'Fit', values: ['Slim Fit', 'Regular Fit', 'Loose Fit'] },
    { id: 15, name: 'Waistline', values: ['High Waist', 'Mid Waist', 'Low Waist'] },
    { id: 16, name: 'Inseam Length', values: ['Short', 'Regular', 'Long'] },
    { id: 17, name: 'Heel Height', values: ['Low Heel', 'Medium Heel', 'High Heel'] },
    { id: 18, name: 'Toe Style', values: ['Round Toe', 'Pointed Toe', 'Open Toe'] },
    { id: 19, name: 'Lining Material', values: ['Leather', 'Textile', 'Synthetic'] },
    { id: 20, name: 'Fastening', values: ['Lace-Up', 'Buckle', 'Slip-On'] },
  ];

  private categories: Category[] = [
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Clothing', parentId: null },
    { id: 3, name: 'Laptops', parentId: 1 },
    { id: 4, name: 'T-Shirts', parentId: 2 },
    { id: 5, name: 'Smartphones', parentId: 1 },
    { id: 6, name: 'Dresses', parentId: 2 },
    { id: 7, name: 'Accessories', parentId: 1 },
    { id: 8, name: 'Jeans', parentId: 2 },
    { id: 9, name: 'Gaming Laptops', parentId: 3 },
    { id: 10, name: 'Casual T-Shirts', parentId: 4 },
    { id: 11, name: 'Chargers', parentId: 5 },
    { id: 12, name: 'Formal Dresses', parentId: 6 },
    { id: 13, name: 'Headphones', parentId: 7 },
  ];
  

  private products: Product[] = [
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
        { id: 1, name: 'Jeans', values: ['Red'] },
        { id: 2, name: 'Shirt', values: ['Large'] },
      ],
    },
  ];

  getAllProductAttributes(): Attribute[] {
    const uniqueAttributes: Attribute[] = [];
  
    this.products.forEach((product) => {
      product.attributes.forEach((attribute) => {
        const existingAttribute = uniqueAttributes.find((a) => a.id === attribute.id);
        if (!existingAttribute) {
          uniqueAttributes.push(attribute);
        }
      });
    });
  
    return uniqueAttributes;
  }

  
  getAttributes(): Attribute[] {
    return this.attributes;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
  getAllAttributeValues(): string[] {
    const allValues: string[] = [];

    this.attributes.forEach((attribute) => {
      attribute.values.forEach((value) => {
        if (!allValues.includes(value)) {
          allValues.push(value);
        }
      });
    });

    return allValues;
  }

  createAttribute(attribute: Attribute): void {
    attribute.id = this.attributes.length > 0 ? Math.max(...this.attributes.map(attr => attr.id)) + 1 : 1;
    this.attributes.push(attribute);
  }
  

  createCategory(category: Category): void {
    category.id = this.categories.length > 0 ? Math.max(...this.categories.map(attr => attr.id)) + 1 : 1;
    this.categories.push(category);
  }

  createProduct(product: Product): void {
    product.id = this.products.length > 0 ? Math.max(...this.products.map(attr => attr.id)) + 1 : 1;
    this.products.push(product);
  }

  getAttributeById(id: number): Attribute | undefined {
    return this.attributes.find((attribute) => attribute.id === id);
  } 

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  } 

  getCategoryById(id: number): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

  updateAttribute(attribute: Attribute): void {
    const index = this.attributes.findIndex((a) => a.id === attribute.id);
    if (index !== -1) {
      this.attributes[index] = attribute;
    }
  }

  updateCategory(category: Category): void {
    const index = this.categories.findIndex((c) => c.id === category.id);
    if (index !== -1) {
      this.categories[index] = category;
    }
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  deleteAttribute(attributeId: number): void {
    this.attributes = this.attributes.filter((a) => a.id !== attributeId);
  }
  deleteCategory(categoryId: number): void {
    this.categories = this.categories.filter((c) => c.id !== categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
