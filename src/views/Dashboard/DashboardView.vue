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
      <div v-if="loading">
        <p>...Carregando</p>
      </div>
      <div v-else>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Bem-vindo(a), {{ user }} / Perfil: {{ role }} </a>
        </li>
      </div>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="#" class="nav-link" @click="logout">Sair</a>
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

    <div v-if="loading">
      <p>...Carregando</p>
    </div>
    <div v-else>
        <section class="content" >
        <div class="container-fluid">
          <div class="row mt-3">
            <div class="col-12">
              <div class="small-box bg-warning" @click="showModalBalanceUser = true">
                <div class="inner">
                  <h3 class="mb-1"><sup style="font-size: 20px">Visualizar Saldo</sup></h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
                  </svg>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">Clique aqui para Visualizar Saldo<i
                    class="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col">
              <div class="small-box bg-info" v-if="role !== 'Lojista'" @click="showModalSaldo = true">
                <div class="inner">
                  <h3 class="mb-1"><sup style="font-size: 20px">Adicionar Saldo</sup></h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                    <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                  </svg>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">Clique aqui para Adicionar Saldo<i
                    class="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div v-if="role !== 'Lojista'" class="col">
              <div class="small-box bg-success" @click="showModalTransaction = true">
                <div class="inner">
                  <h3 class="mb-1"><sup style="font-size: 20px">Transferir</sup></h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                  </svg>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">Clique aqui para Transferir<i
                    class="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>
          </div>
          <div class="row mt-2" v-if="role !== 'Lojista'">
            <div class="col">

              <div class="card mt-3">
                <div class="card-header">
                  <h4><strong>Transações</strong></h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table table-hover">
                      <thead>
                        <tr>
                          <th class="col-2">Data e Hora</th>
                          <th class="col-2">Descrição</th>
                          <th class="col-2">Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(transaction, index) in transactions" :key="index">
                          <td>{{ transaction.created_at_formatted }}</td>
                          <td>{{ transaction.action }}</td>
                          <td>R${{ transaction.transferred_amount }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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



  </div>

  <ModalBalanceComponent  v-if="showModalSaldo" @closeModalBalance="showModalSaldo = false" @balace-add="loadBalance" />
  <ModalTransactionComponent @balace-add="loadBalance"  v-if="showModalTransaction" @close="showModalTransaction = false" />
  <ModalUserBalanceComponent :balance="userBalance"  v-if="showModalBalanceUser" @closeshowModalBalanceUser="showModalBalanceUser = false" />
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
import ModalUserBalanceComponent from '@/components/Modals/ModalUserBalanceComponent.vue';
import { mapState } from 'vuex';
import axios from 'axios'
import mitt from 'mitt'
const emitter = mitt();

export default {
  computed: {
    ...mapState(['loading']),
  },
  components: {
    ModalBalanceComponent,
    ModalTransactionComponent,
    ModalUserBalanceComponent
  },
  data() {
    return {
      loading : this.$store.state.loading,
      showModalSaldo: false,
      showModalTransaction: false,
      showModalBalanceUser: false,
      user: null,
      role: null,
      userBalance: null,
      transactions: null,
      receivings: null
    };
  },
  mounted() {
    this.loadUser();
    this.loadBalance();
    this.loadTransactions();
    emitter.on('balance-updated', this.loadBalance())
    
  },
  beforeUnmount() {
    // Remover o registro do evento antes do componente ser destruído
    emitter.off('balance-updated', this.loadBalance())
  },
  methods: {
    async loadUser() {
      console.log('text loading = > ' + this.loading)

      console.log(this.$store.state.loading)

      this.$store.commit('setLoading', true);

      this.loading = true

      // Faça uma solicitação para o endpoint do back-end para obter os dados do usuário autenticado
      axios.get('http://localhost:8989/user', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => {
        // Defina os dados do usuário na propriedade "user"
        this.user = response.data.name;
        this.role = response.data.role_id == 1 ? 'Lojista' : 'Cliente';
        this.$store.commit('setLoading', false);
        this.loading = false
      })
      .catch(() => {
        this.$store.commit('setLoading', false);
      });

    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
      //console.log('logout')
    },
    async loadBalance() {
      // Faça uma solicitação para o endpoint do back-end para obter os dados do usuário autenticado
      try {
        const response = await axios.get('http://localhost:8989/get-amount', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.userBalance = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    loadTransactions() {
      // Faça uma solicitação para o endpoint do back-end para obter os dados do usuário autenticado
      axios.get('http://localhost:8989/get-transactions', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          // Defina os dados do usuário na propriedade "user"
          this.transactions = response.data;

        })
       
    }
  }
  

};
</script>
  
  
  