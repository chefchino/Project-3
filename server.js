var cheerio = require("cheerio");
var axios = require("axios");

axios.get("https://www.amazon.com/gp/goldbox/ref=gbps_ftr_s-5_0f49_enf_172282?gb_f_deals1=dealTypes:DEAL_OF_THE_DAY%252CBEST_DEAL%252CLIGHTNING_DEAL,sortOrder:BY_SCORE,dealStates:AVAILABLE%252CWAITLIST%252CWAITLISTFULL%252CEXPIRED%252CSOLDOUT%252CUPCOMING,includedAccessTypes:GIVEAWAY_DEAL,enforcedCategories:172282&pf_rd_p=56beed47-26cb-401c-95f5-738a157f0f49&pf_rd_s=slot-5&pf_rd_t=701&pf_rd_i=gb_main&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=N3QP7NRF8EA4BRRD349G&ie=UTF8").then(function(response) {

    var $ = cheerio.load(response.data);
    var results = [];

    $("div.dealDetailContainer").each(function(i,element) {

        var title = $(element).find("a").attr("href");

        results.push({title: title})
    });
console.log(results)

});

