export default {
    methods: {
        formatDate(date){
            let newDate = new Date(date);
            return newDate.toLocaleDateString();
        }
    }
}