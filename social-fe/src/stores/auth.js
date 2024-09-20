import { ref } from "vue";

export const token = ref("")

const auth_user = ref(null)

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

export const init_auth = async () => {
    load_token_local();

    if(token.value){
        await get_auth_info();    
    }
}