<template>
<form id="shopping-list">
  <h2>Shopping List</h2>
  <div class="shop">

<table id="shopping-list-table" class="table table-condensed table-hover">
  <thead>
     <tr>
       <th>Quantity</th>
       <th>Item</th>
       <th>Actions</th>
     </tr>
  </thead>
  <tr v-for="(item, index) in itemsList" :key="index">
    <td>
      <span v-show="!item.inEditMode">{{ item.quantity }}</span>
      <input type="number" v-bind:placeholder="item.quantity" v-show="item.inEditMode" v-model="item.quantity" /> 
    </td>
    <td>
      <span v-show="!item.inEditMode">{{ item.itemName }}</span>
      <input v-bind:placeholder="item.itemName" v-show="item.inEditMode" v-model="item.itemName" />
    </td>
    <td>
  <button type="button" class="btn btn-success" v-show="item.inEditMode" @click="editItemComplete(item)">
    <i class='bx bx-check-circle'></i>  </button>
  <button type="button" class="btn btn-info" v-show="!item.inEditMode" @click="editItem(item)">
    <i class='bx bx-edit-alt'></i>
  </button>
  <button type="button" class="btn btn-danger" @click="removeItem(index)">
    <i class='bx bxs-trash-alt'></i>
  </button>
</td>

  </tr>
</table>
<div class="adding">
  <h4 >Add new item</h4>
<div class="row col-md-6">
              <div class="col-md-6 form-group">
                Quantity
                <input type="number" v-model="quantity" class="checkbox" autofocus>
              </div>
              <div class="col-md-6 form-group">
                Name
                <input type="text" v-model="itemName" class="checkbox">
              </div>
  
              <button type="button" @click="addItem" class="btn btn-primary" ><i class="fa fa-plus"></i> Add  </button>
              </div></div></div>
</form>

</template>
<script>
export default {
  data() {
    return {
      quantity: '',
      itemName: '',
      itemsList: [
        {
          quantity: 3,
          itemName: "Apples",
          inEditMode: false
        },
        {
          quantity: 6,
          itemName: "Pears",
          inEditMode: false
        }
      ],
      inEditMode: false
    };
  },
  methods: {
    
    addItem: function (){
                      var quantityIN = this.quantity;
                      var itemNameIN = this.itemName.trim();
                      this.itemsList.push({ 
                        quantity: quantityIN,
                        itemName: itemNameIN,
                        inEditMode: false
                      });
                      this.clearAll();
                  },
                  clearQuantity: function () {
                      this.quantity = '';
                  },
                  clearItemName: function () {
                      this.itemName = '';
                  },
                  clearAll: function () {
                    this.clearQuantity();
                    this.clearItemName();
                  },
                  removeItem: function (index){
                      this.itemsList.splice(index, 1); //delete 1 element from the array at the position index
                  },
                  editItem:function (item){
                      item.inEditMode = true;
                  },
                  editItemComplete: function (item) {
                      item.inEditMode = false;
                  }
              
  }



};
</script>

<style scss>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
  
  
  
  .shop{
    
    border-radius: 8px;
  box-shadow: 0px 10px 15px rgba(98, 41, 168, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px; /* Adjust margin for spacing */
}
h2, h4 {
  font-family: 'Nunito', sans-serif;
 padding: 10px;
}
.adding{
    margin: 10px 20px; /* Adjust margin for spacing */
  max-width: 400px; /* Set the maximum width for the board */
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px rgba(98, 41, 168, 0.1);
}

#shopping-list-table{
  

  table-layout: fixed;
  width: 100%;
  vertical-align: middle;
}

button {
  margin-left: 2%;
border-color: aliceblue;
width: 150px;
height: 50px;
font-size: 16px;
}

</style>