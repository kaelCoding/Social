import { computed, ref } from "vue";
import { auth_info_api } from "@/services/auth";

export const token = ref("")

const auth_user = ref(null)

export const get_auth_user = computed(() => {
    return auth_user.value
})

export const save_token_local = (tk) => {
    token.value = "Bearer " + tk
    localStorage.setItem("TOKEN", token.value)
}

export const load_token_local = () => {
    const tokenLocal = localStorage.getItem("TOKEN")
    if (tokenLocal) {
        token.value = tokenLocal;
    }
}

export const get_auth_info = async () => {
    try {
        const data = await auth_info_api()

        auth_user.value = data

    } catch (error) {
        console.log(error)
    }
}

export const init_auth = async () => {
    load_token_local();

    if(token.value){
        await get_auth_info();    
    }
}

export const logout = () => {
    token.value = null
    auth_user.value = null
    localStorage.clear()
}

