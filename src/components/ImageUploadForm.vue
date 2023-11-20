<template>
  <div>
    <h2>Ajouter une image</h2>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div>
        <label for="title">Titre de l'image :</label>
        <input type="text" id="title" v-model="imageData.title" required>
      </div>
      <div>
        <label for="image">Sélectionnez une image :</label>
        <input type="file" id="image" @change="handleImageUpload" required>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ImageUploadForm',
  data() {
    return {
      imageData: {
        title: '',
        image: null,
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      this.imageData.image = event.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('title', this.imageData.title);
      formData.append('image', this.imageData.image);

      axios
          .post('http://votre-domaine/api/images', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            console.log('Image ajoutée avec succès !', response.data);
            // Réinitialisez le formulaire si nécessaire
            this.imageData.title = '';
            this.imageData.image = null;
          })
          .catch(error => {
            console.error('Erreur lors de l\'ajout de l\'image', error);
          });
    },
  },
};
</script>
