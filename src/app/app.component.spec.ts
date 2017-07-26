import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ComponentFixture } from "@angular/core/testing";
import { DummyService } from "./dummy.service";

const dummyServiceStub = {
  getName: () => 'Nik',
  getNameAsync: () => {
    return Promise.resolve('123');
  }
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: DummyService, useValue: dummyServiceStub
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Nik');
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.titleAsync).toEqual(Promise.resolve('123'));
  }));

  it(`should have as title 'Hey! after changeTitle'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.changeTitle();
    expect(app.title).toEqual('Hey');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Nik');
  }));

  it('should render title Welcome to Hey! in a h1 tag after click', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app: AppComponent = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    app.changeTitle();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Hey!');
  }));
});
