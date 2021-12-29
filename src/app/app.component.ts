import { Component } from '@angular/core';
import { MarvelService } from './services/marvel.service';


@Component({
  selector: 'app-root',
  templateUrl: './components/app.component.html',
  styleUrls: ['./components/app.component.css'],

})
export class AppComponent {
  title = 'marvel';

  public comics: Array<any> = [];

  constructor(private comic: MarvelService) {}

  ngOnInit(): void {
    this.comic.getComics().subscribe((res) => {
      console.log(res);
      this.comics = res.data.results;
    });
  }
}
