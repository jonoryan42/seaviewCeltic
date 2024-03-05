//Webpage button event listeners
$('#btn1').on('click', (evt) => {
    $('#more1').slideToggle('slow')
      
        
});   

 $('#btn2').on('click',(evt) => {
    $('#more2').slideToggle('slow')
 });

//Array for club teams
let teams = [
    "U-8",
    "U-9",
    "U-10",
    "U-11",
    "U-12",
    "U-13",
    "U-14",
    "U-15",
    "U-16",
    "U-17",
    "Youths",
    "3rd Division",
    "1A",
    "4th Division"
];

//shows which teams you can play for.
function showTeamResult() {
    $('.ui.proc.text.container').show()
}

//takes age input from form and declares which teams will be shown using if/else statements.
function getEnteredAge()
{
const ageVal = $('#age').val();
const enterAge = parseInt(ageVal, 10);
    if (enterAge <= 8) {
    $('#apply1').html(`<ul><li>${teams[0]}</li><li>${teams[1]}</li><li>${teams[2]}</li></ul>`);
}
    else if (enterAge === 9) {
        $('#apply1').html(`<ul><li>${teams[1]}</li> <li>${teams[2]}</li><li>${teams[3]}</li></ul>`);
    }
    
    else if (enterAge === 10) {
         $('#apply1').html(`<ul><li>${teams[2]}</li><li>${teams[3]}</li><li>${teams[4]}</li></ul>`);
    }
    
    else if (enterAge === 11) {
         $('#apply1').html(`<ul><li>${teams[3]}</li><li>${teams[4]}</li><li>${teams[5]}</li></ul>`);
    }
    
    else if (enterAge === 12) {
         $('#apply1').html(`<ul><li>${teams[4]}</li><li>${teams[5]}</li><li>${teams[6]}</li></ul>`);
    }
    
    else if (enterAge === 13) {
         $('#apply1').html(`<ul><li>${teams[5]}</li><li>${teams[6]}</li><li>${teams[7]}</li></ul>`);
    }
    
    else if (enterAge === 14) {
         $('#apply1').html(`<ul><li>${teams[6]}</li><li>${teams[7]}</li><li>${teams[8]}</li></ul>`);
    }
    
    else if (enterAge === 15) {
         $('#apply1').html(`<ul><li>${teams[7]}</li><li>${teams[8]}</li><li>${teams[9]}</li></ul>`);
    }
    
     else if (enterAge === 16) {
         $('#apply1').html(`<ul><li>${teams[8]}</li><li>${teams[9]}</li><li>${teams[10]}</li><li>${teams[11]}</li><li>${teams[12]}</li></ul>`);
    }
    
     else if (enterAge === 17) {
         $('#apply1').html(`<ul><li>${teams[9]}</li><li>${teams[10]}</li><li>${teams[11]}</li><li>${teams[12]}</li></ul>`);
    }
    
     else if (enterAge === 18) {
         $('#apply1').html(`<ul><li>${teams[10]}</li><li>${teams[11]}</li><li>${teams[12]}</li></ul>`);
    }
    
     else if (enterAge > 18 && enterAge < 35) {
         $('#apply1').html(`<ul><li>${teams[11]}</li><li>${teams[12]}</li></ul>`);
    }
    
    else if (enterAge >= 35) {
         $('#apply1').html(`<ul><li>${teams[11]}</li><li>${teams[12]}</li><li>${teams[13]}</li></ul>`);
    }
};



//method to run functions
$(document).ready(function() {
    $('form').submit(function(e) {
    e.preventDefault();
        getEnteredAge();
        showTeamResult();
    });
    });

 


