let postTitle;
  let postContent;
  postTitle = document.querySelector(".create-post-title");
  postContent = document.querySelector(".create-post-content");
  function empty() {
      if (postTitle.value == "" && postContent.value == "") {
          alert("fields cannot be empty");
          postTitle.classList.add('error')
          postContent.classList.add('error')
          return false;
      }
      else if (postTitle.value == "") {
          alert("post title cannot be empty");
          postTitle.classList.add('error')
          return false;
      }
      else if (postContent.value == "") {
          alert("post text cannot be empty");
          postContent.classList.add('error')
          return false;
      };
  }

  function isValidURL(string) {
    console.log('string: ', string)
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    console.log('res: ', res)
    return (res !== null)
  };

  let linkContent = document.querySelector('.link-input')
  let formLinkPostContent = document.querySelector('.post-title-form-link')
  function empty_link() {
    if (linkContent.value == "" && formLinkPostContent.value == "") {
      linkContent.classList.add('error')
      formLinkPostContent.classList.add('error')
      alert("fields cannot be empty");
      return false
    }
    else if (formLinkPostContent.value == "") {
      alert("post title cannot be empty");
      formLinkPostContent.classList.add('error')
      return false;
    }
    else if (!isValidURL(linkContent.value)) {
      alert("must be valid url");
      linkContent.classList.add('error')
      return false;
    }
    
  }
  let formLinkButton = document.querySelector('.link-tab')
  let formTextButton = document.querySelector('.text-tab')

  let formLink = document.getElementById('form-link');
  let formText = document.getElementById('form-text');

  formLinkButton.addEventListener('click', () => {
    formLink.style.display = 'flex'
    formText.style.display = 'none'
    formLinkButton.classList.add('active')
    formTextButton.classList.remove('active')
  })

  formTextButton.addEventListener('click', () => {
    formLink.style.display = 'none'
    formText.style.display = 'flex'
    formLinkButton.classList.remove('active')
    formTextButton.classList.add('active')
  })


  const postTab = document.querySelector('.posts-tab')
    const commentsTab = document.querySelector('.comments-tab')

    const userPosts = document.querySelector('.user-posts')
    const userComments = document.querySelector('.user-comments')
    userComments.style.display = 'none'

    postTab.addEventListener('click', () => {
      console.log('userPosts: ', userPosts)
      postTab.classList.add('active')
      commentsTab.classList.remove('active')
      userPosts.style.display = 'flex';
      userComments.style.display = 'none'
    })

    commentsTab.addEventListener('click', () => {
      console.log('userComments: ', userComments)
      postTab.classList.remove('active')
      commentsTab.classList.add('active')
      userPosts.style.display = 'none';
      userComments.style.display = 'flex'
    })

    if (commentsTab.classList.contains('active')) {
      userPosts.style.display = 'none';
      userComments.style.display = 'flex'
    } else {
      userPosts.style.display = 'flex';
      userComments.style.display = 'none'
    }

    const postWrapper = document.querySelector('.posts-wrapper')

    const posts = Array.from(document.querySelectorAll('.post'))

    let newPosts = posts.slice(Math.max(posts.length - 2, 5))
  
    newPosts.forEach(post => {
      post.style.border = '1px solid #3B60E4';
      setTimeout(() => {
        post.style.border = '0px solid #3B60E4';        
      }, 3000)
    })

    console.log('posts: ', posts)
    console.log('newPosts: ', newPosts)
    if (postWrapper.classList.contains('scroll')) {
      console.log('true')
      window.scrollTo(0,document.body.scrollHeight);
    }

    const sortButtons = Array.from(document.querySelectorAll('.sort-button'));
        const postsWrapper = document.querySelector('.posts-wrapper')

        const downvoteButton = document.querySelector('.sort-by-downvotes')
        const upvoteButton = document.querySelector('.sort-by-upvotes')
        const oldestButton = document.querySelector('.sort-by-oldest')
        const newestButton = document.querySelector('.sort-by-newest')

        const removeActiveClass = () => {
            sortButtons.forEach(button => {
                button.classList.remove('active')
            })
        }

        if (postsWrapper.classList.contains('sort-by-downvote')) {
            removeActiveClass()
            downvoteButton.classList.add('active')
        } 
        else if (postsWrapper.classList.contains('sort-by-upvote')) {
            removeActiveClass()
            upvoteButton.classList.add('active')
        } 
        else if (postsWrapper.classList.contains('dates_oldest')) {
            removeActiveClass()
            oldestButton.classList.add('active')
        } 
        else if (postsWrapper.classList.contains('dates_newest')) {
            removeActiveClass()
            newestButton.classList.add('active')
        } 
        else {
            removeActiveClass()
            newestButton.classList.add('active')
        }