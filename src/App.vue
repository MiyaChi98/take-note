<template>
  <div id="app">
    <note-input @add="addNote" v-if="formDisplay"></note-input>
    <a-button v-if="! formDisplay" @click="displayForm"> <PlusOutlined /> Add new note</a-button>
    <note-list :notes="notes"></note-list>
  </div>
</template>

<script>
import NoteInput from './components/NoteInput.vue';
import NoteList from './components/NoteList.vue';
import { reactive, ref } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

export default {
  name: 'App',
  components: {
    NoteInput,
    NoteList,
    PlusOutlined
  },
  setup() {
    const formDisplay = ref(0)
    const notes = reactive([{
      content: 'sample',
      time: '2024-6-8'
    }]);
    const addNote = (note) => {
      notes.push(note);
      console.log(notes)
      formDisplay.value=0
    };
    const displayForm = ()=>{
      formDisplay.value = 1
    } 
    return {
      notes,
      formDisplay,
      addNote,
      displayForm,
      
    };
  }
};
</script>
<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}

h2 {
  margin-top: 10px;
  color: #007bff;
}

</style>