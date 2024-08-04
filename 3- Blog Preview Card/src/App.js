function App() {
  return (
    <div className="container">
      <BlogImage />
      <BlogContent />
      <BlogAuthor />
    </div>
  );
}

function BlogImage() {
  return (
    <div className="blog--image">
      <img src="../assets/images/illustration-article.svg" alt="Blog Illustration" />
    </div>
  );
}

function BlogContent() {
  return (
    <div className="blog--content">
      <span className="blog--category">Learning</span>
      <p className="blog--publishdate">Published 21 Dec 2023</p>
      <h1 className="blog--title">HTML & CSS foundations</h1>
      <p className="blog--description">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
}

function BlogAuthor() {
  return (
    <div className="blog--profile">
      <img src="../assets/images/image-avatar.webp" className="profile--image"></img>
      <h3 className="username">Greg Hooper</h3>
    </div>
  );
}

export default App;
