import { Attribute } from "./attribute.model";

export interface Product {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    attributes: Attribute[];
  }
  
  