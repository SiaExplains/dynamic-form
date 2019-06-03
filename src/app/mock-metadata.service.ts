import { Injectable }       from '@angular/core';

import { ElementBase }     from './elements/element-base';
import { DropdownElement } from './elements/element-dropdown';
import { TextboxElement }  from './elements/element-textbox';

@Injectable()
export class MockMetaDataService {

  // ino mishe vasl kard be firebase ya service/api
  // ama felan va movaghatan baraye sarfe jooi data inja mock shode
  getMockMetaData() {

    let elements: ElementBase<any>[] = [

      new DropdownElement({
        key: 'level',
        label: 'Developer level',
        options: [
          {key: 'internship',  value: 'Internship'},
          {key: 'junior',  value: 'Junior Developer'},
          {key: 'senior',   value: 'Senior Developer'},
          {key: 'lead', value: 'Leadership'}
        ],
        order: 3
      }),

      new TextboxElement({
        key: 'firstName',
        label: 'First name',
        value: 'Siavash',
        required: true,
        order: 1
      }),

      new TextboxElement({
        key: 'lastName',
        label: 'Last name',
        value: 'Ghanbari',
        required: true,
        order: 2
      }),

      new TextboxElement({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      })
    ];

    return elements.sort((item1, item2) => item1.order - item2.order);
  }
}
