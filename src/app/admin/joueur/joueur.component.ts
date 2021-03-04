import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css'],
})
export class JoueurComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dropdownbtn() {
    $('.ui.modal').modal('show');
  }
}
