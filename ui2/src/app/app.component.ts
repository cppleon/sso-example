import { Component, OnInit } from '@angular/core';

declare const CrossStorageClient: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const storage = new CrossStorageClient('http://localhost:3000');

    setTimeout(() => {
      storage.onConnect().then(() => {
        return storage.getKeys();
      }).then((keys) => {
        console.log(keys);
      });
    }, 2000);
  }
}
