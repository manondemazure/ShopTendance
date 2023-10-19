import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPost } from "../actions/post.action";

const PostForm = () => {
  const form  = useRef();
  const dispatch = useDispatch();
  const [imageURL, setImageUrl] = useState(null);
  const [categoriesInput, setCategoriesInput] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const categoryInput = form.current[3].value;
    const categories = categoryInput.split(' ').map(category => category.trim());

    const postData = {
      title: form.current[0].value,
      imageUrl: imageURL,
      description: form.current[2].value,
      categories: categories,
      basePrice: form.current[4].value,
      salePrice: form.current[5].value,
    };

    await dispatch(addPost(postData));
    dispatch(getPost())
    form.current.reset();
    setImageUrl(null);
    setCategoriesInput(""); 
  };


  return (
    <div className="form-container">
      <form ref={form} onSubmit={e =>handleForm(e)}>
        <input type="text" placeholder="Titre de l'article" />
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
        {imageURL && ( <img className="affichageImg" src={imageURL} alt="Sélectionnée" />)}
        <textarea placeholder="Description de l'article"></textarea>
        <input
          type="text"
          placeholder="Catégories de l'article"
          value={categoriesInput}
          onChange={(e) => setCategoriesInput(e.target.value)}
        />
        <textarea placeholder="Prix de base"></textarea>
        <input type="text" placeholder="Prix Soldé"></input>
        <input type="submit" className="valideForm" value="Envoyer"/>
      </form>
    </div>
  );
};

export default PostForm;