import { NgModule } from '@angular/core';
import { AccordionComponent } from './acc-component/accordion.component';
import { AccSectionComponent } from './acc-section/acc-section.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccSectionComponent
  ],
  imports: [
  ],
  exports: [
    AccordionComponent,
    AccSectionComponent
  ]
})
export class AccordionModule { }
