<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <HeaderComponent />
      <div>
        <h1>User page</h1>
        <span>Essa é a pagina do usuario</span>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
