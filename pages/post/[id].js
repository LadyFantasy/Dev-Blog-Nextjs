import ReactMarkdown from "react-markdown";
import Styles from "../../styles/Post.module.scss";
import { useRouter } from 'next/router'

export default function Post({ post }) {
  const router = useRouter()
  const {
    title,
    readable_publish_date,
    positive_reactions_count,
    social_image,
    tags,
    body_markdown,
    user
  } = post;
  return (
    <>
    <button className={Styles.back} onClick={() => router.back()}>BACK</button>
    <section className={Styles.container}>
      <img src={social_image} alt="post img" className={Styles.image} />
      <div className={Styles.textContainer}>
      {tags.map((tag, key) => {
        return (
          <span key={key} className={Styles.tag}>
            #{tag}
          </span>
        );
      })}
      <h1 className={Styles.title}>{title} </h1>
      
      
      <div className={Styles.userDate}>
      <img src={user.profile_image_90} alt="user image" className={Styles.userImg} />
      <span className={Styles.user}>{user.name}</span>
      <span className={Styles.date}>{readable_publish_date}</span>

      </div>
   
     
      
      <ReactMarkdown className={Styles.text}>{body_markdown}</ReactMarkdown>
      <div className={Styles.reactions}>
      <img src="https://icongr.am/material/heart-outline.svg?size=25&color=currentColor" />
      <span className={Styles.reaction}>{positive_reactions_count}</span>
      </div>
      </div>
      
    </section>
    </>
  );

}

export async function getServerSideProps({ params }) {
  const dataPost = await fetch(`https://dev.to/api/articles/${params.id}`);
  const jsonPost = await dataPost.json();
  return {
    props: {
      post: jsonPost
    }
  };
}
