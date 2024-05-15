const phoneInput = document.getElementById("phone");

const phoneMask = IMask(phoneInput, {
  mask: "+{91} 0000000000",
});

phoneInput.addEventListener("input", function () {
  const unmaskedValue = phoneMask.unmaskedValue;

  const formattedValue =
    "+91 " +
    unmaskedValue.slice(2, 6) +
    unmaskedValue.slice(6, 10) +
    unmaskedValue.slice(10);
  phoneInput.value = formattedValue;
});

const priceInput = document.getElementById("price");
const price = Math.floor(Math.random() * 1000) + 1;
priceInput.value = price;

const subid = document.getElementById("subid");
subid.value = price;

document
  .getElementById("product-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const imagePreview = document.querySelector("#image-preview");
    const imageSrc = imagePreview.src;

    async function fetchImage(url) {
      const response = await fetch(url);
      const blob = await response.blob();
      return new File([blob], "image.webp", { type: "image/webp" });
    }

    const imageFile = await fetchImage(imageSrc);

    const formData = new FormData(event.target);
    formData.append("image", imageFile);

    fetch("#", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
