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

            this.success = false
        },
        style: function() {
            if (this.success) {
                return {background: '#00ff00'}
            } else {
                return {background: '#ff0000'}
            }
        }
    }

})