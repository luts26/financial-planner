let productCategories = [

	{
		'id': '1',
		'typeid': 'products',
		'name': 'хліб'
	},
	{
		'id': '2',
		'typeid': 'products',
		'name': 'олія'
	},
	{
		'id': '3',
		'typeid': 'products',
		'name': 'майонез'
	},
	{
		'id': '4',
		'typeid': 'products',
		'name': 'кетчуп'
	},
	{
		'id': '5',
		'typeid': 'products',
		'name': 'риба'
	},
	{
		'id': '6',
		'typeid': 'products',
		'name': 'цукор'
	},
	{
		'id': '7',
		'typeid': 'products',
		'name': 'сіль'
	},
	{
		'id': '8',
		'typeid': 'products',
		'name': 'крупа'
	},
	{
		'id': '9',
		'typeid': 'products',
		'name': 'яйця'
	},
	{
		'id': '10',
		'typeid': 'products',
		'name': 'молочні'
	},
	{
		'id': '11',
		'typeid': 'products',
		'name': 'овочі'
	},
	{
		'id': '12',
		'typeid': 'products',
		'name': 'фрукти'
	},
	{
		'id': '13',
		'typeid': 'products',
		'name': 'зелен'
	},
	{
		'id': '14',
		'typeid': 'products',
		'name': 'ягоди'
	},
	{
		'id': '15',
		'typeid': 'products',
		'name': 'мясо'
	},
	{
		'id': '16',
		'typeid': 'products',
		'name': 'десерт'
	}
]

let productSubCategory = [

	{
		'id': '1',
		'catid': ['8'],
		'name': 'гречана'
	},
	{
		'id': '2',
		'catid': ['8'],
		'name': 'гречан пласт'
	},
	{
		'id': '3',
		'catid': ['8'],
		'name': 'рисова',
	},
	{
		'id': '4',
		'catid': ['8'],
		'name': 'пшенична',
	},
	{
		'id': '5',
		'catid': ['8'],
		'name': 'вівсяна',
	},
	{
		'id': '6',
		'catid': ['8'],
		'name': 'суміш',
	},
	{
		'id': '7',
		'catid': ['8'],
		'name': 'кускус'
	},

	{
		'id': '8',
		'catid': ['10'],
		'name': 'сир'
	},
	{
		'id': '9',
		'catid': ['10'],
		'name': 'творог'
	},
	{
		'id': '10',
		'catid': ['10'],
		'name': 'сметана'
	},
	{
		'id': '11',
		'catid': ['10'],
		'name': 'молоко'
	},
	{
		'id': '12',
		'catid': ['10'],
		'name': 'масло'
	},
	{
		'id': '13',
		'catid': ['10'],
		'name': 'йогурт'
	},

	{
		'id': '14',
		'catid': '',
		'name': 'огірок'
	},
	{
		'id': '15',
		'catid': '',
		'name': 'помідор'
	},
	{
		'id': '16',
		'catid': '',
		'name': 'картопля'
	},
	{
		'id': '17',
		'catid': '',
		'name': 'буряк'
	},
	{
		'id': '18',
		'catid': '',
		'name': 'морква'
	},
	{
		'id': '19',
		'catid': '',
		'name': 'капуста'
	},
	{
		'id': '20',
		'catid': '',
		'name': 'цибуля'
	},

	{
		'id': '21',
		'catid': '',
		'name': 'яблука'
	},
	{
		'id': '22',
		'catid': '',
		'name': 'банани'
	},
	{
		'id': '23',
		'catid': '',
		'name': 'груши'
	},
	{
		'id': '24',
		'catid': '',
		'name': 'персики'
	},

	{
		'id': '25',
		'catid': '',
		'name': 'малина'
	},
	{
		'id': '26',
		'catid': '',
		'name': 'лохина'
	},
	{
		'id': '27',
		'catid': '',
		'name': 'суниця'
	},
	{
		'id': '28',
		'catid': '',
		'name': 'черешня'
	},

	{
		'id': '29',
		'catid': '',
		'name': 'курка'
	},
	{
		'id': '30',
		'catid': '',
		'name': 'перепілка'
	},
	{
		'id': '31',
		'catid': '',
		'name': 'індичка'
	},
	{
		'id': '32',
		'catid': '',
		'name': 'ковбаса'
	},
	{
		'id': '33',
		'catid': '',
		'name': 'сосиски'
	},
	{
		'id': '34',
		'catid': '',
		'name': 'фарш'
	},

	{
		'id': '35',
		'catid': '',
		'name': 'печиво'
	},
	{
		'id': '36',
		'catid': '',
		'name': 'бублики'
	},
	{
		'id': '37',
		'catid': '',
		'name': 'цукерки'
	},
	{
		'id': '38',
		'catid': '',
		'name': 'шоколад'
	},
	{
		'id': '39',
		'catid': '',
		'name': 'макарун'
	},
	{
		'id': '40',
		'catid': '',
		'name': 'торт'
	},
	{
		'id': '41',
		'catid': '',
		'name': 'вафлі'
	},
	{
		'id': '42',
		'catid': '',
		'name': 'кекс'
	}
]

