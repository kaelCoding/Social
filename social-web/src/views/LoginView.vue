<script setup>
import { ref } from 'vue';
import { auth_login_api } from '@/services/auth';
import { get_auth_info, save_token_local } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const dataLogin = ref({
    email: "",
    password: ""
})

const login = async () => {
    try {
        const data = await auth_login_api(dataLogin.value)
        save_token_local(data.token)
        await get_auth_info()

        alert("login success")

        router.push("/")
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div class="main">
        <div class="main-center container">
            <form class="form card" @submit.prevent="login">
                <div>
                    <label>Email</label>
                    <input v-model="dataLogin.email" type="text" placeholder="Enter email">
                </div>

               <div>
                    <label>Password</label>
                    <input v-model="dataLogin.password" type="password" placeholder="Enter password">
               </div>

                <button type="submit">Login</button>
            </form>

            <div class="help-block">
                Don't have account ?
                <RouterLink to="/register">Register</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 700px;
}

.help-block {
    margin-top: 12px;
}
</style>