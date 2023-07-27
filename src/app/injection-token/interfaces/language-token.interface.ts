import {InjectionToken} from '@angular/core';
export interface Token {
  language : 'ENG' | 'ESP',
  country: 'USA' | 'BO' | 'BR'
}

export const LANGUAGE_COUNTRY_TOKEN = new InjectionToken<Token>('token for language and country');
