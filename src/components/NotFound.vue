<template>
   
</template>

<script>
import { getDatabase, ref, onValue, child } from "firebase/database";

var list1=[]

export default{
  data(){

  },
  methods:{
    getSeller(){
      const db = getDatabase();
      const dbRef = ref(db, 'users/');

      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (childData["acc_type"]=="seller"){
          list1.push(childData);
          console.log(list1)
          }
  });
}, {
  onlyOnce: true
});
    }
  },
  mounted(){
    this.getSeller()
  }
}

</script>