import { collections } from '../constants';
import { Collections, Product } from '../types';

export const fetchCollections = (): Promise<Collections> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(collections);
    }, 500);
  });
};

export const fetchProductById = (productId: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    const product = Object.values(collections)
      .flatMap((category) =>
        category.flatMap((subCategory) => subCategory.products)
      )
      .find((product) => product.id === productId);

    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject('Product not found');
      }
    }, 500);
  });
};
