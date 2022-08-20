const parent = document.querySelector(".rating");
const rateSelectors = document.querySelectorAll(
  ".container .rating .rate-select span"
);
const submitButton = document.querySelector("button");
let rate = 0;
rateSelectors.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (!e.currentTarget.classList.contains("selected"))
      rateSelectors.forEach((ele) => {
        ele.classList.remove("selected");
      });
    e.currentTarget.classList.add("selected");
    rate = e.currentTarget.dataset.select;
  });
});

submitButton.onclick = () => {
  rateSelectors.forEach((ele) => {
    if (ele.classList.contains("selected")) {
      parent.innerHTML = `<img
            class="sucessimg"
            src="./imgs/illustration-thank-you.svg"
            alt="Thank You"
          />
          <p class="sucesspone">You selected <span>${rate}</span> out of 5</p>
          <h2 class="sucessh2">Thank You!</h2>
          <p class="sucessptwo">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>`;
      parent.classList.add("rating-sucess");
      parent.classList.remove("rating");
    }
  });
};
