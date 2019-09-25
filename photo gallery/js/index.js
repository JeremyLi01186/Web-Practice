$(document).ready(function(){
	var pic=[];
	var i=0;
	$.ajax({
		url:"js/data.json",
		dataType:"json",
		async:false,
		success:function(data){
			var img=""; 
			$.each(data,function(i,n){
				img+="<img src='images/square/";
				img+=n["path"]+"'";
				img+="alt='"+n["title"]+"'>";
				pic.push(n);
			});
            $(".gallery").append(img);   
               

		},
		error:function() { alert("error loading file");  }
		
	});
	
	$(".gallery img").mouseenter(function(event){
		//get the location of mouse
		var mouseX=event.pageX;
        var mouseY=event.pageY;
		$(this).addClass("gray");
		var str = "<img src='"+$(this).attr("src")+"'>";
        var imgstr=str.replace(/square/,"medium");
        
        var title1=$(this).attr("alt");
        var pstr = "<p>" + title1;
        $.each(pic, function(index, element){
           var title2=element.title;
           if(title1 == title2) {
	           //if it equals means we find the information that we need.
                pstr +=  "<br />"+element.city+", "+element.country+", "+element.taken+"</p>";
                return false;
           }           
        });
        var preview="<div id='preview'>"+imgstr+pstr+"</div>";
        //set the location of preview and float it above the gallery pic 
        $(preview).css({"left":mouseX+20,"top":mouseY+20,"display":"block","z-index":10}).hide().appendTo("body").fadeIn(1000);

	});
	$('.gallery img').mousemove(function (event) {
		
        var mouseX=event.pageX;
        var mouseY=event.pageY;
       //update the location of preview
        $("#preview").css({"left":mouseX+20,"top":mouseY+20,"display":"block"});
    });   
	$('.gallery img').mouseleave(function () {

        $(this).removeClass("gray");
    
        $("#preview").remove();
        
    });   

	
});