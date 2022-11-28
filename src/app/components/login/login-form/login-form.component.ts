import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  show: boolean = false;

  submitted: boolean = false;

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}


  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.submitted = true;
      this.authService.login(val.email, val.password).subscribe(
        (res) => {          
          if (res.status == 200) {
            this.router.navigateByUrl('/admin');
          } else {
            this.submitted = false;
            alert('Usuario o contraseña incorrectos');
          }
        });
    }
  }
}
