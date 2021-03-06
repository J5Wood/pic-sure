export default function postReducer(
  state = {
    posts: [],
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "BEGIN_FETCHING_POSTS":
      return {
        ...state,
        loading: true,
      };
    case "ADD_POSTS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case "BEGIN_ADDING_POST":
      return {
        ...state,
        loading: true,
      };

    case "ADD_NEW_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };

    case "BEGIN_DELETING_POST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.postId),
        loading: false,
      };

    case "BEGIN_UPDATING_LIKES":
      return {
        ...state,
        loading: true,
      };

    case "UPDATE_LIKES":
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, index),
          action.payload,
          ...state.posts.slice(index + 1),
        ],
        loading: false,
      };

    default:
      return state;
  }
}
