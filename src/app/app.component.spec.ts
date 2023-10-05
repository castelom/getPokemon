import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;
  

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  describe('Testes de inicialização', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it(`should have as title 'pokemon'`, () => {
      expect(component.title).toEqual('Pokemon');
    });

    it('should render title', () => {
      component.changePokeSpan("Picachu")
      fixture.detectChanges();
      const compiled = fixture.nativeElement as Document;
      expect(compiled.querySelector('span')?.textContent).toContain('Picachu');
    });
  });
});
