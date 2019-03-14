export const fruitMixin = {
  data(){
    return {
      fruits: ['mango', 'banana', 'apple', 'orange'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits(){
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  }
};
