import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  popup = false

  constructor(private _ToastrService: ToastrService) {
  }

  hireForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    details: new FormControl(null, [Validators.required])
  })
  handelHireForm(hireForm: FormGroup) {
    if (hireForm.valid) {
      emailjs.init("HxbPyTwn2OsU5-U_G")
      emailjs.send("service_fytdqqa", "template_imkqc6j", {
        email: hireForm.value.email,
        details: hireForm.value.details,
        userName: hireForm.value.userName,
        country: hireForm.value.country,
      });
      this._ToastrService.success("", "e-mail send successfully")
      this.popup = false
      hireForm.reset()
    }
  }
  showPopup() {
    this.popup = true
  }




}


