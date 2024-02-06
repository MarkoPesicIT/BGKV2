document.addEventListener("DOMContentLoaded", function()
{
	const images = document.querySelectorAll(".img");

	function clearActiveImage()
	{
		images.forEach(function(image)
		{
			image.classList.remove("active");
		});
	}

	images.forEach(function(image, index)
	{
		image.onclick = function(event)
		{
			event.stopPropagation();
			if (images[index].classList.contains("active"))
			{
				images[index].classList.remove("active");
			}
			else
			{
				clearActiveImage();
				images[index].classList.add("active");
			}
		};
	});

	document.addEventListener("click", function(event)
	{
		clearActiveImage();
	});
});

function menuBtnFunction(menuBtn)
{
	menuBtn.classList.toggle("active");
	var sidemenu = document.getElementById('sidemenu');
	const start_dugme = document.querySelector(".start_btn button");
	var imageContainer = document.querySelector('.image-container');
	if (sidemenu.style.right === '0%')
	{
		sidemenu.style.right = '-100%';

		setTimeout(function()
		{
			start_dugme.style.display = 'block';
			document.body.style.overflow = 'auto';
		}, 280);
	}
	else
	{
		setTimeout(function()
		{
			start_dugme.style.display = 'none';
			document.body.style.overflow = 'hidden';
		}, 280)
		sidemenu.style.right = '0%';
	}
}


function updateZIndexOnScroll()
{
	var imageContainer = document.querySelector('.image-container');
	if (imageContainer !== null)
	{
		imageContainer.style.zIndex = (window.scrollY > 0) ? '-1' : '';
	}
}

function handleResize()
{
	if (window.matchMedia('(min-width: 320px) and (max-width: 479px)').matches)
	{
		window.onscroll = updateZIndexOnScroll;
		updateZIndexOnScroll();
	}
	else
	{
		window.onscroll = null;
	}
}

window.addEventListener('resize', handleResize);

handleResize();

function toggleSubMenu(strelica)
{
	const menuItem = strelica.closest('.menu-item');
	const submenu = menuItem.querySelector('.sidesubmenu');
	const icon = menuItem.querySelector('.arrow-icon');

	menuItem.classList.toggle('active');
	icon.classList.toggle('rotated');

	if (menuItem.classList.contains('active'))
	{
		submenu.style.display = 'flex';
		setTimeout(() =>
		{
			submenu.style.maxHeight = '1000px';
		}, 0);
	}
	else
	{
		submenu.style.maxHeight = '0';
		submenu.style.display = 'none';
	}
}


// footer

document.addEventListener("DOMContentLoaded", function()
{
	fetch("footer.html")
		.then(response => response.text())
		.then(html =>
		{
			document.querySelector("body").insertAdjacentHTML("beforeend", html);
		});
});

const mapa = {
	"index.html": 1,

	// o gradjevinama
	"o_gradjevinama.html": 2,

	"moderna_arhitektura.html": 2,
	"19vek.html": 2,
	"20vek.html": 2,
	"savremena_arhitektura.html": 2,
	"izmedju2rata.html": 2,

	// o licnostima
	"o_licnostima.html": 3,

	"miloje_milojevic.html": 3,
	"sima_markovic.html": 3,
	"kosta_hakman.html": 3,
	"marko_murat.html": 3,
	"vasa_cuprilovic.html": 3,
	"slavka_nastasijevic.html": 3,
	"stevan_jakovljevic.html": 3,
	"milos_crnjanski.html": 3,
	"sima_pandurovic.html": 3,
	"momclo_nastasijevic.html": 3,

	// duh metropole
	"duh_metropole.html": 4,

	"ulice.html": 4,
	"arhitektura.html": 4,
	"moda.html": 4,
	"film.html": 4,
	"festival.html": 4,

	// fragemnti
	"fragmenti.html": 5,
	// kvizovi
	"kvizovi.html": 6,
	// oprojektu
	"oprojektu.html": 7,
};

document.addEventListener("DOMContentLoaded", function()
{
	const currentPage = window.location.pathname.split("/").pop().trim();
	console.log("Trenutna strana:", currentPage);

	setTimeout(function()
	{
		const menuItems = document.querySelectorAll(".menu li");
		console.log("Meni Itemi:", menuItems);

		if (menuItems.length === 0)
		{
			fetch("header.html")
				.then(response => response.text())
				.then(html =>
				{
					document.querySelector("body").insertAdjacentHTML("afterbegin", html);
					applyActiveMenuItem(currentPage);
				})
				.catch(error =>
				{
					console.error("Nema header.html:", error);
				});
		}
		else
		{
			applyActiveMenuItem(currentPage);
		}
	}, 100);
});

