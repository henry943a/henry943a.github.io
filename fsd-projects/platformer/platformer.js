$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 650, 50, 25, "white");
    createPlatform(150, 550, 50, 25, "white");
    createPlatform(250, 450, 50, 25, "white");
    createPlatform(350,  350, 50, 25, "white"); 
    createPlatform(1150,  250, 50, 25, "white");
    createPlatform(975,  250, 50, 25, "white");
    createPlatform(800,  250, 50, 25, "white");
    createPlatform(650,  250, 50, 25, "white");
    createPlatform(500,  250, 50, 25, "white");
    createPlatform(250,  200, 50, 25, "white");
    createPlatform(1350, 150, 30, 10, "lime"); // bright green for a finished platform
    // TODO 3 - Create Collectables
    createCollectable("diamond", 250, 140, 0, 0);
    createCollectable("steve", 1350, 50);

    
    // TODO 4 - Create Cannons
    createCannon("left", 1, 2500);
createCannon("right", 300, 2000);
createCannon("right", 500, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
