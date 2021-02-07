import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumberPage } from './number.page';

describe('NumberPage', () => {
  let component: NumberPage;
  let fixture: ComponentFixture<NumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
