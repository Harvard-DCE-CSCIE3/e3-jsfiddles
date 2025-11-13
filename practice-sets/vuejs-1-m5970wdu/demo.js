const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      programmingLanguages: [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "PHP" },
        { name: "Julia" }
      ]
    };
  }
});

app.mount('#app');
