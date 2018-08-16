import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  title: any = 'KickBack'; //set title to kickback default
  currentPage: any = 1;
  isHome = true;
  isGoing = false;
  isNearby = false;
  isWorldwide = false;
  stringSave: any = 'KickBack';
  public textPostContext;
  homePosts = [ //create some test content will need to be replaced with server content
      {
          Name: 'Ryan',
          Context: 'This is the home feed',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Joe',
          Context: 'This is a photo post',
          Date: 'July 16th, 2018',
          imageSource: 'assets/imgs/testPhoto.jpeg'
      },
      {
          Name: 'Rohan',
          Context: 'This is an event post',
          Date: 'July 16th, 2018',
          imageSource: 'assets/imgs/testPhoto.jpeg',
          EventDate: '5pm Auguest 18th, 2018'
      },      
      {
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Ryan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
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
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Ryan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Joe',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Rohan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'

      },      
      {
          Name: 'Emelia',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Ryan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Joe',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'
      },
      {
          Name: 'Rohan',
          Context: 'This might actually work',
          Date: 'July 16th, 2018'

      },      
      {
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
  userData = {
    Name: "Ryan",
    Acquaintances: 25,
    Friends: 53,
    Sociality: 7543,
    ID: "1",
    Posts: [
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },      
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },      
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        },
        {
            Name: 'Ryan',
            Context: 'This might actually work',
            Date: 'July 16th, 2018'
        }
    ]
  }
  chats = [
      {
        Name: "People Drake hates less",
        LastMessage: "wow this is a pretty cool community",
        ChatId: 32432432,
        Type: 'community'
      },
      {
        Name: "Gucci Gang",
        LastMessage: "wow this is a pretty shitty name for a chat",
        ChatId: 435643,
        Type: 'community'
      },
      {
        Name: "Friday beers by the river",
        LastMessage: "So who's getting the beer? I'm a cheap ass",
        ChatId: 21312,
        Type: 'event'
      }
  ]
  displayPosts = this.homePosts;
  feedTabs: any = 'home';
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, private geolocation: Geolocation) { //setup page
  }

  goToHome(){
    console.log("loading home...");
    this.title = 'KickBack';
    this.displayPosts = this.homePosts as any[];
    this.isHome = true;
    this.isGoing = false;
    this.isNearby = false;
    this.isWorldwide = false;
  }
  goToGoingOn(){
    console.log("loading going on now...");
    this.title = 'Going on Now';
    this.displayPosts = this.goingOnNowPosts as any[];
    this.isHome = false;
    this.isGoing = true;
    this.isNearby = false;
    this.isWorldwide = false;
  }
  goToNearby(){
    console.log("loading popular nearby...");
    this.title = 'Nearby';
    this.displayPosts = this.popularNearbyPosts as any[];
    this.isHome = false;
    this.isGoing = false;
    this.isNearby = true;
    this.isWorldwide = false;
  }
  goToWorldwide(){
    console.log("loading popular worldwide...");
    this.title = 'Worldwide';
    this.displayPosts = this.popularWorldwidePosts as any[];
    this.isHome = false;
    this.isGoing = false;
    this.isNearby = false;
    this.isWorldwide = true;
  }

  ionViewDidLoad() { //on finished loading begin rendering event/area feed
  }

  changeWillSlide($event) { //handle slides setup on event
    if($event.realIndex == 0){
        this.stringSave = this.title;
        this.title = "Communities";
    }else if($event.realIndex == 1){
        this.title = this.stringSave;
    }else if ($event.realIndex == 2){
        this.stringSave = this.title;
        this.title = this.userData.Name;
    }
  }

  togSearch(){
      //console.log('toggled search');
      this.toggleSearch = !this.toggleSearch; //toggle the search bar visible invisible 
  }

  getLovelyTime(){
    let dateObj = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayEnds = ["st", "nd", "rd"];
    let endNum = dateObj.getDay() % 10 + 1;
    let correctEnd;
    let hour = dateObj.getHours();
    let hourArea;
    if(hour > 12){
      hourArea = "pm";
      hour -= 12;
    }else {
        hourArea = "am";
    }
    if(hour == 0){
      hour = 12;
    }
    let minute = dateObj.getMinutes();
    let realMinute;
    if(minute < 10){
        realMinute = "0" + minute.toString();
        console.log(realMinute);
    }else{
        realMinute = minute;
    }
    let time = hour + ":" + realMinute + hourArea;
    if(endNum < 4 && endNum != 0){
      correctEnd = dayEnds[endNum];
    }else {
        correctEnd = "th";
    }
    return time + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getDay().toString() + correctEnd + ', ' + dateObj.getFullYear();
  }

  //handles clientside making posts
  makePost(){ //NEED TO CHECK IF THIS IS SECURE WOULDN'T WANT ANY HTML RUNNING IN HERE...
    if(this.textPostContext != undefined && this.textPostContext != ""){
    let newTextPost = {
        type: 'text',
        Name: this.userData.Name,
        Context: this.textPostContext,
        Date: this.getLovelyTime()
    }
    console.log(newTextPost);
    this.homePosts.unshift(newTextPost);
    this.userData.Posts.unshift(newTextPost);
    this.textPostContext = "";
    this.sendPostToServer(newTextPost);
    }else{
        console.log("cant make a post with not content");
    }

    /*this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        console.log(resp.coords);
        }).catch((error) => {
        console.log('Error getting location', error);
    });*/
  }

  sendPostToServer(post){ //temp function for handling adding the post to the backend datastore
    console.log("sending " + post + " to server...");
    console.log("backend not implemented yet...");
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

  loadMoreUserPosts(infiniteScroll){
    console.log('loading user posts');

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

  goToChat(chat) {
    this.navCtrl.push("CommunityPage", {
        chatInfo: chat
    });
  }

  goToCamera(){
    this.navCtrl.push("CameraPostPage", {
        userData: this.userData
    });
  }

  goToPlayKickBack(){
    this.navCtrl.push("PlayKickBackPage", {
        userData: this.userData
    });
  }

  goToCalendar(){
    this.navCtrl.push("CalendarPage", {
        userData: this.userData
    });
  }
}
