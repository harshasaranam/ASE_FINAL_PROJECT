/**
 * Created by nagar on 11/9/2016.
 */
angular.module('starter.controllers',['ngResource','ngCordova'])

//*************************************//


  .run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(
          true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    //console.log("start time:" + $rootScope.startTime);
    //turning on bluetooth
    //********* USER PERMISSIONS *************
    //requesting user permissions for camera
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {

    }

  })


  // LOGIN CONTROLLER



  .controller('LoginCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {

    // $scope.data = {};
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }
    $scope.pageClass = 'login';
    $scope.login = function(username, password) {
      //console.log("inside login function");
      inside.getMethod();
      $scope.client=username;

      $scope.user1=username;
      $scope.pass1=password;
      console.log($scope.user1);
      console.log($scope.pass1);


      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/umkchallreservaton/collections//userdata?apiKey=TyMceVeajhESTqinai_x0zrA6MCtM4PR',

        contentType: "application/json"
      }).success(function(response) {
        var list = response;
        var count=0;
        for (i = 0; i < list.length; i++) {


          if (list[i].username == username && list[i].password == password) {
            localStorage.setItem("username", list[i].username);
            localStorage.setItem("password", list[i].password);
            localStorage.setItem("id_user", list[i]._id.$oid);
            localStorage.setItem("email", list[i].email);
          //  alert("Login success");
            console.log("inside if loop");
            $state.go('menu.home');

          }
          else {
            //alert("Incorrect username/password");
            count++;

          }
        }
        if(count==list.length){
          document.getElementById('x').innerHTML = "Invalid Creditials! Please try again....";

        }
      })
    }
  })
  //*************************************//
  //end of login controller




  // register controller



  .controller('RegisterCtrl', function($scope, $state, $http,$ionicViewService, $ionicHistory,$window, $httpParamSerializerJQLike) {
    // $scope.data = {};
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }
    $scope.pageClass = 'logout';
    $scope.logout = function() {

      console.log("logged out!");
      $state.go('login');
    }
    $scope.pageClass = 'register';
    $scope.register = function(username, password, email,phone,studentid) {
      // $state.go('home');
      inside.postMethod();
      //console.log("inside register function");
      $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/umkchallreservaton/collections//userdata?apiKey=TyMceVeajhESTqinai_x0zrA6MCtM4PR',
        data: JSON.stringify({
          username: username,
          password: password,
          email: email,
          phone:phone,
          studentid:studentid

        }),
        contentType: "application/json"
      }).success(function() {
        $scope.username = "";
        $scope.password = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.studentid = "";
        alert("User created successfully ");
        $state.go('login');
        //$scope.msg ="User created successfully";
        //$window.location.href="index.html";
      })
    }
  })


/*  .controller('HomeCtrl', function($scope, $state,$ionicHistory,$http, $resource) {
    $scope.pageClass = 'logout';
    $scope.logout = function () {
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
      console.log("logged out!");
      $state.go('login');
    }
    $scope.pageClass = 'profile';
    $scope.profile = function () {
      console.log("inside profile page");
      $state.go('profile');
    }



    $scope.pageClass = 'BoardRoom';
    $scope.BoardRoom = function() {
      console.log("inside board room");
      $state.go('boardroom');
    }

    $scope.pageClass = 'task';
    $scope.task = function() {
      console.log("inside task tracker");
      $state.go('taskTracker');
    }

    var storageFactory = new StorageFactory();
    var localstorage = storageFactory.createStorage({});
    $scope.username1 = localstorage.username;

    var adminName = Admin.getInstance();
    //console.log(user.fullName()); // true
    $scope.firstname = adminName.firstName;
    $scope.lastname = adminName.lastName;

  })

*/
//MENU CONTROLLER

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])


 // .controller('AboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  //  function ($scope, $stateParams) {


    //}])
