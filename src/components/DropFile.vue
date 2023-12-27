<template>
  <div :class="{ 'highlight': highlight, 'drop': drop }" class="container-drop-file">
    <div class="drop-zone" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">
      <span class="drop-zone__prompt">Drop files here or click to upload</span>
      <input type="file" name="myFile" class="drop-zone__input" @change="onFileChange">
    </div>
    <div class="uploads">
      <h2 class="uploads__title">Uploads</h2>
      <ul class="uploads__list">
        <li v-for="upload in uploadList" :key="upload.name" class="upload">
          <span class="upload__name">{{ upload.name }}</span>
          <span class="upload__type">{{ upload.type }}</span>
          <span class="upload__size">{{ formatFileSize(upload.size) }}</span>
          <span v-if="upload.error" class="upload__error">Error: {{ upload.error }}</span>
          <span v-if="upload.url" class="upload__url">URL: {{ upload.url }}</span>
          <div class="upload__progress" :style="{ width: upload.progress + '%' }"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropFile',
  data() {
    return {
      dropZone: null,
      fileInput: null,
      fileList: null,
      uploads: [],
      highlight: false,
      drop: false,
    };
  },


  mounted() {
    this.dropZone = this.$el.querySelector(".drop-zone");
    this.fileInput = this.$el.querySelector(".drop-zone__input");
    this.fileList = this.$el.querySelector(".uploads__list");

    if (!this.dropZone || !this.fileInput || !this.fileList) {
      console.error("Could not find required elements");
      return;
    }

    this.dropZone.addEventListener("dragover", this.onDragOver);
    this.dropZone.addEventListener("dragleave", this.onDragLeave);
    this.dropZone.addEventListener("drop", this.onDrop);
    this.fileInput.addEventListener("change", this.onFileChange);
  },

  methods: {
    onDragOver() {
      this.highlight = true;
    },
    onDragLeave() {
      this.highlight = false;
    },
    onDrop(e) {
      this.highlight = false;
      this.drop = true;
      const files = e.dataTransfer.files;
      if (files.length) {
        this.fileInput.files = files;
        this.uploadFile();
      }
    },
    onFileChange() {
      this.uploadFile();
    },
    uploadFile() {
      const files = this.fileInput.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // Vérifiez si le fichier n'a pas déjà été ajouté
        const existingUpload = this.uploads.find(upload => upload.name === file.name);
        if (!existingUpload) {
          const upload = {
            name: file.name,
            type: file.type,
            size: file.size,
            file,
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
          };
          this.uploads.push(upload);
        }
      }
    },
    formatFileSize(size) {
      const units = ['B', 'KB', 'MB', 'GB', 'TB'];
      let unitIndex = 0;
      while (size > 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
      }
      return `${size.toFixed(2)} ${units[unitIndex]}`;
    },
  },
  computed: {
    uploadList() {
      return this.uploads.map(upload => ({
        name: upload.name,
        type: upload.type,
        size: upload.size,
        error: upload.error || null,
        url: upload.url || null,
        progress: upload.progress || 0,
      }));
    },
  },
};
</script>


<style scoped lang="scss">
.container-drop-file {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  width: 100%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 5px dashed #ccc;
  border-radius: 20px;
  color: #ccc;
  outline: none;
  transition: border .24s ease-in-out;

  &.highlight {
    border-color: #E94F35;
  }

  &.drop {
    border-color: #E94F35;
  }

  .drop-zone {
    /* Ajoutez vos styles spécifiques à la zone de dépôt ici si nécessaire */

    &__prompt {
      font-size: 1.2rem;
    }

    &__input {
      display: none;
    }

  }

  .uploads {
    /* Ajoutez vos styles spécifiques à la section des téléchargements ici si nécessaire */

    &__title {
      font-size: 1.2rem;
    }

    &__list {
      list-style: none;
      padding: 0;
    }
  }

  .upload {
    /* Ajoutez vos styles spécifiques à chaque téléchargement ici si nécessaire */

    &__name {
      font-weight: bold;
    }

    &__type,
    &__size {
      font-size: 0.8rem;
      color: #aaa;
    }

    &__error {
      color: #cc0000;
    }

    &__url {
      font-size: 0.8rem;
      color: #E94F35;
    }

    &__progress {
      display: block;
      width: 0;
      height: 4px;
      background-color: #E94F35;
      transition: width .4s ease-in-out;
    }

  }
}
</style>
