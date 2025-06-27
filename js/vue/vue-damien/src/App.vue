<script setup>
// import createContact from './models/contact.js'
import ContactForm from './components/ContactForm.vue'
import ContactList from './components/ContactList.vue'
import { createContact, verif } from './models/contact'
import { ref } from 'vue'

const listeContacts = ref([])
let valid = ref(false)

function deleteItem(id){
    listeContacts.value = listeContacts.value.filter(key => key.id !== id)
}


function addToList(data) {
  console.log(data)
  const contact = createContact(data)
  console.log('contact créé', contact)

  console.log(verif(contact))

  if (verif(contact)) {
    valid = true
    listeContacts.value.push(contact)
    console.log(listeContacts.value)
  } else {
    console.log('contact invalidz')

    valid = false
  }
}
</script>

<template>
  <ContactForm @ajouter="addToList" :valid="valid" />
  <ContactList :listeContacts="listeContacts" @suprimer="deleteItem"/>
</template>

<style scoped></style>
