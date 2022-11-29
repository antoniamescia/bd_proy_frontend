import { MenuService } from './../../../services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-admin-view',
  templateUrl: './non-admin-view.component.html',
  styleUrls: ['./non-admin-view.component.css']
})
export class NonAdminViewComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private menuService: MenuService) { }

  ngOnInit(): void {
    this.getAppsAndMenus();
  }

  appsAndMenus: any[] = [];

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio');
  }

  getAppsAndMenus() {
    this.menuService.getAppsAndMenus().subscribe(
      (res) => {
        Object.values(res).forEach((value: any) => {
          console.log(value);
          const appAndMenu = {
            aplicativo: value.aplicativo,
            rolNegocio: value.roleNegocio,
            menu: value.menu,
          }

          this.appsAndMenus.push(appAndMenu);
          console.log(appAndMenu);
          
        }
      );
      }
    );
  }

}
