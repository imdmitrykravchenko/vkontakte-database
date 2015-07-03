# vkontakte-database

### Installation

```sh
$ npm install vkontakte-database
```

### Usage

~~~javascript
var VKDB = require('vkontakte-database'),
VKDatabase = new VKDB({
    v:5.3,
    need_all:true
    //any parameters from vk database api
    //notice: this paramaters will be global
});
VKDatabase.getCountries({
    count:10
    //this parameters are local
},function(response){
    console.log(response);
});
~~~

### API

This library repeats vkontakte database methods:
* [getCountries]
* [getRegions]
* [getCities]
* [getCountriesById]
* [getCitiesById]
* [getStreetsById]

And grant access to some undocumented features like:
* getMetro
~~~javascript
VKDatabase.getMetro({city:1},function(response){
    console.log(response);
});
~~~
Response will be like
~~~javascript
[
    [stationId,stationName], 
    //...
]
~~~
* getDistricts
~~~javascript
VKDatabase.getDistricts({city:1},function(response){
    console.log(response);
});
~~~
Response will be like
~~~javascript
[
    [districtId,districtName], 
    //...
]
~~~
* getStreets
~~~javascript
VKDatabase.getStreets({city:1,str:'академика'},function(response){
    console.log(response);
});
~~~
Response will be an array of streets matched with str parameter
~~~javascript
[
    [streetId,streetName], 
    //...
]
~~~

License
----

MIT


[getCountries]:http://vk.com/dev/database.getCountries
[getCities]:http://vk.com/dev/database.getCities
[getRegions]:http://vk.com/dev/database.getRerions
[getCountriesById]:http://vk.com/dev/database.getCountriesById
[getCitiesById]:http://vk.com/dev/database.getCitiesById
[getStreetsById]:http://vk.com/dev/database.getStreetsById
[vkontakte db]:http://vk.com/dev/database