export class Article {
  author: string;
  text: string;
  img: string;
  time: string;
  constructor(author: string, text: string, img: string, time: string) {
    this.author = author;
    this.text = text;
    this.img = img;
    this.time = time;
  }
}