const DAYS_OF_WEEK = [
	{en: 'Sunday', uk: 'Неділя'},
	{en: 'Monday', uk: 'Понеділок'},
	{en: 'Tuesday', uk: 'Вівторок'},
	{en: 'Wednesday', uk: 'Середа'},
	{en: 'Thursday', uk: 'Четвер'},
	{en: 'Friday', uk: 'П\'ятниця'},
	{en: 'Saturday', uk: 'Субота'}
]

const CATEGORIES = {
	products: {key: 'products', en: 'Products', uk: 'Продукти'},
	restaurant: {key: 'restaurant', en: 'Cafe and restaurant', uk: 'Кафе та ресторан'},
	health: {key: 'health', en: 'Beauty and health', uk: 'Краса та здоровя'},
	clothing: {key: 'clothing', en: 'Clothing and shoes', uk: 'Одяг та взуття'},
	savings: {key: 'savings', en: 'For savings', uk: 'Заощадження'},
	assets: {key: 'assets', en: 'Assets', uk: 'Активи'},
	cosmetics: {key: 'cosmetics', en: 'Cosmetics', uk: 'Косметичні засоби'},
	chemicals: {key: 'chemicals', en: 'Household chemicals', uk: 'Побутова хімія'},
	transport: {key: 'transport', en: 'Transport', uk: 'Транспорт'},
	auto: {key: 'auto', en: 'Auto', uk: 'Авто'},
	toys: {key: 'toys', en: 'Toys play', uk: 'Розваги'},
	home: {key: 'home', en: 'Products for home', uk: 'Товари для дому'},
	electrical: {key: 'electrical', en: 'Electrical engineering', uk: 'Електротехніка'},
	cards: {key: 'cards', en: 'Pay to card', uk: 'Переказ на карту'},
	charity: {key: 'charity', en: 'Charity', uk: 'Багодійність'},
	other: {key: 'other', en: 'Other', uk: 'Інше'},
}

const $fiplApp = document.querySelector('fipl-app')

let ws = new WebSocket(`ws://${window.location.hostname}:3006`)

ws.onmessage = event => {
	const responce = JSON.parse(event.data)

	_log(responce)

	if ('syncdata' === responce.command) {
		syncData()
	}

	if ('senddata' === responce.command) {
		if ($fiplApp.querySelector('.popup_container')) {
			$fiplApp.querySelector('.popup_container').remove()
		}
		setStorageData('fipl-app-data', responce.data)
		getAppData()
		updateUi(true)
	}

	if ('getdata' === responce.command) {
		if ($fiplApp.querySelector('.popup_container')) {
			$fiplApp.querySelector('.popup_container').remove()
		}
		wsSendMessage('senddata', JSON.stringify(getStorageData('fipl-app-data')))
	}

	if ('create' === responce.command) {
		addNewItem(responce.data, responce.data.id)
		updateAppData(responce.data, responce.data.id)
	}
}

