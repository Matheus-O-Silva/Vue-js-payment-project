<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button">
          <i class="fas fa-bars"></i>
        </a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Bem-vindo(a), {{ user }} / Perfil: {{ role }} </a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a  href="#" class="nav-link" @click="logout">Sair</a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a class="brand-link">

      <span class="brand-text font-weight-light">Transferências</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- end of sidebar -->

  <div class="content-wrapper" style="min-height: 390px;">


    <section class="content">
      <div class="container-fluid">

        <div class="row mt-3">
          <div class="col">

            <div class="small-box bg-info" @click="showModalSaldo = true">
              <div class="inner">
                <h3>Saldo Atual:150</h3>
                <p>ícone Minha Carteira</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">Clique aqui para Adicionar Saldo<i class="fas fa-arrow-circle-right"></i></a>
            </div>

          </div>
          
          

      

          <div v-if="role !== 'Lojista'" class="col">

            <div class="small-box bg-success" @click="showModalTransaction = true">
              <div class="inner">
                <h3><sup style="font-size: 20px">Transferir</sup></h3>
                <p>ícone de transferir</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">Clique aqui para Transferir<i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

        </div>

        <div class="row mt-2">
          <div class="col">

            <div class="card mt-3">
            <div class="card-header">
              Extrato
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Data/Hora</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01/04/2022</td>
                    <td>Transferência para Fulano</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>01/04/2022</td>
                    <td>Transferência para Fulano</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>01/04/2022</td>
                    <td>Transferência para Fulano</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <!-- Adicione mais linhas para exibir outras transações -->
                </tbody>
              </table>
            </div>
          </div>

          </div>

        </div>

        <div class="container mt-4">
      <div class="row">
        <div class="col-md-8">
          

          
        </div>

        
      </div>
    </div>
    
    </div>
  </section>

  

</div>

<ModalBalanceComponent v-if="showModalSaldo" @closeModalBalance="showModalSaldo = false" />
<ModalTransactionComponent v-if="showModalTransaction" @close="showModalTransaction = false" />
<!-- end of main dashboard -->

<!-- end of footer -->
</template>

<style>

.small-box {
  cursor: pointer
}

</style>
  
  
<script>
import ModalBalanceComponent from '@/components/Modals/ModalBalanceComponent.vue';
import ModalTransactionComponent from '@/components/Modals/ModalTransactionComponent.vue';
import axios from 'axios'

export default {
    components: {
      ModalBalanceComponent,
      ModalTransactionComponent
    },
    data() {
        return {
          showModalSaldo: false,
          showModalTransaction: false,
          user: null,
          role: null,
        };
    },
    mounted() {
      this.loadUser();
    },
    methods: {
      loadUser() {
        // Faça uma solicitação para o endpoint do back-end para obter os dados do usuário autenticado
        axios.get('http://localhost:8989/user',{
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(response => {
          // Defina os dados do usuário na propriedade "user"
          this.user = response.data.name;
          this.role = response.data.role_id == 1 ? 'Lojista' : 'Cliente';

        })
        .catch(error => {
          console.log(error);
        });
      },
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/');
        //console.log('logout')
      }
    },
    
};
</script>
  
  
  