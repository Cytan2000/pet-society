<template>
    <!-- second pop-up -->
    <base-dialog v-if="showUpload" >
    <template #default>
      <!-- content -->
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
                    <input type="file" ref="input1" id="imagefileid" class="opacity-0" @change="previewUser" accept="image/*"/>
                </label>
            </div>
            <img v-if="this.imgURL" :src="this.imgURL"  />
            <button 
            @click="upload_image()"
            type="submit"
            id="submit_link"
            class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700 my-2">
            Submit
          </button>
    </template>
    <template #actions>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer mx-2"
        @click="confirmUploadMsg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </template>
  </base-dialog>
  
    <div class="bg-gray-100 h-full">
      <div class="container mx-auto my-5 p-5">
              <!-- Left Side -->
        <div class="md:flex no-wrap md:-mx-2">
          <!-- Left Side -->
          <div class="w-full md:w-4/12 md:mx-2">
            <!-- Profile Card -->
            <div class="h-full bg-white p-3 border-t-4 border-b-4 border-yellow-400 h-full">
              <div class="image overflow-hidden">
                <!-- insert user profile picture here -->
                <img 
                  class="h-auto w-full mx-auto"
                  id="userimg"
                  src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
                  alt=""
                />
                <button class="h-10 bg-blue-500  mt-2 pl-2 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                @click="showUpload = !showUpload"
                >
                    <div class="grid grid-cols-4 items-center justify-center">
                      
                        <div class="col-span-3 ">Upload Image</div>
                        <div class="col-span-1 rounded-full bg-blue-600 w-10 h-10 pt-1">
                          <span class="text-xl underline">&#8593;</span>
                        </div>
                      
                    </div>
                </button>
                <!-- <input type="file"  id="imagefileid" name="filename" @change="upload_image()"> -->
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {{ fname }} {{ lname }}
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                Pet Owner
              </h3>
              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
               
              </p>
              <ul
                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
              >
                <li class="flex items-center ">
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
                  <span class="ml-auto">2022</span>
                </li>
              </ul>
              
            </div>
            <!-- End of profile card -->
            <div class="my-4"></div>
            <!-- Friends card -->
          </div>
          <!-- Right Side -->
          <div class="w-full md:w-8/12 mx-2">
            <!-- Profile tab -->
            <!-- About Section -->
            <div class="bg-white px-6 pb-6 pt-3 shadow-sm rounded-sm">
              <div
                class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 pb-2"
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
                    <div class="px-4 py-2">{{ fname }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">{{ lname }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Address</div>
                    <div class="px-4 py-2">{{ address }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com"
                        >{{email}}</a
                      >
                    </div>
                  </div>
                  
                </div>
              </div>
              <!-- <button
                class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
              >
                Show Full Information
              </button> -->
            </div>
            <!-- End of about section -->
  
            
  
            <!-- Experience and education -->
            
            <div class="my-4 bg-white flex justify-between h-3/4" >
              
                <div class="m-5">Continue supporting us as a Pet sitter !</div>
                <!-- <img class="w-40" src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/logo%2FCA75EF75-85FD-4FF7-87C9-E7A9E974A892.jpeg?alt=media&token=ab1f966a-31b3-475f-ace4-d39fc2ff326c"/> -->
              
            
            
            <!-- End of profile tab -->
            </div>
          </div>
        </div>
      </div>
      <div class="h-64"></div>
    </div>
  </template>

<script>
import { getAuth} from "firebase/auth";
import {getDatabase, ref as pref, child, get, update} from "firebase/database"
import { getStorage, ref as storageref,getDownloadURL, uploadBytes} from "firebase/storage";
import BaseDialog from "../UI/BaseDialog.vue";

export default {
    components: { BaseDialog },
    data() {
      return {
        fname: "",
        lname: "",
        gender: "",
        address: "",
        birthday: "",
        contact: "",
        email: "",
        imgURL:null,
        
      showUpload: false,
      }
    },
    methods: {
      //this is the function to retrieve image
      confirmUploadMsg() {
      this.showUpload = false;
    },
    previewUser(){
      this.imgURL = URL.createObjectURL(event.target.files[0])
  
    },
      retrieve_image(){
        this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
        const storage = getStorage();
        const userid = this.usercreds.uid
        const imagename = 'Seller/' + userid
        const imagesRef = storageref(storage, imagename);
        getDownloadURL(imagesRef)
            .then((url) => {
            // this retrieves the image and inserts it into the img tag
            const img = document.getElementById('userimg');
            img.setAttribute('src', url);
            })
            .catch((error) => {
            // Handle any errors

            img.setAttribute('src', "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=");
            });
      },
      //this function will get the seller profile data from the database
      getProfileData(){
        this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
        const userid = this.usercreds.uid
        const dbRef = pref(getDatabase());
        
        get(child(dbRef, `users/${userid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const profiledata = snapshot.val();

                this.fname = profiledata.firstname
                this.lname = profiledata.lastname
                this.gender = profiledata.gender
                this.address = profiledata.address
                this.contact = profiledata.contact
                this.email = profiledata.email
                this.birthday = profiledata.birthday
            } else {

            }
            }).catch((error) => {

            });
      },
      //this function will be called when there is any change to the data in the profile page
      modifyProfile(){
        this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
        const userid = this.usercreds.uid
        const db = getDatabase();
        update(pref(db, 'users/' + userid), {
        firstname: this.fname,
        lastname: this.lname,
        gender: this.gender,
        birthday: this.birthday,
        contact: this.contact,
        email: this.email,
        address: this.address
            })

        //refresh page!
        



        },
        //this function is for the uploading of the new profile picture
    upload_image(){
        const storage = getStorage();
        this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
        const userid = this.usercreds.uid
        const imagename = 'Seller/' + userid
        const imagesRef = storageref(storage, imagename);
        //this will retrieve the image file from the upload
        const selectedFile = document.getElementById('imagefileid').files[0];
        uploadBytes(imagesRef, selectedFile).then((snapshot) => {
            

            location.reload();
        });
        }
    },
    created(){
        this.getProfileData();
        
    }


    ,mounted(){
        this.retrieve_image();
        

    }
}
</script>

