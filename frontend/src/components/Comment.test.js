import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Comment } from "./Comment";

const commentProps = {
  attributes: {
    user: "Billy",
    content: "This is an awesome comment!",
  },
};

test("renders the correct content", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Comment comment={commentProps} />
    </MemoryRouter>
  );

  expect(getByText("Billy")).not.toBe(null);
  expect(getByText("- This is an awesome comment!")).not.toBe(null);
});

// test("links to the commentor's page", async () => {
//   const history = createMemoryHistory();
//   // console.log("1st history", history);
//   render(
//     <MemoryRouter location={history.location} navigator={history}>
//       <Comment comment={commentProps} />
//     </MemoryRouter>
//   );

//   const link = screen.getByRole("link").href;
//   console.log("link", screen.getByRole("link").href);
//   fireEvent.click(screen.getByRole("link"), { button: 0 });
//   // console.log(link);
//   await waitFor(() => {
//     // console.log("2nd history", history);
//   });
//   // console.log("2nd history", history);
// });
