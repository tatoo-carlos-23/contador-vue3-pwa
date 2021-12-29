const app = Vue.createApp({
    data() {
        return {
            titulo: 'Contador',
            count: 0
        }
    },
    methods: {
        modCount(instruccion, limite = 1) {
            if (instruccion === 'dis') {
                this.count -= limite
            } else {
                this.count += limite
            }
        }
    }
}) 