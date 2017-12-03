function dispImg()
{
	//Background of the image displayed for the waifu
	document.write("<body style=\"background-image:url('anime_background.jpg')\">");
	document.write("<style type=\"text/css\">")
	document.write("body {");
	document.write("color: white;")
	document.write("background-size: 100% auto;");
	document.write("overflow: hidden;");
	document.write("} </style>")

	//Random number generator
	const NUM_IMG = 6;
	var randNum = Math.floor((Math.random() * NUM_IMG) + 1);
	var waifuName;

	//Prints out waifu name
	document.write("<font size=\"2\">Your new waifu is: </font>");
	document.write("<center>");
	document.write("<h2><font size=\"6\"><font face=\"Comic Sans MS\">");
	switch(randNum)
	{
		case 1:
		waifuName = 'Honoka';
		videoStr = 'tZobzXlIPQU';
		break;
		case 2:
		waifuName = 'Megumi';
		videoStr = '8azxn5ZeD2w';
		break;
		case 3:
		waifuName = 'Tomoko';
		videoStr = '2Tcrtty1z60';
		break;
		case 4:
		waifuName = 'Haruhi';
		videoStr = 'OYVlx3vnu8I';
		break;
		case 5:
		waifuName = 'Chitose';
		videoStr = 'vdWZKJ2Y8pU';
		break;
		case 6:
		waifuName = 'Kyouko';
		videoStr = '9gntk6woAjM';
		break;
		default:
		waifuName = 'Wow, you\'ve got a special waifu!'
		break;
	}

	//Shows waifu image
	document.write(waifuName);
	document.write("</h2></font>");
	document.write("<br>");
	var imag = 'waifu' + randNum + '.png';
	var imgStr = '<img src="' + imag + '" alt = "A proud waifu" style="width:200px;height:200px;">';
	document.write(imgStr);
	document.write("<br>");
	document.write("<iframe width=\"560\" height=\"315\" src=\"https://youtube.com/embed/"+videoStr+"?&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>")
	document.write("</center>");
}

document.getElementById('print-image').onclick = dispImg;