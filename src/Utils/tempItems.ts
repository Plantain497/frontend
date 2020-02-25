import { HomeMajorMonotone, OrdersMajorTwotone, ProductsMajorTwotone } from '@shopify/polaris-icons';
import { INavItem } from '../types';

const items: INavItem[] = [
  {
    url: '/path/to/place',
    label: 'Home',
    icon: HomeMajorMonotone
  },
  {
    url: '/path/to/place',
    label: 'Orders',
    icon: OrdersMajorTwotone,
    badge: '15'
  },
  {
    url: '/path/to/place',
    label: 'Products',
    icon: ProductsMajorTwotone
  }
];

export { items };
