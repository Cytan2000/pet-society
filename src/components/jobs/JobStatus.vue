<template>
  <base-dialog v-if="showUpload">
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
            <input type="text" placeholder="Title of Post" v-model="title">
            <input type="text" placeholder="Text of Post" v-model="text">
            <button 
            @click="uploadcontent"
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
            mt-5
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
            <div v-if="account_type=='seller'">
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
            </div>
            
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
            " v-for="post in new_post_array"
          >
            
              <img
                class="rounded-t-lg"
                style="display: block; margin: auto"
                v-bind:src="post[0]"
                alt=""
              />
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
                  {{post[2]}}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{post[1]}}
              </p>
              <!-- <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> -->
              <!-- </a> -->
            </div>
          </div>

          

          
        </div>
      </div>
      <!-- message -->
      <div
        class="
          w-full
          mt-5
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
          <div v-for="item in new_chat_array">
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
            class="w-full bg-black text-white py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..." @keypress.enter="enter_chat"
          />
          <button onclick="">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import { getDatabase, set,ref, child, get,update } from "firebase/database";
import BaseDialog from '../UI/BaseDialog.vue';
import { getStorage, ref as stoRef, getDownloadURL,uploadBytes } from "firebase/storage";

export default {
  components: { BaseDialog },
  data() {
    return {
      info:"",
      imgURL:null,
      showUpload: false,
      new_chat_array:[],
      new_post_array:[],
      text:"",
      title:"",
      account_type:"",
      id:"",
    };
  },
  methods:{
    
    enter_chat(){
      var account_type = JSON.parse(localStorage.getItem("db_data"))["acc_type"];
      var photoURL = JSON.parse(localStorage.getItem("userCredential"))["providerData"][0]["photoURL"];
      var msg_to_send = document.getElementById("input_message").value;
      if(photoURL == null){
        photoURL = "https://picsum.photos/200/300"
      }
      console.log(photoURL);
      get((ref(getDatabase(),"jobs/-NGSBee8nn8ivvQGBClB/message"))).then((snapshot3)=>{

        var msg_array = Object.values(snapshot3.val());
        msg_array.push([account_type,photoURL,msg_to_send]);
        set(ref(getDatabase(),`jobs/-NGSBee8nn8ivvQGBClB/message`),msg_array);
        console.log("Database Recorded the message");
        window.location.reload()
      })

    },  
    previewUser(){
      this.imgURL = URL.createObjectURL(event.target.files[0])
    },
    confirmUploadMsg() {
      this.showUpload = false;
    },
    uploadcontent(){
        const storage = getStorage();
        // this.usercreds = JSON.parse(localStorage.getItem("userCredential"));
        // const userid = this.usercreds.uid
        const selectedFile = document.getElementById('imagefileid').files[0];
        //NEED TO CHANGE USERID
        const imagename = 'jobs/-NGSBee8nn8ivvQGBClB/'  + selectedFile.name;
        const imagesRef = stoRef(storage, imagename);
        //this will retrieve the image file from the upload
        console.log(selectedFile);
        uploadBytes(imagesRef, selectedFile).then((snapshot) => {
            console.log('successfuly uploaded');
            console.log(snapshot);
            getDownloadURL(imagesRef)
          .then((url)=>{
            get((ref(getDatabase(),"jobs/-NGSBee8nn8ivvQGBClB/posts"))).then((snapshot1)=>{
              console.log(Object.values(snapshot1.val()));
              if(snapshot1.exists()){
                console.log("Went into if statement");
                var post_2 = Object.values(snapshot1.val())
                var array_temp1 = [url,this.title,this.text];
                post_2.push(array_temp1)
                console.log(post_2);
                set(ref(getDatabase(),`jobs/-NGSBee8nn8ivvQGBClB/posts/`),post_2);
              }else{
                console.log("Went into the Else statement");
                post_2 = [url,"title","body"];
                set(ref(getDatabase(),`jobs/-NGSBee8nn8ivvQGBClB/posts/`),post_2);
              }
            })
          })
        });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    const dbRef = ref(getDatabase());
    var account_type = JSON.parse(localStorage.getItem("db_data"))["acc_type"];


    get(child(dbRef, `jobs/-NGSBee8nn8ivvQGBClB/message`)).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(Object.values(snapshot.val()));
        this.new_chat_array = Object.values(snapshot.val());
      }
    });


    get(child(dbRef,`jobs/-NGSBee8nn8ivvQGBClB/posts`)).then((snapshot2)=>{
    // console.log(Object.values(snapshot2.val()));
    this.new_post_array = Object.values(snapshot2.val());
  })
  }
};
</script>