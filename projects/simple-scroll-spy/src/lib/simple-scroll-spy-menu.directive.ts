import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[scrollSpyMenu]'
})
export class ScrollSpyMenuDirective {
    @Input('scrollSpyMenu') public contentId: string;

    @Input() public ssmActiveClassName = "active";
    @Input() set ssmCurrentContent(value: string) {
        if (this.contentId === value) {
            this._renderer.addClass(this._element.nativeElement, this.ssmActiveClassName);
        } else {
            this._renderer.removeClass(this._element.nativeElement, this.ssmActiveClassName);
        }
    }

    @Input() public ssmScrollBehavior: ScrollBehavior = "smooth";
    @Input() public ssmScrollBlock: ScrollLogicalPosition = "start";
    @Input() public ssmScrollInline: ScrollLogicalPosition = "nearest";

    constructor(private _element: ElementRef, private _renderer: Renderer2) { }

    @HostListener('click', ['$event'])
    onClick(event: any) {
        try {
            document.querySelector(`#${this.contentId}`).scrollIntoView({
                behavior: this.ssmScrollBehavior,
                block: this.ssmScrollBlock,
                inline: this.ssmScrollInline
            });
        } catch (e) {

        }

    }
}
