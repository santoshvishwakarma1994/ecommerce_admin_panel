import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDeleteComponent } from './attribute-delete.component';

describe('AttributeDeleteComponent', () => {
  let component: AttributeDeleteComponent;
  let fixture: ComponentFixture<AttributeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
