<template>
  <div>
    <label>Make</label>
    <select name="Make" v-model="selectedMake">
      <option :value="-1">Please Select</option>
      <option v-for="(makeObject, index) in cars" :value="index">
        {{ makeObject.manufacturer }}
      </option>
      <!--  when we select an option in this list, this.selectedMake gets set to index  -->
    </select>

    <!--
    In this instance, we are iterating through the top level of the cars array, index is the position in the array (0,1,2,3.... so on)
    and makeObject is the objects that live in that top level of the array.
    So for the first object in the cars array, its the one for ford, so in the first iteration of the for loop we effectively have
    makeObject =  {manufacturer:"ford", averagePriceString:"££", models:[
                      {name:"focus", doors:5, price:11599, engine:"2.0TDCI"},
                      {name:"Ka", doors:3, price:6599, engine:"1.0 petrol"},
                      {name:"Fiesta", doors:5, price:9999, engine:"1.4TDCI"},
                    ]
                  },
    so we can get makeObject.manufacturer for ford, or we can access the makeObject.models array  - which is what we do in the next step
    -->

    <!-- If selectedMake is still null, our JS code is going to get very unhappy trying to access data that isnt there  -->
    <!-- therefore, check that selected make is not null before we render the model select  -->
    <span v-if="selectedMake > -1">
      <label>Model</label>
      <select name="Model" v-model="selectedModel">
        <option :value="-1">Please Select</option>
        <option
          v-for="(makeObject, index) in cars[selectedMake].models"
          :value="index"
        >
          {{ makeObject.name }}
        </option>
      </select>
    </span>

    <span v-if="selectedModel > -1">
      <label>Price</label>
      <select name="Price" v-model="selectedPrice">
        <option :value="-1">Please Select</option>
        <option
          v-for="(makeObject, index) in cars[selectedMake].models[selectedModel].price"
          :value="index"
        >
        
          {{ makeObject }}
        </option>
      </select>
    </span>

    <!--  This bit is here to show you how to access the info the user has set, as with the second drop down, we need to check that the data is set before trying to render it  -->
    <!--    I suggest actually removing the v-if statements, then looking what messages get thrown up in the console - it gives you quite a bit of info -->

    <span v-if="selectedMake > -1">
      <h1>you have selected the make {{ cars[selectedMake].manufacturer }}</h1>
      <p>
        this manufacturer typically costs
        {{ cars[selectedMake].averagePriceString }} and has
        {{ cars[selectedMake].models.length }} models in their range
      </p>
    </span>

    <span v-if="selectedModel > -1">
      <p>
        The {{ cars[selectedMake].manufacturer }}
        {{ cars[selectedMake].models[selectedModel].name }} is a car with
        {{ cars[selectedMake].models[selectedModel].doors }} doors, it has a
        {{ cars[selectedMake].models[selectedModel].engineSize }} engine
        <!-- and it -->
        <!-- costs {{ cars[selectedMake].models[selectedModel].price}} -->
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: "demoVueFile",
  data() {
    return {
      selectedMake: -1,
      selectedModel: -1,
      selectedPrice: -1,
      //array of objects that have an array -    looks like {make:"ford", averagePriceString:"££", models:[] },
      cars: [
        {
          manufacturer: "ford",
          averagePriceString: "££",
          models: [
            {
              name: "focus",
              doors: 5,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "2.0TDCI",
            },
            {
              name: "Ka",
              doors: 3,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "1.0 petrol",
            },
            {
              name: "Fiesta",
              doors: 5,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "1.4TDCI",
            },
          ],
        },
        {
          manufacturer: "Dacia",
          averagePriceString: "£",
          models: [
            {
              name: "Sandero",
              doors: 5,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "1.4TDI",
            },
            {
              name: "MadeUpName",
              doors: 3,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "1.0 lpg",
            },
          ],
        },
        {
          manufacturer: "Aston Martin",
          averagePriceString: "£££££",
          models: [
            {
              name: "DB7",
              doors: 2,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "5.0 V8",
            },
            {
              name: "DB9",
              doors: 2,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "5.0 V8",
            },
            {
              name: "Vanquish",
              doors: 2,
              price: [
                {
                  highPrice: [11599, 55000, 400000, 852000],
                  medPrice: [4000, 2000, 3000, 8000],
                  lowPrice: [100, 200, 300, 400],
                },
              ],
              engineSize: "6.2 V12",
            },
          ],
        },
      ],
    };
  },
};
</script>