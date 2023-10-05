import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;
  

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  fdescribe('Testes de inicialização', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it(`should have as title 'pokemon'`, () => {
      expect(component.title).toEqual('pokemon');
    });

    it('should render title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('span')?.textContent).toContain('Pokemon');
    });
  });
});
