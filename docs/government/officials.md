---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/226898080547602432/77ae72fdd850db5701d80d3dd85b82f5?size=1024',
    name: 'NeoTide',
    title: 'Alcuahtl, Councillor',
    links: []
  },
  {
    avatar: "https://cdn.discordapp.com/avatars/168746386320261120/1dc5d1482a9d4355cb548605cc93193d?size=1024",
    name: "Solitaire",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/199409362781863936/9c77257025d08dad79366904ab317472?size=1024',
    name: "Yergo",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/270360642496626690/790b5bf064c869dfd12cc1985fc0a31f?size=1024',
    name: "x1025",
    title: 'Chieftain, Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/280815367662731266/efd4997e4888bf4815da714ec26ee2eb?size=1024',
    name: "Husky",
    title: 'High Justice',
  },
]

const day = new Date();
if (day.getMonth()+1 === 4 && day.getDate() === 1) {
    members.forEach((member) => {
    member.title = member.title.replace("Alcuahtl", "Axolotl");
  })
}
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Government Officials
    </template>
    <template #lead>
        Yoahtl is comprised of people from around the world, 
        and those listed below are among those who hold offical jobs within it.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
