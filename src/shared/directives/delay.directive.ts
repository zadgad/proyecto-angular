import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {firstValueFrom, timer} from 'rxjs';

@Directive({
  selector: '[dirDelay]'
})
export class DelayDirective {
  @Input() public set dirDelay(tiempo: number) {
    // const algo = setTimeout(() => {
    //   this._viewContainer.createEmbeddedView(this._templateRef);
    //   clearTimeout(algo);
    // }, tiempo);
    // console.log('algo', algo);
    firstValueFrom(timer(tiempo)).then(() => {
      this._viewContainer.createEmbeddedView(this._templateRef);
    });
  }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) {}
}
