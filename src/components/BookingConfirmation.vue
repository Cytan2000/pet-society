<template>
    
    <h2 class="text-3xl font-bold">Apply for Pet Sitting!</h2>
            Enter start date<input v-model="jstartdate" class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" type="date">
            Enter end date<input v-model="jenddate" class=" w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" type="date">
        Tell us a little bit about yourself and your pet!<textarea v-model="jnote" cols="30" rows="10" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" placeholder="Additional Notes">
            </textarea>
        
        Select your pet:
        
        <select size="1" class="w-full py-4 bg-slate-200 placeholder:font-semibold rounded ring-1 outline-blue-500" v-model="jpets" id="pet-select">
          
          <option v-for="(item, index) in this.petarr" :key="index" :value="this.petids[index]">{{item}}</option>
    </select>
      <button 
              @click="submit_booking"
              type="submit"
              id="submit_link"
              class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700 my-2">
              Submit
            </button>
        <div v-if="this.correct_date==false">
            <span class="text-red-600 font-bold">Please input a valid date range</span>
        </div>
  </template>
  
  <script>
  import { getDatabase, ref as dbRef, onValue, set ,update,push,child } from "firebase/database";

  function writeData(jaddress,jname,jprice,jsellerid, jbuyerid, jbookingid, jstartdate, jenddate, jnote, jpets) {
    const db = getDatabase();
    var newJobKey = push(child(dbRef(db), 'jobs')).key;
    var jobid=newJobKey;
    update(dbRef(db, 'jobs/' + jobid), {
      buyer_id: jbuyerid,
      seller_id: jsellerid,
      booking_id: jbookingid,
      start_date: jstartdate,
      end_date: jenddate,
      notes: jnote,
      pets: jpets,
      status: "pending",
      posts: [[""]],
      message: [[""]],
      name:jname,
      price:jprice,
      address:jaddress
    })
    const timeout = setTimeout(reload,1000);
          function reload() {
            window.location.href = 'JobStatus/'+jobid;
          }


  }
  
  export default {
    data(){
      return{
        jsellerid: "",
        jbuyerid: "",
        jbookingid: "",
        jstartdate: "",
        jenddate: "",
        jnote: "",
        jprice:"",
        jname:"",
        jaddress:"",
        jpets: [],
        petarr: [],
        petids: [],
        correct_date:true,
        
      }
    },
    methods:{
      validate_date(){
    var input1 = this.jstartdate;
    var input2 = this.jenddate;
  if(input1 != "" && input2 != ""){
      var date1 = new Date(input1);
      var date2 = new Date(input2);
      
      if(date2 < date1) {

          
          this.correct_date=false;
          return false;

      }else{
          this.correct_date=true;
          return true;
      }
    }
  },
      submit_booking() {
          const db = getDatabase();
          const usercreds = JSON.parse(localStorage.getItem("userCredential"));
          const uid=usercreds.uid;
          const userRef = dbRef(db, "bookings/" + this.$route.params.id);
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            this.jsellerid = data.SellerId;
            this.jprice=data.Rate;
            this.jname=data.ListingName;
            this.jaddress=data.Workaddress;

          })
          this.jbuyerid = uid
          if(this.validate_date()==true){
          writeData(this.jaddress,this.jname,this.jprice,this.jsellerid, this.jbuyerid, this.$route.params.id,this.jstartdate, this.jenddate, this.jnote, this.jpets);
          this.jstartdate = ""
          this.jenddate = ""
          this.jnote = ""
          this.jpets = []
         
        }else{
            
          }
          
    },
    
  },
  mounted(){
    const db = getDatabase();
    const usercreds = JSON.parse(localStorage.getItem("userCredential"));
    const uid=usercreds.uid;
    const userRef = dbRef(db, "users/" + uid);
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
