import { render, fireEvent } from "@testing-library/react";
import { Content } from "./Content";
import { MemoryRouter } from "react-router-dom";

const toggleLike = () => {
  if (props.post.attributes.likes.includes(props.userId)) {
    props.post.attributes.likes = props.post.attributes.likes.filter(
      (x) => x !== props.userId
    );
  } else {
    props.post.attributes.likes.push(props.userId);
  }
};

const props = {
  handleLike: toggleLike,
  post: {
    id: "6",
    type: "post",
    attributes: {
      content: "Someone special brought me a flower!!!",
      likes: [
        "cca4010c-7fd1-4a82-8311-2b53c357a3cf",
        "e68af18e-e26b-44e2-844c-d096d5bcfcfb",
      ],
      photo_url:
        "http://localhost:3001/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--05c1c8b88fba4aba5342aa1e7a5ea2f5090affdd/post-6.jpg",
      user: "Jill",
    },
  },
  user: "Frank",
  userId: "9a7d13d2-d45f-4779-b08a-f4a9d6633a92",
};

test("renders the correct content", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Content
        handleLike={props.handleLike}
        post={props.post}
        user={props.user}
        userId={props.userId}
      />
    </MemoryRouter>
  );

  expect(getByText("Jill")).not.toBe(null);
  expect(getByText("- Someone special brought me a flower!!!")).not.toBe(null);
  expect(getByText("♡ - 2 Likes")).not.toBe(null);
});

test("like button changes when clicked", () => {
  const { getByText, getByTestId, rerender } = render(
    <MemoryRouter>
      <Content
        handleLike={props.handleLike}
        post={props.post}
        user={props.user}
        userId={props.userId}
      />
    </MemoryRouter>
  );

  const likeButton = getByTestId("like-button");
  expect(getByText("♡ - 2 Likes")).not.toBe(null);
  fireEvent.click(likeButton);
  rerender(
    <MemoryRouter>
      <Content
        handleLike={props.handleLike}
        post={props.post}
        user={props.user}
        userId={props.userId}
      />
    </MemoryRouter>
  );
  expect(getByText("♥ - 3 Likes")).not.toBe(null);
});
