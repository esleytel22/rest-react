// deploy.js
const ghpages = require('gh-pages');

ghpages.publish(
  'build',
  {
    repo: 'https://github.com/esleytel22/RestaurantTemplate.git',
    branch: 'gh-pages',
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.error('Deploy failed:', err);
    } else {
      console.log('Deployed successfully!');
    }
  }
);
