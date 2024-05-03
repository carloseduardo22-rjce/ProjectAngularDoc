import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAlertsComponent } from './product-list-alerts.component';

describe('ProductListAlertsComponent', () => {
  let component: ProductListAlertsComponent;
  let fixture: ComponentFixture<ProductListAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
