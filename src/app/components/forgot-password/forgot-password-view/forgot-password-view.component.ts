import { QuestionService } from './../../../services/question.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-view',
  templateUrl: './forgot-password-view.component.html',
  styleUrls: ['./forgot-password-view.component.css']
})
export class ForgotPasswordViewComponent implements OnInit {

  resetPassword: FormGroup = new FormGroup({});

  submitted: boolean = false;

  constructor(private fb: FormBuilder, private questionService: QuestionService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.resetPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      questionId: ['', Validators.required],
      answer: ['', Validators.required]
    });

    this.getQuestions();
  }

  questions: any;

  getQuestions() {
    this.questionService.getQuestions().subscribe(
      (res) => {
        this.questions = res;
      }
    );
  }


  validate() {
    this.submitted = true;
    
    if (this.resetPassword.value.email && this.resetPassword.value.questionId && this.resetPassword.value.answer) {
      this.authService.recoverPassword(this.resetPassword.value.email, Number.parseInt(this.resetPassword.value.questionId), this.resetPassword.value.answer).subscribe(
        (res) => {
          const newPass = res.body.data;
          alert('Su nueva contraseña es: ' + newPass);
          this.router.navigateByUrl('/inicio');
          
        }
      );
    }
    
  }


}
