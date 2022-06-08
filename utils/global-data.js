export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Aulia Dika';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Dev Blogs';
  /*const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2022 © All rights reserved.';
  */
  const footerText = '2022 © All rights reserved.';
  return {
    name,
    blogTitle,
    footerText,
  };
};