function applyActiveMenuItem(currentPage)
{
	const menuItems = document.querySelectorAll(".menu li");
	console.log("Meni Itemi:", menuItems);

	menuItems.forEach(function(menuItem)
	{
		const menuItemAnchor = menuItem.querySelector("a");
		const menuItemHref = menuItemAnchor.getAttribute("href");

		if (menuItemHref === currentPage)
		{
			console.log("Ciljani meni item:", menuItem);
			menuItem.classList.add("meni-active");
		}
		else
		{
			const submenuItems = menuItem.querySelectorAll("ul.submenu li");
			submenuItems.forEach(function(submenuItem)
			{
				const submenuItemAnchor = submenuItem.querySelector("a");
				const submenuItemHref = submenuItemAnchor.getAttribute("href");
				if (submenuItemHref === currentPage)
				{
					console.log("Ciljani submeni item:", submenuItem);
					menuItem.classList.add("meni-active");
					submenuItem.classList.add("submeni-active");
				}
			});
		}
	});
}
// kviz
document.addEventListener("DOMContentLoaded", function()
{
	const pitanjaNiz = [
	{
		pitanje: "Које од наведених дела је написао Момчило Настасијевић?",
		tacanOdgovor: "Ране приче",
		opcije: [
			"Косовски сонети",
			"Песме из Париза",
			"Ламент над Београдом",
			"Ране приче"
		]
	},
	{
		pitanje: "У својој поезији Момчило Настасијевић најчешће користи:",
		tacanOdgovor: "архаизме",
		opcije: [
			"историзме",
			"архаизме",
			"неологизме",
			"ништа од наведеног"
		]
	},
	{
		pitanje: "Која три наведена наслова припадају стваралачком опусу Момчила Настасијевића?",
		tacanOdgovor: '"Међулошко благо", збирка приповедака "Из тамног вилајета","Пет лирских кругова"',
		opcije: [
			'"Међулошко благо", "Пет лирских кругова", "Сеобе"',
			'"Љубав у Тоскани", "Сербиа", "Књига о Немачкој"',
			'"Међулошко благо", збирка приповедака "Из тамног вилајета","Пет лирских кругова"',
			"ништа од наведеног"
		]
	},
	{
		pitanje: "Поред српске књижевности, Момчило Настасијевић је дипломирао један страни језик. Који?",
		tacanOdgovor: "француски",
		opcije: [
			"енглески",
			"руски",
			"француски",
			"немачки"
		]
	},
	{
		pitanje: "Која два језика у Српској краљевској четвртој гимназији је предавао Момчило Настасијевић?",
		tacanOdgovor: "српски и француски",
		opcije: [
			"немачки и српски",
			"енглески и српски",
			"немачки и руски",
			"српски и француски"
		]
	},
	{
		pitanje: "Песник Момчило Настасијевић је имао три брата. Који од браће Настасијевић је био сликар?",
		tacanOdgovor: "Живорад",
		opcije: [
			"Светомир",
			"Славомир",
			"Живорад",
			"ништа од наведеног"
		]
	},
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је професор био Момчило Настасијевић?',
		tacanOdgovor: "Четврта мушка гимназија (1919-1929)",
		opcije: [
			"Српска краљевска четврта гимназија (1910-1919)",
			"Државна четврта мушка гимназија (1945-1953)",
			"Четврта мушка гимназија (1919-1929)",
			"Трећа београдска гимназија (1956-1964)"
		]
	},
	{
		pitanje: "Предраг Милојевић је био легенда београдског...",
		tacanOdgovor: "новинарства",
		opcije: [
			"новинарства",
			"глумишта",
			"песништва",
			"шлагера"
		]
	},
	{
		pitanje: 'Предраг Милојевић је своје дело "Кажем ја себи" жанровски одредио као:',
		tacanOdgovor: "антибиографију",
		opcije: [
			"мемоаре",
			"поему",
			"аутобиографију",
			"антибиографију"
		]
	},
	{
		pitanje: "Који од наведених наслова је назив антибиографије Предрага Милојевића?",
		tacanOdgovor: '"Кажем ја себи"',
		opcije: [
			'"О људима и ћудима"',
			'"Био сам присутан"',
			'"Кажем ја себи"',
			"ништа од наведеног"
		]
	},
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је ову школу похађао Предраг Милојевић?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: [
			"Српска краљевска четврта гимназија (1910-1919)",
			"Четврта мушка гимназија (1919-1929)",
			"Мушка гимназија Трећег реона (1944-1945)",
			"Шеста београдска гимназија (1953-1956)"
		]
	},
	{
		pitanje: "Коју историјску личност је интервјуисао Предраг Милојевић?",
		tacanOdgovor: "Адолфа Хитлера",
		opcije: [
			"Адолфа Хитлера",
			"Јосифа Висарионовича Стаљина",
			"Џона Кенедија",
			"Шарл де Гола"
		]
	},
	{
		pitanje: "Сима Марковић је био познати:",
		tacanOdgovor: "математичар и политичар",
		opcije: [
			"политичар и историчар",
			"математичар и физичар",
			"математичар и политичар",
			"ништа од наведеног"
		]
	},
	{
		pitanje: "Које од наведених дела је написао математичар и политичар Сима Марковић?",
		tacanOdgovor: "Из науке и филозофије",
		opcije: [
			"Мито о Сизифу",
			"Руминације о предстојећој катастрофи",
			"Ловац на змајеве",
			"Из науке и филозофије"
		]
	},
	{
		pitanje: "Који од наведених наслова се односи на докторску дисертацију Симе Марковића из 1913. године?",
		tacanOdgovor: "Општа Рикатијева једначина првог реда",
		opcije: [
			"Таутологија",
			"Паралелопипед",
			"Општа Рикатијева једначина првог реда",
			"Тригонометрија"
		]
	},
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је предавач био чувени математичар Сима Марковић?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: [
			"Српска краљевска четврта гимназија (1910-1919)",
			"Српска краљевска мушка гимназија (1920-1928)",
			"Државна четврта мушка гимназија (1929-1944)",
			'Трећа гимназија "Владимир Иљич Лењин" (1970-1977)'
		]
	},
	{
		pitanje: "Који од наведених наслова се не односи на научне и преводилачке активности чувеног математичара и политичара Симе Марковића?",
		tacanOdgovor: '„Од пашњака до научењака“',
		opcije: [
			'„Ајнштајнова теорија релативитета“',
			'„Комунизам у Југославији“',
			'„Од пашњака до научењака“',
			'„О покрету за реформу математичке наставе“'
		]
	},
	{
		pitanje: "Са којом од наведених личности је током Првог светског рата Сима Марковић водио азил за ратну сирочад у Крагујевцу?",
		tacanOdgovor: "са глумицом Жанком Стокић",
		opcije: [
			"са песником Момчилом Настасијевићем",
			"са математичарем Михаилом Петровићем Аласом",
			"са сликарком Надеждом Петровић",
			"са глумицом Жанком Стокић"
		]
	},
	{
		pitanje: "Ко је био Милоје Милојевић?",
		tacanOdgovor: "композитор",
		opcije: [
			"композитор",
			"научник",
			"сликар",
			"писац"
		]
	},
	{
		pitanje: "Које Милојевићево дело представља његов искорак у експресионизам?",
		tacanOdgovor: "Ритмичке гримасе",
		opcije: [
			"Смрт мајке Југовића",
			"Ритмичке гримасе",
			"Косовска свита",
			"Гозба на ливади"
		]
	},
	{
		pitanje: "Коју од наведених композиција је компоновао Милоје Милојевић?",
		tacanOdgovor: "Гозба на ливади",
		opcije: [
			"Руковети",
			"Охридска легенда",
			"Гозба на ливади",
			"Хеј трубачу!"
		]
	},
	{
		pitanje: "У ком европском граду је докторирао и био професор Музичке академије композитор Милоје Милојевић?",
		tacanOdgovor: "У Прагу",
		opcije: [
			"У Берлину",
			"У Будимпешти",
			"У Прагу",
			"У Паризу"
		]
	},
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је предавач био композитор Милоје Милојевић?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: [
			'Српска краљевска четврта гимназија (1910-1919)',
			'Четврта мушка гимназија (1919-1929)',
			'Државна четврта мушка гимназија (1929-1944)',
			'Мушка гимназија Трећег реона (1944-1945)'
		]
	},
	{
		pitanje: "Шта је по занимању био Марко Мурат?",
		tacanOdgovor: "сликар",
		opcije: [
			'писац',
			'физичар',
			'сликар',
			'историчар'
		]
	},
	{
		pitanje: 'Ко је аутор слике „Долазак цара Душана у Дубровник“?',
		tacanOdgovor: "Марко Мурат",
		opcije: [
			'Паја Јовановић',
			'Урош Предић',
			'Крсто Хегедушић',
			'Марко Мурат'
		]
	},
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је професор цртања био Марко Мурат?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: [
			'Српска краљевска четврта гимназија (1910-1919)',
			'Четврта мушка гимназија (1919-1929)',
			'Државна четврта мушка гимназија (1929-1944)',
			'Мушка гимназија Трећег реона (1944-1945)'
		]
	},
	{
		pitanje: "Ког српског владара је портретисао сликар и професор цртања и лепог писања Марко Мурат?",
		tacanOdgovor: "Александра Обреновића",
		opcije: [
			'Михаила Обреновића',
			'Милана Обреновића',
			'Александра Обреновића',
			'Петра I Караорђевића'
		]
	},
	{
		pitanje: "Ког краљевића је подучавао цртању професор Марко Мурат?",
		tacanOdgovor: "Александра I Карађорђевића",
		opcije: [
			'Александра Обреновића',
			'Александра I Карађорђевића',
			'кнеза Павла Карађорђевића',
			'Петра II Карађорђевића'
		]
	},
	{
		pitanje: "Који предмет је у Четвртој мушкој гимназији предавао Васа Чубриловић?",
		tacanOdgovor: "Историју",
		opcije: [
			'Српски језик',
			'Историју',
			'Веронауку',
			'Земљопис'
		]
	},
	{
		pitanje: "На ком факултету је предавао Васа Чубриловић?",
		tacanOdgovor: "Филозофском",
		opcije: [
			'Филозофском',
			'Правном',
			'Филолошком',
			'Економском'
		]
	},
	{
		pitanje: "Васа Чубриловић је био члан које организације?",
		tacanOdgovor: '"Млада Босна"',
		opcije: [
			'"Црна рука"',
			'"Јавор"',
			'"Млада Босна"',
			'Ђачко друштво "Скерлић"'
		]
	},
	{
		pitanje: "У ком историјском догађају је као гимназијалац учествовао Васа Чубриловић?",
		tacanOdgovor: "Срајевски атентат",
		opcije: [
			'Мајски преврат',
			'Срајевски атентат',
			'Анексија Босне',
			'Кумановска битка'
		]
	},
	{
		pitanje: "Шта је предавао Коста Хакман у Четвртој мушкој гимназији?",
		tacanOdgovor: "цртање и лепо писање",
		opcije: [
			'немачки језик',
			'земљопис',
			'јестаственицу',
			'цртање и лепо писањег'
		]
	},
	{
		pitanje: 'Ко је за Милоша Црњанског рекао:“Сви смо ми талентовани, само је Црњански богом дан"?',
		tacanOdgovor: "Иво Андрић",
		opcije: [
			'Сима Пандуровић',
			'Момчило Настасијевић',
			'Иво Андрић',
			'Меша Селимовић'
		]
	},
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је предавао Милош Црњански?',
		tacanOdgovor: "Четврта мушка гимназија (1919-1929)",
		opcije: [
			'Српска краљевска четврта гимназија (1910-1919)',
			'Четврта мушка гимназија (1919-1929)',
			'Државна четврта мушка гимназија (1929-1944)',
			'Мушка гимназија Трећег реона (1944-1945)'
		]
	},
	{
		pitanje: "Које предмете је предавао Милош Црњански у Четвртој мушкој гимназији између 1922. и 1932. године?",
		tacanOdgovor: "српски (српско-хрватски-словеначки) језик, француски језик, историју и земљопис",
		opcije: [
			'српски (српско-хрватски-словеначки) језик, француски језик, историју и земљопис',
			'српски (српско-хрватски-словеначки) језик, немачки језик, филозофију и земљопис',
			'српски (српско-хрватски-словеначки) језик, француски језик, земљопис и гимнастику',
			'српски (српско-хрватски-словеначки) језик и немачки језик'
		]
	},
	{
		pitanje: "У ком временском периоду је Милош Црњански предавао у Четвртој мушкој гимназији?",
		tacanOdgovor: "од 1922. до 1932. године",
		opcije: [
			'од 1920. до 1935. године',
			'од 1925. до 1932. године',
			'од 1922. до 1932. године',
			'Од 1920. до 1932. године'
		]
	},
	{
		pitanje: "У ком месту је рођен Милош Црњански",
		tacanOdgovor: "у Чонграду",
		opcije: [
			'у Београду',
			'у Чонграду',
			'у Темишвару',
			'у Букурешту'
		]
	},
	{
		pitanje: "Која од наведених књижевних дела је написао Милош Црњански?",
		tacanOdgovor: '„Сеобе” и „Љубав у Тоскани”',
		opcije: [
			'„Сеобе” и „Љубав у Тоскани”',
			'„Љубав у Тоскани” и „Живот и прикљученија”',
			'„Живот и прикљученија” и „Проклета авлија”',
			'„Проклета авлија” и „Сеобе”'
		]
	},
	{
		pitanje: '„Он је толико дрзак и безобразан да је чак почео и да учи!” био је коментар једног професора у Четвртој мушкој гимназији на рад и понашање свог ученика. О ком професору, чувеном књижевнику, је реч?',
		tacanOdgovor: "Милошу Црњанском",
		opcije: [
			'Сими Пандуровићу',
			'Момчилу Настасијевићу',
			'Милошу Црњанском',
			'Душану Матићу'
		]
	}];
	pitanjaNiz.forEach((pitanje, index) =>
	{
		pitanje.numb = index + 1;
	});
	const start_dugme = document.querySelector(".start_btn button");
	const pravila = document.querySelector(".info_box");
	const izadji_dugme = pravila.querySelector(".buttons .quit");
	const nastavi_dugme = pravila.querySelector(".buttons .restart");
	const kviz = document.querySelector(".quiz_box");
	const rezultati = document.querySelector(".result_box");
	const opcije = document.querySelector(".option_list");
	const vremeLinija = document.querySelector(".kviz-header .time_line");
	const vremeTekst = document.querySelector(".timer .time_left_txt");
	const vremeSekunde = document.querySelector(".timer .timer_sec");
	const sledecePitanje = document.querySelector(".kviz-footer .next_btn");
	const brojPitanja = document.querySelector(".kviz-footer .total_que");
	const izadji = document.getElementById('izadji');
	let tajmer = 30;
	let broj_pitanja = 0;
	let pocetno_pitanje = 1;
	let bodovi = 0;
	let globalTimer = null;
	let lineWidth = 0;
	const maxLineWidth = kviz.offsetWidth - 7;

	izadji.addEventListener("click", () =>
	{
		location.reload();
	});

	start_dugme.addEventListener("click", () =>
	{
		start_dugme.style.display = "none";
		pravila.classList.add("activeInfo");
	});

	izadji_dugme.addEventListener("click", () =>
	{
		pravila.classList.remove("activeInfo");
		rezultati.classList.remove("activeResult");
		start_dugme.style.display = "block";
		resetQuiz();
	});

	nastavi_dugme.addEventListener("click", () =>
	{
		pravila.style.display = "none";
		pravila.classList.remove("activeInfo");
		kviz.classList.add("activeQuiz");
		resetQuiz();
		pokaziPitanje(0);
		counterPitanja(0);
		startGlobalTimer();
	});

	function resetQuiz()
	{
		broj_pitanja = 0;
		pocetno_pitanje = 1;
		bodovi = 0;
	}

	sledecePitanje.addEventListener("click", () =>
	{
		if (broj_pitanja < pitanjaNiz.length - 1)
		{
			broj_pitanja++;
			pocetno_pitanje++;
			pokaziPitanje(broj_pitanja);
			counterPitanja(pocetno_pitanje);
			clearInterval(globalTimer);
			lineWidth = 0;
			vremeLinija.style.width = "0px";
			startGlobalTimer();
			vremeTekst.textContent = "Preostalo vreme:";
			sledecePitanje.classList.remove("show");
		}
		else
		{
			clearInterval(globalTimer);
			lineWidth = 0;
			vremeLinija.style.width = "0px";
			pokaziRezultat();
		}
	});

	function pokaziRezultat()
	{
		pravila.classList.remove("activeInfo");
		kviz.classList.remove("activeQuiz");
		rezultati.classList.add("activeResult");
		const scoreText = rezultati.querySelector(".score_text");

		let bodoviTekst;
		if (bodovi > 35)
		{
			bodoviTekst = 'Kviz je odlično urađen: imaš ' + bodovi + ' od ' + pitanjaNiz.length + ' bodova';
		}
		else if (bodovi > 20)
		{
			bodoviTekst = 'Dobro je urađen: imaš ' + bodovi + ' od ' + pitanjaNiz.length + ' bodova';
		}
		else
		{
			bodoviTekst = 'Moraš da se potrudiš: imaš ' + bodovi + ' od ' + pitanjaNiz.length + ' bodova';
		}
		scoreText.innerHTML = '<span id="score">' + bodoviTekst + '</span>';
		scoreText.textContent = bodoviTekst;
		kviz.style.display = "none";

		nastavi_dugme.addEventListener("click", () =>
		{
			rezultati.classList.remove("activeResult");
			kviz.classList.add("activeQuiz");
			broj_pitanja = 0;
			pocetno_pitanje = 1;
			bodovi = 0;
			pokaziPitanje(broj_pitanja);
			counterPitanja(pocetno_pitanje);
			startGlobalTimer();
		});
	}

	function counterPitanja(index)
	{
		const ukBrPitanja = '<span id="brPTI"><p>' + index + '</p> od <p>' + pitanjaNiz.length + '</p> pitanja </span>';
		brojPitanja.innerHTML = ukBrPitanja;
	}

	function pokaziPitanje(index)
	{
		const tekstPitanja = document.querySelector(".que_text");
		let tagPitanja = '<span>' + pitanjaNiz[index].numb + ". " + pitanjaNiz[index].pitanje + '</span>';
		let tagOpcije = pitanjaNiz[index].opcije.map(opcija =>
			'<div class="option"><span>' + opcija + '</span></div>'
		).join("");
		tekstPitanja.innerHTML = tagPitanja;
		opcije.innerHTML = tagOpcije;
		const opcija = opcije.querySelectorAll(".option");
		opcija.forEach(opt =>
		{
			opt.addEventListener("click", () => izabranaOpcija(opt));
		});
	}

	function izabranaOpcija(opt)
	{
		clearInterval(globalTimer);
		const tacanOdg = pitanjaNiz[broj_pitanja].tacanOdgovor;
		const odabraniOdgovor = opt.textContent;
		const sveOpcije = opcije.children.length;

		for (let i = 0; i < sveOpcije; i++)
		{
			opcije.children[i].classList.add("disabled");
			if (opcije.children[i].textContent === tacanOdg)
			{
				opcije.children[i].classList.add("correct");
			}
			if (opcije.children[i].textContent === odabraniOdgovor && odabraniOdgovor !== tacanOdg)
			{
				opcije.children[i].classList.add("incorrect");
			}
		}

		if (odabraniOdgovor === tacanOdg)
		{
			bodovi++;
		}

		sledecePitanje.classList.add("show");
	}

	function startGlobalTimer()
	{
		let remainingTime = tajmer;
		const frameDuration = 1000 / 60;
		const incrementWidth = (maxLineWidth - 7) / (tajmer * 60);

		globalTimer = setInterval(() =>
		{
			remainingTime -= frameDuration / 1000;
			lineWidth += incrementWidth;
			vremeSekunde.textContent = Math.ceil(remainingTime);
			vremeLinija.style.width = lineWidth + "px";

			if (remainingTime <= 0)
			{
				clearInterval(globalTimer);
				lineWidth = maxLineWidth;
				vremeSekunde.textContent = "0";
				vremeLinija.style.width = lineWidth + "px";
				const tacanOdg = pitanjaNiz[broj_pitanja].tacanOdgovor;
				const sveOpcije = opcije.children.length;
				for (let i = 0; i < sveOpcije; i++)
				{
					if (opcije.children[i].textContent === tacanOdg)
					{
						opcije.children[i].classList.add("correct");
						sledecePitanje.classList.add("show");
						setTimeout(function()
						{
							sledecePitanje.click();
						}, 5000);
					}
					opcije.children[i].classList.add("disabled");
				}
			}
		}, frameDuration);
	}

});