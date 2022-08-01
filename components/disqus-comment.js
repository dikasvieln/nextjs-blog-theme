import * as react from 'react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ post }) => {
  const disqusShortname = 'new-amdevblog'

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
