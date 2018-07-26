import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the TabbedHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabbed-home', //set selector
  templateUrl: 'tabbed-home.html', //set templateUrl
})
export class TabbedHomePage {
  @ViewChild('pageSlider') pageSlider: Slides; //setup View
  
  canLoadEventPage: any = false; //set loading variables to default false
  canLoadAreaPage: any = false;
  toggleSearch: any = false; //set search toggle to default false
  togglePost: any = false; //set post toggle to default false
  tabs: any = '1'; //set tabs current page to 1 i.e home
  title: any = 'KickBack'; //set title to kickback default
  currentPage: any = 1;
  home_posts = [ //create some test content will need to be replaced with server content
      {
          type: 'text',
          Name: 'Ryan',
          Context: 'This might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually workThis might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'photo',
          Name: 'Joe',
          Context: 'This shouldnt work',
          Date: 'July 16th, 2018',
          imageSource: 'imgs/testPhoto.jpeg'
      },
      {
          type: 'text',
          Name: 'Rohan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'

      },      
      {
          type: 'text',
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Ryan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Joe',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Rohan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },      
      {
          type: 'text',
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Ryan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Joe',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Rohan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'

      },      
      {
          type: 'text',
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Ryan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Joe',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          type: 'text',
          Name: 'Rohan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'

      },      
      {
          type: 'text',
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      }
  ];

  area_posts = [ //content for area feed
      {
          Name: 'Emelia',
          Context: 'This might actually work'
      },
      {
          Name: 'Ryan',
          Context: 'This might actually work'
      },
      {
          Name: 'Joe',
          Context: 'This might actually work'
      },
      {
          Name: 'Rohan',
          Context: 'This might actually work'
      },      
      {
          Name: 'Emelia',
          Context: 'This might actually work'
      }
  ]

  event_posts = [ //content for event feed
    {
        Name: 'Ryan',
        Context: 'This might actually work'
    },
    {
        Name: 'Joe',
        Context: 'This might actually work'
    },
    {
        Name: 'Rohan',
        Context: 'This might actually work'
    },      
    {
        Name: 'Emelia',
        Context: 'This might actually work'
    },
    {
        Name: 'Ryan',
        Context: 'This might actually work'
    },
    {
        Name: 'Joe',
        Context: 'This might actually work'
    },
    {
        Name: 'Rohan',
        Context: 'This might actually work'
    },      
    {
        Name: 'Emelia',
        Context: 'This might actually work'
    },
    {
        Name: 'Ryan',
        Context: 'This might actually work'
    },
    {
        Name: 'Joe',
        Context: 'This might actually work'
    },
    {
        Name: 'Rohan',
        Context: 'This might actually work'
    },      
    {
        Name: 'Emelia',
        Context: 'This might actually work'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) { //setup page
  }

  ionViewDidLoad() { //on finished loading begin rendering event/area feed
    console.log('ionViewDidLoad TabbedHomePage');
    this.canLoadAreaPage = true;
    console.log('area feed began loading');
    this.canLoadEventPage = true;
    console.log('event feed began loading');
  }

  tabbed(index) { //handle navigation via tabs
    this.currentPage = index;
    if(index === 0){
      this.title = 'Events'; //change title to match page
    }else if (index === 1) {
      this.title = 'KickBack';
    }else if(index === 2) {
      this.title = 'Around Me';
    }
    this.pageSlider.slideTo(index); //slide between pages
  }

  changeWillSlide($event) { //handle swipe to slide
      this.currentPage = $event._snapIndex; //get current page
      if($event._snapIndex === 0){ //modify title based on destination
        this.title = 'Events';
      }else if ($event._snapIndex === 1) {
        this.title = 'KickBack';
      }else if($event._snapIndex === 2) {
        this.title = 'Around Me';
      }
      this.tabs = $event._snapIndex.toString(); //handle swipe
  }

  togSearch(){
      //console.log('toggled search');
      this.toggleSearch = !this.toggleSearch; //toggle the search bar visible invisible 
  }

  togPost(){
      this.togglePost = !this.togglePost;
  }

  togCamera(){
      //this.toggleCamera = !this.toggleCamera;
      console.log("open camera");
  }

  searched($event){ //handle searches
    console.log($event.target.value); //right now this just prints to console and toggles seach bar needs implementation server side
    this.togSearch(); 
  }

  loadMore($event){
      console.log('loading...');
  }
}
