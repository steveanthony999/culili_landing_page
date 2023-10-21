import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import fetchContentfulData from '../lib/fetchContentfulData';
import styles from '@/styles/blog.module.css';
import common from '@/styles/common.module.css';

export async function getStaticProps() {
  const posts = await fetchContentfulData.fetchEntries('blogPost');
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.sys.id} className={styles.card}>
          <img
            src={post.fields.mainImage.fields.file.url}
            alt={post.fields.mainImage.fields.title}
            className={styles.card_img_top}
          />
          <div className={styles.card_body}>
            <h2 className={styles.card_title}>{post.fields.title}</h2>
            <p>By: {post.fields.Author}</p>
            <p className={styles.card_text}>
              Published Date:{' '}
              {new Date(post.fields.publishedDate).toLocaleDateString()}
            </p>
            <p className={styles.card_text}>
              {post.fields.body &&
                truncateText(documentToHtmlString(post.fields.body))}
            </p>
            <a href={`/blog/${post.fields.slug}`} className={common.btn}>
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function truncateText(text, length = 100) {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + '...';
}
