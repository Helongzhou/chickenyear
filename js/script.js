window.onload=function(){
	var music=document.getElementById("music"),
        audio=document.getElementsByTagName("audio")[0],
        page1=document.getElementById("page1"),
        page2=document.getElementById("page2"),
        page3=document.getElementById("page3");
    //music停止
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
    },false);
    //music暂停/播放
    music.addEventListener("touchstart",function(event){
    	if (audio.paused) {
    		audio.play();
    		this.setAttribute("class","play");
    		//this.style.animationPlayState="running";
    	}else{
    		audio.pause();
    		this.setAttribute("class","");
    		//this.style.animationPlayState="paused";
    	}
    },false);
    //page翻页
    page1.addEventListener("touchstart",function(){
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";
        setTimeout(function(){
        	page2.setAttribute("class","page fadeOut");
        	page3.setAttribute("class","page fadeIn")
        },6000);
    },false)
}
