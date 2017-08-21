export const basics = `
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: var(--black)
  }
  body {
    margin: 0;
    height: 100%;
    width: 100%
  }
  main {
    padding-top: 40px;
    padding-bottom: 40px
  }
  a {
    text-decoration: none;
    color: var(--blue)
  }
  a:hover, a:focus {
    text-decoration: underline
  }
  @media only screen and (min-width: 900px) {
    main {
      padding-top: 70px
    }
  }
`
export const colors = `
  :root {
    --yellow: rgb(255, 200, 0);
    --blue: rgb(31, 164, 237);
    --black: #262625;
    --white: #e9e9e9
  }
`
export const bg = `
  .baseBg {
    background-color: rgb(245, 250, 254);
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`
export const fullscreen = `
  body > div:nth-child(1), body > div > div:nth-child(1), body > div > div > div, body > div > div > div > div {
    width: 100%;
    height: 100%
  }
  main {
    width: 100%;
    height: 100%
  }
`

export const hidden = `
  .hidden {
    visibility: hidden
  }
`
export const container = `
  .container {
    background-color: #fff;
  }
  @media only screen and (min-width: 1000px) {
    .container {
      width: 900px;
      margin: 20px auto 0 auto;
      box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
    }
  }
`
