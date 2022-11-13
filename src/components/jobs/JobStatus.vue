<style>
  @import "../buyerJobPage.css";
.backer-img{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/logo%2Fjob562-nunoon-04-a.jpg?alt=media&token=4a23677b-2765-4039-bd09-3548be2597fa");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
}
</style>

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
            <input type="text" class="my-2 w-full bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" placeholder="Title of Post" v-model="title">
            <input type="text" class="my-2 w-full bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" placeholder="Text of Post" v-model="text">
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
                text-primary-800 text-l
                font-medium
                inline-flex
                items-center
                px-2.5
                py-0.5
                rounded
                dark:bg-primary-200 dark:text-primary-800
              "
              >Pet status</span
            >
            <span class="text-sm text-black">Job Status: {{status}}</span>
            
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
            <a href="#">{{this.lname}}</a>
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
            Duration of Stay: {{textsdate}} - {{textedate}}
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <span class="font-medium dark:text-white"> {{sellername}}    |    {{buyername}} </span>
            </div>
            <div class="inline-flex">


  <div v-if="account_type=='seller'">
    <button v-if="status=='active'" @click="completed()" class="bg-purple-400 hover:bg-purple-200 text-gray-800 font-bold py-2 px-4 rounded-r rounded-l">
    Complete
  </button>
  <div v-if="status=='pending'"><button @click="reject()" class="bg-red-500 hover:bg-red-400  text-gray-800 font-bold py-2 px-4 rounded-l">
    Reject
  </button>
  <button @click="accept()" class="bg-green-500 hover:bg-green-400  text-gray-800 font-bold py-2 px-4 rounded-r">
    Accept
  </button></div>
  </div>
