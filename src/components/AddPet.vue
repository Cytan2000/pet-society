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
            style="display: none"
            @change="previewImage" accept="image/*" >  
                          
          <img v-if="imageData!=null" class="preview" height="268" width="356" :src="img1">
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
import { getStorage,getDatabase, ref, set,update } from "firebase/database";
import 'firebase/storage';

function writeUserData(userId,pname,pbreed,page) {
  const db = getDatabase();
  update(ref(db, 'users/' + userId), {
    petname: pname,
    petbreed: pbreed,
    petage: page,
    
  });
}

export default {
  data(){
    return{
      pname:"",
      pbreed:"",
      page:"",
      selectedFile:"",
    }
  },
  methods:{
    submit_pet_post() {
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(this.pname,this.pbreed,this.page);
        writeUserData(user.uid,this.pname,this.pbreed,this.page);
        this.create();

  },
  previewImage(event) {
  this.uploadValue=0;
  this.img1=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},
click1() {
  this.$refs.input1.click()   
},
  onUpload(){
  this.img1=null;
  const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img1 =url;
          console.log(this.img1)
        });
      }      
    );
 },create () {
      
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
    }
  
}
}			
</script>

<style>

</style>