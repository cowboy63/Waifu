function dispImg()
{
	const NUM_IMG = 6;
	var randNum = Math.floor((Math.random() * NUM_IMG) + 1);
	var waifuName;
	switch(randNum)
	{
		case 1:
		waifuName = 'Ikue';
		break;
		case 2:
		waifuName = 'Chiyako';
		break;
		case 3:
		waifuName = 'Fuyumi';
		break;
		case 4:
		waifuName = 'Hiroko';
		break;
		case 5:
		waifuName = 'Kozue';
		break;
		case 6:
		waifuName = 'Arami';
		break;
		default:
		waifuName = 'Wow, you\'ve got a special waifu!'
		break;
	}
	document.write(waifuName);

	var imag = 'waifu' + randNum + '.png';
	var imgStr = '<img src="' + imag + '" alt = "A proud waifu" style="width:200px;height:200px;">';
	document.write(imgStr);
}

document.getElementById('print-image').onclick = dispImg;