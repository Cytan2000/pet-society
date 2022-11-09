<template>
  <base-dialog v-if="showDialog">
    <template #default>
      <!-- content -->
      <h1 class="form-title">Your Pet</h1>
      <add-pet></add-pet>
    </template>
    <template #actions>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer mx-2"
        @click="confirmDialogMsg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </template>
  </base-dialog>
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5">
            <!-- Left Side -->
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <!-- insert user profile picture here -->
              <img
                class="h-auto w-full mx-auto"
                id="userimg"
                src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
                alt=""
              />
              <input type="file"  id="imagefileid" name="filename" @change="upload_image()">
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {{ firstname }} {{ lastname }}
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
              Owner at Her Company Inc.
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"
                  ><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >Active</span
                  ></span
                >
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">{{ firstname }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">{{ lastname }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">Female</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+11 998001001</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com"
                      >jane@example.com</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button
              class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Show Full Information
            </button>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="grid grid-cols-2">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Pet</span>
                </div>
                <!-- insert pet image here -->
                <img
                  class="h-auto w-full mx-auto"
                  id="myimg"
                  src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
                  alt=""
                />
              </div>
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500"> </span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-teal-600">Pet Name</div>
                    <div class="text-gray-500">{{ petname }}</div>
                  </li>
                  <li>
                    <div class="text-teal-600">Pet Age</div>
                    <div class="text-gray-500">{{ petage }}</div>
                  </li>
                  <li>
                    <div class="text-teal-600">Pet Breed</div>
                    <div class="text-gray-500">{{ petbreed }}</div>
                  </li>
                </ul>
              </div>
              <button
                class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none hover:shadow-xs p-3 my-4"
                @click="showDialog = !showDialog"
              >
                Add Pet
              </button>
            </div>
            <!-- End of Experience and education grid -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddPet from "./AddPet.vue";
import BaseDialog from "./UI/BaseDialog.vue";
import { getDatabase, onValue, ref, child } from "firebase/database";
import { getStorage, ref as stoRef, getDownloadURL,uploadBytes } from "firebase/storage";

export default {
  components: { AddPet, BaseDialog },
  data() {
    return {
      showDialog: false,
      usercreds: "",
      petphoto: "",
      firstname: "",
      lastname: "",
      petage: "",
      petname: "",
      petbreed: "",
      petid: "",

    };
  },
  methods: {
    confirmDialogMsg() {
      this.showDialog = false;
    },
    getData() {
      const usercreds = JSON.parse(localStorage.getItem("userCredential"));
      console.log(usercreds)
      const db = getDatabase();
      const userRef = ref(db, "users/" + usercreds.uid);
      
      this.usercreds=usercreds;
      
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.petid = data.petid;
        localStorage.setItem("petid", `${data.petid}`)
      });
      this.retrieve_user_image()

    },
    getPetdata(){
      const petid = localStorage.getItem("petid");
      const db=getDatabase();
      const petRef = ref(db, "pets/" + petid);
      onValue(petRef, (snapshot) => {
        const data = snapshot.val();
        
        this.petname = data.petname;
        this.petage = data.petage;
        this.petbreed = data.petbreed;
        this.petphoto = data.petphoto;
        localStorage.setItem("petphoto",`${data.petphoto}`)
      });
    },

    retrieve_pet_image() {
      this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
      const storage = getStorage();
      var petpic=localStorage.getItem("petphoto");
      const imagename = "Images/" + petpic;
      const imagesRef = stoRef(storage, imagename);
      getDownloadURL(imagesRef)
        .then((url) => {
          // this retrieves the image and inserts it into the img tag
          console.log(url);

          const img = document.getElementById("myimg");
          img.setAttribute("src", url);
        })
        .catch((error) => {
          // Handle any errors
          console.log("image not found");
        });
    },
    retrieve_user_image(){
        const usercreds = JSON.parse(localStorage.getItem("userCredential"));
        const storage = getStorage();
        const userid = usercreds.uid;
        const imagename = 'Buyers/' + userid;
        const imagesRef = stoRef(storage, imagename);
        
        getDownloadURL(imagesRef)
            .then((url) => {
            // this retrieves the image and inserts it into the img tag
            const img = document.getElementById('userimg');
            img.setAttribute('src', url);
            })
            .catch((error) => {
            // Handle any errors
            console.log('image not found')
            img.setAttribute('src', "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=");
            });
    },
    upload_image(){
        const storage = getStorage();
        this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
        const userid = this.usercreds.uid
        const imagename = 'Buyers/' + userid
        const imagesRef = stoRef(storage, imagename);
        //this will retrieve the image file from the upload
        const selectedFile = document.getElementById('imagefileid').files[0];
        uploadBytes(imagesRef, selectedFile).then((snapshot) => {
            console.log('successfuly uploaded');
            location.reload();
        });
        }
  },
  
  mounted() {
    this.getData();
    this.getPetdata();
    this.retrieve_pet_image();
  },
};
</script>

<style>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
.form-title {
  text-align: center;
  font-weight: bold;
  font-size: large;
}
</style>
