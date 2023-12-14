<template>
  <div id='app'>
    <div class="pomodoro">
	<!----Sliders---->
	<div class='sliders col y'>
		<div class='row y'>
			<label>WORK</label>
			<input type='range' id='session' min='1' max='60' step='1' v-model='SESSION'/>
			<span class='slider_val'>{{SESSION}}</span>
		</div>
		<div class='row y'>
			<label>break</label>
			<input type='range' id='break' min='1' max='60' step='1' v-model='BREAK'/>
			<span class='slider_val'>{{BREAK}}</span>
		</div>
	</div>
	<!----Timer---->
	<div class='timer col x y' v-on:click='start()'>
		<div id='time'>{{time()}}</div>
		<span v-bind:style='{height: percent, background: color()}'></span>
	</div> 
  <!-- <div class='timer col x y' v-on:click='start()'>
		<div id='time'>{{time()}}</div>
		<span v-bind:style='{height: percent, background: customColor}'></span>
	</div> -->
	<!----Buttons---->
	<div class='row x y'>
		<button id='pause' class='controls' v-on:click='pause()'>
			pause</button>
		<button id='resume' class='controls' v-on:click='resume()'>
			resume</button>
	</div>
	
	<div class='row x y'>
		<button id='reset' v-on:click='reset()'>reset</button>
	</div>
  
</div>



</div>
  </template>









  
  <script>


console.clear();

export default {
  data() {
    return {
      //customColor: 'red',
      SESSION: '30', //Slider Input
      BREAK: '5', //Slider Input
      mode: 'session',
      started: false,
      paused: false,

      total: 0,
      current: 0,
      percent: 0,

      mins: 0,
      secs: 0,




      newTaskInput: '',
      newTaskSessions: 1,
    todoList: [],
      
    };
  }, //DATA

  methods: {
    time() {
      let mins = String(this.mins);
      let secs = String(this.secs);

      if (mins.length < 2) mins = '0' + mins;
      while (secs.length < 2) secs = '0' + secs;

      return this.started ? `${mins}:${secs}` : 'START';
    },

    color() {
      return this.mode == 'session' ? '#00B16A' : '#F9690E';
    },

    start() {
      if (!this.started) {
        this.started = true;
        this.session();
      }
    },

    session() {
      const val = Number(this.SESSION);
      this.total = val * 60;
      this.current = val * 60;
      this.mins = val;

      this.run();
    },

    break() {
      const val = Number(this.BREAK);
      this.total = val * 60;
      this.current = val * 60;
      this.mins = val;

      this.run();
    },
      

    
    run() {
      const next = this.mode == 'session' ? this.break : this.session;
      //<----TIMER---->//
      this.timer = setInterval(() => {
        if (this.secs == 0 && this.mins == 0) {
          this.mode = this.mode == 'session' ? 'break' : 'session';
          clearInterval(this.timer);
          next();
        }

        if (this.secs == 0 && this.mins > 0) {
          this.secs = 60;
          this.mins--;
        }

        this.secs--;
        this.current--;
        this.percent =
          this.mode == 'session'
            ? `${(1 - this.current / this.total) * 100}%`
            : `${(this.current / this.total) * 100}%`;
      }, 1000);
      //TIMER
    },

    pause() {
      this.paused = true;
      clearInterval(this.timer);
    },

    resume() {
      if (this.paused) {
        this.paused = false;
        this.run();
      }
    },

    reset() {
      clearInterval(this.timer);
      this.started = false;
      this.mins = 0;
      this.secs = 0;
      this.percent = 0;
    },






  
},


  


  }; //METHODS

</script>
  
  <style lang="scss" scoped>
 @import url('https://fonts.googleapis.com/css?family=Quicksand');
$primary: #2C3E50;
$secondary: rgb(154, 146, 196);
$mainFont: 'Oswald';
$sliderHeight: 30px;
$val-color: $primary !default;
$val-width: 50px;

.row,
.col {
	display: flex
}

.col {
	flex-direction: column;
}

.x {
	justify-content: center;
}

.y {
	align-items: center;
}


.pomodoro{
  background-color: rgb(143, 189, 244);
  margin-top:-100px;
  border-radius: 60px;
  margin-left: 100px;
  width: 100%;
}
input {
  background: none;
  outline: none;
  height: $sliderHeight;
  width: 400px;
  cursor: pointer;
  -webkit-appearance: none;
	&::-webkit-slider-runnable-track {
		background: rgb(154, 146, 196);
		height: $sliderHeight;
    padding: 0 3px;
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		background: rgb(255, 255, 255);
		height: $sliderHeight;
		width: $sliderHeight;
		border-radius: $sliderHeight / 2;
		&:hover {
			opacity: .8;
		}
	}
	&::-moz-range-track {
		background: rgb(154, 146, 196);
		height: $sliderHeight;
	}
	&::-moz-range-thumb {
		-webkit-appearance: none;
		background: rgb(255, 255, 255);
		height: $sliderHeight;
		width: $sliderHeight;
		border-radius: $sliderHeight / 2;
	}
  :-moz-focusring{
      outline: 1px solid rgb(255, 255, 255);
      outline-offset: -1px;
  }
}

.sliders {
  padding: 30px 10%;
  & > div:first-child {
    margin-bottom: 20px;
  }
  label {
    text-transform: uppercase;
    text-align: right;
    font-size:20px;
    margin-right: 5px;
    width: 70px;
  }
  span {
    display: inline-block;
    position: relative;
    width: $val-width;
    height: 30px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
    text-align: center;
    border-radius: 3px;
    background: $primary;
    margin-left: 8px;
    line-height: 30px;
    &:after {
      position: absolute;
      top: 8px;
      left: -7px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: 7px solid rgb(255, 255, 255);
      border-bottom: 7px solid transparent;
      content: '';
    }
  }
}

.timer {
	$timer_width: 300px;
	position: relative;
  width: $timer_width;
  height: $timer_width;
  border-radius: 50%;
  border: 2px solid rgb(154, 146, 196);
  margin: 30px auto 0;
	margin-top: 0px;
	margin-bottom: 20px;
  cursor: pointer;
	overflow: hidden;
	text-align: center;
	#time {
		text-align: center;
		z-index: 2;
		width: inherit;
		height: inherit;
		font-size: 50px;
		font-family: $mainFont;
		line-height: $timer_width;
		letter-spacing: 5px;
	}
	span {
		display: block;
		position: absolute;
		bottom: 0;
		background: rgb(154, 146, 196);
		width: 100%;
		transition: height 1s linear;
	}
	&:hover {
		opacity: .8;
	}
}

button {
	$width: 200px;
	$height: 40px;
	$margin: 5px;
	background: rgb(99, 9, 9);
	text-transform: uppercase;
	outline: none;
	background: $primary;
	color: white;
	border: 2px solid white;
	margin: $margin;
	border-radius: 3px;
	&:hover {
		opacity: .8;
	}
	&.controls {
		width: $width;
		height: $height;
	}
	&#reset {
		width: ($width + $margin) * 2;
		height: $height;
	}
}
  </style>