import Link from "next/link";
import Styles from "../../styles/Article.module.scss";

export default function Article({
  title,
  date,
  tags,
  user,
  id,
  comments,
  reactions,
  image,
  userPhoto
}) {
  return (
    <Link href={`post/${id}`}>
      <div className={Styles.articleContainer}>
        <img src={image} alt="article image" className={Styles.image} />

        <div className={Styles.userContainer}>
          <img src={userPhoto} alt="user photo" className={Styles.userPhoto} />
          <p className={Styles.user}>{user}</p>
        </div>
        <h2 className={Styles.title}>{title}</h2>

        {tags.map((tag, key) => {
          return (
            <span key={key} className={Styles.tag}>
              #{tag}
            </span>
          );
        })}
        <div className={Styles.reactions}>
          <img src="https://icongr.am/material/heart-outline.svg?size=25&color=currentColor" />
          <span className={Styles.reaction}>{reactions}</span>
          <img src="https://icongr.am/material/comment-multiple-outline.svg?size=25&color=currentColor" />
          <span className={Styles.reaction}>{comments}</span>
        </div>
      </div>
    </Link>
  );
}
