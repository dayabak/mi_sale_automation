const { default: axios } = require("axios");
const puppeteer = require("puppeteer");
const { urls, creds, selectors } = require('./setup')


function delay(time)
{
	return new Promise(function(resolve) { 
		setTimeout(resolve, time)
	});
}

async function main()
{
	const browser = await puppeteer.launch({
		headless: false, // false temporarily
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});
	const page = await browser.newPage();

	await page.setDefaultNavigationTimeout(0);
	await page.goto(urls[1], { waitUntil: "networkidle0" });
	await page.setViewport({ width: 1400, height: 768 });
	await page.type(selectors.login.email, creds.username);
	await page.type(selectors.login.pass, creds.pass);
	await Promise.all([
		page.click(selectors.login.submit),
		page.waitForNavigation({ waitUntil: 'networkidle0' }),
	]);
	await delay(4000);

	console.log("Logged in successfully")
	await page.goto(urls[2], { waitUntil: "networkidle0" });
	await page.waitForSelector(selectors.battery.price_label);
	let label = await page.$(selectors.battery.price_label);
	let value = await page.evaluate(el => el.textContent, label);
	console.log(value);
	await Promise.all([
		page.click(selectors.battery.add_to_cart_wrap),
		page.waitForNavigation({ waitUntil: 'networkidle0' }),
	]);

	
	await delay(10000);
	await browser.close();
}

main();