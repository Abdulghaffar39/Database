let box_1 = document.getElementById('box_1');
let C1_parent_1 = document.getElementById('C1_parent_1');
let C1_parent_2 = document.getElementById('C1_parent_2');

// let box_2 = document.getElementById('box_2');
let C2_parent_1 = document.getElementById('C2_parent_1');
let C2_parent_2 = document.getElementById('C2_parent_2');

box_1.style.height = '773px';   
box_2.style.height = '0px';   

// box_2.style.display = 'none';
C2_parent_1.style.display = 'none';
C2_parent_2.style.display = 'none';

function sign_up(){
    
    
    box_1.style.height = '0px';
    box_2.style.height = '773px';

    C1_parent_1.style.display = 'none';
    C1_parent_2.style.display = 'none';

    C2_parent_1.style.display = 'block';
    C2_parent_2.style.display = 'block';
    console.log('Abdul Ghaffar Your Function is worked');
    
    
}



function sign_in(){
    
    
    box_1.style.height = '773px';
    box_2.style.height = '0px';

    C1_parent_1.style.display = 'block';
    C1_parent_2.style.display = 'block';

    C2_parent_1.style.display = 'none';
    C2_parent_2.style.display = 'none';
    console.log('Abdul Ghaffar Your Function is worked');
    
    
}

