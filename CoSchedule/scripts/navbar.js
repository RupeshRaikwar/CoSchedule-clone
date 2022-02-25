function navbar(){

    return `    <div id="navbar">
    <div id="left">
        <div id="bar-logo-div"><img src="https://coschedule.com/img/favicon.ico" alt="">CoSchedule</div>
        
        <div id="prod-div">Products
        <div id="prod-hover">
        
        <div id="l-l">
            <p id="l-l-1">CONTENT CALENDARS</p>
            <a href="calendar.html"><div id="d-flex-1">
                <img id="p-img" src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" alt="">
                <h3>Marketing calendar</h3>
            </div></a>
            <p id="l-p">A calendar that help you see, schedule and share your marketing</p>

            <a href="calendar.html"><div id="d-flex-2">
            <img id="p-img" src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75" alt="">
            <h3>Marketing calendar</h3>
        </div></a>
            <p id="l-l-p">A family of agile marketing products to coordinate your team, projects, and process.</p>
        </div>
        <div id="r-r">
            <div id="r-r-top">
            <p>content optimization</p>
            <h3>Headline studio</h3>
        </div>
        <div id="r-r-down">
            <p>Marketing Education</p>
            <h3>Actionable Marketing institute</h3>
        </div>
        </div>
    </div>
        </div>
        
      
    
    <div id="Cosh-div">Why CoSchedule</div>
    <div id="resources-div">Resources</div>
    <a href="pricing.html"><div id="price-div">Pricing</div></div></a>
    <div id="right">
        <a href="signIn.html"><div id="signin-div">Sign In</div></a>
        <a href="getdemo.html"><div id="demo-div">Get A Demo</div></a>
        <div><button id="bar-button" onclick="shift()">Create My Calendar</button></div>
    </div>
</div>`;
}

export default navbar;
