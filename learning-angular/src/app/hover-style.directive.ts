import { HostListener } from '@angular/core';
import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input () borderBottom: string;
  @Input () fontWeight: string;
  constructor(private elm: ElementRef) { 

  }


  @HostListener('mouseenter') onHover(btn){
    if(this.borderBottom){
      this.elm.nativeElement.style.borderBottom = "2px solid "+this.borderBottom;
    }

    if(this.fontWeight){
      this.elm.nativeElement.style.fontWeight = this.fontWeight;
     }
    }

  @HostListener('mouseleave') onLeave(btn){
    this.elm.nativeElement.style.borderBottom = "";
    this.elm.nativeElement.style.fontWeight = ""

    }

  
  

}
