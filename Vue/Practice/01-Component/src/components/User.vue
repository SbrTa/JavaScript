<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>User Name: {{name}}</p>
        <p>Age: {{age}}</p>
        <p>Gender: {{gender}}</p>
        <button @click="changeName">Change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :myName="name"
                        :myAge="age"
                        :myGender="gender"
                        @nameWasReset="name=$event"
                        :resetFn="resetName"
                >
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :myAge="age"
                        :myGender="gender"
                        @ageWasEdited="age=$event"
                >
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name:'Anupama',
                age: 20,
                gender: 'Female'
            };
        },
        methods: {
            changeName(){
                this.name='Ana';
            },
            resetName(){
                this.name='Anupama';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
