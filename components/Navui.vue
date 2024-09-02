<template>
	<Disclosure as="nav" class="tealbg" v-slot="{ open }">
	  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
		  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
			<!-- Mobile menu button-->
			<DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
			  <span class="sr-only">Open main menu</span>
			  <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
			  <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
			</DisclosureButton>
		  </div>
		  <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
			<div class="flex flex-shrink-0 items-center">
			  <img class="block h-8 w-auto lg:hidden" src="/hello-only-white.png" alt="Hello Events, LLC" />
			  <img class="hidden h-8 w-auto lg:block" src="/hello-only-white.png" alt="Hello Events, LLC" />
			</div>

			<!-- <div class="w-[100px] flex-shrink-0 justify-start">
				<a target="_blank" href="https://www.theknot.com/marketplace/redirect-2076496?utm_source=vendor_website&utm_medium=banner&utm_term=541d3a79-8189-4dc3-aaef-ac41ad4d8db1&utm_campaign=vendor_badge_assets"><img alt="As Seen on The Knot" border="0" src="/TK-badge_AsSeen.png"></a>
			</div> -->

			<div class="hidden sm:ml-6 sm:block w-full mt-0">
			  <div class="flex space-x-4 pr-6 justify-end">
				<a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-teal-700 text-white' : 'text-white hover:bg-teal-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
			  </div>
			</div>
		  </div>


	<Popover class="relative">
		<PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white bg-amber-500 py-1 px-2 rounded">
		<span>Services</span>
		<ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
		</PopoverButton>

		<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
		<PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-[26rem] px-4">
			<div class="w-screen max-w-md flex-auto overflow-hidden rounded-b-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
			<div class="p-4">
				<div v-for="item in services" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
				<div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg tealbg group-hover:bg-white">
					<component :is="item.icon" class="h-6 w-6 text-white group-hover:text-gray-800" aria-hidden="true" />
				</div>
				<div>
					<a :href="item.href" class="font-semibold text-gray-900">
					{{ item.name }}
					<span class="absolute inset-0" />
					</a>
					<p class="mt-1 text-gray-600">{{ item.description }}</p>
				</div>
				</div>
			</div>
			<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
				<a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
				<component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
				{{ item.name }}
				</a>
			</div>
			</div>
		</PopoverPanel>
		</transition>
	</Popover>


		</div>
	  </div>
  
	  <DisclosurePanel class="sm:hidden">
		<div class="space-y-1 px-2 pb-3 pt-2">
		  <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-teal-700 text-white' : 'text-white hover:bg-teal-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
		</div>
	  </DisclosurePanel>
	</Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { ChevronDownIcon, PlayCircleIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'
  import {
	HeartIcon, 
	BriefcaseIcon,
	TrophyIcon,
	CurrencyDollarIcon,
	UserGroupIcon,
	BuildingStorefrontIcon,
	TagIcon,
	PaintBrushIcon
	} from '@heroicons/vue/24/outline'
  
  const navigation = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'About', href: '/about', current: false },
	{ name: 'Quote', href: '/quote', current: false },
	{ name: 'Contact', href: '/contact', current: false },
	{ name: 'Blog', href: '/blog', current: false },
  ],
  services = [
  { name: 'Social Events', description: 'Weddings, Engagement Parties, Anniversaries, Birthdays, Baby Showers, Family Reunions', href: '/social', icon: HeartIcon },
  { name: 'Corporate Events', description: 'Company Parties, Product Launches, Team-building Activities, Annual Meetings', href: '/corporate', icon: BriefcaseIcon },
  { name: 'Charity Events', description: "Fundraisers, Benefits, Community Events, Festivals", href: '/charity', icon: CurrencyDollarIcon },
  { name: 'Rentals', description: "Rental items for your event", href: '/rentals', icon: TagIcon },
  { name: 'Creative Services', description: "Creative Services for Clients and Vendors", href: '/creativeSvcs', icon: PaintBrushIcon },
//   { name: 'Cultural and Arts Events', description: 'Exhibitions, Fashion Shows, Music Festivals, Film Screenings, Cultural Celebrations', href: '/arts', icon: UserGroupIcon },
//   { name: 'Trade Shows and Exhibitions', description: 'Trade Shows, Industry Expos, Product Showcase', href: '/trade', icon: BuildingStorefrontIcon },
//   { name: 'Sporting Events', description: 'Tournaments, Marathons, Charity Walks, Athletic Competitions', href: '/sport', icon: TrophyIcon },
],
  callsToAction = [
  { name: 'Get a Quote', href: '/quote', icon: CurrencyDollarIcon },
  { name: 'Contact sales', href: '/contact', icon: EnvelopeIcon },
]
  </script>

  <style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
</style>