import {Component, Host, OnInit} from '@angular/core';
import {FirstService} from '../../service/first/first.service';
import {SecondService} from '../../service/second/second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  // viewProviders: [SecondService]
})
export class SecondComponent implements OnInit {

  constructor(@Host() private _firstService: FirstService) { }

  ngOnInit(): void {
    this._firstService.greeting();
  }

}
