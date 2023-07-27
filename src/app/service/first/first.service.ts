import {Injectable} from '@angular/core';

@Injectable()
export class FirstService {

  firstServiceId!: string;

  constructor() {
    this.firstServiceId = Math.random().toFixed(3);
  }

  greeting(): void {
    console.warn('Hi I am a instance of first-service my id is: ', this.firstServiceId);
  }
}
