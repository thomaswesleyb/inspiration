let INSP_RENDERED = 0;

Hooks.on("init", function() {
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");   
  });
  
  Hooks.on("ready", function() {
    
    for (var i = 0; i < actor_list.length; i++) {
      for (id in actor_list[i].ownership) {
          if (id === current_user.id && actor_list[i].system.attributes.inspiration) {
            console.log("--------------------------------------------------");
            console.log("--------------------------------------------------");
            console.log(current_user.name);
            console.log(current_user.id);
            console.log("--------------------------------------------------");
            console.log("--------------------------------------------------");
          }
              
      }
  }
  });


