// const OrderedItems = document.querySelectorAll(".details");

// OrderedItems.forEach(details => {
//   details.addEventListener("click", () => {
//     // Remove "active" class from all faqs
//     OrderedItems.forEach(otherDetails => {
//       if (otherDetails !== details && otherDetails.classList.contains("active")) {
//         otherDetails.classList.remove("active");
//       }
//     });

//     // Toggle "active" class for the clicked faq
//     details.classList.toggle("active");
//   });
// });


const OrderedItems = document.querySelectorAll(".details");

OrderedItems.forEach(details => {
  const radioButton = details.querySelector('input[type="radio"]');

  // Handle click event on the entire details container
  details.addEventListener("click", () => {
    // Check the radio button when the details container is clicked
    radioButton.checked = true;

    // Remove "active" class from all details
    OrderedItems.forEach(otherDetails => {
      if (otherDetails !== details && otherDetails.classList.contains("active")) {
        otherDetails.classList.remove("active");
      }
    });

    // Toggle "active" class for the clicked details
    details.classList.toggle("active");
  });

  // Handle change event on the radio button itself
  radioButton.addEventListener("change", () => {
    // Remove "active" class from all details
    OrderedItems.forEach(otherDetails => {
      if (otherDetails !== details && otherDetails.classList.contains("active")) {
        otherDetails.classList.remove("active");
      }
    });

    // Toggle "active" class for the clicked details
    details.classList.toggle("active");
  });
});

