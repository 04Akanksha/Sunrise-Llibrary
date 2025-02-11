
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_message.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById('responseMessage').innerHTML = xhr.responseText;
        document.getElementById('contactForm').reset();
      } else {
        document.getElementById('responseMessage').innerHTML = 'Error occurred. Please try again later.';
      }
    };
    xhr.send(formData);
  });
  