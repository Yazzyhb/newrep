<template>

    <!-- <div class="boards-cont">
     
    <div class="board-container-one">
      <FriDay></FriDay>
    </div>
    <div class="board-container-two">
      <SaturDay></SaturDay>
       <homePage></homePage>
       <MonDay></MonDay>
    </div>
  <div class="board-container-three">
   
  <ThuesDay></ThuesDay>
  <WednesDay></WednesDay>
    <ThursDay></ThursDay>
  </div>
  
</div> -->

  <div id="app" class="center-container">
        <!-- Quotes Slider -->
        <div class="quotes-slider">
      <div v-for="(quote, index) in quotes" :key="index" class="quote" :class="{ active: index === currentQuoteIndex }">
        {{ quote }}
      </div>
    </div>


    <div class="boards-cont">
      <!-- Board container for buttons -->
      <div class="board-container-one">
        <DayButton class="DayButton" @click="selectDay('Sunday')">Sunday</DayButton>
        <DayButton class="DayButton" @click="selectDay('Monday')">Monday</DayButton>
        <DayButton class="DayButton" @click="selectDay('Tuesday')">Tuesday</DayButton>
        <DayButton class="DayButton" @click="selectDay('Wednesday')">Wednesday</DayButton>
        <DayButton class="DayButton" @click="selectDay('Thursday')">Thursday</DayButton>
        <DayButton class="DayButton" @click="selectDay('Friday')">Friday</DayButton>
        <DayButton class="DayButton" @click="selectDay('Saturday')">Saturday</DayButton>
      </div>

      <!-- Render the selected day's to-do list component -->
      <div class="selected-day-list">
        <component :is="selectedDayComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import DayButton from '@/components/DayButton.vue';
import homePage from '@/components/homePage.vue';
import MonDay from '@/components/MonDay.vue';
import ThuesDay from '@/components/ThuesDay.vue';
import WednesDay from '@/components/WednesDay.vue';
import FriDay from '@/components/FriDay.vue';
import SaturDay from '@/components/SaturDay.vue';
import ThursDay from '@/components/ThursDay.vue';

export default {
  name: 'App',
  data() {
    return {
      selectedDay: 'Monday',
      quotes: [
        'Quote 1',
        'Quote 2',
        'Quote 3',
        'Quote 4',
        'Quote 5',
        'Quote 6',
        'Quote 7',
        'Quote 8',
        'Quote 9',
        'Quote 10',
      ],
      currentQuoteIndex: 0,
    };
  },
  computed: {
    selectedDayComponent() {
      const componentsMap = {
        Monday: 'MonDay',
        Tuesday: 'ThuesDay',
        Wednesday: 'WednesDay',
        Thursday: 'ThursDay',
        Friday: 'FriDay',
        Saturday: 'SaturDay',
        Sunday: 'homePage',
      };
      return componentsMap[this.selectedDay] || 'homePage';
    },
  },
  methods: {
    selectDay(day) {
      this.selectedDay = day;
    },
    startQuoteSlider() {
      setInterval(() => {
        this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
      }, 5000);
    },
  },
  mounted() {
    this.startQuoteSlider();
  },
  components: {
    DayButton,
    homePage,
    MonDay,
    ThuesDay,
    WednesDay,
    ThursDay,
    FriDay,
    SaturDay,
  },
};
</script>
<style >



.boards-cont {
  display: flex;
  justify-content: space-around;
  margin: 20px;


}

.board-container-one {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  margin: 20px;


}


.DayButton {
  /* background-color: #fff;
  color: #333;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #A7C7E7;
    color: white;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  height: 3rem;
  margin: 0.5rem; /* Add space between buttons */

  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#ffffff, #212121),  linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}





#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

strong {
  z-index: 2;
  font-family: 'Avalors Personal Use';
  font-size: 12px;
  letter-spacing: 5px;
  color: #FFFFFF;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

/* .DayButton:hover #container-stars {
  z-index: 1;
  background-color: #653d3d;
} */

.DayButton:hover {
  transform: scale(1)
}

.DayButton:active {
  border: double 4px #FE53BB;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.DayButton:active .circle {
  background: #FE53BB;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.selected-day-list {
 padding-left: 200px;
padding-right: 200px;
  border: 1px solid #ffffff;
  background-color: #ceddec;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center; /* Center vertically */
margin-top: -0px;
  box-shadow: 25px 25px 15px rgba(98, 41, 168, 0.1);

}

@media screen and (max-width: 800px) {
  .boards-cont {
    flex-direction: column;
    align-items: center;
  }

  .board-container-one {
    margin-bottom: 20px;
  }
}



.center-container{
height: 80vh;
}
@media screen and (max-width: 600px) {
  .boards-cont {
    flex-direction: column;
    align-items: center;
  }

  .board-container-one {
    margin-bottom: 20px;
  }

  .DayButton {
    width: 100%;
    margin-bottom: 10px;
  }

  .selected-day-list {
    padding: 10px;
    border: 1px solid #b1cfea;
    background-color: #b1cfea;
  }

  .center-container {
    height: auto; /* Remove fixed height */
  }

}

.quote-slider {
  
  position: relative;
  overflow: hidden;
  height: 100px; /* Adjust the height according to your design */
  margin-bottom: 40px;
}

.quote {
  display: none;
}

.quote.active {
  display: block;
}
</style>