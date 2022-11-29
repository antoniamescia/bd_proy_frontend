import { RequestsService } from './../../../services/requests.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Row } from 'src/app/models/row.model';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements OnInit {

  
  
  constructor(private authService: AuthService, private router: Router, private requestService: RequestsService) {}

  ngOnInit(): void {
    this.getRequests();

    console.log(this.rows);
    console.log(this.requests);
        
  }

  requests: any[] = [];

  rows : any[] = [];

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio');
  }

  getRequests() {
    this.requestService.getRequests().subscribe(
      (res) => {
        Object.values(res).forEach((value: any) => {
          

          const request = {
            aplicacion: value.aplicacion,
            appId: value.appId,
            email: value.email,
            estado: value.estado,
            fechaAutorizacion: value.fechaAutorizacion,
            fechaSolicitud: value.fechaSolicitud,
            nombre: value.nombre,
            permiso: value.permiso,
            rolNegId: value.rolNegId,
            userId: value.userId,
          }

          this.requests.push(request);

        }); 
      }
    );
  }

  approveRequest(estado: any, userId: any, appId: any, rolNegId: any) {
    this.requestService.handleRequest(estado, userId, appId, rolNegId).subscribe(
      (res) => {
        console.log(res.body);
      }
    );
    window.location.reload();
  }

  rejectRequest(estado: any, userId: any, appId: any, rolNegId: any) {
    this.requestService.handleRequest(estado, userId, appId, rolNegId).subscribe(
      (res) => {
        console.log(res.body);
      }
    );
    window.location.reload();
  }
}
