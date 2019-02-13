import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <ul>
      <li scrollSpyMenu="menu1"  [ssmCurrentContent]="currentMenuId">Menu 1</li>
      <li scrollSpyMenu="menu2"  [ssmCurrentContent]="currentMenuId">Menu 2</li>
      <li scrollSpyMenu="menu3"  [ssmCurrentContent]="currentMenuId">Menu 3</li>
      <li scrollSpyMenu="menu4"  [ssmCurrentContent]="currentMenuId">Menu 4</li>
    </ul>
    <div id="parent">
        <div id="empty_space" ></div>
        <div scrollSpyContent="DIV" [sscLogging]=true  sscDetector="middle" [(sscCurrentContent)]="currentMenuId" class="container">
            <span class="jeanbob">
                <div id="menu1" class="content">content1</div>
                <div id="menu2" class="content">content2</div>
                <div id="menu3" class="content">content3</div>
                <div id="menu4" class="content">content4</div>
            </span>
        </div>
    </div>
    
  `,
    styles: [`
    :host {
      display: flex;
      justify-content: start;
      border: solid 1px silver;
    }
    #parent{
        position:relative;
        height:500px;
        width:100%;
        overflow:hidden;
    }
    #empty_space{
        height:200px;
        width:100%;
        position:relative;
        background:blue;
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
        height: 300px;
        overflow-y: scroll;
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

    click(test) {
        console.log('click' + test);
    }
}
