const { formBlock } = document.forms;

const autContainer = document.getElementById('formAut');
autContainer.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tweetInputs = Object.fromEntries(new FormData(formBlock));
  const response = await fetch('/authorization', {
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
