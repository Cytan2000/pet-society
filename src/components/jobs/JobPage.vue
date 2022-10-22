<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="" alt="Card image cap" id="myimg">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


</template>


<script setup>
import { getStorage, ref as stoRef, getDownloadURL  } from 'firebase/storage';

const storage = getStorage();

const pathReference = stoRef(storage,'Buyers/Dog_Photo');

const gsReference = stoRef(storage, 'gs://bucket/Buyers/Dog_Photo');

getDownloadURL(stoRef(storage, 'Buyers/Dog_Photo'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
    console.log("Unable to get anything")
  });



</script> 