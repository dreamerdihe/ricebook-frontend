import { Component, OnInit } from '@angular/core';
import { RegisterationService} from './registeration.service';


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

  constructor(private registerService: RegisterationService) {}

  ngOnInit() {
  }

  onSubmit(valid) {
    if (valid) {
      this.registerService.register(this.accountNameText, this.emailText, this.phoneNumberText,
        this.dateOfBirthText, this.zipcodeText, this.password2Text)
        .subscribe(res => {
        if (res['result'] === 'success') {
          alert('registration success');
        }
        if (res['result'] === 'username duplicate') {
          alert('username has been token');
        }
      });
    }
  }
}
