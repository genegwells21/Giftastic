var authors = [
    "Jack Canfield", "Brian Tracy", "Mark Victor Hansen", "John Maxwell", "Bob Proctor", "John Assaraf", "Napoleon Hill", "W. Clement Stone", "Philip C. McGraw", "Joe Vitale"
];

$("#find-authors").on("click", function(event)  {

    event.preventDefault();

    var Bob = $("#author-input").val();

    $("#author-input").val("");
    authors.push(Bob.trim());
    renderButtons();
});

function renderButtons()    {
        $("#authorButtons").empty();
            for (i = 0; i < authors.length; i++)    {
                $("#authorButtons").append("<button class='add authors btn btn-primary' style='margin:10px;'>" +authors[i] + "</button>")
            }
}

$(document).on("click", ".add-foods", getauthorInfoFromApi);

function getauthorInfoFromApi() {
    var authorInfo  = "";
    var queryURL    = ""
    $.ajax({
            url: 'api.giphy.com/v1/gifs/search?api_key=lLUfXezLB8DLZldBrzJ2XY7t5u6PN24M?q="Bob Proctor"', 
            method: 'GET'}).done(function(response){displayAuthorInfo(response);    }""
}

renderButtons();

var myID = 0;

function displayAuthorInfo(response)    {
    $("#author-view").empty();
    var imageArray = response.data;
    var myHTML = "";
    for (i = 0; i < imageArray.length; i++) {
    var rating= imageArray[i].rating;
    if
    }
}

$(document.body).on("click", "img", function()  {
    var isAnimated = $(this).attr("isAnimated");
    if (isAnimated ==null || isAnimated=='' )   {
        isAnimated = "false";
    }

if(isAnimated=="true"){
    $(this).attr("src", $(this).attr("stillSrc"));
    $(this).attr("isAnimated", "false");

} else{
    $(this).attr("src", $(this).attr("animatedSrc"));
    $(this).attr("isAnimated", "true");
}
});