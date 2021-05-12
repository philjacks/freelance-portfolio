// Email Response Subject
document.querySelector('#subject').addEventListener('input', (e) => {
  return document.querySelector('#email-response').setAttribute('value', e.target.value)
})