function wsSendMessage(command, data = null) {
	if (ws.readyState !== WebSocket.OPEN) {
		console.warn('WS is not avaliable')
		return
	}

	let message = {command}
	if (data) message.data = data
	ws.send(JSON.stringify(message))
}

function getCopy() {
	let appName = 'hB00',
		appVersion = '2.14.73',
		appDev = 'rajul',
		appTime = '250813111510'
	return `<div class="copy" title="What it is?">${appName} ${appVersion} ${appDev} ${appTime}</div>`
}

function _log(data) {
	console.log(data)
}

function getStorageData(name = 'hoo-data') {
	let data = localStorage.getItem(name)
	return (JSON.parse(data) || null)
}

function setStorageData(name = 'hoo-data', data = {}) {
	localStorage.setItem(name, data)
}

function addZero(num) {
	return (10 > num) ? '0' + num : num
}

function addSpaceForNum(num) {
	if (!num) return 0
	let arrNum = num.toString().split('.')
	let res = arrNum[0]
				.split('')
				.reverse()
				.map((i,index) => (index !== 0 && (index % 3) === 0) ? i + ' ' : i)
				.reverse()
				.join('')
	if (arrNum[1]) res += '.' + arrNum[1]
	return res
}

function checkExpirationDate(timestamp = null) {
	let currentDate = new Date()
	let date = currentDate.getFullYear()
	date += '.' + addZero(currentDate.getMonth() + 1)
	date += '.' + addZero(currentDate.getDate())
	let currentTimestamp = new Date(date + ' 00:00:01').getTime()
	return (currentTimestamp > timestamp)
}

function createPopup(htmlContent = '') {
	let outHtml = `
		<div class="popup_container">
			<div class="popup_content">
				<div class="popup_close">X</div>
				${htmlContent}
			</div>
		</div>
	`
	$fiplApp.insertAdjacentHTML('beforeend', outHtml)

	setTimeout(() => {
		$fiplApp.querySelector('.popup_container').classList.add('show')
	}, 100)
}

function syncData() {
	if ($fiplApp.querySelector('.popup_container')) {
		$fiplApp.querySelector('.popup_container').remove()
	}
	let outHtml = `
		<div class="syncdata-container">
			<h2>App have new connection. Synchronize data?</h2>
			<div class="buttons_container">
				<button class="send_data"><span>&uarr;</span> Send data</button>
				<button class="get_data"><span>&darr;</span> Get data</button>
			</div>
		</div>`
	createPopup(outHtml)
}

function popupHandler(event) {
	if ($fiplApp.querySelector('.popup_container')) {
		$fiplApp.querySelector('.popup_container').remove()
	}

	if (event.target.closest('.send_data')) {
		wsSendMessage('senddata', JSON.stringify(getStorageData('fipl-app-data')))
	}

	if (event.target.closest('.get_data')) {
		wsSendMessage('getdata')
	}
}

function getMainStats() {
	let date = new Date(inData.countDate)
	let currentDate = new Date().getTime()
	let countDays = (((date - currentDate) / 60 / 60 / 24 / 1000).toFixed())
	let amountLeft = (inData.countPrice - spendingSum)
	limitByDay = (0 !== Number(countDays)) ? (amountLeft / countDays) : amountLeft
	return `
		<div class="header_data">
			<div class="header_price">
				<span class="header_price_res">${addSpaceForNum(amountLeft.toFixed(2))}</span>
				<span class="header_price_cur">грн</span>
			</div>
			<div class="data_count">${countDays}</div>
			<div class="data_week">${DAYS_OF_WEEK[date.getDay()][lang]}</div>
			<div class="data_date">
				${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}
			</div>
		</div>`
}

