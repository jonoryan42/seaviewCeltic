//team cards, History page



$('#1A').on('click', (evt) => {
    $('#more1A').fadeIn('slow')
});

$('#1987').on('click', (evt) => {
    $('#more1987').fadeIn('slow')
});

$('#2012').on('click', (evt) => {
    $('#more2012').fadeIn('slow')
});


//1A 14p

const team1A = [
    {
    "name":"Steve Walsh",
    "position":"(Centre-Back)"
},
  {
       "name":"Sean Power",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Mark Power",
    "position":"(Right-Back)"
  },
    {
       "name":"Peter Queally",
    "position":"(Left-Back)"
  },
    {
       "name":"Edward Cullen",
    "position":"(Goalkeeper)"
  },
    {
       "name":"Paul Cullen",
    "position":"(Centre-Back)"
  },
    {
       "name":"Paul Tierney",
    "position":"(Striker)"
  },
    {
       "name":"Peter Roberts",
    "position":"(Left-Wing)"
  },
     {
       "name":"Jonathon Ryan",
    "position":"(Striker)"
  },
    {
       "name":"Joe Williams",
    "position":"(Centre-Back)"
  },
     {
       "name":"Steve Roberts",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Joe Roberts",
    "position":"(Centre-Mid)"
  },
     {
       "name":"Jim Nolan",
    "position":"(Centre-Back)"
  },
     {
       "name":"Paul Dolan",
    "position":"(Centre-Mid)"
  }
    ];

let template1 = Handlebars.compile($('#temp1').html())
let output1 = template1(team1A)
$('#more1A').html(output1);

//1987 team 15 players

const team1987 = [
    {
    "name":"Steve Parke",
    "position":"(Centre-Back)"
},
  {
       "name":"Jay Toole",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Rob Stevens",
    "position":"(Right-Back)"
  },
    {
       "name":"Thomas O'Toole",
    "position":"(Goalkeeper)"
  },
    {
       "name":"Stephen O'Mahony",
    "position":"(Striker)"
  },
    {
       "name":"Tommy Firtear",
    "position":"(Centre-Back)"
  },
    {
       "name":"Rob McGloughlin",
    "position":"(Striker)"
  },
    {
       "name":"Pete Taylor",
    "position":"(Centre-Back)"
  },
     {
       "name":"Jimmy Kimmel",
    "position":"(Right-Back)"
  },
    {
       "name":"Tony Parker",
    "position":"(Right-Wing)"
  },
     {
       "name":"Tony Brothers",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Jack Clarke",
    "position":"(Left-Wing)"
  },
     {
       "name":"Timmy Whelan",
    "position":"(Left-Back)"
  },
     {
       "name":"Joe Fitzpatrick",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Pat Queally",
    "position":"(Centre-Back)"
  }
    ]

let template2 = Handlebars.compile($('#temp1').html())
let output2 = template2(team1987)
$('#more1987').html(output2);

//2012 team 18 players

const team2012 = [
    {
    "name":"Joe Whelan",
    "position":"(Centre-Back)"
},
  {
       "name":"Steve Cullen",
    "position":"(Striker)"
  },
    {
       "name":"Paul Tierney",
    "position":"(Striker)"
  },
    {
       "name":"Steve Roberts",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Tom Kennedy",
    "position":"(Goalkeeper)"
  },
    {
       "name":"Robert Queally",
    "position":"(Centre-Back)"
  },
    {
       "name":"Peter McGinley",
    "position":"(Left-Back)"
  },
    {
       "name":"Oscar Taylor",
    "position":"(Centre-Back)"
  },
     {
       "name":"John Favreau",
    "position":"(Centre-Back)"
  },
    {
       "name":"Tim Duncan",
    "position":"(Left-Wing)"
  },
     {
       "name":"George Martin",
    "position":"(Right-Back)"
  },
    {
       "name":"Sean Power",
    "position":"(Centre-Mid)"
  },
     {
       "name":"Joseph Vereker",
    "position":"(Centre-Mid)"
  },
     {
       "name":"Thomas O'Sullivan",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Padraig Hannigan",
    "position":"(Right-Back)"
  },
    {
       "name":"Paul Dolan",
    "position":"(Centre-Mid)"
  },
    {
       "name":"Paul Cullen",
    "position":"(Centre-Back)"
  },
    {
        "name":"Jeff Henderson",
        "position": "(Right-Back)"
    }
    ];

let template3 = Handlebars.compile($('#temp1').html())
let output3 = template3(team2012)
$('#more2012').html(output3);
