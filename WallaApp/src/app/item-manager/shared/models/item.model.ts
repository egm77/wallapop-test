export enum typeEnum {
  title = 'title',
  description = 'description',
  price = 'price',
  email = 'email',
}


export interface Item {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
  fav?: boolean;
}
