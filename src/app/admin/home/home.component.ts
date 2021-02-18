import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  joueurs: any[] = [
    {
      img: 'https://static.thenounproject.com/png/17241-200.png',
      nom: 'SIMO WAFO',
      poste: 'MLD',
      rating: '4',
      comment:
        'Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.',
    },
    {
      img:
        'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
      nom: 'NOUKIMI PATRICK',
      poste: 'AC',
      rating: '5',
      comment:
        'Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.',
    },
    {
      img: 'https://static.thenounproject.com/png/17241-200.png',
      nom: 'ONANA WILFRIED',
      poste: 'GK',
      rating: '3.5',
      comment:
        'Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.',
    },
    {
      img:
        'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
      nom: 'STANLEY ENONG',
      poste: 'MDG',
      rating: '1',
      comment:
        'Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
