<template>
    <button @click="selectDay">
      <slot></slot>
      <div id="container-stars">
    <div id="stars"></div>
  </div>

    <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      selectDay() {
        const slotContent = this.$slots.default && this.$slots.default()[0];
        const slotText = slotContent && slotContent.text ? slotContent.text.trim() : '';
        this.$emit('click', slotText);
      },
    },
  };
  </script>
  
  <style>
.selected-day-list {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
  </style>
  