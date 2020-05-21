import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="allOfThem">
      <img src="../../../../assets/images/panda.png" alt="panda" style="margin-top:100px;">
      <div style="text-align:center; ">
      <br>
        <p id="firstT">404</p>
        <p id="secondT">Angry Panda has eaten the page you are looking for.</p>
      </div>
  </div>
  `,
  styles: [
    `
    @import url('https://fonts.googleapis.com/css?family=Coda+Caption:800');
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .allOfThem {
        height: 100%;
        text-align: center;
        width: 100%;
        background-color: #edbec5;
    }
    #firstT{
        font-family: 'Coda Caption', sans-serif;
        font-size: 50px;
    }
    #secondT{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;  
    }
    `
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
