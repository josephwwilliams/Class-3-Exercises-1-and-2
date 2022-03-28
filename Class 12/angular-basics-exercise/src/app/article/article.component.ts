import { Component } from '@angular/core';

@Component({
  selector: 'article-root',
  templateUrl: './article.component.html',
})

export class ArticleComponent {
  title: string = 'Ground breaking new!'
  content: string = 'I am learning how to code!'
  isTechRelated: boolean = true;

  color() {
    this.isTechRelated? this.isTechRelated = false : this.isTechRelated = true;
  }
}
