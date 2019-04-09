<template>
<div class="site-nav">
		<div class="full-screen-nav">
			<div class="nav-toggle mobile">
				<svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<g><g><g id="Group" transform="translate(0.000000, 0.637820)"><path d="M23.71087,32.3622 L2.49766803,53.575402 C0.154528286,55.9185418 0.154450505,59.7174659 2.49766803,62.0606834 C4.84072999,64.4037454 8.63980966,64.4038231 10.9829494,62.0606834 L32.1961514,40.8474814 L53.4093534,62.0606834 C55.7524932,64.4038231 59.5515658,64.4037524 61.8946348,62.0606834 C64.2378453,59.7174729 64.2377746,55.9185418 61.8946348,53.575402 L40.6814328,32.3622 L61.8946348,11.148998 C64.2377746,8.80585824 64.2376968,5.00677856 61.8946348,2.6637166 C59.5514173,0.320499082 55.7524932,0.320576864 53.4093534,2.6637166 L32.1961514,23.8769186 L10.9829494,2.6637166 C8.63980966,0.320576864 4.84087848,0.320506153 2.49766803,2.6637166 C0.154598997,5.00678563 0.154528286,8.80585824 2.49766803,11.148998 L23.71087,32.3622 Z" id="Shape"></path></g></g></g>
				</svg>
			</div>
			<nav>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</div>
		<div class="nav-inner">
			<span class="logo">Fracta</span>
			<div class="nav-toggle desktop" aria-expanded="false">
				<p class="hover-underline-animation">Menu</p>
			</div>
			<nav>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
     mounted: function() {
		const toggleDesktop = document.querySelector( '.nav-toggle.desktop' );
		const toggleMobile = document.querySelector( '.nav-toggle.mobile' );
		const mobileNav = document.querySelector( '.full-screen-nav' );

		toggleDesktop.addEventListener( 'click', (e) => {
			mobileNav.classList.add( 'isToggled' );
		})

		toggleMobile.addEventListener( 'click', (e) => {
			mobileNav.classList.remove( 'isToggled' );
		})
}}
</script>
