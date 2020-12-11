<template>
  <div class="container">
      <div class="row">
        <div class="col-12 h2 text-muted mt-5">Список пользователей</div>
        <div class="form-group col-12 mt-2">
          <div class="col-12 col-md-6 col-lg-8 mt-2 d-inline-flex justify-content-center">
            <input
              class="form-control col-8 offset-1"
              type="search"
              placeholder="Поиск"
              v-model.lazy="search"
              minlength="2"
              required
              
            />
            <button
              class="btn btn-sm btn-success d-inline"
              @click="searchContact()"
            >
              Искать
            </button>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-inline-flex mt-2 justify-content-center">
            <router-link tag="button" class="btn btn-outline-info" to="/new">
              Добавить
            </router-link>
            <button class="btn btn-outline-primary ml-1" @click="onEdit()">
              Редактировать
            </button>
            <button class="btn btn-outline-danger ml-1" @click="onDelete()">
              Удалить
            </button>
          </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 mt-2 text-primary"
            v-if="canEdit && !canDelete"
          >
            Кликните на пользователя для редактирования или нажмите повторно
          </div>
          <div class="col mt-2 text-danger" v-if="canDelete && !canEdit">
            Кликните на пользователя для удаления или нажмите повторно
          </div>
        </div>
        <table class="table table-bordered table-responsive-lg mt-2">
          <thead>
            <tr>
              <th
                scope="col"
                v-for="title in titles"
                :key="title"
                class="pointer"
                @click="sortContacts(title)"
              >
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody v-if="!search">
            <tr
              :class="canEdit || canDelete ? 'pointer' : ''"
              v-for="contact in contacts"
              :key="contact.id"
              @click="
                canEdit ? changeContact(contact) : '',
                  canDelete ? deleteContact(contact) : ''
              "
            >
              <td>{{ contact.email }}</td>
              <td>{{ contact.password }}</td>
              <td>{{ contact.phone }}</td>
              <td>{{ contact.fullName }}</td>
              <td>{{ contact.status }}</td>
              <td>{{ contact.createDate }}</td>
              <td>{{ contact.changeDate }}</td>
            </tr>
          </tbody>
          <tbody v-if="search">
            <tr
              :class="canEdit || canDelete ? 'pointer' : ''"
              v-for="contact in searchContacts"
              :key="contact.id"
              @click="
                canEdit ? changeContact(contact) : '',
                  canDelete ? deleteContact(contact) : ''
              "
            >
              <td>{{ contact.email }}</td>
              <td>{{ contact.password }}</td>
              <td>{{ contact.phone }}</td>
              <td>{{ contact.fullName }}</td>
              <td>{{ contact.status }}</td>
              <td>{{ contact.createDate }}</td>
              <td>{{ contact.changeDate }}</td>
            </tr>
          </tbody>
        </table>
        <div
          v-if="search"
          class="col-6 offset-3 alert alert-success pointer"
          @click="closeSearch()"
        >
          Нажмите чтобы вернуться ко всем контактам
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      canEdit: false,
      canDelete: false,
      search: "",
    };
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    searchContacts() {
      return this.$store.getters.searchContacts;
    },
    titles() {
      return this.$store.getters.titles;
    },
  },
  methods: {
    onEdit() {
      this.canDelete = false;
      if (!this.canEdit) this.canEdit = true;
      else this.canEdit = false;
    },
    onDelete() {
      this.canEdit = false;
      if (!this.canDelete) this.canDelete = true;
      else this.canDelete = false;
    },
    changeContact(contact) {
      this.$router.push("/contact/" + contact.id);
    },
    deleteContact(contact) {
      this.$store.dispatch("deleteContact", contact);
    },
    sortContacts(title) {
      let param = "";
      switch (title) {
        case "Почта":
          param = "email";
          break;
        case "Телефон":
          param = "phone";
          break;
        case "Дата создания":
          param = "createDate";
          break;
        case "Дата Изменения":
          param = "changeDate";
          break;
        case "Статус":
          param = "status";
          break;
        case "ФИО":
          param = "fullName";
          break;
        case "Пароль":
          param = "password";
      }
      this.$store.dispatch("sortContacts", param);
    },
    searchContact() {
      const search = this.search.toLowerCase();
      if (search.length > 0) {
        this.$store.dispatch("searchContact", search);
      }
    },
    closeSearch() {
      this.search = "";
    },
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
