new Vue({
    el: '#app',
    data: {
      newToDo: '',
      toDoList: [
        'to do 1',
        'to do 2',
        'to do 3'
      ],
      colorList: [
        'alert-primary',
        'alert-secondary',
        'alert-success',
        'alert-danger',
        'alert-warning',
        'alert-info'
      ]
    },
    methods: {
      removeItem(index) {
        this.toDoList.splice(index, 1);
      },
      addItem() {
        if (this.newToDo.trim() === '') {
          alert('欄位不得為空白');
          return;
        }
        
        this.toDoList.push(this.newToDo);
        this.newToDo = '';
      }
    }
})