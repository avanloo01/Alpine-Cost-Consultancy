import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('scrollTarget', { static: true }) scrollTarget!: ElementRef;

  scrollToBottom() {
    this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}
