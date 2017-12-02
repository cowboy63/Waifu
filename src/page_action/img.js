function dispImg()
{
	var randNum = Math.floor((Math.random() * 2) + 1);
	var imag = 'waifu' + randNum + '.png';
	var imgStr = '<img src="' + imag + '" alt = "">';
	document.write(imgStr);
}

document.getElementById('print-image').onclick = dispImg;