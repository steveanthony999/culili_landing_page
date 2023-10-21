import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import fetchContentfulData from '../lib/fetchContentfulData';
import BlogCard from '../components/BlogCard/BlogCard';
import styles from '@/styles/blog.module.css';

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
    <div className={styles.Blog}>
      <div className={styles.container}>
        {posts.map((post) => (
          <BlogCard
            key={post.sys.id}
            imageSrc={post.fields.mainImage.fields.file.url}
            imageAlt={post.fields.mainImage.fields.title}
            title={post.fields.title}
            author={post.fields.Author}
            publishedDate={post.fields.publishedDate}
            body={truncateText(documentToHtmlString(post.fields.body))}
            slug={post.fields.slug}
          />
        ))}
      </div>
    </div>
  );
}

function truncateText(text, length = 100) {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + '...';
}
