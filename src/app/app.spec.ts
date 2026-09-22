import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should register the film details route before the wildcard 404 route', () => {
    const filmDetailsIndex = routes.findIndex((route) => route.path === 'film/:id');
    const wildcardIndex = routes.findIndex((route) => route.path === '**');

    expect(filmDetailsIndex).toBeGreaterThan(-1);
    expect(wildcardIndex).toBeGreaterThan(-1);
    expect(filmDetailsIndex).toBeLessThan(wildcardIndex);
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, film-collection');
  });
});
