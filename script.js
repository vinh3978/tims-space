const wrapper = document.querySelector(".wrapper");
const indicators = [...document.querySelectorAll(".indicators img")];

let currentTestimonial = 0;

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove("active");
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("active");
    currentTestimonial = i;
  });
});
