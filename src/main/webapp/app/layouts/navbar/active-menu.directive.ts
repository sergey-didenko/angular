import { Directive, OnInit, ElementRef, Renderer, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Languages } from 'app/shared/language/language.constants';

@Directive({
    selector: '[tempActiveMenu]'
})
export class ActiveMenuDirective implements OnInit {
    @Input() tempActiveMenu: string;

    constructor(private el: ElementRef, private renderer: Renderer, private translateService: TranslateService) {}

    ngOnInit() {
        this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
            this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(Languages[0].iso);
    }

    updateActiveFlag(selectedLanguage) {
        if (this.tempActiveMenu === selectedLanguage) {
            this.renderer.setElementClass(this.el.nativeElement, 'mat-menu-item-active', true);
        } else {
            this.renderer.setElementClass(this.el.nativeElement, 'mat-menu-item-active', false);
        }
    }
}
