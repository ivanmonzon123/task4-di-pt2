import { Component, Inject, OnInit } from '@angular/core';
import { LANGUAGE_COUNTRY_TOKEN, Token } from './interfaces/language-token.interface';

@Component({
  selector: 'app-injection-token',
  templateUrl: './injection-token.component.html',
  styleUrls: ['./injection-token.component.scss']
})
export class InjectionTokenComponent implements OnInit {

  injectionToken!: Token;

  constructor(@Inject(LANGUAGE_COUNTRY_TOKEN) private languajeCountryToken: Token) { 
    this.injectionToken = languajeCountryToken;
  }

  ngOnInit(): void {
  }

}
