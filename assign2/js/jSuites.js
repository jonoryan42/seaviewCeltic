//JSuites Dropdown JavaScript
jSuites.dropdown(document.getElementById('dropdown'), {
    url: '/v4/large',
    autocomplete: true,
    lazyLoading: true,
    multiple: true,
    width: '280px',
    
      //dropdown
       data: [
           'Goalkeeper',
           'Right-Back',
           'Left-Back',
           'Centre-Back',
           'Right-Wing',
           'Left-Wing',
     'Centre-Midfield',
     'Striker'  
                 ]
                 });