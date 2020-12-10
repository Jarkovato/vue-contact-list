<template>
  <div class="container">
   <div class="row">
    <div class="col-12 h2 text-muted mt-5">Редактировать контакт</div>
   </div>
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
          <tr
            v-for="contact in contacts"
            :key="contact.id"
          >
            <td><input class="form-control" type="text" v-model="contact.email"></td>
            <td><input class="form-control" type="text" v-model="contact.password"></td>
            <td><input class="form-control" type="text" v-model="contact.phone"></td>
            <td><input class="form-control" type="text" v-model="contact.fullName"></td>
            <td><input class="form-control" type="text" v-model="contact.status"></td>
            <td><input disabled class="form-control" type="text" v-model="contact.createDate"></td>
            <td><input disabled class="form-control" type="text" v-model="contact.changeDate"></td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="row">
        <div class="col-12">
          <router-link :to="'/'" class="btn btn-danger mr-1">Отменить</router-link>
          <button class="btn btn-success" @click="saveContact()">Сохранить</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    },
    contacts() {
      const id = this.id;
      return this.$store.getters.contactById(id);
    },
    titles() {
      return this.$store.getters.titles;
    },
    localeDate() {
      return (new Date(this.date)).toLocaleDateString();
    },
  },
  methods: {
    saveContact() {
      const contact = this.contacts[0];
      const newContact = {
        id: contact.id,
        email: contact.email,
        phone: contact.phone,
        password: contact.password,
        fullName: contact.fullName,
        status: contact.status,
        createDate: contact.createDate,
        changeDate: this.localeDate,
      }
      this.$store.dispatch('saveContact', newContact);
      this.$router.push('/')
    }
  },
  created() {
      this.intervalId = setInterval(() => this.date = Date.now(), 1000); // Обновляем значения не чаще раза в секунду. А то и реже.
  },
  beforeDestroy() {
      if (this.intervalId) clearInterval(this.intervalId);
  },
}
</script>
