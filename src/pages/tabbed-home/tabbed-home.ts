import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { API } from 'aws-amplify';

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
  isWorldwide = false;
  stringSave: any = 'KickBack';
  public textPostContext;
  currentFeed = "home";

  homePosts = [ //create some test content will need to be replaced with server content

  ];

  goingOnNowPosts = [ //content for area feed
      /*{
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
      }*/
  ]

  popularWorldwidePosts = [ //content for event feed
    /*{
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
    }*/
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
    this.getPostsByScore(this.currentFeed);
  }

  ionViewDidLoad() { //on finished loading begin rendering event/area feed
    //this.getPosts("home");
    //this.getPostsByScore("events");
    //this.getPostsByScore("world");
  }

  goToHome(){
    //console.log("loading home...");
    this.title = 'KickBack';
    this.displayPosts = this.homePosts as any[];
    this.isHome = true;
    this.isGoing = false;
    this.isWorldwide = false;
    this.currentFeed = "home";
    /*if(this.homePosts.length < 10){
        this.getPostsByScore(this.currentFeed);
    }*/
  }
  goToGoingOn(){
    //console.log("loading going on now...");
    this.title = 'Going on Now';
    this.displayPosts = this.goingOnNowPosts as any[];
    this.isHome = false;
    this.isGoing = true;
    this.isWorldwide = false;
    this.currentFeed = "events";
    /*if(this.goingOnNowPosts.length < 10){
        this.getPostsByScore(this.currentFeed);
    }*/
  }
  goToWorldwide(){
    //console.log("loading popular worldwide...");
    this.title = 'Worldwide';
    this.displayPosts = this.popularWorldwidePosts as any[];
    this.isHome = false;
    this.isGoing = false;
    this.isWorldwide = true;
    this.currentFeed = "world"
    /*if(this.popularWorldwidePosts.length < 10){
        this.getPostsByScore(this.currentFeed);
    }*/
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
            Date: this.getLovelyTime(),
            location: {
                type: "Point",
                coordinates: [0,0]
            },
            score: 0,
        }
        this.homePosts.unshift(newTextPost);
        this.userData.Posts.unshift(newTextPost);
        this.textPostContext = "";
        this.geolocation.getCurrentPosition().then((resp) => {
            newTextPost.location.coordinates = [resp.coords.longitude, resp.coords.latitude];
            this.sendPostToServer(newTextPost);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }else{
        console.log("cant make a post with not content");
    }
  }

  sendPostToServer(post){ //temp function for handling adding the post to the backend datastore
    let apiName = 'mongoAPI'; //set api name
    let path = '/publicPosts'; //set api gateway url
    let options = { //set options
        body: post
    }
    console.log(options);
    API.post(apiName, path, options).then(response => { //open post request
        console.log(response); //log success with proof
        return true;
    }).catch(error => {
        //error code
        console.log(error); //log error
        return false;
    });
  }
    getCoord(top, bottom, dec){
        return (Math.random() * (top - bottom) + bottom).toFixed(dec) * 1;
    }

    generatePosts(num){
        let names = ['John', 'Joe', 'Joanna', 'Jamie', 'Johnathan', 'Alexander', 'Alejando', 'Emelia', 'Rohan'];
        for (let x = 0; x <= num; x++){
            let name_num = Math.floor(Math.random()*Math.floor(9));
            let date = new Date();
            let time = date.getTime();;
            let post = {
                type: 'text',
                Name: names[name_num],
                Context: 'text post please ignore',
                Date: this.getLovelyTime(),
                location: {
                    type: "Point",
                    coordinates: [this.getCoord(-122, -125, 3), this.getCoord(46, 43, 3)]
                },
                score: Math.floor(Math.random()*Math.floor(200)),
                timeStamp: time
            }
            let did_work = this.sendPostToServer(post);
            if (!did_work){
                break;
            }
        }
    }

    /*getPosts(feedName){
        let apiName = 'mongoAPI'; //set api name
        let path = '/publicPosts/getNearby'; //set api gateway url
        let options = { //setup options framework
            body: {
                coords: [0, 0],
                feed: feedName
            }
        }
        this.geolocation.getCurrentPosition().then((resp) => { //call geolocation to get user location
            options.body.coords = [resp.coords.longitude, resp.coords.latitude]; //set options coordinates for indexing
            API.post(apiName, path, options).then(response => { //open post request
                console.log(response); //log success with proof
                this.homePosts = response.body;
                this.goToHome();
            }).catch(error => {
                //error code
                console.log(error); //log error
            });
        }).catch((error) => {
            console.log('Error getting location', error); //log geolocation error
        });
    }*/

    getPostsByScore(feedName){
        let s_distance = 10000;
        let apiName = 'mongoAPI'; //set api name
        let path = '/publicPosts/getSortedNearby'; //set api gateway url
        let options = { //setup options framework
            body: {
                coords: [0, 0],
                feed: feedName, 
                seachDistance: s_distance,
                lastScore: -1,
            }
        }
        this.geolocation.getCurrentPosition().then((resp) => { //call geolocation to get user location
            options.body.coords = [resp.coords.longitude, resp.coords.latitude]; //set options coordinates for indexing
            API.post(apiName, path, options).then(response => { //open post request
                if(feedName == "home"){
                    this.homePosts = response.body;
                    this.goToHome();
                }else if(feedName == "events"){
                    this.goingOnNowPosts = response.body;
                }else if(feedName == "world"){
                    this.popularWorldwidePosts = response.body;
                }
                //this.goToHome();
            }).catch(error => {
                //error code
                console.log(error); //log error
            });
        }).catch((error) => {
            console.log('Error getting location', error); //log geolocation error
        });
    }

    getMorePostsByScore(feedName, minScore){
        return new Promise(resolve => {
            let s_distance = 10000;
            let apiName = 'mongoAPI'; //set api name
            let path = '/publicPosts/getSortedNearby'; //set api gateway url
            let options = { //setup options framework
                body: {
                    coords: [0, 0],
                    feed: feedName, 
                    seachDistance: s_distance,
                    lastScore: minScore
                }
            }
            this.geolocation.getCurrentPosition().then((resp) => { //call geolocation to get user location
                options.body.coords = [resp.coords.longitude, resp.coords.latitude]; //set options coordinates for indexing
                API.post(apiName, path, options).then(response => { //open post request
                    for(let x = 0; x < response.body.length; x++){
                        this.displayPosts.push(response.body[x]);
                    }
                    if(feedName == "home"){
                        //this.displayPosts = this.displayPosts.concat(response.body);
                        this.homePosts = this.displayPosts as any[];
                    }else if(feedName == "events"){
                        //this.displayPosts.push(response.body);
                        this.goingOnNowPosts = this.displayPosts as any[];
                    }else if(feedName == "world"){
                        //this.displayPosts.push(response.body);
                        this.popularWorldwidePosts = this.displayPosts as any[];
                    }
                    resolve(response.body);
                }).catch(error => {
                    console.log(error); //log error
                    resolve(false);
                });
            }).catch((error) => {
                console.log('Error getting location', error); //log geolocation error
                resolve(false);
            });
        });
    }

    vote(postId, num){
        console.log("modifying post with id: " + postId + " by " + num);
        let apiName = 'mongoAPI';
        let path = '/publicPosts/vote';
        let options = {
            body: {
                postId: postId,
                voteNum: num
            }
        }
        API.post(apiName, path, options).then(response => {
            console.log(response);
            this.updateScoreInArray(postId, num);
        }).catch(error => {
            console.log(error);
        });
    }

    updateScoreInArray(postId, scoreChange){
        for(let x = 0; x < this.homePosts.length; x++){
            if(this.homePosts[x]._id == postId){
                this.homePosts[x].score += scoreChange;
                break;
            }
        }
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
        console.log("starting page loading async operation");
        setTimeout(() => {
        this.getMorePostsByScore(this.currentFeed, this.displayPosts[this.displayPosts.length - 1].score).then(() => {
            /*for (var i = 0; i < newData.length; i++) {
                this.displayPosts.push(newData[i]);
            }*/
            console.log("async loading ended");
            infiniteScroll.complete();
        });
        }, 500);
    }

    loadMoreUserPosts(infiniteScroll){
        console.log('loading user posts');

        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(() => {
            this.getPostsByScore(this.currentFeed);
            console.log('Async operation has ended');
            refresher.complete();
        }, 500);
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
