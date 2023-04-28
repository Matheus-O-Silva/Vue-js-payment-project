<template>
    <div class="small-box bg-info" @click="openModal">
      <div class="inner">
        <h3>{{ value }}</h3>
        <p>{{ title }}</p>
      </div>
      <div class="icon">
        <i class="ion ion-bag"></i>
      </div>
      <a href="#" class="small-box-footer">Adicionar Saldo<i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      value: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      openModal() {
        this.$emit('open-modal', true);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos do componente Card aqui */
  </style>