import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenulistComponent } from './restaurant-menulist.component';

describe('RestaurantMenulistComponent', () => {
  let component: RestaurantMenulistComponent;
  let fixture: ComponentFixture<RestaurantMenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantMenulistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantMenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
