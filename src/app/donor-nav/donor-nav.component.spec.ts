
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DonorNavComponent } from './donor-nav.component';

describe('DonorNavComponent', () => {
  let component: DonorNavComponent;
  let fixture: ComponentFixture<DonorNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [DonorNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
