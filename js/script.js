

	let menuMobile=document.querySelector(".menu-mobile")
	let menuMobileData = document.querySelector('nav');
	let closeSubmenu = document.querySelector('.close-submenu')
	let submenu = document.querySelector('.sub-menu')
	let showsubitems = document.querySelectorAll('.showsubitems')

	menuMobile.addEventListener('click',()=>{
		menuMobileData.classList.toggle("sub-menu-list")
	
	})
		
	closeSubmenu.addEventListener("click", () => {

		menuMobileData.classList.remove("sub-menu-list")
	})
	let submenuStatus = 0
	let indexNumber;
	showsubitems.forEach((v, i) => {


		string = 'Yay';
		v.dataset.content = '\u{2304}';
		v.addEventListener("click", () => {


			showsubitems.forEach((value, iindex) => {
				if (iindex != i) {
					value.children[1].classList.remove('mobileMenu')

					value.setAttribute('data-content', '\u{2304}');

				}

			})

			v.children[1].classList.toggle('mobileMenu')
			if (indexNumber != i) {
				v.setAttribute('data-content', '\u{2303}');
				indexNumber = i;
			}
			else {
				v.setAttribute('data-content', '\u{2304}');
				indexNumber = 35;
			}
		})


	})


	










































	
			
