import Link from 'next/link';
import styles from './BlogCard.module.css';
import common from '@/styles/common.module.css';

function BlogCard({
  imageSrc,
  imageAlt,
  title,
  author,
  publishedDate,
  body,
  slug,
  tags,
}) {
  return (
    <Link className={styles.card} href={`/blog/${slug}`}>
      <img src={imageSrc} alt={imageAlt} className={styles.card_img_top} />
      <div className={styles.card_body}>
        <h2 className={styles.card_title}>{title}</h2>
        <p>By: {author}</p>
        <p className={styles.card_text}>
          Published Date: {new Date(publishedDate).toLocaleDateString()}
        </p>
        <div className={styles.card_text}>{body}</div>
        {tags &&
          tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        <button className={common.btn}>Read More</button>
      </div>
    </Link>
  );
}

export default BlogCard;
