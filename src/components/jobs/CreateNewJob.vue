<template>
    <div id="app">
        <form id="upload-form">
            <input type="file" name="file" required/>
            <input type="submit" value="Upload"/>
        </form>
    </div>
</template>


<script setup>
import { getStorage, ref as stoRef, uploadBytes } from "firebase/storage";
import { getDatabase, set, ref as firebaseref, child, push, update } from "firebase/database";
import { useRouter } from "vue-router";



const storage = getStorage();
const router = useRouter();


window.addEventListener("load",function(){
    document.getElementById("upload-form").addEventListener("submit" , function(){
        event.preventDefault();
        var form = event.target;
        var file = form.file.files[0];

        const storageRef = stoRef(storage,'Buyers/' + file.name);

        uploadBytes(storageRef,file).then(function(snapshot){
            alert("Uploaded a file!");
            router.push("/jobs/view");

        })

    })
})
</script>