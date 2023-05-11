var chat = document.getElementsByClassName("show-msg")[0];
var closeChat = document.getElementsByClassName("close-chat-box")[0];

	chat.addEventListener('click',chatBox);
	
	function chatBox(e){
		let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.sider-bar');
		
		parentDiv.style.visibility = "visible";
		let siderBarDiv = e.target.parentNode.parentNode.parentNode.parentNode;
		siderBarDiv.style.display = "none"
		// console.log(siderBarDiv);
	}
	
	closeChat.addEventListener('click',closeChatBox);
	
	function closeChatBox(e){
		let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.front-page');
		parentDiv.style.display="block";
		
		let siderBarDiv = e.target.parentNode.parentNode.parentNode;
		siderBarDiv.style.visibility = "hidden"
		
		// console.log(siderBarDiv);
	}
	
	
//post scroll
	var nextBtn = document.querySelector('.scroll-next');
	var prevBtn = document.querySelector('.scroll-prev');
	
	nextBtn.addEventListener('click',nextPic);
	prevBtn.addEventListener('click',prevPic);
	
	function nextPic(e){
		var sliderEle = e.target.parentNode.parentNode.querySelector(".slider");
		console.log(sliderEle);
		
		var marginLeft = 0;
		if(sliderEle.style.marginLeft == '0px'){
			sliderEle.style.marginLeft = "-540px";
		}
		else if(sliderEle.style.marginLeft == "-540px"){
			sliderEle.style.marginLeft = "-1080px";
		}
		else{
			sliderEle.style.marginLeft = "0px";
		}
	}

	function prevPic (e){
		var sliderEle = e.target.parentNode.parentNode.querySelector(".slider");
		console.log(sliderEle);
		
		var marginLeft = 0;
		if(sliderEle.style.marginLeft == '-1080px'){
			sliderEle.style.marginLeft = "-540px";
		}
		else if(sliderEle.style.marginLeft == "-540px"){
			sliderEle.style.marginLeft = "0px";
		}
		else{
			sliderEle.style.marginLeft = "-1080px";
		}
	}
	
	
//Story

 // document.querySelector("#story").autoplay = fl;
 
 var profile = document.querySelectorAll('.front-top-profile');
 for (let i=0; i<profile.length; i++){
	 
	profile[i].addEventListener('click',function(){
		let storyDiv = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#story')[i];
			 storyDiv.style.visibility = "visible";
			//console.log(storyDiv)
			closeDiv = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.story-close')[i];
			closeDiv.style.visibility = "visible";
		
		let forntDiv = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.front-page');
			forntDiv.style.display = "none"
		//console.log(forntDiv);
	});
	
var closeStory = document.querySelectorAll('.story-close');

	closeStory[i].addEventListener('click',closeStoryTap);
	
	function closeStoryTap (e){
		let storyDiv = this.parentNode.parentNode.parentNode.parentNode.querySelector('.front-page');
			storyDiv.style.display = "block";
		//console.log(storyDiv);
		let forntDiv = this.parentNode.parentNode.parentNode.querySelectorAll('#story')[i];
			forntDiv.style.visibility = "hidden"
		//console.log(forntDiv);		
		let closeDiv = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.story-close')[i];
			closeDiv.style.visibility = "hidden";
	}
 }