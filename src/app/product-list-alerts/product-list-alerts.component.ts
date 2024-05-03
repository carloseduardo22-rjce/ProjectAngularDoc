import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list-alerts',
  templateUrl: './product-list-alerts.component.html',
  styleUrl: './product-list-alerts.component.css',
})
export class ProductListAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
