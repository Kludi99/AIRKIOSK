
class Carousel
    {
         downcarousel(){
    $.getJSON("carousel.json", function(data)
    {
        var content = "";
        for(var i in data["items"])
            {
                var img = data["items"][i].img;
                var alt = data["items"][i].alt;
                var name = data["items"][i].name;
                var description = data["items"][i].description;
                var price = data["items"][i].price;
                content = "<img src=\"" + img + "\" alt=\"" + alt + "\" class=\"img-fluid\"><div class=\"product-desc2\"><h6>" + name + "</h6><p class=\"description\">"  + description + "</p><p class=\"price\">" +price+"</p></div>" 
                $(".json_img"+i).append(content);
            }
    });
              }
    }
