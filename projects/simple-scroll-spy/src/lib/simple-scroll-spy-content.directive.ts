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
    @Input() public sscDetector: 'top' | "middle" = "top";
    @Input() public sscLogging: true | false = false;

    constructor(private _element: ElementRef) { }

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let offsetHeight = (this.sscDetector === "top") ? event.target.offsetTop : (event.target.offsetHeight / 2) + event.target.offsetTop;
        let offsetLeft = (this.sscDetector === "top") ? event.target.offsetLeft : (event.target.offsetLeft / 2) - event.target.offsetLeft;

        if (this.sscLogging) {
            console.log({
                "offsetHeight": offsetHeight,
                "event.target.offsetTop": event.target.offsetTop,
                "event.target.offsetHeight": event.target.offsetHeight,
                "event.target.scrollTop": event.target.scrollTop,

            });
        }
        let nowContent: any = Array.from<any>(this._element.nativeElement.children)
            .filter(child => this.target === child.tagName)
            .reverse()
            .find(child => this.sscDirection === "row" ?
                (child.offsetTop - offsetHeight) <= event.target.scrollTop :
                (child.offsetLeft - offsetLeft) <= event.target.scrollLeft_
            );
        if (!nowContent) return;

        if (nowContent.id !== this._currentContent) {
            this._currentContent = nowContent.id;
            this.sscCurrentContentChange.emit(this._currentContent);
        }
    }
}
