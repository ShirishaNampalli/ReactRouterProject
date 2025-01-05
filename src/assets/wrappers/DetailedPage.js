import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .top-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      height: 2rem;
      width: 5rem;
      justify-content: center;
    //   background-color: #3b82f6;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        // background-color: #2563eb;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  span {
    background-color: var(--primary-400);
    height: 0.3rem;
    width: 1rem;
    padding: 0 5px;
    font-family:sans-serif;
    
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
    color: var(--grey-800);
    font-family:sans-serif;
  }

  .items h4 {
    margin: 5px;
    color: var(--grey-800);
    font-family:sans-serif;
  }

  img {
    width: 30vw;
    height: 70vh;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export default Wrapper;
