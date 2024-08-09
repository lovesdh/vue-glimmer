<template>
  <div class="upload-component">
    <div class="upload-box">
      <input
        type="text"
        v-model="inputValue"
        placeholder="输入网址"
        class="input-box"
      />
      <input
        type="text"
        v-model="userId"
        placeholder="输入姓名和学号-输入格式:XXX-2024091201001"
        class="input-box"
      />
      <button @click="handleUpload" class="upload-button">
        上传
      </button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inputValue: '',
      userId: '',
      errorMessage: '',
      isUploadDisabled: false,
    };
  },
  methods: {
    handleUpload() {
      this.errorMessage = '';
      if (!this.inputValue.startsWith('https://github.com')) {
        this.errorMessage = '请输入正确的网址,以https://github.com开头';
        return;
      }

      if (!this.userId.trim()) {
        this.errorMessage = '请输入姓名-学号';
        return;
      }

      this.postDataToServer(this.inputValue, this.userId);
      
      this.disableUploadButtonForOneMinute();

      console.log('上传内容:', this.inputValue);
    },
    postDataToServer(data, userId) {
      axios.post('/glimmer.com', { 
        data,
        userId
      })
      .then(response => {
        console.log('服务器响应:', response);
      })
      .catch(error => {
        console.error('请求错误:', error);
        alert("上传失败，未连接到服务器");
      });
    },
    disableUploadButtonForOneMinute() {
      this.isUploadDisabled = true; 
      setTimeout(() => {
        this.isUploadDisabled = false;
      }, 60000); 
    }
  }
};
</script>

<style scoped>
.upload-component {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.input-box {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.upload-button {
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.upload-button:disabled {
  background-color: #d6d6d6;
  cursor: not-allowed;
}

.upload-button:hover:enabled {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>