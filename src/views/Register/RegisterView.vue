<template>
    <div class="hold login-page">
      <nav class="navbar navbar-light bg-light">
        <router-link to="/" class="text-center">Voltar</router-link>
      </nav>
  
      <div class="login-box">
        <div class="login-logo">
          <a href="#"><b>Cadastrar Usuário</b></a>
        </div>
        <div class="card">
          <div class="card-body login-card-body">

            <div class="form-group">
              <label for="documentType">Cargo:</label>
              <select class="form-control" v-model="role">
                <option value="Lojista">Lojista</option>
                <option value="Comum">Comum</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="documentType">Tipo de documento:</label>
              <select class="form-control" v-model="documentType">
                <option value="CPF">CPF</option>
                <option value="CNPJ">CNPJ</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="documentNumber">{{ documentType }}:</label>
              <input type="text" class="form-control" v-model="documentNumber" />
            </div>
  
            <div class="form-group">
              <label for="name">Nome:</label>
              <input type="text" class="form-control" v-model="name" />
            </div>
  
            <div class="form-group">
              <label for="email">E-mail:</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
  
            <div class="form-group">
              <label for="password">Senha:</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
  
            <div class="row">
              <div class="col">
                <button type="submit" @click="register" class="btn btn-primary btn-block">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  
<script>
import axios from 'axios'

export default {
  name: 'RegisterComponent',
  data() {
    return {
      documentType: 'CPF',
      documentNumber: '',
      name: '',
      role: '',
      email: '',
      password: '',
      device_name: 'test'
    }
  },
  methods: {
    register() {
      axios.post('http://localhost:8989/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        role_id : this.role,
        documentType: this.documentType,
        documentNumber: this.documentNumber,
        device_name: this.device_name
      })
      .then(response => {
        console.log(response)
        this.$swal({
          title: 'Usuário cadastrado com sucesso!',
          icon: 'success'
        })
        // Limpa os dados do formulário
        this.name = '',
        this.email = '',
        this.password = '',
        this.role = '',
        this.documentNumber = '',
        this.documentType = 'CPF'
      })
      .catch(error => {
        // Exibe uma mensagem de erro para o usuário
        console.log(error)
        this.$swal({
          title: 'Erro!',
          text: 'Não foi possível cadastrar o usuário.',
          icon: 'error'
        })
      })
    }
  }
  };
  </script>
  
  
  