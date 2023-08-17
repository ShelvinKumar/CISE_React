import { FormEvent, useState } from "react";
import formStyles from "../../../styles/Form.module.scss";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const NewDiscussion = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState<string[]>([""]);
  const [source, setSource] = useState("");
  const [pubYear, setPubYear] = useState<number>(0);
  const [doi, setDoi] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedDiscussion, setLinkedDiscussion] = useState("");

  const submitNewArticle = async (event: FormEvent<HTMLFormElement>) => {
    if (backendUrl) {
      console.log("Backend Base URL:", backendUrl);
      event.preventDefault();
      console.log("Submitting new article");
      try {
        const newArticleData = {
          title,
          authors,
          source,
          publication_year: pubYear,
          doi,
          summary,
          linked_discussion: linkedDiscussion,
        };
        console.log("Submitting new article data:", newArticleData);
        const response = await axios.post(backendUrl, newArticleData);
        console.log("Article created:", response);
      } catch (error) {
        console.error("Error creating article:", error);
      }
    }
    else{
      console.error("Backend url undefined");
    }
  };

  const addAuthor = () => {
    setAuthors([...authors, ""]);
  };

  const removeAuthor = (index: number) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  const changeAuthor = (index: number, value: string) => {
    const updatedAuthors = authors.map((oldValue, i) => (index === i ? value : oldValue));
    setAuthors(updatedAuthors);
  };

  return (
    <div className="container">
      <h1>New Article</h1>
      <form className={formStyles.form} onSubmit={submitNewArticle}>
        <label htmlFor="title">Title:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <label htmlFor="author">Authors:</label>
        {authors.map((author, index) => (
          <div key={`author ${index}`} className={formStyles.arrayItem}>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(event) => changeAuthor(index, event.target.value)}
              className={formStyles.formItem}
            />
            <button
              onClick={() => removeAuthor(index)}
              className={formStyles.buttonItem}
              style={{ marginLeft: "3rem" }}
              type="button"
            >
              -
            </button>
          </div>
        ))}
        <button
          onClick={() => addAuthor()}
          className={formStyles.buttonItem}
          style={{ marginLeft: "auto" }}
          type="button"
        >
          +
        </button>

        <label htmlFor="source">Source:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="source"
          id="source"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
          }}
        />

        <label htmlFor="pubYear">Publication Year:</label>
        <input
          className={formStyles.formItem}
          type="number"
          name="pubYear"
          id="pubYear"
          value={pubYear}
          onChange={(event) => {
            const val = event.target.value;
            if (val === "") {
              setPubYear(0);
            } else {
              setPubYear(parseInt(val));
            }
          }}
        />

        <label htmlFor="doi">DOI:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="doi"
          id="doi"
          value={doi}
          onChange={(event) => {
            setDoi(event.target.value);
          }}
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          className={formStyles.formTextArea}
          name="summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />

        <label htmlFor="linkedDiscussion">Linked Discussion:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="linkedDiscussion"
          id="linkedDiscussion"
          value={linkedDiscussion}
          onChange={(event) => {
            setLinkedDiscussion(event.target.value);
          }}
        />

        <button className={formStyles.formItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDiscussion;