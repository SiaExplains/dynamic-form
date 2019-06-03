import { ElementBase } from './element-base';

export class CheckboxElement extends ElementBase<string> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
