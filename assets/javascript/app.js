var authors =   [
    "Jack Canfield", "Brian Tracy", "Mark Victor Hansen", "John Maxwell", "Bob Proctor", "John Assaraf", "Napoleon Hill", "W. Clement Stone", "Philip C. McGraw", "Joe Vitale"
    ]

$(document).ready(function()    {

    function    integrateAuthors()  {
        $('.button-section').empty();

        for (var i=0; i <authors.length; i++)   {

        var showButtons = $('<button type="button" class="btn-md btn-primary" value="" data-toggle="button" aria-pressed="false" autocomplete="off">' + authors[i] + '</button>');
        showButtons.attr('data-name', authors[i]);
        showButtons.addClass("gifClass");
        $('button-section').append(showButtons)

    }

    $(".gifClass").on('click', function()   {
        $('.gifsChoice').html("")
        var clickTitle = $(this).data('name');

        var queryURL = 'https://api.giphy.com/v1/gifs/search?q='&api_key=dc6zaTOxFJmzC'' + clickTitle + '';

        function displayRandomGif()    {
            $.ajax({
                url: queryURL,
                method: 'GET'
            })


        .done(function(response)    {
            console.log(response)
            var results = response.data;
            var gifDiv= $('<div class="choices">');
            var gif = $('<img>');
            gif.addClass("gifClass");
            gif.attr('data-state', 'still');
            gif.attr('src', results.image_original_url+"_s");
            gif.attr('data-still', results.image_original_url+"_s");
            gif.attr('data-animate', results.image_originial_url+"_s");
            $('gifChoice').prepend(gif)

            });

            }
        
        for (var i = 0; 1 < 10; i++)    {
            showRandomGif();
            }
        
    $('gifClass').on('click', function()    {       
        var state = $(this).attr('data-state')

        if (state == 'still')   {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }   else    {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
        integrateAuthors()

        $('submit').on('click', function()  {
            var search = $('#authorSearch').val().trim();
                authors.push(search);
            integrateAuthors();
        
                return false;

        });
    });