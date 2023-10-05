import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';

  ngOnInit(): void {
    console.log("Teste")
  }

  changePokeSpan(newTitle: string): void {
    this.title = newTitle;
  }
}
