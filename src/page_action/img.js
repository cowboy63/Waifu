function dispImg()
{
	const NUM_IMG = 6;
	var randNum = Math.floor((Math.random() * NUM_IMG) + 1);
	var imag = 'waifu' + randNum + '.png';
	var imgStr = '<img src="' + imag + '" alt = "">';
	document.write(imgStr);
}

document.getElementById('print-image').onclick = dispImg;