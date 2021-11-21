const testimonialsContainer = document.querySelector(".container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".image");
const username = document.querySelector(".username");
const film = document.querySelector(".film");

const testimonials = [
  {
    name: "Harry Potter",
    position: "Chamber of Secrets",
    photo:
      "https://i.pinimg.com/564x/ce/e9/8e/cee98e90fe0be765a7631fc73c6640ac.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae explicabo illum ipsum iure quis consequatur labore quibusdam obcaecati nobis. Accusamus iusto rerum corrupti. Quia ullam ratione  voluptatum vero? Accusamus commodi magni ratione consectetur repellat ullam excepturi, minima quisquam laboriosam voluptas neque? Voluptatum, adipisci atque a inventore minus possimus fuga facere accusantium corporis eaque libero, voluptatem sequi illum?",
  },
  {
    name: "Johnny Deep",
    position: "Carabbian Pirates",
    photo:
      "https://i.pinimg.com/564x/22/81/cc/2281ccd7432f7742554ace36c54446c3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem temporibus, delectus dolore sequi officia ex officiis deserunt architecto deleniti optio tenetur exercitationem enim, laborum praesentium nemo aperiam cum nobis doloremque ullam! Iure quia voluptatibus sint voluptatum necessitatibus neque eius cumque, earum quibusdam odit, officiis dolore nostrum repellat reprehenderit laborum vitae dicta amet doloribus sed?",
  },
  {
    name: "Bradd Pitt",
    position: "Truva Horse",
    photo:
      "https://i.pinimg.com/564x/f8/13/8e/f8138e956045e1b5aea49c3015e0ecb7.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet, quibusdam praesentium, inventore similique esse, non sequi beatae magnam quasi deleniti minus autem! Error excepturi velit nobis. Eum quod ipsa, repudiandae quo debitis placeat rerum molestias officiis explicabo veniam, iste officia eos. Rerum explicabo aut animi magnam possimus quis aliquid perspiciatis expedita veniam voluptatum, nisi doloribus asperiores eius. Esse quisquam ea minima maiores aut, ipsam cupiditate?.",
  },
  {
    name: "Tom Cruise",
    position: "Mission Impossible",
    photo:
      "https://i.pinimg.com/564x/64/91/59/6491595eee4ea4b86ca1bc1773afeb90.jpg",
    text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sapiente ipsam quis esse impedit hic nobis natus ipsa explicabo molestiae, vitae eveniet aut, quam quaerat vel ipsum culpa similiquemolestiae, vitae eveniet aut, quam quaerat vel ipsum culpa similique debitis atque cum doloribus nihil iure iste. Nam laborum doloremque in esse!",
  },
  {
    name: "Keanu Reeves",
    position: "Matrix Reloaded",
    photo:
      "https://i.pinimg.com/564x/eb/01/73/eb01737ac0026e9f96773483b684c928.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cupiditate commodi temporibus totam, ut debitis quidem sequi, soluta modi quibusdam voluptates ea veniam rerum quasi officiis itaque expedita placeat suscipit molestias hic facilis assumenda aliquid? Totam laborum voluptatem sint explicabo eos doloribus velit error eveniet",
  },
  {
    name: "Hugh Jackman",
    position: "The Wolverine",
    photo:
      "https://i.pinimg.com/564x/e2/20/17/e220173f71024fc013a31340b426b4de.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta magni ea excepturi? Similique, libero vel commodi dolores dolore, ipsa rem maiores officiis distinctio reiciendis minima, molestiae debitis eveniet voluptates ducimus. Magnam, in dolorem non facere fugit corrupti. Fuga laborum cupiditate recusandae quo reiciendis sit blanditiis iure, ab accusamus explicabo fugit ipsum error.",
  },
  {
    name: "Leanardo Di Caprio",
    position: "Titanic",
    photo:
      "https://i.pinimg.com/564x/c9/7a/8a/c97a8a7481e1d3f41d1a9b24a511b3c0.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quo sequi quos quod blanditiis alias corporis dolorem quaerat doloribus amet reprehenderit recusandae perspiciatis est expedita, autem, ut fugit tempora nulla quasi quis itaque voluptatem velit. Pariatur fugit libero, sit, expedita, neque nulla consectetur temporibus at odit aut dolore.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  film.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 4000);
