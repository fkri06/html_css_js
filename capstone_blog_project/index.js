import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let blogContents = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

function cleanupPost(blogContent) {
    return blogContent.split("\n").filter(content => content !== '\r' && content !== '');
}

app.get("/", (req, res) => {
    res.render('index.ejs', { blogContents: blogContents });
});

app.get("/createBlog", (req, res) => {
    res.render('createBlog.ejs');
});

app.post("/createBlog", (req, res) => {
    const title = req.body.titleBox;

    // split the paragraphs by checking a new line and add it to array of strings,
    // then remove any '\r' and empty string.
    let paragraphs = cleanupPost(req.body.contentBox);
    blogContents.push({ title: title, content: paragraphs });
    res.redirect("/");
});

app.get("/articles/:article_id", (req, res) => {
    const article_id = parseInt(req.params.article_id);
    res.render('articles.ejs', { title: blogContents[article_id].title, article_id: article_id, articleContents: blogContents[article_id].content });
});

app.get("/editBlog/:article_id", (req, res) => {
    const article_id = req.params.article_id;
    const articleTitle = blogContents[article_id].title;
    const articleContent = blogContents[article_id].content;
    res.render("editBlog.ejs", { article_id: article_id, title: articleTitle, content: articleContent });
});

app.post("/editBlog/:article_id", (req, res) => {
    const article_id = parseInt(req.params.article_id);
    const title = req.body.titleBox;
    const paragraphs = cleanupPost(req.body.contentBox);

    // update
    blogContents[article_id] = { title: title, content: paragraphs }
    res.redirect("/");
});

app.get("/deleteBlog/:article_id", (req, res) => {
    const article_id = parseInt(req.params.article_id);
    // delete a blog post
    blogContents.splice(article_id, 1);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is runin on port ${port}`);
});