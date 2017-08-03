export const formStyles = `
  div {
    display: flex;
    flex-direction: column;
    padding: 7px;
    position: relative
  }
  input, textarea {
    padding: 10px 10px 3px 10px;
    border: transparent;
    border-bottom: 1px solid rgb(80, 80, 80);
    font-size: 1em;
    font-family: sans-serif
  }
  label {
    visibility: hidden;
    position: relative;
    top: 25px;
    transition: 0.3s top ease-out
  }
  .formFilled {
    color: rgb(80, 80, 80);
    visibility: visible;
    top: 0px
  }
  .formActive {
    color: #1fa4ed;
    visibility: visible;
    top: 0px
  }
`
