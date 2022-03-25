const { formBlock } = document.forms;
const addIContainer = document.getElementById('add_instance');
addIContainer.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tweetInputs = Object.fromEntries(new FormData(formBlock));
  const response = await fetch('/add_instance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tweetInputs),
  })
  if (response.ok) {
    window.location = '/'
  }
})
