import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, FormControl, Validators }                 from '@angular/forms';

import { ElementBase }  from './elements/element-base';
import { MockMetaDataService } from './services/mock-metadata.service';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [MockMetaDataService]
})
export class AppComponent implements OnInit {
  metadata: any[];

  constructor(service: MockMetaDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.metadata = service.getMockMetaData();
    this.elements = this.metadata;
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  @Input() elements: ElementBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  ngOnInit() {

    this.form = this.toFormGroup(this.elements);
  }

  onSubmit() {
    console.log('test');
    this.payLoad = JSON.stringify(this.form.value);
    alert(`Form saved with these data: ${this.payLoad}`);
  }

  toFormGroup(elements: ElementBase<any>[] ) {
    let group: any = {};

    elements.forEach(elm => {
      group[elm.key] = elm.required ? new FormControl(elm.value || '', Validators.required)
                                              : new FormControl(elm.value || '');
    });
    return new FormGroup(group);
  }
}
