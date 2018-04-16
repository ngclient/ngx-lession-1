import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  AbstractControl,
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  initForm(): any {
    // validate
    this.loginForm = this.formBuiler.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });

    this.userName = this.loginForm.controls['userName'];
    this.passWord = this.loginForm.controls['passWord'];
  }

  public loginForm: FormGroup;
  public userName: AbstractControl;
  public passWord: AbstractControl;
  summited: boolean = false;


  constructor(
    private formBuiler: FormBuilder,
    private authService: AuthserviceService
  ) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(e: Event, formData: any) {
    e.stopPropagation();
    this.summited = true;
    if (!this.loginForm.valid) {
      console.log(formData)
      return;
    }
    let auth = this.authService.isAuthentication(formData);
    console.log('logined', auth);
  }

  reset() {
    this.loginForm = this.formBuiler.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
    this.userName = this.loginForm.controls['userName'];
    this.passWord = this.loginForm.controls['passWord'];
  }

}
