export class Follower {
  public portrait: String;
  public accountName: String;
  public headline: String;
  public id?: String;
  public displayName?: String;

  constructor(portrait: String, accountName: String, headline: String, id?: String,
              displayName?: String) {
              this.portrait = portrait;
              this.accountName = accountName;
              this.headline = headline;
              this.id = id;
              this.displayName = displayName;
              }
}
