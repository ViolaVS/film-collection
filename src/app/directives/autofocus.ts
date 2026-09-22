import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus {
  private elem = inject(ElementRef);
  ngOnInit() {
    this.elem.nativeElement.focus();
  }
}
