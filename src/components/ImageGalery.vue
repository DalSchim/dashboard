

<template>
  <div class="gallery">
    <div class="thumbnail" onclick="showImage('image1.jpg')">
      <img src="https://picsum.photos/200" alt="">
    </div>
    <div class="thumbnail" onclick="showImage('image2.jpg')">
      <img src="https://picsum.photos/200" alt="">
    </div>
    <div class="thumbnail" onclick="showImage('image3.jpg')">
      <img src="https://picsum.photos/200" alt="">
    </div>
    <div class="thumbnail" onclick="showImage('image3.jpg')">
      <img src="https://picsum.photos/200" alt="">
    </div>
    <div class="thumbnail" onclick="showImage('image3.jpg')">
      <img src="https://picsum.photos/200" alt="">
    </div>
    <div class="thumbnail" onclick="showImage('')">
      <img  src="https://picsum.photos/200" alt="">
    </div>

    <div class="modal" id="modal">
      <span class="close" onclick="hideImage()">&times;</span>
      <img alt="" class="modal-content" id="modalImage">
    </div>
  </div>

</template>

<script>
export default {
  name: 'ImageGalery',
  mounted() {
    window.showImage = this.showImage;
    window.hideImage = this.hideImage;
  },
  methods: {
    showImage(image) {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('modalImage').src = image;
    },
    hideImage() {
      document.getElementById('modal').style.display = 'none';
    },
  },
};

</script>


<style scoped lang="scss">
.gallery {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.thumbnail {
  margin: 10px;
  cursor: pointer;
}

.thumbnail img {
  width: 150px;
  height: 100px;
  object-fit: cover;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
}

.close {
  color: white;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 15px;
  right: 25px;
  cursor: pointer;
}

.close:hover {
  color: #ccc;
}

</style>