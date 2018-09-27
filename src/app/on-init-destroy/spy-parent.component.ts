import { Component } from '@angular/core';

import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'lch-on-init-destroy-parent',
  templateUrl: './spy-parent.component.html',
  styles: [
     '.padre {background: khaki;}',
     '.personas {background: LightYellow; padding: 0 8px}'
  ],
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Pepito';
  gente: string[] = ['Jaime', 'Jaimito'];
  spyLog: string[];

  constructor(private logger: LoggerService) {
    this.spyLog = logger.logs;
  }

  addHero() {
    if (this.newName.trim()) {
      this.gente.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.gente.splice(this.gente.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- Reset --');
    this.gente.length = 0;
    this.logger.tick();
  }
}
