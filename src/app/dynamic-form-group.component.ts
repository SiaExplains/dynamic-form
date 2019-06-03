import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { ElementBase }     from './elements/element-base';

@Component({
  selector: 'app-form',
  templateUrl: './dynamic-form-group.component.html'
})
export class DynamicFormGroupComponent {
  @Input() element: ElementBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.element.key].valid; }
}
