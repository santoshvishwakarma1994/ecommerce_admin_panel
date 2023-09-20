// mock-data.ts

export const mockAttributes = [
    { id: 1, name: 'Attribute 1', values: ['Value 1', 'Value 2'] },
    { id: 2, name: 'Attribute 2', values: ['Value 3', 'Value 4'] },
    // Add more mock attributes as needed
  ];
  
  export const mockCategories = [
    { id: 1, name: 'Category 1', parentId: null },
    { id: 2, name: 'Category 2', parentId: 1 },
    // Add more mock categories as needed
  ];
  
  export const mockProducts = [
    { id: 1, name: 'Product 1', description: 'Description 1', categoryId: 1 },
    { id: 2, name: 'Product 2', description: 'Description 2', categoryId: 2 },
    // Add more mock products as needed
  ];
  