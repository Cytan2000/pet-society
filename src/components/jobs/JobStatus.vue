<template>
  <div>
    <div
      class="
        grid grid-cols-3
        gap-4
        h-full
        md:flex-row
        text-center
        place-content-center
      "
    >
      <div class="h-26 flex-auto md:col-span-2 col-span-3">
        <article
          class="
            mt-4
            p-6
            bg-white
            rounded-lg
            border border-gray-200
            shadow-md
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <div class="flex justify-between items-center mb-5 text-gray-500">
            <span
              class="
                bg-primary-100
                text-primary-800 text-xs
                font-medium
                inline-flex
                items-center
                px-2.5
                py-0.5
                rounded
                dark:bg-primary-200 dark:text-primary-800
              "
              >Pet Status</span
            >
            <span class="text-sm">In Progress</span>
          </div>
          <h2
            class="
              mb-2
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            <a href="#">Snoopy's Adventure with Jason</a>
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
            Duration of Stay: 10th Feb - 20th Feb
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                class="w-7 h-7 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <span class="font-medium dark:text-white"> Snoopy + Jason </span>
            </div>
            <div>
              <button
                class="
                  inline-flex
                  items-center
                  py-2
                  px-3
                  text-sm
                  font-medium
                  text-center text-white
                  bg-blue-700
                  rounded-lg
                  hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
              >
                <svg
                  fill="#FFF"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                </svg>
                <span class="ml-2">Upload Document</span>
              </button>
            </div>
            <input
              class="
                cursor-pointer
                absolute
                block
                py-2
                px-4
                w-full
                opacity-0
                pin-r pin-t
              "
              type="file"
              name="documents[]"
              accept="image/*"
            />
          </div>
        </article>

        <div class="grid grid-cols-3 mt-3 gap-6">
          <div
            class="
              max-w-sm
              bg-white
              ml-4
              rounded-lg
              border border-gray-200
              shadow-md
              dark:bg-gray-800 dark:border-gray-700
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                style="display: block; margin: auto"
                src="https://media.tenor.com/e-FaenNYeEwAAAAM/dog-eat.gif"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  Post 1
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Chow Chow eating dinner
              </p>
              <!-- <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> -->
              <!-- </a> -->
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              dark:bg-gray-800 dark:border-gray-700
            "
          >
            <a href="">
              <img
                class="rounded-t-lg"
                style="display: block; margin: auto"
                src="https://media.tenor.com/30P5ZQJBQUMAAAAC/dog-play.gif"
                alt=""
              />
            </a>
            <div class="p-6">
              <a href="#">
                <h5
                  class="
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  Doggy playing with Ball!
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Dog loves ball
              </p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              dark:bg-gray-800 dark:border-gray-700
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                style="display: block; margin: auto"
                src="https://media.tenor.com/VFqvjL8RfOYAAAAM/golden-retriever-sleep.gif"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="
                  inline-flex
                  items-center
                  py-2
                  px-3
                  text-sm
                  font-medium
                  text-center text-white
                  bg-blue-700
                  rounded-lg
                  hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- message -->
      <div
        class="
          w-full
          px-5
          flex flex-col
          bg-yellow-100
          justify-between
          border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
          rounded
        "
      >
        <div class="flex flex-col mt-3">
          <div v-for="item in new_array">
            <div class="flex justify-start mb-4" v-if="item[0]=='seller'">
            <img
              v-bind:src="item[1]"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              {{item[2]}}
            </div>
          </div>

            <div class="flex justify-end mb-4" v-if="item[0]=='buyer'">
              <div
                class="
                  mr-2
                  py-3
                  px-4
                  bg-blue-400
                  rounded-bl-3xl rounded-tl-3xl rounded-tr-xl
                  text-white
                " 
              >
                {{ item[2] }}
              </div>
              <img
                v-bind:src='item[1]'
                class="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>

            
          </div>

          <!-- code for seller message -->
          <!-- <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
              My pleasure! Happy to be able to help :)
            </div>
          </div> -->
        </div>
        <div class="py-5">
          <input
            id="input_message"
            class="w-full bg-black py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          />
          <button onclick="">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import { getDatabase, ref, child, get } from "firebase/database";
export default {
  data() {
    return {
      new_array:[],
    };
  },

  mounted() {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `accepted_job/-NGSBee8nn8ivvQGBClB`)).then((snapshot) => {
      if (snapshot.exists()) {
        // snapshot.val().messages.forEach((childSnapshot)=>{
        //   new_array.push(childSnapshot);
        //   console.log(new_array)
        // })
        for (const i in snapshot.val().messages) {
          console.log(snapshot.val().messages[i]);
          var layer_2_array = [];
          for (var reference in snapshot.val().messages[i]) {
            layer_2_array.push(snapshot.val().messages[i][reference]);
          }
          console.log(layer_2_array);
          this.new_array.unshift(layer_2_array);
        }
        console.log(layer_2_array);
        console.log(this.new_array);
      }
    });

  },
};
</script>