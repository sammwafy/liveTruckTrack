import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #fdfdfd;
  width: 448px;
  padding: 16px 0 24px 0px;
  border: 1px solid #ebebea;
  border-radius: 4px;
  border: 1px solid #EBEBEA;
  
  .searchTitle {
    padding: 16px 24px;
    border-bottom: 1px solid #ebebea;
    margin-bottom: 24px;
    h1 {
      margin: 0 auto;
    }
  }

  .searchContainer {
    width: 400px;
    padding: 0 24px;
  }

  .search {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    position: relative;
  }

  input {
    background-color: #f5f5f5;
    border: 1px solid #ebebea;
    border-radius: 4px;
    width: 100%;
    height: 30px;
    padding: 0 40px 0 10px;
    &:hover {
      background-color: #ececec;
    }
  }

  i {
    color: #69665c;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 10px;
  }
  .searchResults {
    position: absolute;
    background-color: #fdfdfd;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    padding: 16px;
    color: #0d0d0c;
    box-sizing: border-box;
    > div {
      margin-bottom: 16px;
      cursor: pointer;
    }
  }
`
