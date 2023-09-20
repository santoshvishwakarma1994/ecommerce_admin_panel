import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router){

  }
  items: MenuItem[]  = [];

  activeItem: MenuItem | undefined;
  ngOnInit() {
    this.router.navigateByUrl('/attributes/list');
    this.items = [
      { label: 'Attributes', icon: 'pi pi-fw pi-home', routerLink: '/attributes/list' },
      { label: 'Categories', icon: 'pi pi-fw pi-calendar', routerLink: '/categories/list' },
      { label: 'Products', icon: 'pi pi-fw pi-pencil', routerLink: '/products/list' }
    ];
      this.activeItem = this.items[0];
  }
}
