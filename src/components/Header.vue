<script setup lang="ts">
import NavItem from "./NavItem.vue";

defineProps<{name: string}>();
</script>

<template>
    <header class="w-full bg-[#566674] h-[60px] text-white">
        <nav class="flex justify-around items-center h-full">
            <div class="flex justify-evenly items-center gap-10">
                <NavItem to="/user/profile" name="Profile" />
                <NavItem to="/user/settings" name="Settings" />
                <NavItem to="/user/logout" name="Logout" />
            </div>

            <div class="flex items-center gap-2">
                <span>{{name}}</span>
                <img src="../assets/user.svg" alt="" class="w-[50px] h-[50px]" />
            </div>
        </nav>
  </header>
</template>
