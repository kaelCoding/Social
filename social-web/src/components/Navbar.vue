<script setup>
import { get_auth_user, logout } from '@/stores/auth';

</script>

<template>
    <div class="navbar-ctn">
        <h1>Social</h1>
        <div class="navbar-action">
            <span v-if="get_auth_user">{{ get_auth_user.email }}</span>
            <h4 class="logout" @click="logout" v-if="get_auth_user">Logout</h4>
            <RouterLink v-if="!get_auth_user" to="/login">Login</RouterLink>
            <RouterLink v-if="!get_auth_user" to="/register">Register</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.navbar-ctn {
    display: flex;
    justify-content: space-between;
}

.navbar-action {
    display: flex;
    gap: 10px;
}

.logout {
    cursor: pointer;
}
</style>