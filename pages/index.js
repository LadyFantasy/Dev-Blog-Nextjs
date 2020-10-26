import styles from "../styles/Home.module.scss";
import Article from "../components/Article";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      {articles.map((article, key) => {
        const {
          title,
          description,
          readable_publish_date,
          tag_list,
          user,
          id,
          comments_count,
          public_reactions_count,
          social_image
        } = article;
        return (
          <Article
            key={key}
            image={social_image}
            title={title}
            description={description}
            date={readable_publish_date}
            tags={tag_list}
            user={user.name}
            userPhoto={user.profile_image_90}
            id={id}
            comments={comments_count}
            reactions={public_reactions_count}
          />
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://dev.to/api/articles");
  const jsonData = await data.json();

  return {
    // siempre tiene que devolver un objeto que mínimo tenga otro que se llame props
    props: {
      articles: jsonData
    },
    // tiempo en segundos antes del siguiente build (y por ende, request)
    revalidate: 600
  };
}
