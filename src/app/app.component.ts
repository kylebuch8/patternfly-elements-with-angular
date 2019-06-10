import { Component, ViewChild, ElementRef } from '@angular/core';
import "@patternfly/pfe-card";
import "@patternfly/pfe-cta";
import "@patternfly/pfe-accordion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("accordion") accordion: ElementRef;

  ngAfterViewInit() {
    this.accordion.nativeElement.toggle(0);
  }
}
