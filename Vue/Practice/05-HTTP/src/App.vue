<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>User Name</label>
                    <input v-model="user.username" class="form-control" type="text">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="user.email" class="form-control" type="text">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>

                <hr>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user :{
                    username : '',
                    email: ''
                },
                users: [],
                resources: {}
            };
        },
        methods: {
            submit(){
                console.log(this.user);
                /*this.$http.post('data.json',this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });*/
                this.resource.saveAlt( this.user);
            },
            fetchData(){
                this.$http.get('data.json')
                    .then(response => {
                       return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        const result = [];
                        for (let key in data){
                            result.push(data[key]);
                        }
                        this.users = result;
                    })
            }
        },
        created(){
            const customAction = {
              saveAlt: {method: 'POST', url: 'alternative.json'}
            };
            this.resource = this.$resource('data.json', {}, customAction);
        }
    }
</script>

<style>
</style>
