export const dimensions = `
  :root {
  --size: 65vW;
  --sSize: 10.4vW;
  --x: calc(var(--size) - var(--sSize));
  --y: calc((var(--size) - var(--sSize)) - var(--sSize));
  }
  body {
    overflow: hidden
  }
  @media only screen and (min-width: 690px) {
    :root {
      --size: 450px;
      --sSize: 72px;
      --x: calc(var(--size) - var(--sSize));
      --y: calc((var(--size) - var(--sSize)) - var(--sSize));
    }
  }
`
export const indexBasics = `
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .centeredBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotateZ(45deg);
    width: var(--size);
    height: var(--size);
  }
  .profileImg {
    width: var(--y, 250px);
    height: var(--y);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
  }
  .profileImg > img {
    transform: rotateZ(-45deg);
    height: 145%;
    width: 145%;
    user-select: none
  }
  .socialLink .fa {
    transform: rotate(-45deg);
    font-size: 7vW
  }
  .socialLink {
    color: var(--white)
  }
  .socialLink:hover, .socialLink:focus {
    color: var(--yellow);
    text-decoration: none
  }
  @media only screen and (min-width: 690px) {
    .socialLink .fa {
      font-size: 3em
    }
  }
`
