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
