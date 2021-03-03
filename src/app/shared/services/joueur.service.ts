import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  constructor() {}

  showServerURL() {
    console.log(environment.SERVER_URL);
  }
}
