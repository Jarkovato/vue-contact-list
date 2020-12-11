export default {
  state: {
    contacts: [
      {
        id: 1,
        email: "antonov@mail.ru",
        password: "zxc",
        phone: "8-910-910-91-10",
        fullName: "Антонов Антон Анатольевич",
        status: "admin",
        createDate: "09.11.2020",
        changeDate: "09.11.2020",
      },
      {
        id: 2,
        email: "petrov@mail.ru",
        password: "abc",
        phone: "8-910-910-91-11",
        fullName: "Петров Петр Петрович",
        status: "client",
        createDate: "09.11.2020",
        changeDate: "09.11.2020",
      },
      {
        id: 3,
        email: "ivanov@mail.ru",
        password: "123",
        phone: "8-910-910-91-12",
        fullName: "Иванов Иван Иванович",
        status: "partner",
        createDate: "09.11.2020",
        changeDate: "09.11.2020",
      },
    ],
    searchContacts: [],
    titles: [
      "Почта",
      "Пароль",
      "Телефон",
      "ФИО",
      "Статус",
      "Дата создания",
      "Дата изменения",
    ],
  },
  mutations: {
    DELETE_CONTACT(state, contactId) {
      const contacts = state.contacts.filter((c) => c.id != contactId);
      state.contacts = contacts;
    },
    CREATE_CONTACT(state, newContact) {
      state.contacts.push(newContact);
    },
    async SAVE_CONTACT(state, newContact) {
      const contacts = state.contacts.filter((c) => c.id != newContact.id);
      state.contacts = contacts;
      state.contacts.push(newContact);
    },
    SORT_CONTACTS(state, sortParam) {
      const contacts = state.contacts.sort((a, b) =>
        a[sortParam] > b[sortParam] ? 1 : -1
      );
      state.contacts = contacts;
    },
    SEARCH_CONTACT(state, searchResult) {
      const search = searchResult;
      const contacts = state.contacts.filter((contact) => {
        return Object.values(contact).some((key) =>
          key
            .toString()
            .toLowerCase()
            .includes(search)
        );
      });
      state.searchContacts = contacts;
    },
  },
  actions: {
    deleteContact({ commit }, contact) {
      commit("DELETE_CONTACT", contact.id);
    },
    createContact({ commit }, newContact) {
      commit("CREATE_CONTACT", newContact);
    },
    saveContact({ commit }, newContact) {
      commit("SAVE_CONTACT", newContact);
    },
    sortContacts({ commit }, sortParam) {
      commit("SORT_CONTACTS", sortParam);
    },
    searchContact({ commit }, searchResult) {
      commit("SEARCH_CONTACT", searchResult);
    },
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
    titles(state) {
      return state.titles;
    },
    contactById(state) {
      return (contactId) => {
        return state.contacts.filter((contact) => contact.id === contactId);
      };
    },
    searchContacts(state) {
      return state.searchContacts;
    },
  },
};
