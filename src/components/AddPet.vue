<template>
  <div class="popups">
    <div class="popup-inner">
      <div>
        Pet Name<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Pet name"
            v-model="pname"
          />
    </div>
    <div>
      Pet Breed<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Pet Breed"
            v-model="pbreed"
          />
    </div>
    <div>
      Pet Age<input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Pet Age"
            v-model="page"
          />
    </div>
    </div>
    <button
            @click="submit_pet_post"
            type="submit"
            class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">
            Submit
          </button>
  </div>
</template>

<script>
import { getAuth }  from "firebase/auth";
import { getDatabase, ref, set,update } from "firebase/database";




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
    }
  },
  methods:{
    submit_pet_post() {
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(this.pname,this.pbreed,this.page);
        writeUserData(user.uid,this.pname,this.pbreed,this.page);
  }
}
}
</script>

<style>

</style>