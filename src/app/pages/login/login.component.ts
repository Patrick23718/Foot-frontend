import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JoueurService } from 'src/app/shared/services/joueur.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  constructor(private _joueur: JoueurService) {}

  ngOnInit(): void {}

  userLogin(loginForm: NgForm) {
    console.log(this.user.email + ' mot de passe ' + this.user.password);
    console.log('valeurs: ' + JSON.stringify(loginForm.value));
  }
}
