let waterLight, waterDark, sand, grassLight, grassDark, mountainLight, mountainDark, snow;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	waterDark = 0.3;

	waterLight = 0.5;
	sand = 0.55;
	grassLight = 0.6;
	grassDark = 0.65;
	mountainLight = 0.70;
	mountainDark = 0.75;
	snow = 1;
}
let genNoise;


let isSet = false;

function draw() {
	frameRate(1);
	for (let i = 0; i < width; i += 10) {
		for (let x = 0; x < height; x += 10) {
			genNoise = noise(0.01 * i, 0.01 * x)

			isSet = false;
			if(genNoise < waterDark && isSet === false){
				fill(color('#005c99'));
				rect(i, x, 10, 10);
				isSet = true;
			}
			if(genNoise < waterLight && isSet === false){
				fill(color('#0099ff'));
				rect(i, x, 10, 10);
				isSet = true;
			}
			
			if(genNoise < sand && isSet === false){
				fill(color('#ffff00'));
				rect(i, x, 10, 10);
				isSet = true;
			}
			
			if(genNoise < grassLight && isSet === false){
				fill(color('#00ff00'));
				rect(i, x, 10, 10);
				isSet = true;

			}
			
			if(genNoise < grassDark && isSet === false){
				fill(color('#00cc00'));
				rect(i, x, 10, 10);
				isSet = true;
			}
			if(genNoise < mountainLight && isSet === false){
				fill(color('#595959'));

				rect(i, x, 10, 10);
				isSet = true;
			}
			if(genNoise < mountainDark && isSet === false){
				fill(color('#999999'));

				rect(i, x, 10, 10);
				
				isSet = true;
			}
			if(genNoise < snow && isSet === false){
				fill(255);
				rect(i, x, 10, 10);
				
				isSet = true;
			}
		}
	}
}


