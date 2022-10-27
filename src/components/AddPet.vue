<template>
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
          <button @click="click1" >choose a photo</button>
           <input type="file" ref="input1" 
            @change="previewImage" accept="image/*" >  

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
import { getDatabase, ref as dbRef, set,update } from "firebase/database";
import { getStorage, ref as StoRef, uploadBytes} from 'firebase/storage';


function writeUserData(userId,pname,pbreed,page,petphoto) {
  const db = getDatabase();
  update(dbRef(db, 'users/' + userId), {
    petname: pname,
    petbreed: pbreed,
    petage: page,
    petphoto: petphoto,
  });
}


export default {
  data(){
    return{
      pname:"",
      pbreed:"",
      page:"",
      imageData:"",
      petuid:"",
    }
  },
  methods:{
    submit_pet_post() {
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(this.pname,this.pbreed,this.page,this.imageData);
        writeUserData(user.uid,this.pname,this.pbreed,this.page,this.imageData.name);
        this.onUpload()
        this.petuid= $uuid.v4();
        console.log(this.uid);

  },
  previewImage(event) {
  this.uploadValue=0;
  this.imageData = event.target.files[0];
  this.onUpload()
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