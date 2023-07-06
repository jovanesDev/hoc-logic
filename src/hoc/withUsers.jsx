/* eslint-disable react/display-name */

const withUsers = (BaseComponent) => {
    const users = [
        {
          id: 1,
          name: 'Mariano'
        },
        {
          id: 2,
          name: 'Hova'
        }
      ]
      const posts = [
        {
          id: 1,
          title: 'Post 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit.'
        },
        {
          id: 2,
          title: 'Post 2',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit.'
        },
        {
          id: 3,
          title: 'Post 3',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit.'
        }
      ]

  return function (props) {
        return  <BaseComponent posts={posts} users={users} {...props} />
    }
  
}

export default withUsers