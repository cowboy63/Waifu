javascript:var imgs = document.getElementsByTagName("img");
for(var i=0, l=imgs.length;i<l;i++){
	var randNum = Math.floor((Math.random() * 15500) + 1);
	if(randNum==5)
	imgs[i].src = "https://usercontent2.hubstatic.com/13014199_f520.jpg";
	var randNum = Math.floor((Math.random() * 15700) + 1);
	if(randNum==5)
	imgs[i].src = "https://i.redd.it/29xgi1yq66ex.jpg";
	var randNum = Math.floor((Math.random() * 20000) + 1);
	if(randNum==5)
	imgs[i].src = "http://img1.ak.crunchyroll.com/i/spire2/01b77374fb19f99d2f2225392ee19de21455588559_full.png";
		var randNum = Math.floor((Math.random() * 25000) + 1);
	if(randNum==5)
	imgs[i].src = "https://pm1.narvii.com/6390/1fa1a52d3e4f22ad8f5118cc7927f3739d2d821d_hq.jpg";
}
