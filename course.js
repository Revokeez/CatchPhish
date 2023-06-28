document.addEventListener("DOMContentLoaded", function()
{
    showContent('part1');
});


function showContent(part)
{
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++)
    {
        contents[i].style.display = 'none';
    }
    document.getElementById(part).style.display = 'block';
}