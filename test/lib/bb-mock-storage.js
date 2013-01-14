/*global Backbone:true console:false */

// Override Backbone.sync
Backbone.sync = function(method, model, options) {
  "use strict";

  switch (method) {
    case "read":    console.log("Reading model: " + model);  break;
    case "create":  console.log("Creating model: " + model); break;
    case "update":  console.log("Reading model: " + model);  break;
    case "delete":  console.log("Reading model: " + model);  break;
  }

};
