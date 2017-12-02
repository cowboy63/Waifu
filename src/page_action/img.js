function dispImg()
{
	const NUM_IMG = 6;
	var randNum = Math.floor((Math.random() * NUM_IMG) + 1);
	var waifuName;
	switch(randNum)
	{
		case 1:
		waifuName = 'Honoka';
		break;
		case 2:
		waifuName = 'Megumi';
		break;
		case 3:
		waifuName = 'Tomoko';
		break;
		case 4:
		waifuName = 'Haruhi';
		break;
		case 5:
		waifuName = 'Chitose';
		break;
		case 6:
		waifuName = 'Kyouko';
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