<script setup>
const{valid}= defineProps({valid:Boolean})
import  {ref} from 'vue'
const form = ref({ nom: '', prenom: '', tel: '', mail: '' })

const emit = defineEmits(["ajouter"])

function addContactToTab() {
    const contact = {...form.value}
    console.log('contact',contact);
    emit("ajouter", contact)
    
    form.value = { nom: '', prenom: '', tel: '', mail: '' }
}

// watch(()=>valid,()=>{inputValid()})
</script>
<template>
    <span> le nom est </span>
    <form @submit.prevent="addContactToTab">
        <div>
            <label for="nom">Nom</label>
            <input type="text" id="nom" v-model="form.nom" />
        </div>
        <div>
            <label for="prenom">Prenom</label>
            <input type="text" id="prenom" v-model="form.prenom"/>
        </div>
        <div>
            <label for="tel">N° telephone</label>
            <input type="tel" id="tel" v-model="form.tel" :class="{invalid:!valid}"/>
        </div>
        <div>
            <label for="mail">mail</label>
            <input type="mail" id="mail" v-model="form.mail" />
        </div>
        <button type="submit">ajouter contact</button>
    </form>
</template>

