import * as react from 'react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ post }) => {
  const disqusShortname = 'https-amdevblog-netlify-app'

  const disqusConfig = {
    url: "",
    identifier: post.id,
    title: post.title
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;
