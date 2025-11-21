var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; 
        var circles = [];
        
        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 : Call the drawCircle() function
        // (Handled within the loop for TODO 7)

        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 100; i++) {
            drawCircle(); 
        }

        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // Remove the repetitive calls from TODOs 4 and 5:
            /*
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            */
            
            // TODO 8 / TODO 9: Set up a loop to iterate over each circle
            for (var i = 0; i < circles.length; i++) {
                // Get a reference to the current circle using bracket notation
                var currentCircle = circles[i];
                
                // Call physikz.updatePosition within the loop for the current circle
                physikz.updatePosition(currentCircle);
                
                // Add game.checkCirclePosition to the loop for the current circle
                game.checkCirclePosition(currentCircle);
            }
        }
    
        game.checkCirclePosition = function(circle) {

            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
           if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // Left Boundary: If center goes past the left edge, move center to the right edge
            if (circle.x < 0) {
                circle.x = canvas.width; 
            }
            
            // Top Boundary: If center goes past the top edge, move center to the bottom edge
            if (circle.y < 0) {
                circle.y = canvas.height; 
            }
            
            // Bottom Boundary: If center goes past the bottom edge, move center to the top edge
            if (circle.y > canvas.height) {
                circle.y = 0; 
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
