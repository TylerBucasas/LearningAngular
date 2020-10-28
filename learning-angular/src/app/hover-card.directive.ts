import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCardDirective {
  @Input () firstOrLast?: boolean;

  constructor(private elm: ElementRef) { 

  }

  @HostListener('mouseenter') onHover(btn){
    if(this.firstOrLast){
      this.elm.nativeElement.style.border = "30px solid purple"
    }
    
    }

  @HostListener('mouseleave') onLeave(btn){
    if(this.firstOrLast){
      this.elm.nativeElement.style.border = ""
    }

    }

}