function getRecommendSpending() {
	let avaliableToday = (limitByDay - mainCounter.approve.price)
	let limit = (0 < limitByDay) ? limitByDay : 0
	let classAvaliableToday = ''
	if (0 > avaliableToday) {
		avaliableToday = 0
		classAvaliableToday = 'red-color'
	}
	return `
		<div class="sidebar_block recommend_spending">
			<div class="sidebar_block_title">expenses per day</div>
			<div class="d-flex justify-content-between sidebar_row">
				<span>recommend limit:</span>
				<span class="recommend_limit font_weight_bold">${addSpaceForNum(limit.toFixed(2))}</span>
			</div>
			<div class="d-flex justify-content-between sidebar_row">
				<span>today spent:</span>
				<span class="today_spent font_weight_bold">- ${addSpaceForNum(mainCounter.approve.price.toFixed(2))}</span>
			</div>
			<div class="d-flex justify-content-between sidebar_row">
				<span>avaliable today:</span>
				<span class="avaliable_today font_weight_bold ${classAvaliableToday}">
					${addSpaceForNum(avaliableToday.toFixed(2))}
				</span>
			</div>
		</div>
	`
}

function getTotalStatus() {
	let outHtml = ''
	Object.keys(mainCounter).forEach(i => {
		outHtml += `<div class="stats_${i}"> 
			<span>${i}: </span>
			<span>(${mainCounter[i]['count']})</span>
			<span class="${i}_res">${mainCounter[i]['sym']} ${addSpaceForNum(mainCounter[i]['price'].toFixed(2))}</span>
		</div>`
	})
	return	`
		<div class="sidebar_stats">
			<div class="stats_title d-flex align-items-center justify-content-between">
				<span>Total stats</span>
				<button class="save_day" title="Do you want save data?">save</button>
			</div>
			${outHtml}
			<div class="separator"></div>
			<div class="stats_disable">
				<span>Main: </span>
				<span></span>
				<span class="limit_res">${addSpaceForNum(inData.countPrice)}</span>
			</div>
			<div class="stats_disable font_weight_bold">
				<span>Spending: </span>
				<span></span>
				<span class="spending_res">- ${addSpaceForNum(spendingSum.toFixed(2))}</span>
			</div>
		</div>`
}

function getCategories(activeCats = null) {
	let outHtml = '<div class="type_list"><ul>'
	let activeCatsArr = []
	if (activeCats) {
		activeCatsArr = activeCats.split(',')
	}
	Object.keys(CATEGORIES).forEach(i => {
		outHtml += `
			<li 
				class="type_item ${(activeCatsArr.indexOf(i) !== -1) ? 'active' : ''}" 
				data-keytype="${CATEGORIES[i]['key']}"
			>`
		outHtml += CATEGORIES[i][lang]
		outHtml += '</li>'
	})
	return outHtml + '</ul></div>'
}

function getForm(formData = null) {
	let formTitle = 'Create new request'
	let formButton = 'Create'
	let priceValue = ''
	let descValue = ''
	if (formData) {
		formTitle = 'Edit request'
		formButton = 'save'
		priceValue = formData.sum
		descValue = formData.desc
	}
	let outHtml = `
		<div class="form">
			<div class="form_title">${formTitle}</div>
			<div class="form_box">
				<input type="number" name="summ" placeholder="Price: " value="${priceValue}">
			</div>
			<div class="form_box">
				${getCategories((formData) ? formData.typeStr : null)}
			</div>
			<div class="form_box form_caterory_list d-none"> </div>
			<div class="form_box form_subcaterory_list d-none"> </div>
			<div class="d-none additional_product_information">
				<div class="form_box form_quantity">
					<input type="text" placeholder="quantity">
				</div>
				<div class="form_box form_measurement_value">
					<input type="text" placeholder="amount">
				</div>
				<div class="form_box form_measurement_unit">
					<select name="" id="">
						<option value="">kg</option>
						<option value="">l</option>
					</select>
				</div>
				<div class="form_box form_additem">
					<button class="add_new_item">Add item</button>
				</div>
			</div>
			<div class="form_box">
				<textarea name="comment" id="comment" placeholder="Comment: ">${descValue}</textarea>
			</div>
			<div class="form_box form_add">
				<div class="add_new_request" title="Do you want to buy it?">&larr; ${formButton}</div>
			</div>
		</div>`
	createPopup(outHtml)
}

