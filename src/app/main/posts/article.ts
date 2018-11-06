export class Article {
  author: String;
  text: String;
  img: String;
  time: string;
  comment?: String;
  constructor(author: String, text: String, img: String, time: string, comment?: String) {
    this.author = author;
    this.text = text;
    this.img = img;
    this.time = time;
    this.comment = comment;
  }
}
