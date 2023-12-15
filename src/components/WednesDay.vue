<template>
    <div class="back">
        <h2 class="title">WEDNESDAY</h2>
        <input type="text" class="todo-input" placeholder="Add Task" v-model="newTodo" @keyup.enter="addTodo">



<select v-model="newTodoCategory" class="category-select" @change="selectCategory">
<option value="work">Work</option>
<option value="personal">Personal</option>
<option value="religion">Religion</option>
</select>

<div class="extra-container-categorie">
    <div>
      <button :class="{ active: filter == 'work' }" @click="filter = 'work'">Work</button>
      <button :class="{ active: filter == 'personal' }" @click="filter = 'personal'">Personal</button>
      <button :class="{ active: filter == 'religion' }" @click="filter = 'religion'">Religion</button>
</div></div>

<transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
<div v-for="(todo) in todosFiltered" :key="todo.id" class="todo-item">
  <div class="todo-item-left">
    <input type="checkbox" v-model="todo.completed" @change="checkTodo(todo)">
    <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{ completed : todo.completed }">      <span>{{ todo.title }} - {{ todo.category }}</span>
   </div>
    <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
  </div>
  <div class="remove-item" @click="removeTodo(todo.id)">
    &times;
  </div>
</div>
</transition-group>

<div class="extra-container">
  <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos"> Check All</label></div>
  <div>{{ remaining }} items left</div>
</div>

<div class="extra-container">
  <div>
    <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
    <button :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</button>
    <button :class="{ active: filter == 'completed' }" @click="filter = 'completed'">Completed</button>
  </div>

  <div>
    <transition name="fade">
    <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
    </transition>
  </div>

</div>
</div>
</template>

<script>
import { ref , onMounted } from 'vue'
import { collection, onSnapshot, addDoc,doc, deleteDoc ,updateDoc,query, where, getDocs} from 'firebase/firestore'
import {db} from '@/firebase/index'
const todosCollectionRef = collection(db, "wednesday")
export default {
  name: 'todo-list',
setup() {
        const newTodo =ref('')
        const idForTodo=ref('4')
        const beforeEditCache=ref('')
        const newTodoCategory=ref('work')
        const filter= ref('all')
        const todos= ref([
          //{
            //'id': 1,
            //'title': 'Finish Vue Screencast',
            //'completed': false,
            //'editing': false,
          //},
         // {
           // 'id': 2,
            //'title': 'Take over world',
            //'completed': false,
            //'editing': false,
          //},
        ])
        onMounted(()=>{
 /*const querySnapshot = await getDocs(collection(db, "todos"))
  let fbTodos = []
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const todo ={
    id:doc.id,
    title:doc.data().title,
    completed:doc.data().completed,
    editing:doc.data().editing,
  }
  fbTodos.push(todo)
  });
  todos.value=fbTodos*/
  onSnapshot(todosCollectionRef, (querySnapshot) => {
  const fbTodos = []
  querySnapshot.forEach((doc) => {
    const todo ={
    id:doc.id,
    title:doc.data().title,
    completed:doc.data().completed,
    editing:doc.data().editing,
    category:doc.data().category,
  }
  fbTodos.push(todo)
  });
todos.value=fbTodos
})
})


const addTodo = async()=> {
        if (newTodo.value.trim().length == 0) {
          return
        }
        
        addDoc(todosCollectionRef, {
        title:newTodo.value,
        completed: false,
        editing:false,
        category:newTodoCategory.value,
       });
        /*this.todos.push({
          id: this.idForTodo,
          title: this.newTodo,
          completed: false,
          editing: false,
        })*/
  
        newTodo.value = ''
        
      }

      const removeTodo= async(id) => {
        const todoRef = doc(todosCollectionRef, id);
         await deleteDoc(todoRef);
      }


    const checkAllTodos = async () => {
      const updatedTodos = todos.value.map((todo) => ({
    ...todo,
    completed: event.target.checked,
  }));
  const batch = updatedTodos.map((updatedTodo) => {
    const todoRef = doc(todosCollectionRef, updatedTodo.id);
    return updateDoc(todoRef, { completed: updatedTodo.completed });
  });
  await Promise.all(batch);
};

const checkTodo = async (todo) => {
      const todoRef = doc(todosCollectionRef, todo.id);
      await updateDoc(todoRef, { completed: todo.completed })};






    const editTodo = async (todo) => {
        beforeEditCache.value = todo.title;
        todo.editing = true;

        // Update Firestore document for editing
        const todoRef = doc(todosCollectionRef, todo.id);
        await updateDoc(todoRef, { editing: true });
      };

     const doneEdit = async (todo) => {
        if (todo.title.trim() === '') {
          todo.title = beforeEditCache.value;
        }
        todo.editing = false;

        // Update Firestore document after editing
        const todoRef = doc(todosCollectionRef, todo.id);
        await updateDoc(todoRef, { title: todo.title, editing: false });
      };

      const cancelEdit = async (todo) => {
        todo.title = beforeEditCache.value;
        todo.editing = false;

        // Update Firestore document to cancel editing
        const todoRef = doc(todosCollectionRef, todo.id);
        await updateDoc(todoRef, { editing: false });
      };
      const clearCompleted = async () => {
        const completedTodosQuery = query(todosCollectionRef, where("completed", "==", true));
        const completedTodosSnapshot = await getDocs(completedTodosQuery);
        
        const batch = [];
        completedTodosSnapshot.forEach((doc) => {
          batch.push(deleteDoc(doc.ref));
        });
        await Promise.all(batch);
      };
      const selectCategory = (event) => {
      newTodoCategory.value = event.target.value;
    };
      
        return {
      newTodo,
      idForTodo,
      beforeEditCache,
      filter,
      todos,
      addTodo,
      removeTodo,
      checkAllTodos,
      editTodo,
      doneEdit,
      cancelEdit,
      clearCompleted,
      checkTodo,
      selectCategory,
  
    };








      },

    

      
 computed: {
      remaining() {
        return this.todos.filter(todo => !todo.completed).length
      },
      anyRemaining() {
        return this.remaining != 0
      },
      todosFiltered() {
        if (this.filter == 'all') {
          return this.todos
        } else if (this.filter == 'active') {
          return this.todos.filter(todo => !todo.completed)
        } else if (this.filter == 'completed') {
          return this.todos.filter(todo => todo.completed)
        }else  {
          return this.todos.filter(todo => todo.category === this.filter)
        }
        
      },
      showClearCompletedButton() {
        return this.todos.filter(todo => todo.completed).length > 0
      }
    },
    
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    

   methods: {  
    /* editTodo(todo) {
        this.beforeEditCache = todo.title
        todo.editing = true
      },
      doneEdit(todo) {
        if (todo.title.trim() == '') {
          todo.title = this.beforeEditCache
        }
        todo.editing = false
      },
      cancelEdit(todo) {
        todo.title = this.beforeEditCache
        todo.editing = false
      },*/
      /*constcheckAllTodos() {
        this.todos.forEach((todo) => todo.completed = event.target.checked)
        await updateDoc(doc(todosCollectionRef, todo.completed),{
        capital: true
        });
      },*/
     /*clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
     }*/
}
  }
</script>
