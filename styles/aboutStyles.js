export const aboutStyles = `
  .container {
    position: relative
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    width: 100%;
    height: 100%
  }
  .bg1 {
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: lightblue
  }
  .bg2 {
    flex: 3;
    width: 100%;
    height: 100%;
    background-color: #fff
  }
  .row {
    display: flex;
    flex-direction: column
  }
  .row:nth-child(even) {
    background-color: #fff
  }
  .title, .content {
    padding: 5px
  }
  .title {
    flex: 1;
    font-weight: bold
  }
  .content {
    flex: 3;
  }
  @media only screen and (min-width: 600px) {
    .row {
      flex-direction: row
    }
    .title {
      background-color: lightblue
    }
    .content {
      background-color: #fff
    }
  }
`
