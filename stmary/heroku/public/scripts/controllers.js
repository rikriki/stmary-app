angular.module('starter.controllers', [])


.controller('IntroCtrl', function($scope,$ionicSlideBoxDelegate,localStorageService,$state) {
 $scope.slideIndex =0;
 $scope.startApp = function() {
    localStorageService.set('skip', true);
    $state.go('menu.gospel');
  };
 $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
    console.log($scope.slideIndex);
  };
})
.controller('ContentController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})


.controller('GospelCtrl', function($scope,Gospels,$location,localStorageService) {
 $scope.gospels = Gospels.all();
 localStorageService.set('skip', false);
 $scope.openGospel = function(gospel){
  $location.path('/menu/gospel/'+ gospel);
 }
})
.controller('GoDetailCtrl', function($scope,Gospels,$stateParams,$sce,$location) {
  $scope.gospel = Gospels.get($stateParams.GoId);
})
.controller('RosaryCtrl', function($scope,Rosary, $location) {
    
    
    var date = new Date();
    console.log(date.getDay())
    if(date.getDay()== 0 || date.getDay()== 3){
      $scope.mystery = Rosary.get(3);
    }else if(date.getDay()== 1 || date.getDay()== 6){
      $scope.mystery = Rosary.get(0);
    }else if(date.getDay()== 2 || date.getDay()== 5){
      $scope.mystery = Rosary.get(3);
    }else if(date.getDay()== 4){
      $scope.mystery = Rosary.get(1);
    }
    $scope.RosaryList = Rosary.all();

    $scope.rosaryListCLick = function(){
      $location.path('menu/rosary-list');
    }
    $scope.rosaryDetail = function(){
      $location.path('menu/ourFather');
    }
    

})  
.controller('RosaryDetailCtrl', function($scope,Rosary, $location,$state,$ionicHistory) {
  $scope.rotation = 0; 
  $scope.reps = 1; 
  
  
  $scope.tap = function(){
    if($scope.rotation<324){
      $scope.rotation += 36; 
      $scope.reps+=1
    }else{
      //$ionicHistory.goBack();
      
      $state.go('menu.rosary');
      $scope.rotation = 0;
      $scope.reps =1;
    }
  }


})
.controller('ourFatherCtrl', function($scope, $location,$state) {
  $scope.ourFatherTap = function(){
    $location.path('menu/hailMary');
  }
})
.controller('SocCtrl', function($scope,Stations) {
    $scope.stations = Stations.all();
})
.controller('SocDetailCtrl', function($scope,Stations,$stateParams,$sce,$location) {
    $scope.onSwipeLeft = function(id){
      console.log("Swipe! " + '#/tab/soc/'+ checkPage(id,'left'))
      $location.path('/tab/soc/'+ checkPage(id,'left'))
    }
    $scope.onSwipeRight = function(id){
      console.log("Swipe! " +  checkPage(id,'Right'))
      $location.path('/tab/soc/'+ checkPage(id,'Right'))
    }
    function checkPage(id,direction){
      if(direction=="left"){        
        return (id==14)? id=14: id + 1;  
      }else{
        return (id==1)? id=1: id - 1;  
      }
    }
    $scope.station = Stations.get($stateParams.socId);
    $scope.loadHtml = function(){return  $sce.trustAsHtml($scope.station.content);}
    var docElem = window.document.documentElement,
      scrollVal,
      isRevealed,
      noscroll,
      isAnimating,
      animating=false,
      container = document.getElementById( 'container' ),
      trigger = container.querySelector( 'button.trigger' );

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    function scrollPage() {
      scrollVal = scrollY();

      if( noscroll && !ie ) {
        if( scrollVal < 0 ) return false;
        // keep it that way
        window.scrollTo( 0, 0 );
      }

      if( classie.has( container, 'notrans' ) ) {
        classie.remove( container, 'notrans' );
        return false;
      }

      if( isAnimating ) {
        return false;
      }

      if( scrollVal <= 0 && isRevealed ) {
        toggle(0);
      }
      else if( scrollVal > 0 && !isRevealed ){
        toggle(1);
      }
    }

    function toggle( reveal ) {
      isAnimating = true;

      if( reveal ) {
        classie.add( container, 'modify' );
      }
      else {
        noscroll = true;
        classie.remove( container, 'modify' );
      }

      // simulating the end of the transition:
      setTimeout( function() {
        isRevealed = !isRevealed;
        isAnimating = false;
        if( reveal ) {
          noscroll = false;
        }
      }, 600 );
    }

    // refreshing the page...
    var pageScroll = scrollY();
    noscroll = pageScroll === 0;

    if( pageScroll ) {
      isRevealed = true;
      classie.add( container, 'notrans' );
      classie.add( container, 'modify' );
    }
    trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );

    $scope.animate = function() {
      if(animating==false){
        animating = true;
        toggle( 'reveal' );
        console.log("animating")
      }
    }
})
.controller('TimingsCtrl', function($scope,$stateParams,$location,Timings) {
  $scope.timings = Timings.all();
})
.controller('TimingsDetailCtrl', function($scope,$stateParams,$sce,$location,Timings) {
  $scope.timings = Timings.get($stateParams.TimingsId);
})
