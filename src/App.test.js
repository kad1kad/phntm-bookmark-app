import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./components/Form";
import Pagination from "./components/Pagination";

describe("Form", () => {
  it("renders input fields for URL and Title and submit button", () => {
    const handleSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Form handleSubmit={handleSubmit} />
    );

    const urlInput = getByPlaceholderText("URL");
    const titleInput = getByPlaceholderText("Title");
    const submitButton = getByText("Add");

    expect(urlInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("inputs are working properly", () => {
    const setLinkTitle = jest.fn();
    const setLink = jest.fn();
    const handleSubmit = jest.fn();

    const { getByPlaceholderText } = render(
      <Form
        linkTitle=""
        setLinkTitle={setLinkTitle}
        link=""
        setLink={setLink}
        handleSubmit={handleSubmit}
      />
    );

    const urlInput = getByPlaceholderText("URL");
    const titleInput = getByPlaceholderText("Title");

    fireEvent.change(urlInput, { target: { value: "test-url" } });
    expect(setLink).toHaveBeenCalledWith("test-url");

    fireEvent.change(titleInput, { target: { value: "test-title" } });
    expect(setLinkTitle).toHaveBeenCalledWith("test-title");
  });
});

describe("Pagination component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Pagination
        currentPage={1}
        setCurrentPage={jest.fn()}
        linkArr={[]}
        linksPerPage={10}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("allows navigation to the next page", () => {
    const setCurrentPage = jest.fn();
    const { getByLabelText } = render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        linkArr={[1, 2, 3, 4, 5]}
        linksPerPage={2}
      />
    );
    const nextPageButton = getByLabelText("next page");
    fireEvent.click(nextPageButton);

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  it("allows navigation to the previous page", () => {
    const setCurrentPage = jest.fn();
    const { getByLabelText } = render(
      <Pagination
        currentPage={2}
        setCurrentPage={setCurrentPage}
        linkArr={[1, 2, 3, 4, 5]}
        linksPerPage={2}
      />
    );
    const prevPageButton = getByLabelText("previous page");
    fireEvent.click(prevPageButton);

    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it("prevents navigation to page below 1", () => {
    const setCurrentPage = jest.fn();
    const { getByLabelText } = render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        linkArr={[1, 2, 3, 4, 5]}
        linksPerPage={2}
      />
    );
    const prevPageButton = getByLabelText("previous page");
    fireEvent.click(prevPageButton);

    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it("prevents navigation to page above the last page", () => {
    const setCurrentPage = jest.fn();
    const { getByLabelText } = render(
      <Pagination
        currentPage={3}
        setCurrentPage={setCurrentPage}
        linkArr={[1, 2, 3, 4, 5]}
        linksPerPage={2}
      />
    );
    const nextPageButton = getByLabelText("next page");
    fireEvent.click(nextPageButton);

    expect(setCurrentPage).toHaveBeenCalledWith(3);
  });
});
