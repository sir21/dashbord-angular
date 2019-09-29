import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;
  @Input('appTextColor') colorString: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor(this.colorString || this.defaultColor || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
