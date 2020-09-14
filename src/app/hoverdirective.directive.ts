import { Directive,ElementRef,OnInit,HostListener, Input } from '@angular/core';
//https://www.sitepoint.com/practical-guide-angular-directives/
//https://www.geeksforgeeks.org/angular-7-directives/
//https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-2-hostlistener-1b66d45b3e3d
@Directive({
  selector: '[appHoverdirective]'
})
export class HoverdirectiveDirective {

  constructor(private elementRef:ElementRef) { 

     this.elementRef.nativeElement.style.backgroundColor="GREEN";
     this.elementRef.nativeElement.style.color="RED";
  }
  
  @Input() colorToBeInput :String;
  @HostListener('mouseenter')
  onMouseOverFunc()
  {
      this.elementRef.nativeElement.style.color="WHITE";
  }

  @HostListener('mouseleave')
  onmouseleaveFunc()
  {
    this.elementRef.nativeElement.style.color="YELLOW";
  }

  @HostListener('mousemove')
  onMouseKey()
  {
    this.elementRef.nativeElement.style.color=this.colorToBeInput;
  }
  ngOnInit()
  {

  }
}
