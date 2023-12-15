<template>
  <div id='app' class="center-container">
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
        <tr v-for="(item) in itemsList" :key="item.itemId">
          <td>
            <span v-show="!item.inEditMode">{{ item.quantity }}</span>
            <input
              v-if="item.inEditMode"
              type="number"
              :placeholder="item.quantity"
              v-show="item.inEditMode"
              v-model="item.quantity"
            />
          </td>
          <td>
            <span v-show="!item.inEditMode">{{ item.itemName }}</span>
            <input
              :placeholder="item.itemName"
              v-show="item.inEditMode"
              v-model="item.itemName"
            />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-success"
              v-show="item.inEditMode"
              @click="editItemComplete(item)"
            >
              <i class="bx bx-check-circle"></i>
            </button>
            <button
              type="button"
              class="btn btn-info"
              v-show="!item.inEditMode" @click="editItem(item)"
            >
              <i class="bx bx-edit-alt"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="removeItem(item.itemId)"
            >
              <i class="bx bxs-trash-alt"></i>
            </button>
          </td>
        </tr>
      </table>
      <div class="adding">
        <h4>Add new item</h4>
        <div class="row col-md-6">
          <div class="col-md-6 form-group">
            Quantity
            <input type="number" v-model="quantity" class="checkbox" autofocus />
          </div>
          <div class="col-md-6 form-group">
            Name
            <input type="text" v-model="itemName" class="checkbox" />
          </div>
          <button type="button" @click="addItem" class="btn btn-primary">
            <i class='bx bx-plus'></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
</template>
<script>
import { ref ,onMounted,} from 'vue'
import { collection,onSnapshot ,addDoc,doc,updateDoc,deleteDoc  } from 'firebase/firestore'
import { db } from '@/firebase/index'
const shoppingListCollectionRef = collection(db, "shopping-list")
export default {
  setup() {

    const quantity = ref('');
    const itemName = ref('');
    const itemsList = ref([]);
    
    onMounted(() => {
      onSnapshot(shoppingListCollectionRef, (querySnapshot) => {
        const fbShoppingList = [];
        querySnapshot.forEach((doc) => {
          const item = {
            itemId: doc.id,
            quantity: doc.data().quantity,
            itemName: doc.data().itemName,
            inEditMode: doc.data().inEditMode,
            editQuantity: doc.data().quantity,
            editItemName: doc.data().itemName,
          };
          fbShoppingList.push(item);
        });
        itemsList.value = fbShoppingList;
      });
    });

    const clearQuantity = () => {
      quantity.value = '';
    };

    const clearItemName = () => {
      itemName.value = '';
    };

    const clearAll = () => {
      clearQuantity();
      clearItemName();
    };

    const removeItem = async(itemId) => {
      const itemDocRef = doc(db, 'shopping-list', itemId);
      await deleteDoc(itemDocRef);

// Remove the item from the local array
itemsList.value = itemsList.value.filter(item => item.itemId !== itemId);

    }
    const editItem = (item) => {
      item.inEditMode= true;
      item.editQuantity = item.quantity;
      item.editItemName = item.itemName;

  // If you want to update the Firestore document immediately when entering edit mode
 
};

const editItemComplete = async (item) => {
      const itemDocRef = doc(db, 'shopping-list', item.itemId);
      await updateDoc(itemDocRef, {
        quantity: item.editQuantity,
        itemName: item.editItemName,
        
      });
      item.inEditMode = false;
    };



    const addItem = async () => {
  const quantityIN = quantity.value;
  const itemNameIN = itemName.value.trim();

  await addDoc(shoppingListCollectionRef, {
      quantity: quantityIN,
      itemName: itemNameIN,
      inEditMode: false,
    });

  clearAll();
};

    return {
      quantity,
      itemName,
      itemsList,
      clearQuantity,
      clearItemName,
      clearAll,
      removeItem,
      editItem,
      editItemComplete,
      addItem,
    };
  },
};



    
  

  
  
  
 /* data() {
=======

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
       inEditMode: false});
       this.clearAll();
                  },


  clearQuantity: function (){
  this.quantity = ''; },
               


  //clearItemName: function () {
   this.itemName = '';
                  },
              
   clearAll: function () {
   this.clearQuantity();
   this.clearItemName(); },

  removeItem: function (index){
  this.itemsList.splice(index, 1); //delete 1 element from the array at the position index
  },
  
  editItem:function (item){
   item.inEditMode = true;
                  },


  //editItemComplete: function (item) {
   item.inEditMode = false;
  }
              
  }

*/

</script>

<style scss scoped>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
 
.center-container{
  height: 100vh;
}
  .shop{
    padding: 100px; 
box-shadow: inset;
    margin-left: 80px;
    margin-right: 80px;
    border-radius: 10px;
  box-shadow: 0px 10px 15px rgba(98, 41, 168, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

}
h2, h4 {
  font-family: 'Nunito', sans-serif;
 padding: 10px;
}
.adding{
    margin: 10px 20px; /* Adjust margin for spacing */
  max-width: 400px; /* Set the maximum width for the board */
  background-color: #ceddec;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 25px 25px 15px rgba(98, 41, 168, 0.1);
}

#shopping-list-table{
  

  table-layout: fixed;
  width: 100%;
}

button {
  margin-left: 2%;
border-color: rgb(255, 255, 255);
width: 40px;
height: 40px;
font-size: 16px;
}
.adding button{
 background-color:#ceddec;
 border-color: #ceddec;

}


</style>