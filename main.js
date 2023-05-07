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