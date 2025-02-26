import { Category } from '../category/category.interface';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
    imgURL: string;
    link: string;
    category: Category;
    likes: number;
}