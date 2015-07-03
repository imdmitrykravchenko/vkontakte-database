var request = require('request');
var extend = require('extend');
var clone = require('clone');

var methods = {
  getCountries: {
    url: 'getCountries'
  },
  getRegions: {
    url: 'getRegions',
    defaultParams:{
      country_id:1
    }
  },
  getCities: {
    url: 'getCities',
    defaultParams:{
      country_id:1
    }
  },
  getStreets:{
    customUrl: 'http://vk.com/select_ajax.php',
    method:'POST',
    defaultParams:{
      act:'a_get_streets',
      city:1
    }
  },
  getDistricts:{
    customUrl: 'http://vk.com/select_ajax.php',
    method:'POST',
    responseKey:'districts',
    defaultParams:{
      act:'a_get_city_info',
      city: 1,
      fields: 2
    }
  },
  getMetro:{
    customUrl: 'http://vk.com/select_ajax.php',
    method:'POST',
    responseKey:'stations',
    defaultParams:{
      act:'a_get_city_info',
      city: 1,
      fields: 1
    }
  },
  getCitiesById: {
    url: 'getCitiesById'
  },
  getStreetsById: {
    url: 'getStreetsById'
  },
  getCountriesById: {
    url: 'getCountriesById'
  }
};



var VKDatabase = function(options){
  options = options || {};
  this.options = {
    v: options.v || 5.3 ,
    need_all: 1
  }
  this.baseURL = 'http://api.vk.com/method/database.';
}

for(var i in methods){

  (function(key){

    VKDatabase.prototype[key] = function(options,callback){

      var o = extend(clone(this.options), methods[key].defaultParams || {});

      if(typeof options == 'function'){
        callback = options;
      }else{
        extend(o, options || {});
      }

      request({
        url: methods[key].customUrl ? methods[key].customUrl : (this.baseURL + methods[key].url),
        qs:o,
        json:true,
        method: methods[key].method ? methods[key].method : 'GET'
      },function(err,data){

        if(data.body.response){
          callback(data.body.response);
          return;
        }
        callback(methods[key].responseKey ? data.body[methods[key].responseKey] : data.body);
      });
    }
  })(i)

}


module.exports = VKDatabase;