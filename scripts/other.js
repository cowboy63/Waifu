javascript:var imgs = document.getElementsByTagName("img");
for(var i=0, l=imgs.length;i<l;i++){
	var randNum = Math.floor((Math.random() * 150) + 1);
	if(randNum==5)
	imgs[i].src = "https://usercontent2.hubstatic.com/13014199_f520.jpg";
	var randNum = Math.floor((Math.random() * 150) + 1);
	if(randNum==5)
	imgs[i].src = "https://i.redd.it/29xgi1yq66ex.jpg";
	
}