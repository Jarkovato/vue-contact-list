<template>
  <div class="container">
    <div class="row">
      <div class="col-12 h2 text-muted mt-5">Добавить контакт</div>
    </div>
    <div class="row">
      <form class="form" id="form" @submit.prevent="checkForm">
        <div class="row">
          <table class="table table-bordered table-responsive-lg mt-2">
            <thead>
              <tr>
                <th scope="col" v-for="title in titles" :key="title">
                  {{ title }}
                </th>
              </tr>
            </thead>
            <tbody>
               <tr>
                <td><input class="form-control email" id="email" type="email" v-model="contact.email" required></td>
                <td><input class="form-control" id="password" type="password" v-model="contact.password" required></td>
                <td><input class="form-control" id="phone" type="phone" v-model="contact.phone" required></td>
                <td><input class="form-control" id="fullName" type="text" v-model="contact.fullName" required></td>
                <td><input class="form-control" id="status" type="text" v-model="contact.status" required></td>
                <td><input disabled class="form-control" id="createDate" type="text" v-model="contact.createDate"></td>
                <td><input disabled class="form-control" id="changeDate" type="text" v-model="contact.changeDate"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="col" v-if="errors.length">
          <b>Пожалуйста исправьте указанные ошибки:</b>
          <ul>
            <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <router-link :to="'/'" tag="button" class="btn btn-danger mr-1">Отменить</router-link>
          <button type="submit" class="btn btn-success">Сохранить</button>
         </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contact: {
        email: '',
        password: '',
        phone: '',
        fullName: '',
        status: '',
        createDate: '',
        changeDate: ''
      },
      date: '',
      errors: [],
    }
  },
  computed: {
    titles() {
      return this.$store.getters.titles;
    },
    localeDate() {
      return (new Date(this.date)).toLocaleDateString();
    },
    contacts() {
      return this.$store.getters.contacts;
    }
  },
  methods: {
    checkForm() {
      this.createContact();
    },
    createContact() {
      const newId = this.contacts.sort((a, b) => a.id > b.id)[this.contacts.length - 1].id + 1;
      const newContact = {
        id: newId,
        email: this.contact.email,
        phone: this.contact.phone,
        password: this.contact.password,
        fullName: this.contact.fullName,
        status: this.contact.status,
        createDate: this.localeDate,
        changeDate: this.contact.changeDate,
      }
      this.$store.dispatch('createContact', newContact);
      this.$router.push('/');
    }
  },
  created() {
      this.intervalId = setInterval(() => this.date = Date.now(), 1000);

  },
  beforeDestroy() {
      if (this.intervalId) clearInterval(this.intervalId);
  },
}
</script>
