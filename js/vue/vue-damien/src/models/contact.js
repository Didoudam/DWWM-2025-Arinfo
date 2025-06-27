export function createContact({ nom, prenom, tel, mail }) {
  return {
    id: Date.now(),
    nom: nom.trim(),
    prenom: prenom.trim(),
    tel: tel.trim(),
    mail: mail.trim(),
  }
}

export function verif(contact) {
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
  const telRegex = /^[0-9]{10}$/
console.log('=== VALIDATION DEBUG ===')
    console.log('Contact:', contact)
    console.log('nom:', contact.nom, '- valide:', !!contact.nom)
    console.log('prenom:', contact.prenom, '- valide:', !!contact.prenom) 
    console.log('tel:', contact.tel, '- longueur:', contact.tel.length, '- valide:', telRegex.test(contact.tel))
    console.log('mail:', contact.mail, '- valide:', emailRegex.test(contact.mail))
  return (
    contact.nom && contact.prenom && telRegex.test(contact.tel) && emailRegex.test(contact.mail)
  )
}
