<template>
  <div>
    <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
  <h2>Details Form</h2>
    <a-form-item
      label="Date"
      name="date"
      :rules="[{ required: true, message: 'Please input Datetime!' }]"
    >
    <input v-model="date" type="date" placeholder="Enter your note time">    
  </a-form-item>
    <a-form-item
      label="Note"
      name="note"
      :rules="[{ required: true, message: 'Please input your note!' }]"
    >
    <input v-model="note" placeholder="Enter your note content" @keyup.enter="addNote">    
  </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button @click="addNote">Add Note</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // props:{
  //   display: {
  //     type: Boolean
  //   }
  // },
  setup(_, { emit }) {
    const note = ref('');
    const date = ref('2024-06-08');
    const addNote = () => {
      console.log(date)
      if (note.value.trim() !== '') {
        emit('add',
          {
            content: note.value,
            time: date.value || 'NaN'
          });
        note.value = '';
        date.value = ''
      }
    };

    return {
      note,
      date,
      addNote
    };
  }
};
</script>
<style>
.note-input {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>