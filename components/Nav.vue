<template>
    <header>
		<nav class="container mx-auto p-4 flex flex-col align-center">
			<div class="mt-5 mx-auto">
				<img width="100" src="hello-teal.png">
			</div>
			<div class="mt-5 linkstyle px-5">
				<ul class="flex gap-10 justify-center align-center text-gray-400">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/events">Services</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/rentals">Rentals</NuxtLink></li>
					<li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
					<li><NuxtLink to="/contact">Contact</NuxtLink></li>
				</ul>
			</div>
		</nav>
	</header>
    <div>
        <slot />
    </div>

</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;800&display=swap');

    .title {
        font-family: 'Dancing Script';
    }

    .fb {
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
    }

    .linkstyle {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
    }

    .router-link-exact-active {
        background-color: #14b8a6;
        color: white;
        padding: 5px 10px 5px 10px;
        border-radius: 5px;
    }
</style>