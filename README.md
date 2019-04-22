## About
An accordion component - a set of expanding sections. Only one section can be expanded at a time.
When one section is expanded, all other sections are collapsed.

## Getting started

```
npm install bayan@latest --save
```

`import { AccordionModule } from 'bayan';`

Add `AccordionModule` to the imports array in your module.

## Basic usage

```
<accordion>
  <acc-section headerText="headerText" [sectionIndex]="index" [isExpanded]="isExpanded" (sectionExpanded)="onSectionExpanded($event)">
    your HTML contents here
  </acc-section>
  <acc-section headerText="headerText" [sectionIndex]="index" [isExpanded]="isExpanded" (sectionExpanded)="onSectionExpanded($event)">
    your HTML contents here
  </acc-section>
  <acc-section headerText="headerText" [sectionIndex]="index" [isExpanded]="isExpanded" (sectionExpanded)="onSectionExpanded($event)">
    your HTML contents here
  </acc-section>
</accordion>
```
## Parameters for the `<acc-section>`:
- `headerText` - text of the accordion section header
- `sectionIndex`- this number will be passed to the sectionExpanded event handler
- `sectionExpanded` - this event is emitted every time an accordion section is expanded. It's passed the sectionIndex.