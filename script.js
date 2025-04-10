const images = Array.from(document.querySelectorAll('.portfolio-image')).map(img => img.src);
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = images[currentIndex];
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modalImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentIndex];
}

// Optional: close modal when clicking outside
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});





// document.getElementById("contact-form").addEventListener("submit", async (e) =>{
//   e.preventDefault();

//   const form = e.target;
//   const data = {
//     name: form.name.value,
//     email: form.email.value,
//     message: form.message.value
//   };

//   const response = await fetch("https://script.google.com/macros/s/AKfycbwAessO5heeN6XWf5rlNK2VVd3atNdyT8tiyoULbBttVMNecnDjQ_KEAe4OsfcHmXGp/exec", {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });
  
//   // console.log (response)
//   //   .then (res => {console.log(res.json()); return res.json()})
//   //   .then(response => {
//   //     if (response.status === "success") {
//   //       alert("Message sent successfully! 🌟");
//   //       form.reset();
//   //     } else {
//   //       alert("Error: " + response.message);
//   //     }
//   //   })
//   //   .catch(error => {
//   //     console.error("Error:", error);
//   //     alert("Error sending message.");
//   //   });
  
//   })



document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
    const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  console.log(e.target);
  
  const formData = new FormData(form); // This creates form-style data
console.log(formData);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxtyT-oLL_q05V5zOrYw_5k-8tLyVLtYGo332Y5LSrVadp4rs2zbUZT0fIYzSpYMIny/exec", {
      method: "POST",
      body: JSON.stringify (data), // No headers, no JSON
    });

    const result = await response.json();
 console.log(result);

    if (result.status === "success") {
      alert("Message sent successfully! 🌟");
      form.reset();
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message.");
  }
});


