<template>
    
    <h2 class="text-3xl font-bold">Create New booking</h2>
          Booking Address<input
              type="text"
              class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500"
              placeholder="81 Victoria St, Singapore 188065"
              v-model="bAddress"
            />

            Postal<input
              type="text"
              class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500"
              placeholder="188065"
              v-model="bPostal"
            />
       Rate<input
              type="text"
              class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500"
              placeholder="$20"
              v-model="bRate"
            />

        Home Type<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500"
            placeholder="5-Room HDB"
            v-model="bHomeType"
        />
        Pet Types<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500"
            placeholder="Medium Sized Dogs, Cats, Kangaroos"
            v-model="bPetType"
        />
        Description<textarea cols="30" rows="10" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" placeholder="Description" v-model="bDesc">
            </textarea>
        Upload Image Here:
        <input type="file"  id="imagefileid" name="filename" multiple/>
        <!-- Upload House Images
              <div class="flex"> -->
      <!-- <div class="w-full rounded-lg">
          <div class="">
              <label class="inline-block mb-2 text-gray-500"></label>
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
                      <input type="file" ref="input1" class="opacity-0" @change="previewImage" accept="image/*"/> -->
                  <!-- </label>
              </div>
          </div>
        <div class="overflow-hidden max-h-5">
          {{this.imageData.name}}
        </div>
        <p><img id="output" style="height:200px"/></p>
      </div> -->
  <!-- </div>  -->
  
  
      <button 
              @click="submit_booking"
              type="submit"
              id="submit_link"
              class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700 my-2">
              Submit
            </button>
  </template>
  
  <script>
  import { numberLiteralTypeAnnotation } from "@babel/types";
import { getAuth }  from "firebase/auth";
  import { getDatabase, ref as dbRef, set ,update,push,child } from "firebase/database";
  import { getStorage, ref as StoRef, uploadBytes,getDownloadURL} from 'firebase/storage';
  var imgurlarr = new Array()
  function upload_image(mybookingid, count){
        const storage = getStorage();
        const imagename = 'Booking/' + mybookingid + count
        const imagesRef = StoRef(storage, imagename);
        console.log(mybookingid)
        //this will retrieve the image file from the upload
        const selectedFile = document.getElementById('imagefileid').files[count];
        uploadBytes(imagesRef, selectedFile).then((snapshot) => {getDownloadURL(imagesRef)
            .then((url) => {
            // this retrieves the image and inserts it into the img tag
            
            imgurlarr.push(url)
            

            })
            .catch((error) => {
            // Handle any errors
            });});
        
        }



  function writeData(bAddress, bPostal, bRate, bHomeType, bPetType, bDesc) {
    const db = getDatabase();
    var newBookingKey = push(child(dbRef(db), 'bookings')).key;
    var bookingid=newBookingKey;
    length = document.getElementById('imagefileid').files.length
    for (let i=0; i<length; i++){
          upload_image(bookingid,i)
    }
    
    function poll () {
      if (imgurlarr.length!=0) {
        // Do something with el
        console.log(imgurlarr)
        update(dbRef(db, 'bookings/' + bookingid), {
      SellerId: "testing1",
      Workaddress: bAddress,
      WorkPostal: bPostal,
      Rate: bRate,
      HomeType: bHomeType,
      PetType: bPetType,
      Description: bDesc,
      imgurls: imgurlarr
  })

      } else {
        setTimeout(poll, 300); // try again in 300 milliseconds
      }
    }
    poll()
    
  
    
        ;
  }
  
  
  export default {
    data(){
      return{
        bAddress: "",
        bPostal: "",
        bRate: "",
        bHomeType: "",
        bPetType: "",
        bDesc: "",
        imgurlarr:[],
      }
    },
    methods:{
      submit_booking() {
          writeData(this.bAddress, this.bPostal, this.bRate, this.bHomeType, this.bPetType, this.bDesc);
          this.bAddress = ""
          this.bPostal = ""
          this.bRate = ""
          this.bHomeType = ""
          this.bPetType =""
          this.bDesc = ""
          
          //need a way to return the id of the booking
    },
    previewImage(event) {
    var image = document.getElementById('output');
    this.imageData = event.target.files[0];
    image.src = URL.createObjectURL(event.target.files[0]);
    
  },
  click1() {
    this.$refs.input1.click()   
  },
  
  create () {
        
        const post = {
          photo: this.img1,
          caption: this.caption        
        }
  
        firebase.database().ref('PhotoGallery').push(post)
        .then((response) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    
    
    
  }
  }
  
  </script>