/*.controller('AboutCtrl',['$scope', '$stateParams', function($cordovaEmailComposer) {

  $cordovaEmailComposer.isAvailable().then(function() {
    // is available
  }, function () {
    // not available
  });

  var email = {
    to: 'max@mustermann.de',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
    attachments: [
      'file://img/logo.png',
      'res://icon.png',
      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      'file://README.pdf'
    ],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  };

  $cordovaEmailComposer.open(email).then(null, function () {
    // user cancelled email
  });
}])


*/



  //HOME CONTROLLER



  .controller('HomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])



  .controller('fhCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])





   .controller('fhscheduleCtrl', ['$scope','$ionicPlatform','$cordovaDatePicker', function($scope,$state, $http, $localStorage,$ionicPlatform, $cordovaDatePicker) {






       //TimePicker Controller

       $scope.datePick = function () {
         var options = {
           date: new Date(),
           mode: 'time', // or 'time'
           minDate: new Date() - 10000,
           allowOldDates: true,
           allowFutureDates: false,
           doneButtonLabel: 'DONE',
           doneButtonColor: '#F2F3F4',
           cancelButtonLabel: 'CANCEL',
           cancelButtonColor: '#000000'
         };

         console.log(document.getElementById("a9am"));

         document.addEventListener("deviceready", function () {

           $cordovaDatePicker.show(options).then(function (date) {
             alert(date);
           });
         })
       }

       //End OF Time Picker

      /* $scope.composeemail = function () {

         var email = {
           to: 'max@mustermann.de',
           cc: 'erika@mustermann.de',
           bcc: ['john@doe.com', 'jane@doe.com'],
           attachments: [
             'file://img/logo.png',
             'res://icon.png',
             'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
             'file://README.pdf'
           ],
           subject: 'Cordova Icons',
           body: 'How are you? Nice greetings from Leipzig',
           isHtml: true
         };

         document.addEventListener("deviceready", function () {

           $cordovaEmailComposer.open(email).then(function () {
             // user cancelled email

           });

         })

       } */


      console.log("Button id: " + document.getElementById("a9am"));



      /*     var b8am = false, b11am = false, b12pm = false, b1pm = false;
           var b9am = false, b2pm = false, b3pm = false, b4pm = false;
           var b10am = false, b5pm = false, b6pm = false, b7pm = false;

           if($localStorage.check==1){
             var storedNames = JSON.parse(localStorage["timeSlots"]);
             console.log(storedNames);

             for(i=0;i<storedNames.length;i++){
               if(storedNames[i] == '8am'){
                 document.getElementById('a8am').disabled = true;
                 document.getElementById('a8am').style.backgroundColor = 'red';
                 // b8am = true;
               }
               else if(storedNames[i] == '9am'){
                 document.getElementById('a9am').disabled = true;
                 document.getElementById('a9am').style.backgroundColor = 'red';
                 // b9am = true;
               }
               else if(storedNames[i] == '10am'){
                 document.getElementById('a10am').disabled = true;
                 document.getElementById('a10am').style.backgroundColor = 'red';
                 // b10am = true;
               }
               else if(storedNames[i] == '11am'){
                 document.getElementById('a11am').disabled = true;
                 document.getElementById('a11am').style.backgroundColor = 'red';
                 // b11am = true;
               }
               else if(storedNames[i] == '12pm'){
                 document.getElementById('a12pm').disabled = true;
                 document.getElementById('a12pm').style.backgroundColor = 'red';
                 // b12pm = true;
               }
               else if(storedNames[i] == '1pm'){
                 document.getElementById('a1pm').disabled = true;
                 document.getElementById('a1pm').style.backgroundColor = 'red';
                 // b1pm = true;
               }
               else if(storedNames[i] == '2pm'){
                 document.getElementById('a2pm').disabled = true;
                 document.getElementById('a2pm').style.backgroundColor = 'red';
                 // b2pm = true;
               }
               else if(storedNames[i] == '3pm'){
                 document.getElementById('a3pm').disabled = true;
                 document.getElementById('a3pm').style.backgroundColor = 'red';
                 // b3pm = true;
               }
               else if(storedNames[i] == '4pm'){
                 document.getElementById('a4pm').disabled = true;
                 document.getElementById('a4pm').style.backgroundColor = 'red';
                 // b4pm = true;
               }
               else if(storedNames[i] == '5pm'){
                 document.getElementById('a5pm').disabled = true;
                 document.getElementById('a5pm').style.backgroundColor = 'red';
                 // b5pm = true;
               }
               else if(storedNames[i] == '6pm'){
                 document.getElementById('a6pm').disabled = true;
                 document.getElementById('a6pm').style.backgroundColor = 'red';
                 // b6pm = true;
               }
               else if(storedNames[i] == '7pm'){
                 document.getElementById('a7pm').disabled = true;
                 document.getElementById('a7pm').style.backgroundColor = 'red';
                 // b7pm = true;
               }
             }

           }

            $scope.a8am = function(){
             if(b8am){
               document.getElementById('a8am').style.backgroundColor = 'green';
               b8am = false;
             }else{
               document.getElementById('a8am').style.backgroundColor = 'orange';
               b8am = true;
             }

           }
           $scope.a9am = function(){
             if(b9am){
               document.getElementById('a9am').style.backgroundColor = 'green';
               b9am = false;
             }else{
               document.getElementById('a9am').style.backgroundColor = 'orange';
               b9am = true;
             }

           }
           $scope.a10am = function(){
             if(b10am){
               document.getElementById('a10am').style.backgroundColor = 'green';
               b10am = false;
             }else{
               document.getElementById('a10am').style.backgroundColor = 'orange';
               b10am = true;
             }

           }
           $scope.a11am = function(){
             if(b11am){
               document.getElementById('a11am').style.backgroundColor = 'green';
               b11am = false;
             }else{
               document.getElementById('a11am').style.backgroundColor = 'orange';
               b11am = true;
             }

           }
           $scope.a12pm = function(){
             if(b12pm){
               document.getElementById('a12pm').style.backgroundColor = 'green';
               b12pm = false;
             }else{
               document.getElementById('a12pm').style.backgroundColor = 'orange';
               b12pm = true;
             }

           }
           $scope.a1pm = function(){
             if(b1pm){
               document.getElementById('a1pm').style.backgroundColor = 'green';
               b1pm = false;
             }else{
               document.getElementById('a1pm').style.backgroundColor = 'orange';
               b1pm = true;
             }

           }
           $scope.a2pm = function(){
             if(b2pm){
               document.getElementById('a2pm').style.backgroundColor = 'green';
               b2pm = false;
             }else{
               document.getElementById('a2pm').style.backgroundColor = 'orange';
               b2pm = true;
             }

           }
           $scope.a3pm = function(){
             if(b3pm){
               document.getElementById('a3pm').style.backgroundColor = 'green';
               b3pm = false;
             }else{
               document.getElementById('a3pm').style.backgroundColor = 'orange';
               b3pm = true;
             }

           }
           $scope.a4pm = function(){
             if(b4pm){
               document.getElementById('a4pm').style.backgroundColor = 'green';
               b4pm = false;
             }else{
               document.getElementById('a4pm').style.backgroundColor = 'orange';
               b4pm = true;
             }

           }
           $scope.a5pm = function(){
             if(b5pm){
               document.getElementById('a5pm').style.backgroundColor = 'green';
               b5pm = false;
             }else{
               document.getElementById('a5pm').style.backgroundColor = 'orange';
               b5pm = true;
             }

           }
           $scope.a6pm = function(){
             if(b6pm){
               document.getElementById('a6pm').style.backgroundColor = 'green';
               b6pm = false;
             }else{
               document.getElementById('a6pm').style.backgroundColor = 'orange';
               b6pm = true;
             }

           }
           $scope.a7pm = function(){
             if(b7pm){
               document.getElementById('a7pm').style.backgroundColor = 'green';
               b7pm = false;
             }else{
               document.getElementById('a7pm').style.backgroundColor = 'orange';
               b7pm = true;
             }

           }



           $scope.done = function(){

             var str =[];


             if(b8am){
               console.log("Pushing 8am");
               str.push('8am');
             }
             if(b9am){
               console.log("Pushing 9am");
               str.push('9am');
             }
             if(b10am){
               console.log("Pushing 10am");
               str.push('10am');
             }
             if(b11am){
               console.log("Pushing 11am");
               str.push('11am');
             }
             if(b12pm){
               console.log("Pushing 12pm");
               str.push('12pm');
             }
             if(b1pm){
               console.log("Pushing 1pm");
               str.push('1pm');
             }
             if(b2pm){
               console.log("Pushing 2pm");
               str.push('2pm');
             }
             if(b3pm){
               console.log("Pushing 3pm");
               str.push('3pm');
             }
             if(b4pm){
               console.log("Pushing 4pm");
               str.push('4pm');
             }
             if(b5pm){
               console.log("Pushing 5pm");
               str.push('5pm');
             }
             if(b6pm){
               console.log("Pushing 6pm");
               str.push('6pm');
             }
             if(b7pm){
               console.log("Pushing 7pm");
               str.push('7pm');
             }

             var k = str.toLocaleString();

             var data = {
               email: $localStorage.email,
               date: $localStorage.dateSelected,
               room: $localStorage.selectedRoom,
               time: str.toString()
             }
             //  var url = "http://localhost:8075/MongoRestServiceExample/restService/user";
             var url = "http://musicstudio.h7dgnztdwp.us-west-2.elasticbeanstalk.com/restService/user";
             var res = $http.post(url, data);
             res.success(function(result, status, headers, config){
               console.log(result)
             });
             res.error(function(data, status, headers, config) {
               console.log(data);
               alert("There was some issue while registering. Please try again.")
             });
             // $state.transitionTo('home', null, {'reload':true});
             // $state.go('home', {}, { reload: true });


             //  var options = {
             //         replaceLineBreaks: false, // true to replace \n by a new line, false by default
             //         android: {
             //             intent: 'INTENT'  // send SMS with the native android SMS messaging
             //             //intent: '' // send SMS without open any other app
             //         }
             //     };
             // $ionicPlatform.ready(function(){
             //   $cordovaSms
             //   .send('+18167037557', $localStorage.email + ' requested timeslots' + k + ' on ' + $localStorage.dateSelected + ' for ' + $scope.room , options)
             //   .then(function(result) {
             //     console.log(result);

             //   }, function(error) {
             //     console.log(error);
             //   })
             // })

             $state.go('menu.home');
           }


*/



    }])




.controller("UpdateCtrl", function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
  $scope.pageClass = 'home';
  $scope.home = function() {
    console.log("home page !");
    $state.go('home');
  }
  $scope.pageClass = 'update';
  $scope.update = function(username, password, email) {
    inside.putMethod();
    var id = localStorage.getItem("id_user");
    //console.log("inside update function");
    $http({
      method: 'PUT',
      url: 'https://api.mongolab.com/api/1/databases/roohub/collections//userdata?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
      data: JSON.stringify({
        "username": username,
        "password": password,
        "email": email
      }),

      contentType: "application/json"


    }).success(function() {
      $scope.username = "";
      $scope.password = "";
      $scope.email = "";
      alert("update successful");
      console.log("navigating to home page from update page");
      $state.go('home');
    })
  }

})



.controller('MapsCtrl',function($scope, $state,  $ionicPlatform) {



 // ionic platform ready function
  $ionicPlatform.ready(function() {


 //displaying directions in external browser or google maps
 $scope.openDirections = function() {
 window.open('http://maps.google.com/maps?saddr=' + "&daddr=39.033743,-94.576425", '_system', 'location=yes');
 }; // end of open directions

 document.addEventListener('deviceready', function () {
 // cordova.plugins.email is now available
 }, false);


 //******** Beacon methods ************
 //window.plugin.backgroundMode.enable();
 document.addEventListener("deviceready", onDeviceReady, false);

 function  onDeviceReady() {

 }

 }); //end of ionic platform
 })
