import React, { useState, useEffect, useContext } from 'react';
import './Home.scss';

import { PostForm, PostCard } from '../../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import postApi from '../../services/postApi';
import WalletContext from '../../contexts/WalletContext';

export const Home = () => {
  const pathCloudinary = process.env.REACT_APP_PATH_CLOUDINARY;
  const wallet = useContext(WalletContext);
  const account = useSelector((state) => state.userSlice.account);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const checkSubscribe = async (subscriberId, idolId) => {
      return await wallet.checkSubscribe(subscriberId, idolId);
    };

    const getListPosts = async () => {
      try {
        if (account && wallet) {
          const data = await postApi.getPostsByCondition({ number: 10, page: 0 });
          let listPosts = [];

          data.data.map((item) => {
            let temp = item;
            temp.images = [];
            temp.isSubscriber = false;

            if (item.infoUser._id === account._id) {
              temp.isSubscriber = true;
            } else if (wallet.account) {
              if(checkSubscribe(account._id, item.infoUser._id) === 'VALID'){
                temp.isSubscriber = true;
              }
              temp.isSubscriber = false;
            }

            item.image.map((item) => temp.images.push(`${pathCloudinary}${item.url}`));
            listPosts.push(temp);
          });

          setPosts([...[], ...listPosts]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getListPosts();
  }, [account, wallet, pathCloudinary]);

  return (
    <>
      <Link to={'/create-post'}>
        <PostForm />
      </Link>
      {posts.length !== 0 &&
        posts.map((item, index) => {
          return (
            <PostCard
              key={index}
              postId={item._id}
              content={item.content}
              images={item.images}
              isSubscriber={item.isSubscriber}
              infoUser={item.infoUser}
              amount={item.fee}
            />
          );
        })}
    </>
  );
};
