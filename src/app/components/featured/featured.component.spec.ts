import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedComponent } from './featured.component';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;


  beforeAll(() => {

  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedComponent],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a defined property', () => {
    expect(component.someProperty).toBeDefined();
  });

  
  it('should call a method and return expected value', () => {
    const returnValue = component.someMethod();
    expect(returnValue).toBe(expectedValue);
  });
});