function getSidebar() {
	return `
		<div class="sidebar">
			<div class="scroll_sidebar">
				${getMainStats()}
				${getRecommendSpending()}
				${getTotalStatus()}
			</div>
			${getCopy()}
		</div>`
}

function getItemHtml(item, id) {
	let date = new Date(Number(id))
	let status = ('item_' + ((item.status) ? item.status : ''))
	let typesStr = ''
	let typesArr = item.typeStr.split(',')
	_log(item)
	let outHtml = `
		<div class="list_item ${status}" data-itemid="${id}">
			<div class="item_data">
				<div class="item_date no-select">
					${date.getHours()}:${addZero(date.getMinutes())}
				</div>
				<div class="item_price no-select">${('approve' === item.status) ? '-' : ''}${addSpaceForNum(item.sum)} грн</div>
				<div class="item_desc">`

	if (item.desc) {
		let desc = item.desc.trim()
		let arrDesc = desc.split('\n')
		if (2 < arrDesc.length) {
			desc = arrDesc.map(i => `<div class="shopli_item"> ${i} </div>`).join('')
		}
		outHtml += `<div class="shopli d-none">${desc}</div>`
	}

	_log(typesArr)

	if (1 < typesArr.length) {
		typesStr = typesArr.map(i => CATEGORIES[i][lang]).join(', ')
	} else {
		typesStr = CATEGORIES[typesArr[0]][lang]
	}

	outHtml += `
					<div class="item_type no-select">${typesStr}</div>
				</div>
			</div>
			<div class="status_bar no-select">
				<div class="status_approve">Approve</div>
				<div class="status_disable">Disable</div>
			</div>
		</div>`

	return outHtml
}

function addNewItem(item, id) {
	$fiplApp.querySelector('.out_list').insertAdjacentHTML('afterbegin', getItemHtml(item, id))
}

function getPriceContainer() {
	let currentSum = inData.countPrice - Number(spendingSum)
	let outHtml = '<div class="info_desc">FInancial PLanner: NO expenses</div>'

	if (0 !== pendingSpend) {
		outHtml = `
		<div class="bace_price">${addSpaceForNum(currentSum.toFixed(2))}</div>
		<div class="header_desc">- ${addSpaceForNum(pendingSpend.toFixed(2))}</div>
		<div class="total_price">= ${addSpaceForNum((currentSum - Number(pendingSpend)).toFixed(2))}</div>`
	}

	return outHtml
}

function getOutList(calculate = false) {
	let pendingItems = ''
	let approveItems = ''
	let disableItems = ''

	Object.keys(spendingList).reverse().forEach(i => {
		let sum = Number(spendingList[i].sum)
		if (!spendingList[i].status) {
			if (calculate) {
				pendingSpend += sum
				mainCounter.pending.count++
				mainCounter.pending.price += sum
			}
			pendingItems += getItemHtml(spendingList[i], i)
		}
		if ('disable' !== spendingList[i].status) {
			if (calculate) {
				mainCounter.total.count++
				mainCounter.total.price += sum
			}
		}
		if (!checkExpirationDate(i)) {
			if ('approve' === spendingList[i].status) {
				if (calculate) {
					mainCounter.approve.count++
					mainCounter.approve.price += sum
				}
				approveItems += getItemHtml(spendingList[i], i)
				
			}
			if ('disable' === spendingList[i].status) {
				if (calculate) {
					mainCounter.disable.count++
					mainCounter.disable.price += sum
				}
				disableItems += getItemHtml(spendingList[i], i)
			}
		} else {
			if (spendingList[i]) {
				delete spendingList[i]
			}
		}
	})
	return pendingItems + approveItems + disableItems
}

