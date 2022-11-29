import { RequestsService } from './../../../services/requests.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent implements OnInit {
  requestForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private requestsService: RequestsService
  ) {}

  roles: any[] = [];
  apps: any[] = [];

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      roleNegId: [''],
      appId: [''],
    });

    this.getNewRequestOptions();
    console.log(this.roles); 

    console.log(this.roles.find((role) => role.rolNegId === this.requestForm.value.roleNegId));
    
    
  }

  getNewRequestOptions() {
    this.requestsService.getNewRequestOptions().subscribe((res: any) => {

      const pepe = JSON.stringify(res); 
      const pepito = JSON.parse(pepe);

      const caca = pepito.filter((algo: any) => {return !!algo.aplicativos});
      
      caca.forEach((value: any) => {
        const role = {
          rolNegId: value.rolNegId,
          nombre: value.descripcion,
          aplicativos: value.aplicativos,
        };

        this.roles.push(role);
    
      });
    });
  }

  getAppsByRole(){
    const rolcito = this.requestForm.value.roleNegId;
    const lala = this.roles.find((role) => {

      
      return role.rolNegId == rolcito;
    });  
    
    this.apps = [...lala.aplicativos];
  }

  createRequest(){
    const appId = Number.parseInt(this.requestForm.value.appId);
    const roleNegId = Number.parseInt(this.requestForm.value.roleNegId);

    console.log(appId, roleNegId);

    this.requestsService.createNewRequest(roleNegId, appId).subscribe((res: any) => {
      console.log(res);
    });
    
  }

  

}
