import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../actions/post.action';

const Post = ({ post }) => {
	const [editToggle, setEditToggle] = useState(false);
	const [editedTitle, setEditedTitle] = useState(post.title);
	const [editedDescription, setEditedDescription] = useState(post.description);
	const [editedCategories, setEditedCategories] = useState(post.categories.join(' '));
	const [editedBasePrice, setEditedBasePrice] = useState(post.basePrice);
	const [editedSalePrice, setEditedSalePrice] = useState(post.salePrice);

	const dispatch = useDispatch();

	useEffect(() => {
		setEditedTitle(post.title);
		setEditedDescription(post.description);
		setEditedCategories(post.categories.join(' '));
		setEditedBasePrice(post.basePrice);
		setEditedSalePrice(post.salePrice);
	  }, [post]);

	const handleEdit = (e) => {
		e.preventDefault();

		if (typeof editedCategories === 'string') {
			const updatedCategories = editedCategories
				.split(' ')
				.map((category) => category.trim());

			const postData = {
				id: post.id,
				title: editedTitle,
				description: editedDescription,
				categories: updatedCategories,
				basePrice: editedBasePrice,
				salePrice: editedSalePrice,
				imageUrl: post.imageUrl,
			};

			dispatch(editPost(postData));
			setEditToggle(false);
		}
	};

	const handleDelete = () => {

		const modale = document.createElement('dialog');
		modale.className = "modale";

		const message = document.createElement('p');
		message.textContent = 'Êtes-vous sûr de vouloir supprimer?';

		const form = document.createElement('form');
		form.method = 'dialog';

		const boutonOui = document.createElement('button');
		boutonOui.textContent = 'Oui';
		boutonOui.className = 'boutonOui';

		const boutonNon = document.createElement('button');
		boutonNon.textContent = 'Non';
		boutonNon.className = 'boutonNon';
		
		boutonOui.addEventListener('click', () => {
			dispatch(deletePost(post.id))
		});

		boutonNon.addEventListener('click', () => {
			modale.close();
		});

		form.appendChild(boutonOui);
		form.appendChild(boutonNon);
		modale.appendChild(message);
		modale.appendChild(form);

		document.body.appendChild(modale);

		modale.showModal();
	}

	return (
		<div className='post'>
			<div className='edit-delete'>
				<img src='./icons/edit.svg' alt='edit' onClick={() => setEditToggle(!editToggle)} />
				<img
					src='./icons/delete.svg'
					alt='delete'
					onClick={handleDelete}
				/>
			</div>

			{editToggle ? (
				<form className="formEdit" onSubmit={(e) => handleEdit(e)}>
					<input className='valueEdit'
						autoFocus={true}
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
					/>
					<img src={post.imageUrl} className='post-img' alt='img-post' />
					<input className='valueEdit'
						value={editedDescription}
						onChange={(e) => setEditedDescription(e.target.value)}
					/>
					<input className='valueEdit'
						value={editedCategories}
						onChange={(e) => setEditedCategories(e.target.value)}
					/>
					<input className='valueEdit'
						value={editedBasePrice}
						onChange={(e) => setEditedBasePrice(e.target.value)}
					/>
					<input className='valueEdit'
						value={editedSalePrice}
						onChange={(e) => setEditedSalePrice(e.target.value)}
					/>
					<input className='inputSubmit' type='submit' value='Valider modification' />
				</form>
			) : (
				<>
					<h2 className='title'>{editedTitle}</h2>
					<img src={post.imageUrl} className='post-img' alt='img-post' />
					<p className='description'>{editedDescription}</p>
					<p className='categories'>{editedCategories}</p>
					<p className='basePrice'>{editedBasePrice}€</p>
					<p className='salePrice'>{editedSalePrice}€</p>
				</>
			)}
		</div>
	);
};

export default Post;