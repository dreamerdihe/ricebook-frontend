import { Component, OnInit } from '@angular/core';
import { RegisterationService} from './registeration.service';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  accountNameText: string;
  displayNameText: string;
  emailText: string;
  phoneNumberText: string;
  dateOfBirthText: string;
  zipcodeText: string;
  password1Text: string;
  password2Text: string;
  birthRestrict: Date;

  isSuccess = false;
  isDuplicate = false;

  constructor(private registerService: RegisterationService, private loginService: LoginService) {}

  ngOnInit() {
  }

  onSubmit(valid) {
    if (valid) {
      this.registerService.register(this.accountNameText, this.emailText, this.phoneNumberText,
        this.dateOfBirthText, this.zipcodeText, this.password2Text)
        .subscribe(res => {
        if (res['result'] === 'success') {
          this.isSuccess = true;
        }
      },
      err => {
        if (err.status === 409) {
          this.isDuplicate = true;
        }
      });
    }
  }
}