function updateUi(outList = false) {
	$fiplApp.querySelector('.scroll_sidebar').innerHTML = getMainStats() + getRecommendSpending() + getTotalStatus()
	$fiplApp.querySelector('.price_container').innerHTML = getPriceContainer()
	if (outList) {
		$fiplApp.querySelector('.out_list').innerHTML = getOutList()
	}
}

function updateAppData(data, id) {
	let sum = Number(data.sum)
	pendingSpend += sum
	spendingList[id] = data

	mainCounter.pending.count++
	mainCounter.pending.price += sum
	mainCounter.total.count++
	mainCounter.total.price += sum

	updateUi()

	setStorageData('fipl-app-data', JSON.stringify({
		spendingSum,
		spendingList
	}))
}

function getAppData() {
	let storageData = getStorageData('fipl-app-data')
	if (storageData) {
		spendingSum = storageData.spendingSum
		spendingList = storageData.spendingList
	}
}

function setAppTemplate() {

	let date = new Date()
	let outList = getOutList(true)
	let sidebar = getSidebar()
	
	outHtml = `
		<section class="content">
			<div class="content_container">
				<div class="header_container">
					<div class="current_date">
						<div class="today_day">
							${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}
						</div>
					</div>
					<div class="logo_main1"></div>
					<div class="app-name" title="Планувальник фінансових потоків">
						<!-- Financial flow planner -->
						<span class="first-sym">F</span>inancial<span class="first-sym">P</span>lanner
					</div>
				</div>
				<div class="info_section d-flex align-items-center justify-content-around">
					<div class="create_new_request" title="Create new request">+</div>
					<div class="price_container d-flex align-items-center justify-content-between">
						${getPriceContainer()}
					</div>
				</div>
				<div class="out_list">${outList}</div>
			</div>
			${sidebar}
		</section>
		<div class="mobile_navigation">
			<div class="nav_btn info_btn">info</div>
			<div class="nav_btn form_btn">form</div>
			<div class="nav_btn list_btn active">list</div>
		</div>`
	$fiplApp.innerHTML = outHtml
}

function setItemStatus(id, status) {
	let storageData = getStorageData('fipl-app-data')
	let sum = 0
	Object.keys(spendingList).forEach(i => {
		if (i === id) {
			sum = Number(spendingList[i].sum)
			spendingList[i].status = status
		}
	})

	pendingSpend = (pendingSpend - sum)

	if ('approve' === status) {
		spendingSum += sum
	}

	mainCounter[status].count++
	mainCounter[status].price += sum

	mainCounter.pending.count--
	mainCounter.pending.price -= sum
	
	storageData.spendingList = spendingList
	storageData.spendingSum = spendingSum
	setStorageData('fipl-app-data', JSON.stringify(storageData))
	updateUi(true)
}

function navigationHandler(event) {

	if ($fiplApp.querySelector('.mobile_navigation .active')) {
		$fiplApp.querySelector('.mobile_navigation .active').classList.remove('active')
	}

	if (event.target.closest('.form_btn')) {
		getForm()
		event.target.closest('.form_btn').classList.add('active')
		return
	}

	if (event.target.closest('.info_btn')) {
		$fiplApp.classList.add('active_sidebar')
		$fiplApp.querySelector('.sidebar').classList.add('show')
		event.target.closest('.info_btn').classList.add('active')
		return
	}

	if (event.target.closest('.list_btn')) {
		$fiplApp.querySelector('.sidebar').classList.remove('show')
		$fiplApp.classList.remove('active_sidebar')
		event.target.closest('.list_btn').classList.add('active')
	}
}

function eventDoubleClick(event) {
	_log(event.type)
	_log(event)
}

function createRequestHandler(argument = null) {
	
}

