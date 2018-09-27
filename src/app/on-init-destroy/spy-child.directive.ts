import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from '../services/logger.service';

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>
@Directive({selector: '[lch-spy]'})
export class SpyChildDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) { }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}
