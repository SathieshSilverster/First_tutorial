import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetstartPage } from './getstart.page';

describe('GetstartPage', () => {
  let component: GetstartPage;
  let fixture: ComponentFixture<GetstartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetstartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
