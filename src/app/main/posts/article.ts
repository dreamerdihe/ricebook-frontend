export class Article {
  author: string;
  text: string;
  img: string;
  time: string;
  comment?: string;
  constructor(author: string, text: string, img: string, time: string, comment?: string) {
    this.author = author;
    this.text = text;
    this.img = img;
    this.time = time;
    this.comment = comment;
  }
}
