const webhoseio = require('webhoseio');
const db = require("mysql");

const connection = process.env.NODE_ENV || "production";

// const connection = db.createConnection({
//      host:"localhost",
//      user: "root",
//      password: "",
//      database: "newsdb"
// });

function getArticles () {
    const client = webhoseio.config({token: '8c650a7a-68dc-4ec8-b50c-f38a5fee6b79'});
    const query_params = {
    	"q": "language:english site_type:news (size=10)",
    	"sort": "crawled"
    }

    return client.query('filterWebContent', query_params)
    .then(output => {
      
        var articleArray = [];
        
      for(i = 0; i < 10; i++) {
        var article = {
            title: output.posts[i].thread.title.replace(/"/g, "'"),
            url: output.posts[i].thread.url,
            author: output.posts[i].author,
            site: output.posts[i].thread.site,
            text: output.posts[i].text
          };  
            
            articleArray.push(article);
        
        };
        // Store Articles to database
        storeArticles(articleArray);
    
    });
};

function storeArticles(articles) {
    var sql = "INSERT INTO articles SET ?";
    
    // Store Articles into MYSQL
    articles.forEach(function(a) {
        connection.query(sql, a, function(error, results, fields) {
            if(error) throw error;
            console.log("Stored articles to database")
           
             
        });

    })
    connection.end();
}

setInterval(function() {
    getArticles();
}, 10000 )
