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
            <p class="mb-0 mt-3">
              <router-link to="/registrar" class="text-center">Não possui conta? Registre-se</router-link>
            </p>
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
      password: '',
      device_name: 'test'
    }
  },
  methods: {
    login() {
      console.log(this.email)
      console.log(this.password)
      
      axios.post('http://localhost:8989/auth', {
        email: this.email,
        password: this.password,
        device_name: this.device_name
      })
        .then(response => {
          const token = response.data[0]
          localStorage.setItem('token', token)
          // redirect to the dashboard
          this.$router.push('/dashboard')
        })
        .catch(error => {
          console.log(error)
          this.$swal({
            title: 'Erro!',
            text: 'Usuário e ou Senha inválidos',
            icon: 'error'
          })
        })

        
    }
  }
}
</script>


