import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Directive({
  selector: '[scrollSpyContent]'
})
export class ScrollSpyContentDirective {
  @Input('scrollSpyContent') public target;

  private _currentContent: string;
  @Input() public sscCurrentContent: string;
  @Output() public sscCurrentContentChange = new EventEmitter<string>();
  @Input() public sscDirection: "row" | "colmun" = "row";

  constructor(private _element: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let nowContent: any = Array.from<any>(this._element.nativeElement.children)
      .filter(child => this.target === child.tagName)
      .reverse()
      .find(child => this.sscDirection === "row" ?
        (child.offsetTop - event.target.offsetTop) <= event.target.scrollTop :
        (child.offsetLeft - event.target.offsetLeft) <= event.target.scrollLeft
      );
    if (!nowContent) return;

    if (nowContent.id !== this._currentContent) {
      this._currentContent = nowContent.id;
      this.sscCurrentContentChange.emit(this._currentContent);
    }
  }
}
