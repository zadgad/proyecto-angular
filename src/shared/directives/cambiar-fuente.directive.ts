import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirCambiarFuente]'
})
export class CambiarFuenteDirective implements OnInit {
  @Input() public fuente: string;
  @Input() public dirCambiarFuente: boolean;

  constructor(private _elem: ElementRef) {
    // console.log('constructor directiva', this._elem);
    this.fuente = 'Comic Sans MS';
    this.dirCambiarFuente = true;
  }

  @HostListener('mouseenter') public onMouseEnter() {
    if (this.dirCambiarFuente) {
      this._elem.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') public onMouseLeave() {
    if (this.dirCambiarFuente) {
      this._elem.nativeElement.style.fontWeight = '100';
    }
  }

  public ngOnInit(): void {
    // console.log('onInit directiva', this._elem);
    this._elem.nativeElement.style.fontFamily = this.fuente;
  }
}
