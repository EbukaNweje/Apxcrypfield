var $ = jQuery.noConflict();

var listCountries = ['South Africa', 'USA', 'Germany', 'France', 'Italy', 'USA', 'Australia', 'South Africa', 'Canada', 'Argentina', 'Saudi Arabia', 'Mexico', 'South Africa', 'South Africa', 'Venezuela', 'South Africa', 'Sweden', 'South Africa', 'USA', 'Italy', 'South Africa', 'United Kingdom', 'South Africa', 'Greece', 'Cuba', 'South Africa', 'Portugal', 'Austria', 'South Africa', 'Panama', 'South Africa', 'South Africa', 'Netherlands', 'Switzerland', 'Belgium', 'Israel', 'Cyprus','Scotland','Uganda','India','China','Australia', 'Swaziland','Jamaica', 'Kenya', 'Japan', 'Iran', 'China', 'India', 'Indonesia', 'Pakistan', 'Bangladesh', 'Yemen', 'Thailand', 'Syria', 'Sri Lanka'];
    var listPlans = ['$500','$1500','$1000','$10,000','$2000','$3000','$4000', '$600', '$700', '$2500','$340','$500','$110','$231','$189','$200','$120','$8990.5','$9000','$800','$45600','$340','$500','$910','$2000','$3500','$700','$900','$650','$15,000','$2,300','$750','$250','$375'];
    // interval = Math.floor(Math.random() * (40000 - 5000 + 1) + 5000);
    interval = 30000;

    var names = ['Peter','Paul','Jean','Yen','Rodrigo','Hugh','Janet','Xi','Lin','Oliver','Jesse','Stan','Damian','Ben','Collins','John','Helen','Jessica','Karen','Ann','Lilian','Sarah','John-Marie','T23','Victoria','Francis','Donald','Daniel','Amanda','Sandra','Anna','Stad','Wilfred','Josh','Rita','Tina','Justice','Maestro','Arthur','Gaius','Joseph','Rachael','Henry'];

    var run = setInterval(request, interval);
    function request() {
        clearInterval(run);
        interval = 30000;
        var country = listCountries[Math.floor(Math.random() * listCountries.length)];
        var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
        var name = names[Math.floor(Math.random()*names.length)];

        var msg = 'An Investor from <b>' + country + '</b> just invested <a href="javascript:void(0);" onclick="javascript:void(0);">' + plan + '</a>';

            $(".mgm .txt").html(msg);
            $(".mgm").stop(true).fadeIn(300);
            window.setTimeout(function() {
                $(".mgm").stop(true).fadeOut(300);
            }, 6000);
            run = setInterval(request, interval);
    }
