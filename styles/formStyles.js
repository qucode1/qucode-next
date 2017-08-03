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
    border-bottom: 1px solid black;
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
    color: black;
    visibility: visible;
    top: 0px
  }
  .formActive {
    color: blue;
    visibility: visible;
    top: 0px
  }
`
