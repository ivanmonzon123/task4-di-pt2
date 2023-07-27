import { Component, OnInit } from '@angular/core';
import {FirstService} from '../../service/first/first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  viewProviders: [FirstService]
})
export class FirstComponent implements OnInit {

  constructor( private _firstService: FirstService) { }

  ngOnInit(): void {
    this._firstService.greeting();
  }

}
