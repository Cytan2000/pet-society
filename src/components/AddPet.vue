<template>
  Pet Type: 
        <select name="animal" id="animal_type" v-model="animal_type" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500">
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Kangaroo">Kangaroo</option>
          <option value="Giraffe" selected>Giraffe</option>
        </select>
        Pet Name<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Pet name"
            v-model="pname"
          />
    
      Pet Breed<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Pet Breed"
            v-model="pbreed"
          />
    
      Pet Age<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Pet Age"
            v-model="page"
          />
         
      Upload Pet Image
            <div class="flex">
    <div class="w-full rounded-lg">
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
                    <input type="file" ref="input1" class="opacity-0" @change="previewImage" accept="image/*"/>
                </label>
            </div>
        </div>
      <div class="overflow-hidden max-h-5">
        {{this.imageData.name}}
      </div>
      <p><img id="output" style="height:200px"/></p>
    </div>
</div> 


    <button 
            @click="submit_pet_post"
            
            type="submit"
            id="submit_link"
            class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700 my-2">
            Submit
          </button>
</template>

<script>
import { getAuth }  from "firebase/auth";
import { getDatabase, ref as dbRef, set,update,push,child } from "firebase/database";
import { getStorage, ref as StoRef, uploadBytes} from 'firebase/storage';


function writeData(userId,pname,pbreed,page,petphoto,animal_type) {
  const db = getDatabase();
  var newPetkey = push(child(dbRef(db), 'pets')).key;
  var petid=newPetkey;
    update(dbRef(db, 'pets/' + petid), {
    petname: pname,
    petbreed: pbreed,
    petage: page,
    petphoto: petphoto,
    animal_type:animal_type
  });
  update(dbRef(db, 'users/' + userId), {
    petid:petid
  });
}


export default {
  data(){
    return{
      pname:"",
      pbreed:"",
      page:"",
      imageData:"",
      animal_type:"",
      
    }
  },
  methods:{
    submit_pet_post() {
        var usercreds = JSON.parse(localStorage.getItem("userCredential"));
        var userId= usercreds.uid
        writeData(userId,this.pname,this.pbreed,this.page,this.imageData.name,this.animal_type);
        this.onUpload();
       
        

  },
  previewImage(event) {
  var image = document.getElementById('output');
  this.imageData = event.target.files[0];
  image.src = URL.createObjectURL(event.target.files[0]);
  
},
click1() {
  this.$refs.input1.click()   
},
onUpload(){
const storage = getStorage();
this.img1=null;
const storageRef=StoRef(storage,`Images/${this.imageData.name}`)
uploadBytes(storageRef,this.imageData).then(function(snapshot){
          console.log("Uploaded a file");
          
      })
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

<style>

</style>