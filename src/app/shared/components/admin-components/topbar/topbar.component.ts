import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.dropdownbtn();
  }

  dropdownbtn() {
    $('.ui.dropdown').dropdown();
    // $(document).ready(function () {
    // });
  }

  sidebar() {
    $('.sidebar-menu-toggler').on('click', function () {
      var target = $(this).data('target');
      $(target)
        .sidebar({
          dinPage: true,
          transition: 'overlay',
          mobileTransition: 'overlay',
        })
        .sidebar('toggle');
    });
  }
}
