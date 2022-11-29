import { RequestsService } from './../../../services/requests.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  requestForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private requestsService: RequestsService) { }

  roles : any[] = [];

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      roleNegId: [''],
      appId: [''],
      userId: [''],
    });

    this.getNewRequestOptions();
    console.log(this.roles);
    
    
    
  }

  getNewRequestOptions() {
    this.requestsService.getNewRequestOptions().subscribe(
      (res) => {
        Object.values(res).forEach((value: any) => {
          const role = {
            rolNegId: value.rolNegId,
            nombre: value.descripcion,
            aplicativos: value.aplicativos,
          }

          this.roles.push(role);
          
          
        });
          
      }
    );
  }


}
