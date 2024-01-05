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
    avatar: 'https://cdn.discordapp.com/avatars/834536107878121542/d3e84cb849dc40c34504d9038ca74d40?size=1024',
    name: 'Arconis',
    title: 'Alcuahtl, Councillor',
    links: []
  },
  {
    avatar: "https://cdn.discordapp.com/avatars/528230329454952478/a_fe45d0fd7bd63f2df1dc0ed01fdaa3d9?size=1024",
    name: "Awesome_Daniel",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/280697770942136320/3a93e8d2c10469b5ac6d958f9e914e9d?size=1024',
    name: "JessieJinx",
    title: 'Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/270360642496626690/790b5bf064c869dfd12cc1985fc0a31f?size=1024',
    name: "x1025",
    title: 'Chieftain, Councillor',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/208052614347227138/4c34d8d9ace0a234d682983f28f0a768?size=1024',
    name: "ArkenX",
    title: 'General',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/280815367662731266/bbfd384a75256e5cb22c4f4c294a0960?size=1024',
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
