import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Article[]=[];
  constructor(private newsService:NewsService) { }

  ngOnInit(){
    this.newsService.getTopHeadLines().subscribe(responseNews=>{
      this.news.push(...responseNews.articles)
    })
  }

}
