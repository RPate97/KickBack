import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';

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
  
  toggleSearch: any = false; //set search toggle to default false
  togglePost: any = false; //set post toggle to default false
  title: any = 'KickBack'; //set title to kickback default
  currentPage: any = 1;
  homePosts = [ //create some test content will need to be replaced with server content
      {
          type: 'text',
          Name: 'Ryan',
          Context: 'This is the home feed',
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

  goingOnNowPosts = [ //content for area feed
      {
          Name: 'Emelia',
          Context: 'This this is the going on now feed'
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

  popularNearbyPosts = [ //content for event feed
    {
        Name: 'Ryan',
        Context: 'This is the popular nearby feed'
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

  popularWorldwidePosts = [ //content for event feed
    {
        Name: 'Ryan',
        Context: 'This is the popular worldwide feed'
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
  displayPosts = this.homePosts;
  feedTabs: any = 'home';
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) { //setup page
  }

  goToHome(){
    console.log("loading home...");
    this.title = 'KickBack';
    this.displayPosts = this.homePosts as any[];
  }
  goToGoingOn(){
    console.log("loading going on now...");
    this.title = 'Going on Now';
    this.displayPosts = this.goingOnNowPosts as any[];
  }
  goToPopularNear(){
    console.log("loading popular nearby...");
    this.title = 'Nearby';
    this.displayPosts = this.popularNearbyPosts as any[];
  }
  goToWorldwide(){
    console.log("loading popular worldwide...");
    this.title = 'Worldwide';
    this.displayPosts = this.popularWorldwidePosts as any[];
  }

  ionViewDidLoad() { //on finished loading begin rendering event/area feed
  }

  changeWillSlide($event) { //handle slides setup on event

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

  loadMorePosts(infiniteScroll){
    console.log('loading');

    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

}
