<script>
  import { onMount } from "svelte";

  let isAtTop = true;
  let isMounted = false;

  onMount(() => (isMounted = true));

  window.onscroll = (() => {
    if (isMounted) {
      if (window.scrollY > 1) {
        isAtTop = false;
      } else {
        isAtTop = true;
      }
    }
  })
</script>

<div class="{isAtTop ? "w-full h-screen" : "w-[90vw] h-[90vh]"} transition-all duration-500 bg-[#081217] flex items-center justify-center drop-shadow-md">
  <div
    id="mainHeight"
    class="flex {isAtTop ? "rounded-none" : "rounded-md border-4 border-white"} relative duration-500 justify-center h-full transition-all w-full bg-gradient-to-br from-pink-600 to-yellow-600 text-white text-2xl scroll-smooth"
  >
    <div class="flex justify-center flex-col items-center">
      <div
        class="flex justify-center text-transparent transition-all w-full text-4xl group"
      >
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          class="ransition-all text-white font-bold ui-huge:text-8xl uir-large:text-5xl uir-medium:text-4xl ui-small:text-3xl drop-shadow-lg"
        >
          Jewel
        </h1>
        <h1
          data-aos="fade-left"
          data-aos-delay="400"
          class="transition-all text-white font-bold ui-huge:text-8xl uir-large:text-5xl uir-medium:text-4xl ui-small:text-3xl drop-shadow-lg"
        >
          Eyed
        </h1>
      </div>
      <h1
        data-aos="fade-up"
        data-aos-delay="600"
        class="ui-huge:text-4xl uir-large:text-3xl uir-medium:text-2xl ui-small:text-xl pt-4 text-opacity-50 transition-all text-white group-hover:text-gray-200 font-bold drop-shadow-lg"
      >
        Making cool(ish) shit
      </h1>
      <div class="flex">
        <a
          href="https://discordapp.com/users/1143926569367253072"
          target="_blank"
          aria-label="Discord"
          class="hover:rotate-[-360deg] transition-all duration-700 hover:hue-rotate-180 w-10 h-10 p-2 hover:p-0 drop-shadow-lg"
        >
          <img
            src="./assets/discord.svg"
            alt="Discord Social Logo"
            data-aos="zoom-in"
            data-aos-delay="800"
            class="w-full h-full"
          />
        </a>
        <a
          href="https://github.com/jeweleyed"
          target="_blank"
          aria-label="Github"
          class="hover:rotate-[-360deg] transition-all duration-700 hover:hue-rotate-180 w-10 h-10 p-2 hover:p-0 drop-shadow-lg"
        >
          <img
            src="./assets/github.svg"
            alt="Github Social Logo"
            data-aos="zoom-in"
            data-aos-delay="1000"
            class="w-full h-full"
          />
        </a>
        <a
          href="https://www.reddit.com/u/jewel_eyed"
          target="_blank"
          aria-label="Reddit"
          class="hover:rotate-[360deg] transition-all duration-700 hover:hue-rotate-180 w-10 h-10 p-2 hover:p-0 drop-shadow-lg"
        >
          <img
            src="./assets/reddit.svg"
            alt="Reddit Social Logo"
            data-aos="zoom-in"
            data-aos-delay="1200"
            class="w-full h-full"
          />
        </a>
        <a
          href="mailto:hello@jeweleyed.com"
          target="_blank"
          aria-label="Email"
          class="hover:rotate-[360deg] transition-all duration-700 hover:hue-rotate-180 w-10 h-10 p-2 hover:p-0 drop-shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-full h-full"
            data-aos="zoom-in"
            data-aos-delay="1400"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <a href="#more" class="absolute left-2 bottom-2 transition-all {isAtTop ? "opacity-70" : "opacity-0"}">
      <h1>Scroll Down</h1>
    </a>
  </div>
</div>
