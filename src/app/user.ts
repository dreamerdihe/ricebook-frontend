import { zip } from 'rxjs';

export class User {
  public accountName: string;
  public email: string;
  public phoneNumber: string;
  public dateOfBirth: string;
  public zipcode: string;
  public password: string;
  public displayName?: string;
  constructor( accountName: string, email: string, phoneNumber: string,
    dateOfBirth: string, zipcode: string, password: string, displayName?: string
  ) {
    this.accountName = accountName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateOfBirth;
    this.zipcode = zipcode;
    this.password = password;
    this.displayName = displayName;
   }
}
