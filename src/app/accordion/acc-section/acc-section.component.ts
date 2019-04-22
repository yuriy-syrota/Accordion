import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-section',
  templateUrl: './acc-section.component.html',
  styleUrls: ['./acc-section.component.scss']
})
export class AccSectionComponent implements OnInit {

  @Input() headerText: string; // section header text
  @Input() isExpanded: boolean = false; // is the sectino expanded
  @Input() sectionIndex: number = 0; // section index
  @Output() sectionExpanded: EventEmitter<number> = new EventEmitter<number>(); // section expanded

  Id: string;

  @ViewChild('sectionContent') sectionContent: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.Id = this.generateId(); // this Id is used by the parent accordion element to identify sections

    // if the section is set to be initially expanded, expand it
    if (this.isExpanded)
    {
      this.setElementHeight(this.sectionContent.nativeElement, this.sectionContent.nativeElement.scrollHeight.toString());
    }
  }

  // generates a random number to be used as id 
  private generateId(): string
  {
    var number = Math.random() * 1000000000;
    return Math.round(number).toString();
  }

  // toggles the section between collapsed and expanded
  toggleSection()
  {
    this.isExpanded = !this.isExpanded;
   
    if (this.isExpanded) {
      if (this.sectionExpanded)
      {
        this.sectionExpanded.emit(this.sectionIndex); // notify the parent accordion that a section is expanded
      }

      this.setElementHeight(this.sectionContent.nativeElement, this.sectionContent.nativeElement.scrollHeight.toString()); // this is to allow the transition to work - transitions don't work with hight set to "auto"
    }
    else {
      this.collapseElement(this.sectionContent.nativeElement);
    }

    if (this.isExpanded)
    {
      // timeout is needed to allow the transition to finish
      this.setElementHeightWithDelay(this.sectionContent.nativeElement, 'auto', 260); // set div height to "auto" to allow the section to expand in case there are nested accordions or other dynamic content
    }
  }

  // called by the parent accordion component to collapse the section
  collapse()
  {
    this.isExpanded = false;
    this.collapseElement(this.sectionContent.nativeElement);
  }

  // collapses the given HTML element
  private collapseElement(element: HTMLElement)
  {
    this.setElementHeight(element, element.scrollHeight.toString()); // this sets the hight to a specific number to change it from "auto" to enable the transition to work
    this.setElementHeightWithDelay(element, '0', 10); // actually "collapse" the element with transition
  }

  // sets the height of the given HTML element to the given value
  private setElementHeight(element: HTMLElement, height: string)
  {
    element.style.height = (height == 'auto' ? height : `${height}px`);
  }

  // sets the height of the given HTML element to the given value with the given delay
  private setElementHeightWithDelay(element: HTMLElement, height: string, delay: number)
  {
    if (delay > 0)
    {
      setTimeout(() => this.setElementHeight(element, height), delay);
    }
    else
    {
      this.setElementHeight(element, height);
    }
  }

}
