<template>
    <div class="template-page">
      <h2>Latest Todo Templates</h2>
      <div class="template-container">
      <div v-for="template in todoTemplates" :key="template.id" class="template-item">
        <!-- Display template details -->
        <div class="template-info">
          <h3>{{ template.name }}</h3>
          <p>{{ template.description }}</p>
        </div>
        <div class="template-actions" >
            <img :src="template.imageUrl" alt="Template Image" class="template-image" />

            <template v-if="template.link">
      <a :href="template.link" target="_blank" rel="noopener noreferrer"><i class='bx bxs-printer'></i></a>
    </template>
    <!-- Render a regular button if no link is specified -->
    <template v-else>
      <button @click="printTemplate(template)"><i class='bx bxs-printer'></i></button>
    </template>        </div>
      </div>
    </div>
</div>
  </template>
  <script>
  export default {
    data() {
      return {
        todoTemplates: [
      {
        id: 1,
        name: '',
        description: '',
        imageUrl: require('@/assets/checklist.jpg'),
        link: 'https://www.vecteezy.com/vector-art/12782575-blank-checklist-or-to-do-list-printable?utm_source=pinterest&utm_medium=social',
      },
      {
        id: 2,
        name: '',
        description: '',
        imageUrl: require('@/assets/td.jpg'),
        link: 'https://www.etsy.com/fr/Nftlover305/listing/1124472614/liste-de-taches-imprimable-page-de?utm_campaign=Share&utm_medium=social_organic&utm_source=MSMT&utm_term=so.smt&share_time=1639422298000&epik=dj0yJnU9dDB2UlZLVkd4NFk5a3BQbEJ4aGhYcGVPWjFiTHI1Z2MmcD0wJm49Y1l3WUIwVGltVzQwdWh1XzZUM09UQSZ0PUFBQUFBR1Y4TnN3',

      },
      {
        id: 3,
        name: '',
        description: '',
        imageUrl: require('@/assets/tddr.jpg'),
        link: 'https://www.etsy.com/shop/LaurieStudioDesign?epik=dj0yJnU9WUtXUzhFZk5PRDVnYWR0QVBpRzRTZmpqYzR6bHpHVE0mcD0wJm49TTVqNzZhLXN3RHR5aVF5SHlJV3NjdyZ0PUFBQUFBR1Y4TnRV',
      },
      {
        id: 4,
        name: '',
        description: '',
        imageUrl: require('@/assets/trf.jpg'),
        link: 'https://www.etsy.com/fr/byMariahJo/listing/1253685949/liste-de-choses-a-faire-liste-de?utm_campaign=Share&utm_medium=social_organic&utm_source=DSMT2&utm_term=so.smt&share_time=1655670070000',
      },
      {
        id: 5,
        name: '',
        description: '',
        imageUrl: require('@/assets/trd.jpg'),
        link: 'https://plantoorganize.com/to-do-lists/',
      },
      {
        id: 6,
        name: '',
        description: '',
        imageUrl: require('@/assets/ter.jpg'),
        link: 'https://www.etsy.com/fr/Nftlover305/listing/1120682204/agenda-quotidien-o-liste-de-taches-o?utm_source=Pinterest&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1638684539270&epik=dj0yJnU9UDdLekdIcW14MTZPTnh6Q1pZQUoxZmZwRWJWOU4xZUomcD0wJm49TFUweEhvVDlFb2loTWUwSkZ4ZVhYUSZ0PUFBQUFBR1Y4T0Y0',
      },
      {
        id: 7,
        name: '',
        description: '',
        imageUrl: require('@/assets/tee.jpg'),
        link: 'https://jellymemos.com/printable-daily-planner-with-time-slots/',
      },
      {
        id: 8,
        name: '',
        description: '',
        imageUrl: require('@/assets/te.jpg'),
        link: 'https://www.etsy.com/fr/Nftlover305/listing/1124472614/liste-de-taches-imprimable-page-de?utm_campaign=Share&utm_medium=social_organic&utm_source=MSMT&utm_term=so.smt&share_time=1639422298000&epik=dj0yJnU9dlFjQVNYVVB1VjAwOWU3bENDMEJFdXZmVk1TXzcyNUkmcD0wJm49UmcwalZ1eE1ISW1ZeGJFTkQyZ2xUUSZ0PUFBQUFBR1Y4T0hB',
        
      },
      {
        id: 9,
        name: '',
        description: '',
        imageUrl: require('@/assets/tod.jpg'),
        link: 'https://www.etsy.com/fr/listing/1426529102/?click_key=87aedb9510c160aa785858173131acf0626a6ccf%3A1426529102&click_sum=de3100e2&ref=shop_home_feat_1&epik=dj0yJnU9REJXc0FLSkh5c3JnZFJTeDl3d250TmhqbGFLR0FULUwmcD0wJm49RmxndG9DbVJrY1N0OFk1T2JvM0RvdyZ0PUFBQUFBR1Y4T0lV',
      },
     
    ],
      };
    },
    methods: {
  printTemplate(template) {
    // Create a new window
    const printWindow = window.open('', '_blank');
    
    // Check if the window is opened successfully
    if (printWindow) {
      // Inject template content into the new window
      const templateContent = `<html><head><title>${template.name}</title></head><body>${template.content}</body></html>`;
      printWindow.document.write(templateContent);
      
      // Trigger the print
      printWindow.print();
    } else {
      // Handle if the window couldn't be opened
      console.error('Unable to open print window');
    }
  },
},
  };
  </script>
  
<style scoped>
.template-page {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  
}
.template-container {
  display: flex;
  flex-wrap: wrap;
  
}

h2{
    margin-top: -60px;
    margin-bottom: 50px;
}
.template-item {
    flex: 0 0 30%; /* Each item takes up 30% of the container width with a little margin */
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* box-shadow: 1px 1px 4px#a48cae; */
}

.template-info {
  flex: 2;
}

.template-actions {
  flex: 1;
  text-align: right;
}

button {
  padding: 8px 12px;
  margin: 5px;
  cursor: pointer;
  background-color: #a48cae;
  color: #fff;
  border: none;
  border-radius: 4px;
}
.template-image{
    width: 100%; /* Make the image fill the container width */
  max-height: 200px;
}
</style>