// Karel game challenge

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 * https://stanford.edu/~cpiech/karel/ide.html
 **/
function main(){
    putBeeper();
    chess_board_motion();
    chess_board_motion();
    move_up();
    chess_board_motion_2();
    chess_board_motion();
    move_up_2();
    putBeeper();
    chess_board_motion();
    chess_board_motion();
    move_up();
    chess_board_motion_2();
    chess_board_motion();
    move_up_2();
    putBeeper();
    chess_board_motion();
    chess_board_motion();
    
 }
 
 function zigzag_motion(){
    move();
    turnLeft();
    move();
    turnRight();
    putBeeper();
 }
 
 
 // chess board functionality
 function chess_board_motion(){
    move();
    move();
    putBeeper();
 }
 function chess_board_motion_2(){
    move();
    putBeeper();   
 }
 
 function move_up(){
    turnLeft();
    move();
    turnLeft();
 }
 
 function move_up_2(){
    move();
    turnRight();
    move();
    turnRight();
 }
 