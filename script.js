// Funkcija za dodavanje CSS datoteka u HTML
document.addEventListener("DOMContentLoaded", function() 
{
	function dodajCSS(filename)
	{
		var cssLink=document.createElement("link");
		cssLink.rel="stylesheet";
		cssLink.href=filename;
		document.head.appendChild(cssLink);
	}

	// Dodavanje svih potrebnih CSS datoteka
	dodajCSS("style/main/style.css");
	dodajCSS("style/main/darkmode.css");
	dodajCSS("style/responsive/responsive.css");
	dodajCSS("style/responsive/telefon/telefon_horizontalno.css");
	dodajCSS("style/responsive/telefon/telefon_vertikalno.css");
	dodajCSS("style/responsive/tablet/tablet_horizontalno.css");
	dodajCSS("style/responsive/tablet/tablet_vertikalno.css");

	// Funkcija za dodavanje favicona
	function dodajFavicon(filename)
	{
		var faviconLink=document.createElement("link");
		faviconLink.rel="icon";
		faviconLink.type="image/x-icon";
		faviconLink.href=filename;
		// Dodavanje favicona u head sekciju HTML dokumenta
		document.head.appendChild(faviconLink);
	}

	// Dodavanje favicona
	dodajFavicon("Materijal/Logo/favicon.ico");
	const kviz_btn=document.getElementById('mainKvizovi'); // Dugme za glavni meni kvizova
	var button=document.querySelector('.start_btn'); // Dugme za početak kviza

	if (button)
	{

		// Funkcija koja se poziva pri skrolovanju ekrana
		function handleScroll()
		{
			var buttonRect=button.getBoundingClientRect();
			var distanceFromTop=buttonRect.top;

			if (distanceFromTop <=64)
			{
				// Postavljanje z-index-a kviz_btn i button elementima na -1 kada su blizu vrha ekrana
				kviz_btn.style.zIndex='-1';
				button.style.zIndex='-1';
			}

			else
			{
				kviz_btn.style.zIndex='1';
				button.style.zIndex='1';
			}
		}

		// Dodavanje event listenera za skrolovanje ekrana
		window.addEventListener('scroll', handleScroll);
	}

	// Funkcija koja se poziva prilikom klikanja na dugme za otvaranje/skupljanje side menija
	function menuBtnFunction(menuBtn)
	{
		const kviz=document.getElementById('mainKvizovi');
		menuBtn.classList.toggle("active");
		var sidemenu=document.getElementById("sidemenu");
		const start_dugme=document.querySelector(".start_btn");
		var imageContainer=document.querySelector(".image-container");

		if (sidemenu.style.right==="0%")
		{
			sidemenu.style.right="-100%";

			setTimeout(function()
				{
					kviz.style.zIndex="1";
					start_dugme.style.zIndex="1";
					document.body.style.overflow="auto";
				}

				, 500);
		}

		else
		{
			setTimeout(function()
				{
					kviz.style.zIndex="-1";
					start_dugme.style.zIndex="-1";
					document.body.style.overflow="hidden";
				}

				, 0);
			sidemenu.style.right="0%";
		}
	}

	// Funkcija za otvaranje/skupljanje podmenija
	function toggleSubMenu(strelica)
	{
		const menuItem=strelica.closest(".menu-item");
		const submenu=menuItem.querySelector(".sidesubmenu");
		const icon=menuItem.querySelector(".arrow-icon");
		menuItem.classList.toggle("active");
		icon.classList.toggle("rotated");

		if (menuItem.classList.contains("active"))
		{
			submenu.style.maxHeight=submenu.scrollHeight+"px";
		}

		else
		{
			submenu.style.maxHeight="0";
		}
	}

	// Funkcija koja se poziva nakon što se stranica učita kako bi se primenile aktivne stavke menija
	setTimeout(function()
		{
			const menuItems=document.querySelectorAll(".menu li");

			// Ukoliko nema stavki u meniju, učitaj header i footer
			if (menuItems.length===0)
			{
				fetch("header.html") .then((response)=> response.text()) .then((html)=>
					{
						document.querySelector("body").insertAdjacentHTML("afterbegin", html);
						applyActiveMenuItem();
					}

				) .catch((error)=>
					{
						console.error("Failed to fetch header:", error);
					}
				);
			}

			else
			{
				applyActiveMenuItem();
				// Dodavanje headera/footera
			}

			fetch("footer.html") .then((response)=> response.text()) .then((html)=>
				{
					document.querySelector("body").insertAdjacentHTML("beforeend", html);
				}

			) .catch((error)=>
				{
					console.error("Failed to fetch footer:", error);
				}
			);
		}

		, 100);

	// Funkcija za označavanje aktivne stavke menija
	function applyActiveMenuItem()
	{
		const currentPage=window.location.pathname.split("/").pop().trim();
		console.log("Current Page:", currentPage);
		const menuItems=document.querySelectorAll(".menu > li");

		menuItems.forEach((item)=>
			{
				const link=item.querySelector("a").getAttribute("href");
				console.log("Menu Item Link:", link);

				if (link.endsWith (currentPage))
				{
					console.log("Adding meni-active class to menu item:", item);
					item.classList.add("meni-active");
				}

				else
				{
					const submenuItems=item.querySelectorAll(".submenu a");

					submenuItems.forEach((subitem)=>
						{
							const subLink=subitem.getAttribute("href");
							console.log("Submenu Item Link:", subLink);

							if (subLink.endsWith (currentPage))
							{
								console.log("Adding meni-active class to parent menu item:", item);
								item.classList.add("meni-active");
								console.log("Adding submeni-active class to submenu item:", subitem.parentNode);
								subitem.parentNode.classList.add("submeni-active");
							}
						}
					);
				}
			}
		);
	}

	const pitanjaNiz=[
	{
		pitanje: "Које од наведених дела је написао Момчило Настасијевић?",
		tacanOdgovor: "Ране приче",
		opcije: ["Косовски сонети",
		"Песме из Париза",
		"Ламент над Београдом",
		"Ране приче",
		],
	}

	,
	{
		pitanje: "У својој поезији Момчило Настасијевић најчешће користи:",
		tacanOdgovor: "архаизме",
		opcije: ["историзме", "архаизме", "неологизме", "ништа од наведеног"],
	}

	,
	{
		pitanje: "Која три наведена наслова припадају стваралачком опусу Момчила Настасијевића?",
		tacanOdgovor: '"Међулошко благо", збирка приповедака "Из тамног вилајета","Пет лирских кругова"',
		// kviz
		opcije: ['"Међулошко благо", "Пет лирских кругова", "Сеобе"',
		'"Љубав у Тоскани", "Сербиа", "Књига о Немачкој"',
		'"Међулошко благо", збирка приповедака "Из тамног вилајета","Пет лирских кругова"',
		"ништа од наведеног",
		],
	}

	,
	{
		pitanje: "Поред српске књижевности, Момчило Настасијевић је дипломирао један страни језик. Који?",
		tacanOdgovor: "француски",
		opcije: ["енглески", "руски", "француски", "немачки"],
	}

	,
	{
		pitanje: "Која два језика у Српској краљевској четвртој гимназији је предавао Момчило Настасијевић?",
		tacanOdgovor: "српски и француски",
		opcije: ["немачки и српски",
		"енглески и српски",
		"немачки и руски",
		"српски и француски",
		],
	}

	,
	{
		pitanje: "Песник Момчило Настасијевић је имао три брата. Који од браће Настасијевић је био сликар?",
		tacanOdgovor: "Живорад",
		opcije: ["Светомир", "Славомир", "Живорад", "ништа од наведеног"],
	}

	,
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је професор био Момчило Настасијевић?',
		tacanOdgovor: "Четврта мушка гимназија (1919-1929)",
		opcije: ["Српска краљевска четврта гимназија (1910-1919)",
		"Државна четврта мушка гимназија (1945-1953)",
		"Четврта мушка гимназија (1919-1929)",
		"Трећа београдска гимназија (1956-1964)",
		],
	}

	,
	{
		pitanje: "Предраг Милојевић је био легенда београдског...",
		tacanOdgovor: "новинарства",
		opcije: ["новинарства", "глумишта", "песништва", "шлагера"],
	}

	,
	{
		pitanje: 'Предраг Милојевић је своје дело "Кажем ја себи" жанровски одредио као:',
		tacanOdgovor: "антибиографију",
		opcije: ["мемоаре", "поему", "аутобиографију", "антибиографију"],
	}

	,
	{
		pitanje: "Који од наведених наслова је назив антибиографије Предрага Милојевића?",
		tacanOdgovor: '"Кажем ја себи"',
		opcije: ['"О људима и ћудима"',
		'"Био сам присутан"',
		'"Кажем ја себи"',
		"ништа од наведеног",
		],
	}

	,
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је ову школу похађао Предраг Милојевић?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: ["Српска краљевска четврта гимназија (1910-1919)",
		"Четврта мушка гимназија (1919-1929)",
		"Мушка гимназија Трећег реона (1944-1945)",
		"Шеста београдска гимназија (1953-1956)",
		],
	}

	,
	{
		pitanje: "Коју историјску личност је интервјуисао Предраг Милојевић?",
		tacanOdgovor: "Адолфа Хитлера",
		opcije: ["Адолфа Хитлера",
		"Јосифа Висарионовича Стаљина",
		"Џона Кенедија",
		"Шарл де Гола",
		],
	}

	,
	{
		pitanje: "Сима Марковић је био познати:",
		tacanOdgovor: "математичар и политичар",
		opcije: ["политичар и историчар",
		"математичар и физичар",
		"математичар и политичар",
		"ништа од наведеног",
		],
	}

	,
	{
		pitanje: "Које од наведених дела је написао математичар и политичар Сима Марковић?",
		tacanOdgovor: "Из науке и филозофије",
		opcije: ["Мито о Сизифу",
		"Руминације о предстојећој катастрофи",
		"Ловац на змајеве",
		"Из науке и филозофије",
		],
	}

	,
	{
		pitanje: "Који од наведених наслова се односи на докторску дисертацију Симе Марковића из 1913. године?",
		tacanOdgovor: "Општа Рикатијева једначина првог реда",
		opcije: ["Таутологија",
		"Паралелопипед",
		"Општа Рикатијева једначина првог реда",
		"Тригонометрија",
		],
	}

	,
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је предавач био чувени математичар Сима Марковић?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: ["Српска краљевска четврта гимназија (1910-1919)",
		"Српска краљевска мушка гимназија (1920-1928)",
		"Државна четврта мушка гимназија (1929-1944)",
		'Трећа гимназија "Владимир Иљич Лењин" (1970-1977)',
		],
	}

	,
	{
		pitanje: "Који од наведених наслова се не односи на научне и преводилачке активности чувеног математичара и политичара Симе Марковића?",
		tacanOdgovor: "„Од пашњака до научењака“",
		opcije: ["„Ајнштајнова теорија релативитета“",
		"„Комунизам у Југославији“",
		"„Од пашњака до научењака“",
		"„О покрету за реформу математичке наставе“",
		],
	}

	,
	{
		pitanje: "Са којом од наведених личности је током Првог светског рата Сима Марковић водио азил за ратну сирочад у Крагујевцу?",
		tacanOdgovor: "са глумицом Жанком Стокић",
		opcije: ["са песником Момчилом Настасијевићем",
		"са математичарем Михаилом Петровићем Аласом",
		"са сликарком Надеждом Петровић",
		"са глумицом Жанком Стокић",
		],
	}

	,
	{
		pitanje: "Ко је био Милоје Милојевић?",
		tacanOdgovor: "композитор",
		opcije: ["композитор", "научник", "сликар", "писац"],
	}

	,
	{
		pitanje: "Које Милојевићево дело представља његов искорак у експресионизам?",
		tacanOdgovor: "Ритмичке гримасе",
		opcije: ["Смрт мајке Југовића",
		"Ритмичке гримасе",
		"Косовска свита",
		"Гозба на ливади",
		],
	}

	,
	{
		pitanje: "Коју од наведених композиција је компоновао Милоје Милојевић?",
		tacanOdgovor: "Гозба на ливади",
		opcije: ["Руковети",
		"Охридска легенда",
		"Гозба на ливади",
		"Хеј трубачу!",
		],
	}

	,
	{
		pitanje: "У ком европском граду је докторирао и био професор Музичке академије композитор Милоје Милојевић?",
		tacanOdgovor: "У Прагу",
		opcije: ["У Берлину", "У Будимпешти", "У Прагу", "У Паризу"],
	}

	,
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је предавач био композитор Милоје Милојевић?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: ["Српска краљевска четврта гимназија (1910-1919)",
		"Четврта мушка гимназија (1919-1929)",
		"Државна четврта мушка гимназија (1929-1944)",
		"Мушка гимназија Трећег реона (1944-1945)",
		],
	}

	,
	{
		pitanje: "Шта је по занимању био Марко Мурат?",
		tacanOdgovor: "сликар",
		opcije: ["писац", "физичар", "сликар", "историчар"],
	}

	,
	{
		pitanje: "Ко је аутор слике „Долазак цара Душана у Дубровник“?",
		tacanOdgovor: "Марко Мурат",
		opcije: ["Паја Јовановић",
		"Урош Предић",
		"Крсто Хегедушић",
		"Марко Мурат",
		],
	}

	,
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је професор цртања био Марко Мурат?',
		tacanOdgovor: "Српска краљевска четврта гимназија (1910-1919)",
		opcije: ["Српска краљевска четврта гимназија (1910-1919)",
		"Четврта мушка гимназија (1919-1929)",
		"Државна четврта мушка гимназија (1929-1944)",
		"Мушка гимназија Трећег реона (1944-1945)",
		],
	}

	,
	{
		pitanje: "Ког српског владара је портретисао сликар и професор цртања и лепог писања Марко Мурат?",
		tacanOdgovor: "Александра Обреновића",
		opcije: ["Михаила Обреновића",
		"Милана Обреновића",
		"Александра Обреновића",
		"Петра I Караорђевића",
		],
	}

	,
	{
		pitanje: "Ког краљевића је подучавао цртању професор Марко Мурат?",
		tacanOdgovor: "Александра I Карађорђевића",
		opcije: ["Александра Обреновића",
		"Александра I Карађорђевића",
		"кнеза Павла Карађорђевића",
		"Петра II Карађорђевића",
		],
	}

	,
	{
		pitanje: "Који предмет је у Четвртој мушкој гимназији предавао Васа Чубриловић?",
		tacanOdgovor: "Историју",
		opcije: ["Српски језик", "Историју", "Веронауку", "Земљопис"],
	}

	,
	{
		pitanje: "На ком факултету је предавао Васа Чубриловић?",
		tacanOdgovor: "Филозофском",
		opcije: ["Филозофском", "Правном", "Филолошком", "Економском"],
	}

	,
	{
		pitanje: "Васа Чубриловић је био члан које организације?",
		tacanOdgovor: '"Млада Босна"',
		opcije: ['"Црна рука"',
		'"Јавор"',
		'"Млада Босна"',
		'Ђачко друштво "Скерлић"',
		],
	}

	,
	{
		pitanje: "У ком историјском догађају је као гимназијалац учествовао Васа Чубриловић?",
		tacanOdgovor: "Срајевски атентат",
		opcije: ["Мајски преврат",
		"Срајевски атентат",
		"Анексија Босне",
		"Кумановска битка",
		],
	}

	,
	{
		pitanje: "Шта је предавао Коста Хакман у Четвртој мушкој гимназији?",
		tacanOdgovor: "цртање и лепо писање",
		opcije: ["немачки језик",
		"земљопис",
		"јестаственицу",
		"цртање и лепо писањег",
		],
	}

	,
	{
		pitanje: 'Ко је за Милоша Црњанског рекао:“Сви смо ми талентовани, само је Црњански богом дан"?',
		tacanOdgovor: "Иво Андрић",
		opcije: ["Сима Пандуровић",
		"Момчило Настасијевић",
		"Иво Андрић",
		"Меша Селимовић",
		],
	}

	,
	{
		pitanje: 'Како се звала Гимназија "Свети Сава" у време када је предавао Милош Црњански?',
		tacanOdgovor: "Четврта мушка гимназија (1919-1929)",
		opcije: ["Српска краљевска четврта гимназија (1910-1919)",
		"Четврта мушка гимназија (1919-1929)",
		"Државна четврта мушка гимназија (1929-1944)",
		"Мушка гимназија Трећег реона (1944-1945)",
		],
	}

	,
	{
		pitanje: "Које предмете је предавао Милош Црњански у Четвртој мушкој гимназији између 1922. и 1932. године?",
		tacanOdgovor: "српски (српско-хрватски-словеначки) језик, француски језик, историју и земљопис",
		opcije: ["српски (српско-хрватски-словеначки) језик, француски језик, историју и земљопис",
		"српски (српско-хрватски-словеначки) језик, немачки језик, филозофију и земљопис",
		"српски (српско-хрватски-словеначки) језик, француски језик, земљопис и гимнастику",
		"српски (српско-хрватски-словеначки) језик и немачки језик",
		],
	}

	,
	{
		pitanje: "У ком временском периоду је Милош Црњански предавао у Четвртој мушкој гимназији?",
		tacanOdgovor: "од 1922. до 1932. године",
		opcije: ["од 1920. до 1935. године",
		"од 1925. до 1932. године",
		"од 1922. до 1932. године",
		"Од 1920. до 1932. године",
		],
	}

	,
	{
		pitanje: "У ком месту је рођен Милош Црњански",
		tacanOdgovor: "у Чонграду",
		opcije: ["у Београду", "у Чонграду", "у Темишвару", "у Букурешту"],
	}

	,
	{
		pitanje: "Која од наведених књижевних дела је написао Милош Црњански?",
		tacanOdgovor: "„Сеобе” и „Љубав у Тоскани”",
		opcije: ["„Сеобе” и „Љубав у Тоскани”",
		"„Љубав у Тоскани” и „Живот и прикљученија”",
		"„Живот и прикљученија” и „Проклета авлија”",
		"„Проклета авлија” и „Сеобе”",
		],
	}

	,
	{
		pitanje: "„Он је толико дрзак и безобразан да је чак почео и да учи!” био је коментар једног професора у Четвртој мушкој гимназији на рад и понашање свог ученика. О ком професору, чувеном књижевнику, је реч?",
		tacanOdgovor: "Милошу Црњанском",
		opcije: ["Сими Пандуровићу",
		"Момчилу Настасијевићу",
		"Милошу Црњанском",
		"Душану Матићу",
		],
	}

	,
	];

	pitanjaNiz.forEach((pitanje, index)=>
		{
			pitanje.numb=index + 1;
		}
	);
	// Uzimanje elemenata
	const pravila=document.querySelector(".info_box"); // Element za prikaz pravila kviza
	const izadji_dugme=pravila.querySelector(".buttons .quit"); // Dugme za izlazak iz pravila
	const nastavi_dugme=pravila.querySelector(".buttons .restart"); // Dugme za nastavak nakon čitanja pravila
	const kviz=document.querySelector(".quiz_box"); // Kontejner za kviz
	const rezultati=document.querySelector(".result_box"); // Kontejner za rezultate
	const opcije=document.querySelector(".option_list"); // Lista opcija za odgovore
	const vremeLinija=document.querySelector(".kviz-header .time_line"); // Linija koja prikazuje vreme
	const vremeTekst=document.querySelector(".timer .time_left_txt"); // Tekst koji prikazuje preostalo vreme
	const vremeSekunde=document.querySelector(".timer .timer_sec"); // Tekst koji prikazuje preostale sekunde
	const sledecePitanje=document.querySelector(".kviz-footer .next_btn"); // Dugme za prelazak na sledeće pitanje
	const brojPitanja=document.querySelector(".kviz-footer .total_que"); // Tekst koji prikazuje trenutno pitanje
	const izadji=document.getElementById("izadji"); // Dugme za izlazak iz kviza
	let tajmer=30; // Vremensko ograničenje po pitanju
	let broj_pitanja=0; // Trenutni broj pitanja
	let pocetno_pitanje=1; // Redni broj prvog pitanja
	let bodovi=0; // Broj bodova
	let globalTimer=null; // Globalni tajmer za vreme po pitanju
	let lineWidth=0; // Širina vremenske linije

	function setMaxLineWidth()
	{
		const screenWidth=window.innerWidth;
		const sirina=screenWidth - screenWidth * 0.15;
		const start_dugme=document.querySelector(".start_btn button"); // Dugme za početak kviza
		maxLineWidth=Math.min(30 * 16, sirina);
	}

	window.addEventListener('resize', setMaxLineWidth); // Dodaj event listener za promenu veličine ekrana

	izadji.addEventListener("click", ()=>
		{
			location.reload();
		}
	);

	start_dugme.addEventListener("click", ()=>
		{
			start_dugme.style.display="none";
			pravila.classList.add("activeInfo");
		}
	);

	izadji_dugme.addEventListener("click", ()=>
		{
			pravila.classList.remove("activeInfo");
			rezultati.classList.remove("activeResult");
			start_dugme.style.display="block";
			resetQuiz();
			// Funkcija za postavljanje maksimalne širine linije vremena u odnosu na širinu ekrana
		}
	);

	nastavi_dugme.addEventListener("click", ()=>
		{
			pravila.style.display="none";
			pravila.classList.remove("activeInfo");
			kviz.classList.add("activeQuiz");
			setMaxLineWidth(); // Postavi maksimalnu širinu linije vremena
			resetQuiz();
			pokaziPitanje(0);
			// Event listener za dugme "Izađi" koje osvežava stranicu
			counterPitanja(0);
			startGlobalTimer();
		}
	);

	// Event listener za dugme "Start" koje prikazuje pravila kviza
	function resetQuiz()
	{
		broj_pitanja=0;
		pocetno_pitanje=1;
		bodovi=0;
	}

	// Event listener za dugme "Izađi" u pravilima kviza koje ih zatvara
	sledecePitanje.addEventListener("click", ()=>
		{
			if (broj_pitanja < pitanjaNiz.length - 1)
			{
				broj_pitanja++;
				pocetno_pitanje++;
				pokaziPitanje(broj_pitanja);
				counterPitanja(pocetno_pitanje);
				// Event listener za dugme "Nastavi" u pravilima kviza koje započinje kviz
				clearInterval(globalTimer);
				lineWidth=0;
				vremeLinija.style.width="0px";
				startGlobalTimer();
				vremeTekst.textContent="ВРЕМЕ:";
				sledecePitanje.classList.remove("show");
			}

			else
			{
				clearInterval(globalTimer);
				lineWidth=0;
				vremeLinija.style.width="0px";
				// Funkcija za resetovanje stanja kviza
				pokaziRezultat();
			}
		}
	);

	function pokaziRezultat()
	{
		pravila.classList.remove("activeInfo");
		// Event listener za dugme "Sledeće pitanje" koje prelazi na sledeće pitanje ili prikazuje rezultate
		kviz.classList.remove("activeQuiz");
		rezultati.classList.add("activeResult");
		const scoreText=rezultati.querySelector(".score_text");
		let bodoviTekst;

		if (bodovi > 35)
		{
			bodoviTekst="Kviz je odlično urađen: imaš " + bodovi + " od " + pitanjaNiz.length + " bodova";
		}

		else if (bodovi > 20)
		{
			bodoviTekst="Dobro je urađen: imaš " + bodovi + " od " + pitanjaNiz.length + " bodova";
		}

		else
		{
			bodoviTekst="Moraš da se potrudiš: imaš " + bodovi + " od " + pitanjaNiz.length + " bodova";
		}

		scoreText.innerHTML='<span id="score">' + bodoviTekst + "</span>";
		scoreText.textContent=bodoviTekst;
		kviz.style.display="none";

		nastavi_dugme.addEventListener("click", ()=>
			{
				rezultati.classList.remove("activeResult");
				kviz.classList.add("activeQuiz");
				// Funkcija za prikazivanje rezultata kviza
				broj_pitanja=0;
				pocetno_pitanje=1;
				bodovi=0;
				pokaziPitanje(broj_pitanja);
				counterPitanja(pocetno_pitanje);
				startGlobalTimer();
			}
		);
	}

	function counterPitanja(index)
	{
		const ukBrPitanja='<span id="brPTI"><p>' + index + "</p> od <p>" + pitanjaNiz.length + "</p> pitanja </span>";
		brojPitanja.innerHTML=ukBrPitanja;
	}

	function pokaziPitanje(index)
	{
		const tekstPitanja=document.querySelector(".que_text");
		let tagPitanja="<span>" + pitanjaNiz[index].numb + ". " + pitanjaNiz[index].pitanje + "</span>";
		let tagOpcije=pitanjaNiz[index].opcije.map((opcija)=> '<div class="option"><span>' + opcija + "</span></div>").join("");
		tekstPitanja.innerHTML=tagPitanja;
		// Event listener za dugme "Nastavi" u rezultatima kviza koje omogućuje ponovno pokretanje kviza
		opcije.innerHTML=tagOpcije;
		const opcija=opcije.querySelectorAll(".option");

		opcija.forEach((opt)=>
			{
				opt.addEventListener("click", ()=> izabranaOpcija(opt));
			}
		);
	}

	function izabranaOpcija(opt)
	{
		clearInterval(globalTimer);
		const tacanOdg=pitanjaNiz[broj_pitanja].tacanOdgovor;
		const odabraniOdgovor=opt.textContent;
		// Funkcija za ažuriranje teksta koji prikazuje trenutno pitanje
		const sveOpcije=opcije.children.length;

		for (let i=0; i < sveOpcije; i++)
		{
			opcije.children[i].classList.add("disabled");

			// Funkcija za prikazivanje pitanja
			if (opcije.children[i].textContent===tacanOdg)
			{
				opcije.children[i].classList.add("correct");
			}

			if (opcije.children[i].textContent===odabraniOdgovor && odabraniOdgovor !==tacanOdg)
			{
				opcije.children[i].classList.add("incorrect");
			}
		}

		if (odabraniOdgovor===tacanOdg)
		{
			bodovi++;
		}

		// Funkcija koja se poziva kada se izabere odgovor
		sledecePitanje.classList.add("show");
	}

	function startGlobalTimer()
	{
		let remainingTime=tajmer;
		const frameDuration=1000 / 60;
		const incrementWidth=maxLineWidth / (tajmer * 60);

		globalTimer=setInterval(()=>
			{
				remainingTime -=frameDuration / 1000;
				lineWidth +=incrementWidth;
				vremeSekunde.textContent=Math.ceil(remainingTime);
				vremeLinija.style.width=lineWidth + "px";

				if (remainingTime <=0)
				{
					clearInterval(globalTimer);
					lineWidth=maxLineWidth;
					vremeSekunde.textContent="0";
					vremeLinija.style.width=lineWidth + "px";
					const tacanOdg=pitanjaNiz[broj_pitanja].tacanOdgovor;
					const sveOpcije=opcije.children.length;

					for (let i=0; i < sveOpcije; i++)
					{
						if (opcije.children[i].textContent===tacanOdg)
						{
							opcije.children[i].classList.add("correct");
							// Funkcija za pokretanje globalnog tajmera
							sledecePitanje.classList.add("show");
						}

						opcije.children[i].classList.add("disabled");
					}
				}
			}

			, frameDuration);
	}
}
);
