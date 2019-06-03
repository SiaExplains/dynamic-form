import { Component }       from '@angular/core';

import { MockMetaDataService } from './mock-metadata.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h3>Sample project for [Barsa Novin Ray Company]</h3>
      <app-dynamic-form [elements]="metadata"></app-dynamic-form>
    </div>
  `,
  providers:  [MockMetaDataService]
})
export class AppComponent {
  metadata: any[];

  constructor(service: MockMetaDataService) {
    this.metadata = service.getMockMetaData();
  }
}
