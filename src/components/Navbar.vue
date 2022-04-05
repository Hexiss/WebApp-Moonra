<template>
  <Popover class="navbarcolor">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Logo</span>
            <img class="h-8 w-auto sm:h-10" src="@/assets/logos/logo.svg  " alt="" />
          </router-link>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10 test">
          <router-link to="/podcasts" class="text-base font-medium text-gray-500 hover:text-gray-900"> Podcasts </router-link>
          <router-link to="/videos" class="text-base font-medium text-gray-500 hover:text-gray-900"> Vidéos </router-link>
          <router-link to="/coaching" class="text-base font-medium text-gray-500 hover:text-gray-900"> Coaching </router-link> 
          <div>
        <router-link to="/account">
        <img src="@/assets/logos/profil.svg" alt="">
        </router-link>
        </div>
          <div>
        <router-link to="/monitoring">
        <img src="@/assets/logos/calendrier.svg" alt="">
        </router-link>
        </div>
        <div>
        <router-link to="/search">
        <img src="@/assets/logos/loop.svg" alt="">
        </router-link>
        </div>
        <div>
        <router-link to="/favorites">
        <img src="@/assets/logos/heart.svg" alt="">
        </router-link>
        </div>
        </PopoverGroup>
      </div>
    </div>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
    }
  },
}
</script>

<style scoped>
.navbarcolor {
  background-color: #6E74A5;
}

.text-gray-500 {
color: white;
}

.text-base {
    font-size: 1.2rem;
    line-height: 4rem;
}

.test{
    padding-right: 370px;
    top: 20px;
}
</style>