const App = {
  // data() {
  //   return {
  //     notes: ["Omsk", "Moscow", "Saint Petersburg"],
  //     placeholder: 'Enter your city'
  //   }
  // },

  data: () => ({ //ES6
    notes: ["Omsk", "Moscow", "Saint Petersburg"],
    placeholder: 'Enter your city'
  }),
  methods:{
    // inputChangeHandler(){
    //   this.inputValue = event.target.value
    // },
    addNewNote() {
      if(this.inputValue){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(id){
      this.notes.splice(id,1)
    }
  },
  watch: {
    inputValue(value){
      if(value.lendht >10){
        this.inputValue = ''
      }
    }
  }
}
Vue.createApp(App).mount("#app")