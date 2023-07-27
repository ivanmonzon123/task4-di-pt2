import {Component, Host, OnInit} from '@angular/core';
import {FirstService} from '../../service/first/first.service';
import { SecondService } from '../../service/second/second.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  // constructor(@Host() private _firstService: FirstService) { }
  constructor(@Host() private _secondservice: SecondService) { }

  ngOnInit(): void {
    // this._firstService.greeting();
    this._secondservice.greeting();
    // The _secondservice will not be injected because 
    // both he and his father do not contain that service
  }

}
