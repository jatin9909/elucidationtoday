self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  console.log("Installing web app");
  return caches.open("index").then(function(cache) {
    console.log("caching index and important routes");
    return cache.addAll(["/index", "/blog", "/mentors", "/careers", "/services", "/about-us"]);
  });
};

self.addEventListener("fetch", function(event) {
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request);
  }));
  event.waitUntil(addToCache(event.request));
});

/*self.addEventListener('notificationclick', function (event) {
console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    console.log(clients);
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        client.focus();
        break;
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
*/
var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function(request){
  return caches.open("index").then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request){
  return caches.open("index").then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match("/index");
     } else {
       return matching;
     }
    });
  });
};