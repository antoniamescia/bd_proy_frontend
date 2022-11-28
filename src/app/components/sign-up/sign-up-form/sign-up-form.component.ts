import { QuestionService } from './../../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  multistepForm: FormGroup = new FormGroup({});

  submitted: boolean = false;

  step: number = 1;

  departamentos: string[] = [
    'Artigas',
    'Canelones',
    'Cerro Largo',
    'Colonia',
    'Durazno',
    'Flores',
    'Florida',
    'Lavalleja',
    'Maldonado',
    'Montevideo',
    'Paysandú',
    'Río Negro',
    'Rivera',
    'Rocha',
    'Salto',
    'San José',
    'Soriano',
    'Tacuarembó',
    'Treinta y Tres'
  ];


  questions: any;


  multistepFormControls = this.multistepForm.controls;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private questionService: QuestionService) {}
  
  
  ngOnInit(): void {
    
    this.multistepForm = this.fb.group({
      signUp: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }),
      personalData: this.fb.group({
        departamento: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
      }),
      securityQuestions: this.fb.group({
        questionId: [Validators.required],
        answer: ['', Validators.required],
      })
    });
    

    this.getQuestions();
  }


  getQuestions(){
    this.questionService.getQuestions().subscribe(
      (data) => {
        // Save questions in array
        this.questions = data;
        console.log(this.questions);
        
      }
    )
  }
        
  
  
  


  submit() {
    this.step += 1;
    if(this.step === 5){
      this.submitted = true;
      
      console.log(this.multistepForm.value);

      const user = {
        "Nombres": this.multistepForm.value.signUp.name,
        "Apellidos": this.multistepForm.value.signUp.lastName,
        "Email": this.multistepForm.value.signUp.email,
        "Password": this.multistepForm.value.signUp.password,
        "Departamento": this.multistepForm.value.personalData.departamento,
        "Ciudad": this.multistepForm.value.personalData.city,
        "Direccion": this.multistepForm.value.personalData.address,
      }

      const question = {
        "IdPregunta": Number.parseInt(this.multistepForm.value.securityQuestions.questionId),
        "Respuesta": this.multistepForm.value.securityQuestions.answer
      }

      this.authService.signUp(user, question).subscribe(
        (res) => {
          if (res.status == 200 || res.status == 201) {
            alert('Usuario registrado con éxito');
            this.router.navigateByUrl('/inicio');
          } else {
            alert('Ha ocurrido un error al crear su usuario.');
          }
        });
    }
  }

  previous(){
    this.step -= 1;
  }

  

}
