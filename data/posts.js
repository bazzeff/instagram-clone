import USERS from './users'

const POSTS = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    user: USERS[0].user,
    caption: 'office manager',
    likes: 1111,
    profile_picture: USERS[0].image,
    comments:[
      {
        user:'regular guy',
        comment: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
      },
      {
        user:'peter smith',
        comment: 'actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      ],
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    user: USERS[1].user,
    caption: 'regular guy',
    likes: 11231,
    profile_picture: USERS[1].image,
    comments:[
      {
        user:'maria ferguson',
        comment: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
      },
      {
        user:'peter smith',
        comment: 'actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      ],
      
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    user: USERS[2].user,
    caption: 'product designer',
    likes: 2313,
    profile_picture: USERS[2].image,
    comments:[
      {
        user:'susan andersen',
        comment: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      {
        user:'john doe',
        comment: 'actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      ],
      
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    user: USERS[3].user,
    caption: 'the boss',
    likes: 3343,
    profile_picture: USERS[3].image,
    comments:[
      {
        user:'peter smith',
        comment: 'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
      },
      {
        user:'john doe',
        comment: 'actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      ],
      
  },
];

export default POSTS;
