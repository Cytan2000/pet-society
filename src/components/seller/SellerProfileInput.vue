<template>
    <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <!-- first name input -->
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="fname" type="text" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <!-- last name input -->
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="lname" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <!-- city input -->
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <!-- state input -->
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <!-- zip input -->
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
    <!-- submit btn -->
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="submit_click_post">
        Submit
      </button>
  </div>
</form>
<!--this is for the image upload-->
<div class="flex justify-center mt-8">
    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">File Upload</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>
                    <input type="file" id="imagefileid" class="opacity-0" />
                </label>
            </div>
        </div>
        <div class="flex justify-center p-2">
            <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl" @click="upload_image()">Upload</button>
        </div>
    </div>
</div> 
<img id="myimg" src="" alt="">
</template>

<script>
  import { getAuth} from "firebase/auth";
  import { getDatabase, ref as firebaseref, update } from "firebase/database";
  import { getStorage, ref as storageref,getDownloadURL, uploadBytes} from "firebase/storage";
  
  // this is the function to update the existing user data
  function UpdateUserData(userId, fname, lname) {
    const db = getDatabase();
    update(firebaseref(db, 'users/' + userId), {
      firstname: fname,
      lastname: lname
    })};

  //end of functions
  
  export default {
    data() {
      return {
        fname: '',
        lname: '',

      }
    },
    methods: {
      submit_click_post() {
        const auth = getAuth();
        const user = auth.currentUser;

        UpdateUserData(user.uid,this.fname, this.lname)
      },

      upload_image(){
      const storage = getStorage();
      const userid = getAuth().currentUser.uid
      const imagename = 'Seller/' + userid

      const imagesRef = storageref(storage, imagename);
      //this will retrieve the image file from the upload
      const selectedFile = document.getElementById('imagefileid').files[0];
      uploadBytes(imagesRef, selectedFile).then((snapshot) => {

      });
      },
      
      //this is the function to retrieve image
      retrieve_image(){
      const storage = getStorage();
      const userid = getAuth().currentUser.uid
      const imagename = 'Seller/' + userid
      const imagesRef = storageref(storage, imagename);
      getDownloadURL(imagesRef)
        .then((url) => {
          // Or inserted into an <img> element
          const img = document.getElementById('myimg');
          img.setAttribute('src', url);
        })
        .catch((error) => {
          // Handle any errors

        });
      }
    }

}

</script>