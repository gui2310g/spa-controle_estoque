<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import NavProjects from '@/components/NavProjects.vue'
import NavUser from '@/components/NavUser.vue'
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import AvatarImg from "../assets/user.svg"
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const route = useRoute()

const isAdminPage = computed(() => route.path.startsWith('/admin'))

const user = computed(() => {
  return isAdminPage.value
    ? {
        name: 'admin',
        email: 'admin@admin.com',
        avatar: AvatarImg,
      }
    : {
        name: 'user',
        email: 'user@user.com',
        avatar: AvatarImg,
      }
})

const projects = computed(() => {
  const base = [
    { name: 'Produtos', url: '#' },
    { name: 'Categorias', url: '#' },
    { name: 'Movimentos', url: '#' },
    { name: 'Fornecedores', url: '#' },
    { name: 'Pedidos de compra', url: '#' },
    { name: 'Itens de pedido', url: '#' },
  ]

  if (isAdminPage.value) base.push({ name: 'Usuários', url: '/admin' })
  
  return base
})

</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader class="bg-[#2f6ce4] text-white flex ">
      <NavUser :user="user" />
    </SidebarHeader>
    <SidebarContent class="bg-[#2f6ce4] text-white ">
      <NavProjects :projects="projects" />
    </SidebarContent>
  </Sidebar>
</template>