</div>
          
            <div v-if="showbtn">
              <button type="submit" class="h-10 bg-blue-500  mt-2 pl-2 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
              @click="showUpload=true">
                  <div class="grid grid-cols-4 items-center justify-center">
                      <div class="col-span-3 ">Upload new post!</div>
                      <div class="col-span-1 rounded-full bg-blue-600 w-10 h-10 pt-1">
                        <span class="text-xl underline">&#8593;</span>
                      </div>
                    
                  </div>
              </button>
            </div>
            
          </div>
        </article>

        <div class="grid grid-cols-3 mt-3 gap-6 overflow-y-auto" style="height:30rem">
          <template v-for="post in new_post_array.slice().reverse()">
            <div
            class="
              max-w-sm
              bg-white
             
              rounded-lg
              border border-gray-200
              shadow-md
              dark:bg-gray-800 dark:border-gray-700
              col-span-3
              md:col-span-1
              "
              v-if="post[0]!=''">
              <img
                class="rounded-t-lg"
                style="display: block; margin: auto"
                v-bind:src="post[0]"
                alt=""
              />
            <div class="p-5">
              
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
                  {{post[1]}}
                </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{post[2]}}
              </p>
              <!-- <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> -->
              <!-- </a> -->
            </div>
          </div>
          </template>

          

          

          
        </div>
      </div>
      <!-- message -->
      <div
        class="
          w-full
          mt-5
          px-5
          md:col-span-1 
          col-span-3
          justify-between
          border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
          rounded
          backer-img
        "
      >
        <div class="flex flex-col mt-3 w-full overflow-y-auto" style="height:37rem">
          <div v-for="item in new_chat_array">

            <div class="flex justify-end mb-4" v-if="item[0]==myid && item[0]!=''">
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

            <div class="flex justify-start mb-4" v-if="item[0]!=myid && item[0]!=''">
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
        </div>
        </div>
        <div class="py-5">
          <input
            id="input_message"
            class="w-full bg-black text-white py-5 px-3 rounded-xl"
            type="text"
            placeholder="Enter to send message" @keypress.enter="enter_chat"
          />
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
      buyername: "",
      sellername: "",
      buyerid: "",
      sellerid: "",
      info:"",
      imgURL:null,
      showUpload: false,
      new_chat_array:[],
      new_post_array:[],
      text:"",
      title:"",
      account_type:"",
      id:"",
      myid: "",
      bid: "",
      lname: "",
      textsdate:"",
      textedate: "",
      sdate: "",
      edate: "",
      status: "",
    };
  },
  methods:{
    reject(){
      update((ref(getDatabase(),"jobs/" + this.$route.params.id)), {status:"rejected"})
      const timeout = setTimeout(() => {
          window.location.href = '/jobstatus/'+this.$route.params.id;
            }, "800")
    },

    accept(){
      update((ref(getDatabase(),"jobs/" + this.$route.params.id)), {status:"active"})
      const timeout = setTimeout(() => {
          window.location.href = '/jobstatus/'+this.$route.params.id;
            }, "800")
    },

    completed(){
      update((ref(getDatabase(),"jobs/" + this.$route.params.id)), {status:"completed"})
      const timeout = setTimeout(() => {
          window.location.href = '/jobstatus/'+this.$route.params.id;
            }, "800")
    },


    enter_chat(){
      
      var account_type = JSON.parse(localStorage.getItem("userCredential"))["uid"];
      var photoURL = JSON.parse(localStorage.getItem("userCredential"))["providerData"][0]["photoURL"];
      var msg_to_send = document.getElementById("input_message").value;
      if(photoURL == null){
        photoURL = "https://picsum.photos/200/300"
      }

      get((ref(getDatabase(),"jobs/" + this.$route.params.id + "/message"))).then((snapshot3)=>{
        var msg_array = Object.values(snapshot3.val());
        msg_array.push([account_type,photoURL,msg_to_send]);
        set(ref(getDatabase(),`jobs/` + this.$route.params.id + `/message`),msg_array);

        window.location.reload()
      })

    }, 
    convertmonth(mdate){

      const ndate = new Date(date)

    } ,
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
        const imagename = 'jobs/' + this.$route.params.id + '/'  + selectedFile.name;
        const imagesRef = stoRef(storage, imagename);
        //this will retrieve the image file from the upload

        uploadBytes(imagesRef, selectedFile).then((snapshot) => {


            getDownloadURL(imagesRef)
          .then((url)=>{
            get((ref(getDatabase(),"jobs/" + this.$route.params.id + "/posts"))).then((snapshot1)=>{

              if(snapshot1.exists()){

                var post_2 = Object.values(snapshot1.val())
                var array_temp1 = [url,this.title,this.text];
                post_2.push(array_temp1)

                set(ref(getDatabase(),`jobs/` + this.$route.params.id + `/posts/`),post_2);
              }else{

                post_2 = [url,"title","body"];
                set(ref(getDatabase(),`jobs/`+this.$route.params.id + `/posts/`),post_2);
              }
            })
          })
        });
        const timeout = setTimeout(() => {
          window.location.href = '/jobstatus/'+this.$route.params.id;
            }, "800")
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.myid = JSON.parse(localStorage.getItem("userCredential"))["uid"];
    const dbRef = ref(getDatabase());
    this.account_type = JSON.parse(localStorage.getItem("db_data"))["acc_type"];
    if (this.account_type=="seller"){
      this.showbtn = true
    }
    get(child(dbRef, `jobs/`+ this.id)).then((snapshot) => {
      if (snapshot.exists()) {

        this.new_chat_array = Object.values(snapshot.val().message);
        this.buyerid = snapshot.val().buyer_id
        this.sellerid = snapshot.val().seller_id
        this.status = snapshot.val().status
        get(child(dbRef, 'users/'+ this.sellerid + '/username')).then((snapshot => {
      this.sellername = snapshot.val()
      
    }))

    get(child(dbRef, 'users/'+ this.buyerid + '/username')).then((snapshot => {
      this.buyername = snapshot.val()
      
    }))
      }
    });

  

    get(child(dbRef,`jobs/`+ this.id)).then((snapshot)=>{
      this.sdate = snapshot.val().start_date;
      this.edate = snapshot.val().end_date;
      const sdateobj = new Date(this.sdate)
      const edateobj = new Date(this.edate)
      this.textsdate = sdateobj.toDateString()
      this.textedate = edateobj.toDateString()
      })

    get(child(dbRef,`jobs/`+ this.id + `/posts`)).then((snapshot2)=>{

      this.new_post_array = Object.values(snapshot2.val());
  })

  get(child(dbRef,`jobs/`+ this.id + `/booking_id`)).then((snapshot)=>{
      this.bid = snapshot.val();
      get(child(dbRef,'bookings/'+this.bid+'/ListingName')).then((snapshot)=>{
        this.lname = snapshot.val()

      })
  })



  }
};
</script>