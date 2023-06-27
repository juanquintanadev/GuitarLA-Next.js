import Layout from "../components/layout";
import Post from "../components/post";
import styles from '../styles/grid.module.css'

function Blog({ posts }) {

  return (
    <Layout title={"Blog"} description={"Todo lo que necesitas saber"}>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.length && posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
  
}

// es obligatoria la funcion getStaticPaths, como en este caso tenemos routing dinamico la requerimos
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data } = await respuesta.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default Blog;
