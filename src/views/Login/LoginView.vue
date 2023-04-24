<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          
          <div class="input-group mb-3">
            <input type="email" class="form-control" v-model="email" placeholder="Email">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember">
                <label for="remember">
                  Remember Me
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button @click="login" type="submit" class="btn btn-primary btn-block">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
          
        </div>
        <!-- /.login-card-body -->
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


