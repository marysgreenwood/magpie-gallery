import React from "react";

export default function Upload() {
  return (
    <div class="container row">
      <div class="jumbotron col-md-8 pull-center">
        <form
          enctype="multipart/form-data"
          action="/api/art/upload"
          method="post"
        >
          <div class="wrapper">
            <header>
              <h1>Upload Your Art!</h1>
            </header>

            <div class="sections">
              <section class="active">
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  name="title"
                />
                <br />
                <label for="img">Select image:</label>
                <input type="file" id="img" name="file" accept="image/*" />
                <br />
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  cols="50"
                  placeholder="Description"
                ></textarea>
                <br />
                <input type="text" name="type" placeholder="Type" id="type" />
                <br />
                <label for="date">Date Created:</label>
                <input type="date" id="date" name="date" />
              </section>
            </div>

            <footer>
              <div>
                <input class="btn btn-primary" type="submit" value="Upload" />
              </div>
            </footer>
          </div>
          <div class="notification"></div>
        </form>
      </div>
    </div>
  );
}
