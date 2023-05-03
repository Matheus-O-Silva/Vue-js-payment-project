<template>
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><strong>Saldo Atual</strong></h5>
          </div>
          <div class="modal-body">
            <div class="modal-body">
          <form>
            <p><strong>Saldo</strong></p> 
            <div class="input-group mb-3">
                <button type="button" class="btn btn-secondary" @click="loadBalance">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                </button>
                <input class="form-control" type="text" v-model="userBalance" readonly>
            </div>
          </form>
        </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary"  @click="$emit('closeshowModalBalanceUser')" data-bs-dismiss="modal">Fechar</button>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'ModalUserBalanceComponent',
    props: {
      title: String,
    },
    data() {
      return {
        userBalance: '',
      }
    },
    methods: {
        async loadBalance() {
        // Faça uma solicitação para o endpoint do back-end para obter os dados do usuário autenticado
        try {
            const response = await axios.get('http://localhost:8989/get-amount', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            });
            this.userBalance = 'R$ ' + response.data;
        } catch (error) {
            this.$swal({
            title: 'Erro!',
            text: 'Erro ao consultar saldo, aguardo um instante e tente novamente',
            icon: 'error'
            })
        }
        },
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 10px;
    text-align: center;
    position: fixed;
  }
  
  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.25rem;
    outline: 0;
    overflow: hidden;
  }
  .modal-header {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    justify-content: space-between;
  }
  
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }
  </style>