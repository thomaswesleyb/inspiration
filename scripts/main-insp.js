console.log("test my balls");

Hooks.on("init", function() {
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
  });
  
  Hooks.on("ready", function() {
    console.log("This code runs once core initialization is ready and game data is available.");
  });