<script setup>
import { auth_register_api } from '@/services/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const dataRegister = ref({
    email: "",
    password: "",
    confirm_password: ""
})

const register = async () => {
    try {
        await auth_register_api(dataRegister.value)

        alert("register success")
        router.push("/login")
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div class="main">
        <div class="main-center container">
            <form class="form card" @submit.prevent="register">
                <div>
                    <label>Email</label>
                    <input v-model="dataRegister.email" type="text" placeholder="Enter email">
                </div>

                <div>
                    <label>Password</label>
                    <input v-model="dataRegister.password" type="password" placeholder="Enter password">
                </div>

                <div>
                    <label>Confirm password</label>
                    <input v-model="dataRegister.confirm_password" type="password" placeholder="Confirm password">
                </div>

                <button type="submit">Register</button>
            </form>

            <div class="help-block">
                Already have an account ?
                <RouterLink to="/login">Login</RouterLink>
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