import { Component } from '@angular/core';

@Component({
  selector: 'app-daythree',
  standalone: false,
  templateUrl: './daythree.component.html',
  styleUrl: './daythree.component.css'
})
export class DaythreeComponent {
  products = [
    { id: 1, name: 'Product 1', price: 100.111, description: 'Description for Product 1', manufaturingDate: '2019-01-21' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2', manufaturingDate: '2009-01-21' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description for Product 3', manufaturingDate: '2019-11-05' },
    { id: 4, name: 'Product 4', price: 400, description: 'Description for Product 4', manufaturingDate: '2011-12-15' },
    { id: 5, name: 'Product 5', price: 500, description: 'Description for Product 5', manufaturingDate: '2013-11-22' },
    { id: 6, name: 'Product 6', price: 600, description: 'Description for Product 6', manufaturingDate: '2016-10-09' },
    { id: 7, name: 'Product 7', price: 700, description: 'Description for Product 7', manufaturingDate: '2015-05-11' },
    { id: 8, name: 'Product 8', price: 800, description: 'Description for Product 8', manufaturingDate: '2014-03-13' },
  ];
}
