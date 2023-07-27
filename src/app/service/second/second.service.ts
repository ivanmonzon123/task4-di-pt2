import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

  secondServiceId!: string;

  constructor() {
    this.secondServiceId = Math.random().toFixed(3);
  }

  greeting(): void {
    console.warn('Hi I am a instance of second-service my id is: ', this.secondServiceId);
  }
}
