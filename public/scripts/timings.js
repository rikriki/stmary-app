angular.module('starter.timings', [])

.factory('Timings', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var timings = [
          { 
            id:0,
            day:"Friday",
            language:"English",
            "time":
            [
              {
                time:'6:00 am '
              },
              {
                time:'7:15 am '
              },
              {
                time:'9:00 am '
              },
              {
                time:' 4:45 pm '
              },
              {
                time:'6:15 pm '
              },
              {
                time:'10:15 am '
              },
              {
                time:'3:30 pm  '
              }
            ]
          },
          { 
            id:1,
            day:"Saturday",
            language:"English",
            "time":
            [
              {
                time:'6:00 am : English mass'
              },
              {
                time:'6:45 am '
              },
              {
                time:'9:00 am '
              },
              {
                time:' 5:00 pm '
              },
              {
                time:'7:30 pm '
              },
              {
                time:'12:00 pm '
              }
            ]
          },
          { 
            id:1,
            day:"Sunday",
            language:"English",
            "time":
            [
              {
                time:'6:00 am '
              },
              {
                time:'6:45 am '
              },
              {
                time:'9:00 am '
              },
              {
                time:'12:00 pm '
              },
              {
                time:'4:30 pm '
              },
              {
                time:'6:00 pm '
              },
              {
                time:'7:30 pm '
              }
            ]
          },
          { 
            id:2,
            day:"Weekdays, Monday to Thursday",
            language:"English",
            "time":
            [
              {
                time:'6:00 am '
              },
              {
                time:'6:45 am '
              },
              {
                time:'12:00 am '
              },
              {
                time:'7:00 pm '
              }
            ]
          },
          { 
            id:3,
            day:"Other language Masses",
            language:"English",
            "time":
            [
              {
                time:'6:00 am '
              },
              {
                time:'6:45 am '
              },
              {
                time:'12:00 am '
              },
              {
                time:'7:00 pm '
              }
            ]
          }
  ];
  
  
  return {
    all: function() {
      return timings;
    },
    remove: function(chat) {
      timings.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
        
      for (var i = 0; i < timings.length; i++) {
         
        if (timings[i].id === parseInt(chatId)) {
           
          return timings[i];
        }
      }
      return null;
    }
  };
})

// the five LUMINOUS MYSTERIES, the five SORROWFUL MYSTERIES, and the five GLORIOUS MYSTERIES.


    

/*
Arabic Mass  (all Masses held at the main altar) : obligatory
Every Friday    : 11:30 am, 8:00 pm
Every Sunday : 11:00 am

Tagalog  (Mass held at the main altar) : obligatory
Every Friday : 12:45 pm

French Mass  (Mass held at the main altar) : obligatory
Every Saturday 6:15 pm 

Konkani Mass
3rd Friday of every month at 2:00pm
4th Thursday of every month 8:00 pm ( obligatory)

Malayalam Mass  (held at the main altar) : obligatory
Every Friday 2:00 pm
1st and 3rd Thursday of every month 8:00 pm
4th Wednesday of every Month 8:00 pm

Malankara  Rite  (held at the mini hall) : obligatory
Every Friday 7:30 pm 

Tamil Mass  : obligatory
1st and 2nd Thursday of every month at 8:00 pm
3rd Wednesday of every month at 8:00 pm

Singhalese Mass  : obligatory
4th Friday of every month 4:30 pm

Urdu Mass  : obligatory
Every Thursday at 7:30 pm
*/ 