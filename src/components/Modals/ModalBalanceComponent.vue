<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><strong>Adicionar Saldo</strong></h5>
        </div>
        <div class="modal-body">
          <div class="modal-body">
        <form>
          <p>Adicionar Saldo</p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">R$</span>
            <input type="number" v-model="amount" class="form-control" placeholder="Digite o valor" aria-label="Valor a adicionar" aria-describedby="basic-addon1">
          </div>
        </form>
      </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  @click="$emit('closeModalBalance')" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" @click="addBalance">Adicionar</button>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import mitt from 'mitt';
const emitter = mitt();

export default {
  name: 'ModalBalanceComponent',
  props: {
    title: String,
  },
  data() {
    return {
      amount: '',
    }
  },
  methods: {
    addBalance(){

      axios.post('http://localhost:8989/add-balance', {
        amount: this.amount,
      }, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response)
        this.$swal({
          title: 'Saldo Adicionado com sucesso!',
          icon: 'success'
        })
        // Limpa os dados do formulário
        this.amount = ''

        this.$router.push('/dashboard');
      })
      .catch(error => {
        // Exibe uma mensagem de erro para o usuário
        console.log(error)
        this.$swal({
          title: 'Erro!',
          text: 'Não foi possível efetuar a transação, tente novamente em alguns instantes.',
          icon: 'error'
        })
      })

      emitter.emit('balance-updated')

     // Emitir o evento de saldo adicionado
     this.$emit('balace-add')
     this.$emit('refresh-table-transactions')
    }
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