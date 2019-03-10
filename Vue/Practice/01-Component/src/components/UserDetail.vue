<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <p>Age: {{myAge}}</p>
        <p>Gender: {{myGender}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name 2</button>
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        props:{
            myName : {
                type : String,
                default: 'User'
            },
            myAge: Number,
            myGender: Number,
            resetFn: Function
        },
        methods : {
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Anupama';
                this.$emit('nameWasReset',this.myName);
            }
        },
        created(){
            eventBus.$on('genderWasChanged',(gender)=>{
                this.myGender = gender;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
