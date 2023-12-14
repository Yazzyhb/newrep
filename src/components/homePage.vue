<template>
  <div class="sunday"></div>
    <div class="back">
        <h2 class="title">SUNDAY</h2>
        <input type="text" class="todo-input" placeholder="Add Task" v-model="newTodo" @keyup.enter="addTodo">



<select v-model="newTodoCategory" class="category-select">
<option value="work">Work</option>
<option value="personal">Personal</option>
<option value="religion">Religion</option>
</select>


<transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
<div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
  <div class="todo-item-left">
    <input type="checkbox" v-model="todo.completed">
    <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{ completed : todo.completed }">      <span>{{ todo.title }} - {{ todo.category }}</span>
   </div>
    <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
  </div>
  <div class="remove-item" @click="removeTodo(index)">
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
export default {
name: 'todo-list',
data () {
return {
  newTodo: '',
  newTodoCategory: 'work', // Default category
  idForTodo: 3,
  beforeEditCache: '',
  filter: 'all',
  todos: [
    {
      'id': 1,
      'title': 'Update the project',
      'completed': false,
      'editing': false,
      'category': 'work', // Initial category

    },
    
  ]
}
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
  }

  return this.todos
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
addTodo() {
  if (this.newTodo.trim().length == 0) {
    return
  }

  this.todos.push({
    id: this.idForTodo,
    title: this.newTodo,
    completed: false,
    editing: false,
    category: this.newTodoCategory,

  })

  this.newTodo = ''
  this.newTodoCategory = 'work'; // Reset category to 'work'

  this.idForTodo++
},
editTodo(todo) {
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
},
removeTodo(index) {
  this.todos.splice(index, 1)
},
checkAllTodos() {
  this.todos.forEach((todo) => todo.completed = event.target.checked)
},
clearCompleted() {
  this.todos = this.todos.filter(todo => !todo.completed)
}
}
}
</script>

  
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");


.back {
  
width: 80%;
margin-left: 80px;

max-width: 600px; /* Set the maximum width for the board */
background-color: rgb(255, 255, 255);
padding: 20px;
border-radius: 8px;
box-shadow: 0px 10px 15px rgba(98, 41, 168, 0.1);
}

.title {
	display: flex;
  color: rgb(94, 75, 104);
}

    .todo-input {
      border-color: rgb(255, 255, 255);
      padding: 10px 18px;
      font-size: 15px;
      margin-bottom: 16px;
      width: 100%;
      &:focus {
        outline: 0;
      };
      & + div {
      margin-top: 8px;
    }

    label {
      display: flex;
      align-items: center;

      select {
        margin-left: 8px;
        padding: 6px;
        font-size: 14px;
        border: 1px solid #cf2626;
        border-radius: 4px;
        &:focus {
          outline: none;
              }}
    }
  }
    .todo-item {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      animation-duration: 0.3s;
      
    
    }
  
    .remove-item {
      cursor: pointer;
      margin-left: 14px;
      &:hover {
        color: black;
      }
    }
  
    .todo-item-left { // later
      display: flex;
      align-items: center;
    }
  
    .todo-item-label {
      padding: 10px;
     
      margin-left: 12px;
    }
  
    .todo-item-edit {
      font-size: 24px;
      color: #2c3e50;
      margin-left: 12px;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc; //override defaults
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
      &:focus {
        outline: none;
      }
    }
  
    .completed {
      text-decoration: line-through;
      color: rgb(79, 76, 76);
    
    }
  
    .extra-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      border-top: 1px solid lightgrey;
      padding-top: 14px;
      margin-bottom: 14px;
    }
  
    button {
      font-size: 14px;
      background-color: white;
      appearance: none;
  
      &:hover {
        background: rgb(165, 129, 170);
      }
  
      &:focus {
        outline: none;
      }
    }
  
    .active {
      
      background: rgb(196, 182, 198);
    }
  
    // CSS Transitions
    .fade-enter-active, .fade-leave-active {
      transition: opacity .2s;
    }
  
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .category {
    font-size: 12px;
    margin-left: 8px;
    color: #888;
    }
  </style>
  