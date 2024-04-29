import express from "express";
import { create as createHandlebarsEngine } from "express-handlebars";

// khởi tạo app express
const app = express();

//Tạo Handlebars Engine
const handlebarsEngine = createHandlebarsEngine({
    defaultLayout: "main",
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
});

//Khai báo engine handlebars
app.engine("handlebars", handlebarsEngine.engine); 

//Sử dụng engine Handlebars
app.set("view engine", "handlebars");

//Cấu hình folder views
app.set("views", 'views/pages');

//Cấu hình static file
app.use(express.static("public")); //trả lại 1 midlewaare

// Tạo Route

//Trang chủ
app.get("/" , (req, res) =>{
    res.render("homepage");
});

//Trang about
app.get("/about", (req, res) => {
    res.render("about", {
      name: "Titus",
      title: "Some text",
      user: {
        id: 1,
        name: "Titus Huynh",
      },
      values: [
        {
          title: "CONSECTETUR",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.",
        },
        {
          title: "ADIPISICING",
          desc: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
        },
        {
          title: "Title 1",
          desc: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
        },
        {
          title: "Title 2",
          desc: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
        },
      ],
    });
});

//Trang blog
app.get("/blog", (req, res) =>{
    res.render( "blog");
});

// // Set the view engine to EJS (you can replace 'ejs' with your preferred engine)
// app.set("view engine", "ejs");

// app.use('/route', function(req, res, next) {
//     // Your middleware logic here
//     next();
//   });  


// chạy app Express
app.listen(3000, () => {
    console.log("App is running on port 3000");
});