var app = new Vue({
    el: '#app',
    data: {
      foods: [
          { description: 'Bananas', completed: false },
          { description: 'Milks', completed: false },
          { description: 'Chicken', completed: false },
          { description: 'Candy', completed: false},
          { description: 'Bagels', completed: true}
      ],
      newFood: '',
  
    },
    methods: {
      addFood() {
          if (this.newFood) {
            this.foods.push({description: this.newFood, completed: false});
            this.newFood = '';
          }
      },
      clearList() {
          this.foods = [];
      },
      check(food) {
          food.completed = true;
    }
    },
    computed: {
      foundFoods() {
        return this.foods.filter( food => food.completed );
      },
      missingFoods() {
          return this.foods.filter( food => ! food.completed );
      }
    }
  })
  