angular.module('starter.preloadImages', [])

.factory('PreloadImages', function($q) {
  // Might use a resource here that returns a JSON array
  var self = this;
  self.image = null;
  return {
      gospelImage:function(image){
        var deferred = $q.defer();
        if(self.image!==null){
          deferred.reject("Cached!");
        }else{
          //first load
          self.image = image;
          deferred.resolve("image loaded!");
        }
        return deferred.promise;
      } 
     


  };
})
