import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements OnInit {

  
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  rows = [
    {
      name: 'John Doe',
      email: 'john@doe.com',
      app: 'App 2',
      role: 'Admin',
      requestDate: '2021-01-01',
      approvalDate: '2021-01-01',
      status: 'Aprobado',
    },
    {
      name: 'Jane Doe',
      email: 'jane@doe.com',
      app: 'App 3',
      role: 'Other role',
      requestDate: '2021-01-01',
      approvalDate: '2021-01-01',
      status: 'Denegado',
    },
    {
      name: 'John Smith',
      email: 'john@smith.com',
      app: 'App 3',
      role: 'Admin',
      requestDate: '2021-01-01',
      approvalDate: '2021-01-01',
      status: 'Pendiente',
    },
    {
      name: 'John Smith',
      email: 'john@smith.com',
      app: 'App 3',
      role: 'Admin',
      requestDate: '2021-01-01',
      approvalDate: '2021-01-01',
      status: 'Denegado',
    },
  ];

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio');
  }
}
