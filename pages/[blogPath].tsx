import Head from 'next/head';
import { marked } from 'marked';
import { Card } from 'eureka-ui';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { ArrowRight } from 'react-feather';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

import blogPathStyles from '../styles/blogPath.module.scss';
import { getAllPostsPath, getPostDetails } from '../utils/blog';
import { siteTitle, siteUrl, SOCIAL_MEDIA_TYPE, twitterHandle } from '../utils/constants';
import { MoreSidebar } from '../components/MoreSidebar';
import { SocialMediaShare } from '../components/SocialMediaShare';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

type BlogPostProps = {
  title: string,
  excerpt: string,
  path: string,
  htmlContent: string,
  next: string[],
}

type GetStaticProps = {
  params: {
    blogPath: string
  }
}

const BlogPost = (props: BlogPostProps): JSX.Element => {
  const router = useRouter();
  const {
    title, excerpt, path, htmlContent, next,
  } = props;

  const getUrl = (path: string): string => `https://parthp.dev/${path}`;

  return (
    <div className="container">
      <Head>
        <title>{title} | {siteTitle}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${twitterHandle}`} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={excerpt} />
        <meta property="og:url" content={`${siteUrl}/${path}`} />
      </Head>

      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className={blogPathStyles.postContainer}>
            <div className={blogPathStyles.post}>
              <div className={blogPathStyles.titleContainer}>
                <span className={blogPathStyles.title}>{title}</span>
              </div>
              <hr />
              <div>
                <div dangerouslySetInnerHTML={{ __html: marked.parse(htmlContent || '') }} />
              </div>
            </div>
          </div>
          </div>
          <div className="col-4 d-none d-lg-block">
            <MoreSidebar />
            <div className={blogPathStyles.shareWidgetContainer}>
              <SocialMediaShare
                title={title}
                url={getUrl(path)}
                type={[
                  SOCIAL_MEDIA_TYPE.TWITTER, SOCIAL_MEDIA_TYPE.LINKEDIN, SOCIAL_MEDIA_TYPE.FACEBOOK
                ]}
              />
            </div>
          </div>
        </div>

        {/* Next blog card */}
        <div className={`${blogPathStyles.nextPostContainer} row`}>
          <div className="col-lg-8 col-md-12">
            {
              next && (
                <Card
                  title='Read next:'
                  click={() => router.push(next[1])}
                  theme={next[2]}
                >
                  <span className={blogPathStyles.nextPostTitle}>
                    {next[0]}&nbsp;&nbsp;<ArrowRight />
                  </span>
                </Card>
              )
            }
          </div>
        </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const allPostsPath = getAllPostsPath();

  return {
    paths: allPostsPath.map(path => ({
      params: { blogPath: path }
    })),
    fallback: true,
  }
}

export const getStaticProps = ({ params }: GetStaticProps) => {
  const postDetails = getPostDetails(params.blogPath);

  return {
    props: {
      ...postDetails.frontMatter,
      htmlContent: postDetails.content,
    }
  }
}

export default BlogPost;