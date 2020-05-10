new Vue({
    el: "#app",
    data: {
        message: "Salut les gens",
        link: "https://google.com",
        success : true,
        persons : ["John", "Aegon", "Baleryon", "Daeron"]
        },

    methods: {
        close: function() {
            this.message = "Fermé"
            this.success = false
        }
    }

})