function updateRequestHandler(formData) {

	let sum = Number(formData.sum)
	pendingSpend -= spendingList[editRequestId].sum
	pendingSpend += sum

	mainCounter.pending.price -= spendingList[editRequestId].sum
	mainCounter.pending.price += sum
	mainCounter.total.price -= spendingList[editRequestId].sum
	mainCounter.total.price += sum

	spendingList[editRequestId] = formData

	updateUi(true)

	setStorageData('fipl-app-data', JSON.stringify({
		spendingSum,
		spendingList
	}))
}

function getFormData(form) {
	let sum = form.querySelector('[name="summ"]').value
	if (!sum) return null
	let desc = form.querySelector('[name="comment"]').value
	let selectTypes = form.querySelectorAll('.type_list .active')
	let typeStr = ''

	selectTypes.forEach(t => {
		t.classList.remove('active')
		if (typeStr) typeStr += ','
		typeStr += t.dataset.keytype
	})

	return {
		status: null,
		sum,
		desc,
		typeStr
	}
}

function clearForm(form) {
	form.querySelector('[name="summ"]').value = ''
	form.querySelector('[name="comment"]').value = ''
	$fiplApp.querySelector('.popup_container').remove()
}

function eventClick(event) {

	if (event.target.closest('.app-name')) {
		document.documentElement.requestFullscreen()
		return
	}

	if (event.target.closest('.type_item')) {
		event.target.closest('.type_item').classList.toggle('active')
		return
	}

	if (event.target.closest('.form_caterory_list')) {
		if (event.target.closest('option')) {
			let itemId = event.target.closest('option').dataset.itemid
			createSubCategoryList(itemId)
		}
		return
	}

	if (event.target.closest('.add_new_request')) {

		let form = $fiplApp.querySelector('.form')
		let formData = getFormData(form)

		if (editRequestId) {
			_log('edit data from item')
			wsSendMessage('update', {id: editRequestId, ...spendingList[editRequestId]})
			updateRequestHandler(formData)
			clearForm(form)
			return
		}

		let timeId = new Date().getTime()
		wsSendMessage('create', {id: timeId, ...formData})
		addNewItem(formData, timeId)
		updateAppData(formData, timeId)
		clearForm(form)

		return
	}

	if (event.target.closest('.status_approve')) {
		setItemStatus(event.target.closest('.list_item').dataset.itemid, 'approve')
		return
	}

	if (event.target.closest('.status_disable')) {
		setItemStatus(event.target.closest('.list_item').dataset.itemid, 'disable')
		return
	}

	if (event.target.closest('.popup_close')) {
		$fiplApp.querySelector('.popup_container').classList.remove('show')
		let $nav = $fiplApp.querySelector('.mobile_navigation')
		$nav.querySelector('.form_btn').classList.remove('active')
		if ($fiplApp.classList.contains('active_sidebar')) {
			$nav.querySelector('.info_btn').classList.add('active')
		} else {
			$nav.querySelector('.list_btn').classList.add('active')
		}
		setTimeout(() => {
			$fiplApp.querySelector('.popup_container').remove()
		}, 1000)
		return
	}

	if (event.target.closest('.syncdata-container')) {
		popupHandler(event)
		return
	}

	if (event.target.closest('.mobile_navigation')) {
		navigationHandler(event)
		return
	}

	if (event.target.closest('.create_new_request')) {
		getForm()
		return
	}

	if (event.target.closest('.shopli_item')) {
		event.target.classList.toggle('shopli_item_strike')
		return
	}

	if (event.target.closest('.shopli')) {
		return
	}

	if (event.target.closest('.save_day')) {
		let formData = []
		let tmpData = null
		Object.keys(spendingList).forEach(id => {
			if ('disable' !== spendingList[id].status) {
				tmpData = spendingList[id]
				tmpData.date = id
				formData.push(tmpData)
			}
		})
		fetch('/fpapi/fpv2/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(formData)
		}).then(() => {
			createPopup(`
				<div class="syncdata-container">
					<h2>Status: Success</h2>
					<div>Data has bean saving</div>
				</div>`
			)
		})
		return
	}

	if (event.target.closest('.list_item')) {
		let listItem = event.target.closest('.list_item')
		if (listItem.classList.contains('active')) {
				listItem.classList.remove('active')
				setTimeout(() => {
					listItem.querySelector('.shopli').classList.add('d-none')
				}, 600)
		} else {
			if ($fiplApp.querySelector('.list_item.active')) {
				$fiplApp.querySelector('.list_item.active').classList.remove('active')
			}
			if (listItem.querySelector('.shopli')) {
				listItem.querySelector('.shopli').classList.remove('d-none')
				setTimeout(() => {
					listItem.classList.add('active')
				}, 100)
			}
		}
		return
	}
}

