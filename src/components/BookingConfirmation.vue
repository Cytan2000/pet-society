<template>
    
    <h2 class="text-3xl font-bold">Create New Job!</h2>
              Name<input
              type="text"
              class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500"
              placeholder="Your Name"
              v-model="bAddress"
            />
            
            Enter start date<input class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" type="date">
            Enter end date<input class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" type="date">

           
        Tell us a little bit about yourself and your pet!<textarea cols="30" rows="10" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" placeholder="Description" v-model="bDesc">
            </textarea>
        <!-- find a way to dynamically retrieve the pet data -->
        <!-- <div v-for="(item, index) in this.petarr" :key="index">{{item}}</div> -->
        Select your pet:
        
        <select size="1" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" name="pets" id="pet-select" multiple>
          <option value="">--Please choose an option--</option>
          <option v-for="(item, index) in this.petarr" :key="index" :value="item">{{item}}</option>
    </select>


        Upload Image Here:
        <input type="file"  id="imagefileid" name="filename" multiple/>
    
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
  import { getDatabase, ref as dbRef, onValue, set ,update,push,child } from "firebase/database";
  import { getStorage, ref as StoRef, uploadBytes,getDownloadURL} from 'firebase/storage';
  var imgurlarr = new Array()
  

  function upload_image(mybookingid, count){
        const storage = getStorage();
        const imagename = 'Booking/' + mybookingid + count
        const imagesRef = StoRef(storage, imagename);
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
        petarr: [],
        petids: []
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

  },
  mounted(){
    const db = getDatabase();
    const userRef = dbRef(db, "users/" + "VRPFjZpz1uOORs1MavU7NvhVyqb2");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      this.petids = data.petid_array;
      for (var i=0; i<this.petids.length; i++){
        const petRef = dbRef(db, "pets/" + this.petids[i]);
        onValue(petRef, (snapshot) => {
          const petdata = snapshot.val()
          this.petarr.push(petdata.petname)
        })
      }
    })
  }







}


  
  </script>
