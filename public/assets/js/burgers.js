const devourButtons = document.querySelectorAll(".devourBtn");

console.log(devourButtons)

devourButtons.forEach(devourBtn => {
  devourBtn.addEventListener("click", function(event) {
    const id = event.target.getAttribute('data-id');

    fetch(`/api/burgers/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      // Check that the response is all good
      // Reload the page so the user can see the new quote
      if (response.ok) {
        console.log(`Burger successfully devoured!`);
        location.reload('/');
      } else {
        alert('something went wrong!');
      }
    });

  })
})

