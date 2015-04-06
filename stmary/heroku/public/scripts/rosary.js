angular.module('starter.rosary', [])

.factory('Rosary', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rosary = [
        { 
            id:1,
            Category:"joyful mysteries",
            "list":
            [
              {
                name:'THE ANNUNCIATION',
                index:'First'
              },{
                name:'THE VISITATION',
                index:'Second'
              },{
                name:'THE NATIVITY',
                index:'Third'
              },{
                name:'THE PRESENTATION',
                index:'Fourth'
              },{
                name:'THE FINDING OF JESUS IN THE TEMPLE ',
                index:'Fifth'
              }
            ]
            
        },
        { 
            id:2,
            Category:"luminous mysteries",
            "list":
            [
              {
                name:'THE BAPTISM OF THE LORD ',
                index:'First'
              },{
                name:'THE WEDDING OF CANA ',
                index:'Second'
              },{
                name:'THE PROCLAMATION OF THE KINGDOM',
                index:'Third'
              },{
                name:'THE TRANSFIGURATION',
                index:'Fourth'
              },{
                name:'THE INSTITUTION OF THE EUCHARIST ',
                index:'Fifth'
              }
            ]
            
        },
        { 
            id:3,
            Category:"sorrowful  mysteries",
            "list":
            [
              {
                name:'THE AGONY IN THE GARDEN ',
                index:'First'
              },{
                name:'THE SCOURGING AT THE PILLAR ',
                index:'Second'
              },{
                name:'THE CROWNING WITH THORNS ',
                index:'Third'
              },{
                name:'THE CARRYING OF THE CROSS ',
                index:'Fourth'
              },{
                name:'THE CRUCIFIXION  ',
                index:'Fifth'
              }
            ]
            
        },{ 
            id:4,
            Category:"glorious mysteries",
            "list":
            [
              {
                name:'THE RESURRECTION ',
                index:'First'
              },{
                name:'THE ASCENSION',
                index:'Second'
              },{
                name:'THE DESCENT OF THE HOLY SPIRIT  ',
                index:'Third'
              },{
                name:'THE ASSUMPTION  ',
                index:'Fourth'
              },{
                name:'THE CORONATION   ',
                index:'Fifth'
              }
            ]
            
        }  
  ];
  
  
  return {
    all: function() {
      return rosary;
    },
    remove: function(chat) {
      rosary.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
        
      for (var i = 0; i < rosary.length; i++) {
         
        if (rosary[i].id === parseInt(chatId)) {
           
          return rosary[i];
        }
      }
      return null;
    }
  };
})

// the five LUMINOUS MYSTERIES, the five SORROWFUL MYSTERIES, and the five GLORIOUS MYSTERIES.



