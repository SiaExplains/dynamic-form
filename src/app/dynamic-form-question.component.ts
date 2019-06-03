import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { ElementBase }     from './elements/element-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: ElementBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
