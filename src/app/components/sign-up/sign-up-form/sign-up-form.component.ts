import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  multistepForm: FormGroup = new FormGroup({
    signUp: new FormGroup({
      name: new FormControl(['', Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }),
    personalData: new FormGroup({
      departamento: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    }),
    securityQuestions: new FormGroup({
      1: new FormControl('', Validators.required),
      answer1: new FormControl('', Validators.required),
      2: new FormControl('', Validators.required),
      answer2: new FormControl('', Validators.required),
      3: new FormControl('', Validators.required),
      answer3: new FormControl('', Validators.required),
    })
  });

  step: any = 1;

  departamentos: Array<any> = [
    {name: 'Artigas', cities: []},
    {name: 'Canelones', cities: []},
    {name: 'Cerro Largo', cities: []},
    {name: 'Colonia', cities: []},
    {name: 'Durazno', cities: []},
    {name: 'Flores', cities: []},
    {name: 'Florida', cities: []},
    {name: 'Lavalleja', cities: []},
    {name: 'Maldonado', cities: []},
    {name: 'Montevideo', cities: []},
    {name: 'Paysandú', cities: []},
    {name: 'Río Negro', cities: []},
    {name: 'Rivera', cities: []},
    {name: 'Rocha', cities: []},
    {name: 'Salto', cities: []},
    {name: 'San José', cities: []},
    {name: 'Soriano', cities: []},
    {name: 'Tacuarembó', cities: []},
    {name: 'Treinta y Tres', cities: []},
  ];

  questions: Array<any> = [
    '¿Cuál era tu apodo de pequeño/a?',
    '¿Cuál es tu película favorita?',
    '¿En qué ciudad conociste a tu pareja?',
    '¿Cuál era el nombre de tu primera mascota?',
    '¿En qué año terminaste secundaria?',
    '¿Quién era el héroe de tu infancia?'
  ]


  constructor(private fb: FormBuilder, private router: Router) {
    this.multistepForm = this.fb.group({
      signUp: this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }),
      personalData: this.fb.group({
        departamento: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
      }),
      securityQuestions: this.fb.group({
        1: [''],
        answer1: [''],
        2: [''],
        answer2: [''],
        3: [''],
        answer3: [''],
        4: [''],
        answer4: [''],
        5: [''],
        answer5: [''],
        6: [''],
        answer6: ['']
      })
    });
  }


  ngOnInit(): void {
    
  }

  submit() {
    this.step += 1;
    if(this.step === 4){
      console.log(this.multistepForm.value);
      this.router.navigateByUrl('/inicio');
    }
  }

  previous(){
    this.step -= 1;
  }

}