function handleEnd(event) {
	let endPressTimer = new Date().getTime()
	let countTime = Number(((endPressTimer - touchPressTimer) / 60 / 10 ).toFixed())
	if (5 === countTime) {
		if (event.target.closest('.list_item')) {
			editRequestId = event.target.closest('.list_item').dataset.itemid
			getForm(spendingList[editRequestId])
		}
	}
}


function createSubCategoryList(catId = null) {
	if (!catId) {
		return
	}

	let outHtml = '<select name="" id="" class="subcategory_list_container">'
	let items = ''

	productSubCategory.forEach(i => {
		if (i.catid.indexOf(catId) !== -1) {
			items += `<option>${i.name}</option>`
		}
	})

	if (items) {
		outHtml += `${items}</select>`

		$fiplApp.querySelector('.form_subcaterory_list').classList.remove('d-none')
		$fiplApp.querySelector('.form_subcaterory_list').innerHTML = outHtml
	}

	$fiplApp.querySelector('.additional_product_information').classList.remove('d-none')

}


function createProductCategoriesList(typeId = null) {
	return
	let outHtml = '<select name="" id="" class=""><option value="" disable>Select Category</option>'
	let items = ''
	productCategories.forEach(i => {
		if (typeId === i.typeid) {
			items += `<option data-itemid="${i.id}">${i.name}</option>`
		}
	})
	if (items) {

		outHtml += `${items}</select>`
		$fiplApp.querySelector('.form_caterory_list').innerHTML = outHtml
		$fiplApp.querySelector('.form_caterory_list').classList.remove('d-none')
	}
}

function handleStart() {
	touchPressTimer = new Date().getTime()
}

function addEventsListener() {
	// $fiplApp.addEventListener('contextmenu', eventDoubleClick)
	$fiplApp.addEventListener('mousedown', handleStart)
	$fiplApp.addEventListener('mouseup', handleEnd)
	$fiplApp.querySelector('.out_list').addEventListener('touchstart', handleStart)
	$fiplApp.querySelector('.out_list').addEventListener('touchend', handleEnd)
	$fiplApp.addEventListener('click', eventClick)
}

function initApp() {
	getAppData()
	setAppTemplate()
	addEventsListener()

	// createProductCategoriesList()
}

function hbooApp() {
	if (!$fiplApp) {
		_log('There are problems')
		return
	}
	initApp()
}

let mainCounter = {
	pending: {count: 0,price: 0,sym:'?'},
	approve: {count: 0,price: 0,sym:'-'},
	disable: {count: 0,price: 0,sym:'X'},
	total: {count: 0,price: 0,sym:''}
}

let lang = 'en'
let limitByDay = 0
let pendingSpend = 0
let spendingSum = 0
let spendingList = {}
let editRequestId = null
let touchPressTimer = null

let inData = {
	countPrice: 12000,
	startDate: '2026-09-07 19:06:01',
	countDate: '2026-09-30 23:59:01'
}

// window.addEventListener('load', async () => {
async function runSW() {
	if ('serviceWorker' in navigator) {
		try {
			await navigator.serviceWorker.register('./sw.js')
			console.log('sw: like')
			// hbooApp()
		} catch (e) {
			alert('not work')
			console.log(e)
			console.log('sw not work')
		}
	}
	alert(navigator.serviceWorker)
}
// })

// runSW()

hbooApp()
