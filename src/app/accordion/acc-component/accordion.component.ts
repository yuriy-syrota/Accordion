import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, ContentChildren } from '@angular/core';
import { AccSectionComponent } from '../acc-section/acc-section.component';


@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @ContentChildren(AccSectionComponent) sections : QueryList<AccSectionComponent>; // used to enumerate the acc-sections

  constructor() { }

  onClick(event: MouseEvent)
  {
    event.stopPropagation(); // this is to prevent the parent accordion to collapse the section if this accordion is nested

    var clickedElement = <HTMLElement>event.toElement;

    if (clickedElement.classList.contains('acc-section-header')) // this is to avoid collapsing the section when the section contents is clicked
    {
      this.sections.filter(s => s.isExpanded).forEach(element => 
      {
        if (element.Id != clickedElement.id) // this is to avoid collapsing the section that is clicked
        {
          element.collapse(); // collapse all the other sections
        }
      });
    }
  }
}
