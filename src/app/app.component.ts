import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <ul>
      <li scrollSpyMenu="menu1" [ssmCurrentContent]="currentMenuId">Menu 1</li>
      <li scrollSpyMenu="menu2" [ssmCurrentContent]="currentMenuId">Menu 2</li>
      <li scrollSpyMenu="menu3" [ssmCurrentContent]="currentMenuId">Menu 3</li>
    </ul>
    <div scrollSpyContent="DIV"  sscDectector="middle" [(sscCurrentContent)]="currentMenuId" class="container">
      <div id="menu1" class="content">content1</div>
      <div id="menu2" class="content">content2</div>
      <div id="menu3" class="content">content3</div>
    </div>
  `,
    styles: [`
    :host {
      display: flex;
      justify-content: start;
      border: solid 1px silver;
    }
    ul {
      padding: 0;
      margin: 0;
      border-right: dashed 1px silver;
    }
    li {
      margin: 2em;
      list-style: none;
      white-space: nowrap;
      cursor: pointer;
    }
    li.active { 
      color: blue;
      font-weight: bold;
    }
    div.container {
      padding: 2em;
      height: 20em;
      overflow-y: scroll;
      width: 100%;
    }
    div.content {
      padding: 2em;
      height: 13em; 
      background-color:red;
      margin-bottom:1rem;
    }
  `]
})
export class AppComponent {
    currentMenuId = "menu1";
}
