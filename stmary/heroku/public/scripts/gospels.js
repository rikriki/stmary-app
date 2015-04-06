angular.module('starter.gospels', [])

.factory('Gospels', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var gospels = [
        { 
            id:1,
            Date:"Tuesday, March 24, 2015",
            Title:"Luke 10:1-15",
            image:"images/thumb.jpg",
            Verse:'The angel Gabriel was sent from God to a town of Galilee called Nazareth,to a virgin betrothed to a man named Joseph, of the house of David, and the virgins name was Mary.And coming to her, he said, "Hail, full of grace! The Lord is with you."But she was greatly troubled at what was said and pondered what sort of greeting this might be.Then the angel said to her, "Do not be afraid, Mary, for you have found favor with God.Behold, you will conceive in your womb and bear a son, and you shall name him Jesus.He will be great and will be called Son of the Most High, and the Lord God will give him the throne of David his father,and he will rule over the house of Jacob forever, and of his kingdom there will be no end."But Mary said to the angel, "How can this be, since I have no relations with a man?"And the angel said to her in reply, "The holy Spirit will come upon you, and the power of the Most High will overshadow you. Therefore the child to be born will be called holy, the Son of God.And behold, Elizabeth, your relative, has also conceived a son in her old age, and this is the sixth month for her who was called barren;for nothing will be impossible for God."Mary said, "Behold, I am the handmaid of the Lord. May it be done to me according to your word." Then the angel departed from her. '
        },             
        {   
            id:2,
            Date:"Tuesday, March 23, 2015",
            Title:"Luke 12:1-15",
            image:"images/thumb.jpg",
            Verse:'The angel Gabriel was sent from God to a town of Galilee called Nazareth,to a virgin betrothed to a man named Joseph, of the house of David, and the virgins name was Mary.And coming to her, he said, "Hail, full of grace! The Lord is with you."But she was greatly troubled at what was said and pondered what sort of greeting this might be.Then the angel said to her, "Do not be afraid, Mary, for you have found favor with God.Behold, you will conceive in your womb and bear a son, and you shall name him Jesus.He will be great and will be called Son of the Most High, and the Lord God will give him the throne of David his father,and he will rule over the house of Jacob forever, and of his kingdom there will be no end."But Mary said to the angel, "How can this be, since I have no relations with a man?"And the angel said to her in reply, "The holy Spirit will come upon you, and the power of the Most High will overshadow you. Therefore the child to be born will be called holy, the Son of God.And behold, Elizabeth, your relative, has also conceived a son in her old age, and this is the sixth month for her who was called barren;for nothing will be impossible for God."Mary said, "Behold, I am the handmaid of the Lord. May it be done to me according to your word." Then the angel departed from her. '
        } 
  ];

  return {
    all: function() {
      return gospels;
    },
    remove: function(chat) {
      gospels.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
        
      for (var i = 0; i < gospels.length; i++) {
         console.log(gospels[i].id)
        if (gospels[i].id === parseInt(chatId)) {
           
          return gospels[i];
        }
      }
      return null;
    }
  };
})

 