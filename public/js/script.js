const Main = {
    
    init: function() {
       this.cacheSelector()
        this.Events
       this.bindEvents()
    },
    
    cacheSelector: function() {
        this.$aboutBtn = document.querySelector('#aboutBtn')
    },

 
    Events:{ 
    goToAbout: function() {
        const aboutPage = () => {
            console.log(this)}
        return aboutPage()
    
        }
    }
    ,

    bindEvents: function() {
        console.log(this.Events.goToAbout)
        const self = this
       
        // self.$aboutBtn.onclick = goToAbout
    }
}

Main.init()