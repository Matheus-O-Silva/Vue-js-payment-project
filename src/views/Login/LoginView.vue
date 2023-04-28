<template>
  <div class="hold login-page" >
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Transferências</b></a>
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Faça Login para iniciar sua sessão</p>
          
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Senha" v-model="password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button type="submit" @click="login" class="btn btn-primary btn-block">Entrar</button>
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
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log(this.email)
      console.log(this.password)
      
      axios.post('http://localhost:8989/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          // redireciona para a página de perfil
          this.$router.push('/profile')
        })
        .catch(error => {
          // exibe uma mensagem de erro para o usuário
          console.log(error)
          this.$router.push('/dashboard')
        })

        
    }
  }
}
</script>


