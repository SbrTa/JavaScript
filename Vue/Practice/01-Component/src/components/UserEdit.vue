<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{myAge}}</p>
        <p>Gender: {{myGender}}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="editGender">Change Gender</button>
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        props:{
            myAge: Number,
            myGender: String
        },
        methods:{
            editAge(){
                this.myAge=25;
                this.$emit('ageWasEdited',this.myAge);
            },
            editGender(){
                this.myGender='Male';
                eventBus.$emit('genderWasChanged',this.myGender);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
