<script>
export default {
    name: 'DropFile',
data() {
  return {
    files: [],
  };
},
methods: {
  handleFileUpload() {
    this.files = Array.from(this.$refs.file.files);
  },
  removeFile(file) {
    this.files = this.files.filter((f) => f.name !== file.name);
  },
}

}


</script>

<template>
  <div class="drop-contain">
    <div class="drop-area">
      <div class="drop-text">
        <h3>Drag and Drop a file here</h3>
      </div>
      <div class="drop-text">
        <h3>or</h3>
      </div>
      <div class="drop-text">
        <input type="file" ref="file" @change="handleFileUpload()" multiple />
      </div>
    </div>
    <div class="file-display-container" v-for="file in files" :key="file.name">
      <div class="file-status-bar">
        <div>
          <span class="file-name">{{ file.name }}</span>
          <span class="file-size">({{ file.size }} bytes)</span>
        </div>
        <div class="file-remove" @click="removeFile(file)">
          X
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.drop-contain {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.drop-area {
  width: 100%;
  height: 100%;
  border: 4px dashed #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.drop-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ccc;
}

.file-display-container {
  width: 100%;
  height: 100%;
  border: 4px solid #ccc;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
  box-sizing: border-box;
}
.file-status-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 8px;
  box-sizing: border-box;
}
.file-name {
  font-weight: bold;
  color: #2f80ed;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
}
.file-size {
  font-size: 12px;
  color: #ccc;
}
.file-remove {
  font-weight: bold;
  color: #e74c3c;
  cursor: pointer;
}
</style>