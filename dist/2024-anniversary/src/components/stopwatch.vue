<script>
    export default {
        name:"stopwatch",
        data() { 
            return {
                difference:0,
                anniversary:new Date(2021,11,22),
                day:0,
                hour:0,
                min:0,
                sec:0,
            }
        },
        computed: {
            display() {
                return (this.day + " days " + this.hour + " hours " + this.min + " minutes and " + this.sec + " seconds have flown by with you");
            }
        },
        methods: {
            compute() {
                setInterval(this.updateDate,1000)
            },
            updateDate() {
                    this.difference = Math.floor(new Date()-this.anniversary);
                    this.sec= Math.floor(this.difference/1000)%60;
                    this.min = Math.floor(this.difference/1000/60)%60;
                    this.hour = Math.floor(this.difference/1000/60/60)%24;
                    this.day = Math.floor(this.difference/1000/60/60/24);
                }
        },
        beforeMount() {
            this.compute()
        }
    }
</script>
<template>
    <div id="counter">
        <div >{{ display }}</div>
    </div>
</template>
