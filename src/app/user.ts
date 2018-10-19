export class User {
  public accountName: string;
  public email: string;
  public phoneNumber: string;
  public dateOfBirth: string;
  public zipcode: string;
  public password: string;
  public headline?: string;
  public displayName?: string;
  public portrait?: string;
  constructor( accountName: string, email: string, phoneNumber: string,
    dateOfBirth: string, zipcode: string, password: string, displayName?: string, headline?: string, portrait?: string
  ) {
    this.accountName = accountName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateOfBirth;
    this.zipcode = zipcode;
    this.password = password;
    this.displayName = displayName;
    this.headline = headline;
    this.portrait = portrait;
   }

   updateHeadline (headline: string) {
    this.headline = headline;
   }
}
