import Head from 'next/head';
import { Card } from 'eureka-ui';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllPosts } from '../utils/blog';
import { FrontMatter } from '../utils/types';
import { siteDescription, siteTitle, siteUrl, twitterHandle } from '../utils/constants';

type BlogProps = {
  allPosts: FrontMatter[],
};

const Blog = (props: BlogProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Blog | {siteTitle}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${twitterHandle}`} />
        <meta property="og:title" content={`Blog | ${siteTitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/img/profile.png`} />
      </Head>

      <div className="row">
        {
          props.allPosts.map((post: FrontMatter) => (
            <div className="articles col-md-12" key={post.path}>
              <Card
                showButton
                title={post.title}
                theme={post.theme}
                timeStamp={new Date(post.date || '').toDateString()}
                buttonText="Read more"
                categories={post.categories}
                click={() => router.push(post.path)}
              >
                <div dangerouslySetInnerHTML={{ __html: `${post.excerpt} ...` }} />
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();
  
  return {
    props: {
      allPosts
    }
  };
}